export interface screenshotPropsType {
  addListener: (callback: (file: any) => void) => void
  removeListener: () => void
}

export const addListener: (callback: (file: any) => void) => void
export const removeListener: () => void

export const screenshot: screenshotPropsType
export default screenshot
