export interface screenshotPropsType {
  startListener: (callback: (file: any) => void) => void
  stopListener: () => void
}

export const startListener: (callback: (file: any) => void) => void
export const stopListener: () => void

export const screenshot: screenshotPropsType
export default screenshot
