import { NativeModules, DeviceEventEmitter, Platform } from 'react-native'
import { addListener, start, stop } from 'react-native-screenshot-notifier'

const { RNScreenshotNotification } = NativeModules

const startListener = callback => {
  if (Platform.OS === 'android') {
    ;(async () => {
      await start()
      await addListener(callback)
    })()
  } else {
    this.screenshotObserver = DeviceEventEmitter.addListener('ScreenshotObserver', data => {
      callback({
        path: data.imagePath,
      })
    })
    RNScreenshotNotification.addObserverScreenshot()
  }
}

const stopListener =
  Platform.OS === 'android'
    ? async () => {
        await stop()
      }
    : this.screenshotObserver.remove()

export { startListener, stopListener }

export default {
  startListener,
  stopListener,
}
