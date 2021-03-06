## 安装

```sh
$ yarn add @sishuguojixuefu/react-native-screenshot react-native-screenshot-notifier react-native-screenshot-observer react-native-view-shot
```

## link

```sh
$ react-native link react-native-screenshot-notifier react-native-screenshot-observer react-native-view-shot
```

## API

### startListener(func)

开始监听系统截屏并添加一个回调接收返回的截屏信息

```js
componentDidMount() {
  startListener(({ uri, path }) => {
    // path: /xxx/yyy
    // uri: file:///xxx/yyy
    this.setState({
      shotImage: uri,
    })
  })
}
```

### stopListener()

停止监听系统监听系统截屏

```js
componentWillUnmount() {
  stopListener()
}
```

### captureScreen

捕获当前显示的屏幕并返回图片地址

```js
import { captureScreen } from '@sishuguojixuefu/react-native-screenshot'

captureScreen(
  ({ path, uri }) => {
    // path: /xxx/yyy
    // uri: file:///xxx/yyy
    console.log('screenshotPatah', uri, path)
  },
  {
    format: 'jpg',
    quality: 0.8,
  }
)
```

## 致谢

- [rhdeck/react-native-screenshot-notifier](https://github.com/rhdeck/react-native-screenshot-notifier) for android
- [WangZiXiao-ChenDu/react-native-screenshot-observer](https://github.com/WangZiXiao-ChenDu/react-native-screenshot-observer) for ios
- [gre/react-native-view-shot](https://github.com/gre/react-native-view-shot) for captureScreen
