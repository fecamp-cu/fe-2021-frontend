export enum Path {
  NONE = "#",
  LANDING = "/",
  LOGIN = "/login",
  LOGOUT = "/logout",
  REGISTER = "/register",
  SHOP = "/shop",
  PAYMENT = "/payment",
  PROFILE = "/profile",
  PROFILE_EDIT = "/profile/edit",
}

export enum Endpoint {
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  ME = "/auth/me",
}

export enum MenuType {
  HAMBURGER = "hamburger",
  SUB_MENU = "sub-menu",
}

export enum Size {
  MOBILE_S = 320,
  MOBILE_M = 375,
  MOBILE_L = 425,
  MOBILE_OVERALL = 640,
  TABLET = 768,
  LAPTOP = 1024,
  LAPTOP_L = 1440,
  DESKTOP = 2560,
}
