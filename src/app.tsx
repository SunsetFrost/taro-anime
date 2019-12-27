// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Home from "./pages/home/index";

import configStore from "./store";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ["pages/home/index", "pages/animes/index", "pages/space/index"],
    tabBar: {
      list: [
        {
          iconPath: "assets/tab-bar/hot.png",
          selectedIconPath: "assets/tab-bar/hot-active.png",
          pagePath: "pages/home/index",
          text: "热门"
        },
        {
          iconPath: "assets/tab-bar/animes.png",
          selectedIconPath: "assets/tab-bar/animes-active.png",
          pagePath: "pages/animes/index",
          text: "漫库"
        },
        {
          iconPath: "assets/tab-bar/space.png",
          selectedIconPath: "assets/tab-bar/space-active.png",
          pagePath: "pages/space/index",
          text: "我的"
        }
      ],
      color: "#000",
      selectedColor: "#1296db",
      backgroundColor: "#fff",
      borderStyle: "white"
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "漫触",
      navigationBarTextStyle: "black"
    }
  };

  // componentDidMount() {}

  // componentDidShow() {}

  // componentDidHide() {}

  // componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
