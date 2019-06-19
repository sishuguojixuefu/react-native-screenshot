export interface filePropsType {
  /**
   * 文件id，android only
   */
  id?: string
  /**
   * 文件name，android only
   */
  fileName?: string
  /**
   * 用于上传文件用的文件路径
   */
  path: string
  /**
   * 用于展示的文件路径
   */
  uri: string
}

export interface optionsPropsType {
  /**
   * 图片宽
   */
  width?: number
  /**
   * 截图高
   */
  height?: number
  /**
   * 截图格式，默认 png
   */
  format?: 'png' | 'jpg' | 'webm'
  /**
   * 截图质量
   */
  quality?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 |0.8 | 0.9| 1.0
  /**
   * 截图存放位置，默认 tmpfile
   */
  result?: 'tmpfile' | 'base64' | 'data-uri'
}

export interface screenshotPropsType {
  ViewShot: any
  /**
   * 手动截图方法，接收一个回调函数用于接收截图和一个配置项对象
   */
  captureScreen: (callback: (file: filePropsType) => void, options?: optionsPropsType) => void
  /**
   * 开始监听截图事件，接收一个回调函数用于接收截图
   */
  startListener: (callback: (file: filePropsType) => void) => void
  /**
   * 停止监听截图事件
   */
  stopListener: () => void
}

export const ViewShot: any
export const captureScreen: (callback: (file: filePropsType) => void, options?: optionsPropsType) => void
export const startListener: (callback: (file: filePropsType) => void, options?: optionsPropsType) => void
export const stopListener: () => void

export const screenshot: screenshotPropsType
export default screenshot
