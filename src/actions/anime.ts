import { GETANIMELIST, GETANIMEDETAIL } from "../constants/anime";
import api from "../utils/api";

// 获取动漫列表
export const getAnimeList = async () => {
  const { data: animeList } = await api.get("/animes");
  return dispatch => {
    dispatch({
      type: GETANIMELIST,
      payload: {
        animeList
      }
    });
  };
};

// 获取动漫详情
export const getAnimeDetail = async payload => {
  const { id } = payload;
  const { data: animeDetail } = await api.get("/animes", { id });
  return dispatch => {
    dispatch({
      type: GETANIMEDETAIL,
      payload: {
        animeDetail
      }
    });
  };
};
