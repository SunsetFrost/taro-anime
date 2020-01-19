import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

interface IProps {
  title: string;
  loading: boolean;
}

class AnimeList extends Component<IProps, {}> {
  static defaultProps = {
    title: "暂无数据",
    loading: true
  };

  render() {
    const { title } = this.props;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}

export default { AnimeList };
