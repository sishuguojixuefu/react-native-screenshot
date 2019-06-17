## 安装

```sh
$ yarn add react-native-screenshot react-native-screenshot-notifier react-native-screenshot-observer react-native-view-shot
```

## link

```sh
$ react-native link react-native-screenshot-notifier react-native-screenshot-observer react-native-view-shot
```

## API

### 概览

```js
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
```

### startListener(func)

开始监听系统截屏并添加一个回调接收返回的截屏信息

### stopListener()

停止监听系统监听系统截屏

### captureScreen

捕获当前显示的屏幕并返回图片地址

```js
import { captureScreen } from '@sishuguojixuefu/react-native-screenshot'

captureScreen(
  data => {
    console.log('screenshotPatah', data.path)
  },
  {
    format: 'jpg',
    quality: 0.8,
  }
)
```

## 致谢

- [rhdeck/react-native-screenshot-notifier](https://github.com/rhdeck/react-native-screenshot-notifier)
- [WangZiXiao-ChenDu/react-native-screenshot-observer](https://github.com/WangZiXiao-ChenDu/react-native-screenshot-observer)
- [gre/react-native-view-shot](https://github.com/gre/react-native-view-shot)
