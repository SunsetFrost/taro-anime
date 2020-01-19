import Taro from "@tarojs/taro";

const baseUrl = "https://sunsetfrost.com/api/v1";
type OptionType = {
  url: string;
  data?: object | string;
  method?: any;
  header: object;
};

export default {
  baseOptions(params, method = "GET") {
    let { url, data } = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    const option: OptionType = {
      url: url.indexOf("http") !== -1 ? url : baseUrl + url,
      data,
      method,
      header: {
        "content-type": contentType
      }
    };
    return Taro.request(option);
  },
  get(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option);
  },
  post(url, data?: object, contentType?: string) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  }
};
