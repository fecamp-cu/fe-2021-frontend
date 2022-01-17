declare module "*.pdf"
export declare global {
  interface Window {
    OmiseCard: any
    Omise: any
  }
}
window.OmiseCard = window.OmiseCard || {}
window.Omise = window.Omise || {}
