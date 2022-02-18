FROM node:14-buster-slim AS base
WORKDIR /build

# Prepare for installing dependencies
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

FROM base as build

# Copy the rest files
COPY . .

# Build application
RUN yarn build

FROM base as prod-deps

# Prune unused dependencies
RUN npm prune --production

FROM node:14-buster-slim AS production

ENV NODE_ENV production

WORKDIR /app

RUN npm install -g serve

# Copy only necessary file for running app
COPY --from=prod-deps /build/package.json ./package.json
COPY --from=prod-deps /build/node_modules ./node_modules
COPY --from=build /build/build ./build
COPY --from=build /build/public ./public
COPY --from=build /build/tailwind.config.js ./tailwind.config.js
COPY --from=build /build/postcss.config.js ./postcss.config.js

# Expose listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Staring script
CMD serve -s build