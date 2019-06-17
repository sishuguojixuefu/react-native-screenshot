import { addListener, start, stop } from 'react-native-screenshot-notifier'
import { Platform } from 'react-native'

const startListener =
  Platform.OS === 'android'
    ? async callback => {
        await start()
        await addListener(callback)
      }
    : () => {}

const stopListener =
  Platform.OS === 'android'
    ? async () => {
        await stop()
      }
    : () => {}

export { startListener, stopListener }

export default {
  startListener,
  stopListener,
}
