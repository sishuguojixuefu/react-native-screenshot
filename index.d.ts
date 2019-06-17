export interface filePropsType {
  id?: string
  fileName?: string
  path: string
}

export interface screenshotPropsType {
  startListener: (callback: (file: filePropsType) => void) => void
  stopListener: () => void
}

export const startListener: (callback: (file: filePropsType) => void) => void
export const stopListener: () => void

export const screenshot: screenshotPropsType
export default screenshot
