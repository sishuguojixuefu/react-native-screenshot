import { addListener as androidAddListener, start, stop } from 'react-native-screenshot-notifier'
import { Platform } from 'react-native'

const addListener =
  Platform.OS === 'android'
    ? async callback => {
        await start()
        await androidAddListener(callback)
      }
    : () => {}

const removeListener =
  Platform.OS === 'android'
    ? async () => {
        await stop()
      }
    : () => {}

export { addListener, removeListener }

export default {
  addListener,
  removeListener,
}
