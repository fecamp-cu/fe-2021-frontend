declare module "*.pdf"
declare module '*.md' {
	const value: string; // markdown is just a string
	export default value;
}
export declare global {
  interface Window {
    OmiseCard: any
    Omise: any
    gtag: any
  }
}
window.OmiseCard = window.OmiseCard || {}
window.Omise = window.Omise || {}
window.gtag = window.gtag || {}

