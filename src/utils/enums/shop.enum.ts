import { PaymentOption } from "../types/shop"

export enum PaymentMethod {
  INTERNET_BANKING_SCB = "internet_banking_scb",
  INTERNET_BANKING_BBL = "internet_banking_bbl",
  INTERNET_BANKING_KTB = "internet_banking_ktb",
  INTERNET_BANKING_BAY = "internet_banking_bay",

  CREDIT_CARD = "credit_card",

  PROMPTPAY = "promptpay",
}

export enum Status {
  PENDING = "pending",
  PAID = "successful",
}

export enum PRODUCT_TYPE {
  oldPapers = "oldPapers",
  examPreps = "examPreps",
}

export enum PromotionCodeType {
  PERCENTAGE = "percentage",
  AMOUNT = "amount",
}
