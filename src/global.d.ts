declare module "*.pdf"
export declare global {
    interface Window {
      OmiseCard: any
    }
  }
window.OmiseCard = window.OmiseCard || {}