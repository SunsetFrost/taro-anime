import { ComponentClass } from "react";
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import AnimeList from "./anime-list/index";
import api from "../../utils/api";

import "./index.less";

class Animes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeList: []
    };
  }

  componentWillMount() {}

  async getAnime() {
    const res = await api.get("/animes");
    this.setState({
      animeList: res.data
    });
  }
}

// function Animes() {
//   const [loading, setLoading] = useState(true);
//   const [animeList, setAnimeList] = useState([]);

//   useAsyncEffect(async () => {
//     const res = await api.getAllAnime("15");
//     setLoading(false);
//     setAnimeList(res && res.data);
//   }, []);

//   return (
//     <View>
//       <AnimeList title={animeList} loading={loading}></AnimeList>
//     </View>
//   );
// }

export default Animes;
