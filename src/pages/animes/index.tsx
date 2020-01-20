// eslint-disable-next-line no-unused-vars
import { ComponentClass } from "react";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getAnimeList, getAnimeDetail } from "../../actions/anime";

import "./index.less";

type PageState = {
  searchValue: string;
};

type PageStateProps = {
  animeList: Array<any>;
};

type PageDispatchProps = {
  getAnimeList: () => any;
  getAnimeDetail: (object) => any;
};

type IProps = PageStateProps & PageDispatchProps;

interface Animes {
  props: IProps;
}

@connect(
  ({ anime }) => ({
    // anime: anime,
    animeList: anime
    // animeDetail: anime.animeDetail
  }),
  dispatch => ({
    getAnimeList() {
      dispatch(getAnimeList());
    },
    getAnimeDetail(object) {
      dispatch(getAnimeDetail(object));
    }
  })
)
class Animes extends Component<IProps, PageState> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.getAnime();
  }

  getAnime() {
    // eslint-disable-next-line taro/this-props-function
    this.props.getAnimeList();
  }

  render() {
    const { animeList } = this.props;
    return (
      <View>
        {animeList.map((item, index) => (
          <View key={index}>{item.title}</View>
        ))}
      </View>
    );
  }
}

export default Animes as ComponentClass<IProps, PageState>;
