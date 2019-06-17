## 安装

```sh
$ yarn add react-native-screenshot
```

## link

```sh
$ react-native link react-native-screenshot-notifier
```

## API

### 概览

```js
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
```

### async startListener(func)

开始监听系统截屏并添加一个回调接收返回的截屏信息

### async stopListener()

停止监听系统监听系统截屏
