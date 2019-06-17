export interface screenshotPropsType {
  startListener: (callback: (file: any) => void) => void
  stopListener: () => void
}

export interface filePropsType {
  id?: string
  path: string
  fileName?: string
}

export const startListener: (callback: (file: filePropsType) => void) => void
export const stopListener: () => void

export const screenshot: screenshotPropsType
export default screenshot
