import ViewShot, { captureScreen as capture } from 'react-native-view-shot'
import { NativeModules, DeviceEventEmitter, Platform } from 'react-native'
import { addListener, start, stop } from 'react-native-screenshot-notifier'

const { RNScreenshotNotification } = NativeModules

// 截屏
const captureScreen = async (callback, options) => {
  const uri = await capture(options)
  callback({
    path: uri,
  })
}

// 开始监听系统截屏
const startListener = callback => {
  if (Platform.OS === 'android') {
    ;(async () => {
      await start()
      console.info('[ScreenShot] startListener')
      await addListener(callback)
    })()
  } else {
    RNScreenshotNotification.addObserverScreenshot()
    this.screenshotObserver = DeviceEventEmitter.addListener('ScreenshotObserver', data => {
      callback({
        path: data.imagePath,
      })
    })
    console.info('[ScreenShot] startListener')
  }
}

// 停止监听系统截屏
const stopListener =
  Platform.OS === 'android'
    ? async () => {
        await stop()
        console.info('[ScreenShot] stopListener')
      }
    : () => {
        this.screenshotObserver.remove()
        console.info('[ScreenShot] stopListener')
      }

export { ViewShot, captureScreen, startListener, stopListener }

export default {
  ViewShot,
  captureScreen,
  startListener,
  stopListener,
}
