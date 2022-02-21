export interface LoginPayload {
  email: string
  password: string
}

export type Credentials = {
    accessToken: string
    refreshToken: string
    expiresIn: number
  }