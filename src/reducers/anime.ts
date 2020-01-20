import { GETANIMELIST, GETANIMEDETAIL } from "../constants/anime";

export default function anime(state, action) {
  switch (action.type) {
    case GETANIMELIST:
      const { animeList } = action.payload;
      return {
        ...state,
        animeList
      };
    case GETANIMEDETAIL:
      const { animeDetail } = action.payload;
      return {
        ...state,
        animeDetail
      };
  }
}
