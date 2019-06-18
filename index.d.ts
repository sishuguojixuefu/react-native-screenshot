export interface filePropsType {
  id?: string
  fileName?: string
  path: string
}

export interface optionsPropsType {
  width?: number
  height?: number
  format?: 'png' | 'jpg' | 'webm'
  quality?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 |0.8 | 0.9| 1.0
  result?: 'tmpfile' | 'base64' | 'data-uri'
}

export interface screenshotPropsType {
  ViewShot: any
  captureScreen: (callback: (file: filePropsType) => void, options?: optionsPropsType) => void
  startListener: (callback: (file: filePropsType) => void) => void
  stopListener: () => void
}

export const ViewShot: any
export const captureScreen: (callback: (file: filePropsType) => void, options?: optionsPropsType) => void
export const startListener: (callback: (file: filePropsType) => void) => void
export const stopListener: () => void

export const screenshot: screenshotPropsType
export default screenshot
