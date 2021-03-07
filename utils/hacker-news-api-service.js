import { request } from "./util";
const PRE_URL = "https://hacker-news.firebaseio.com/v0/"
class HackerNewsApiService {

  constructor() {

  }

  getListByType(type = 'new') {
    return request(`${PRE_URL}${type}stories.json?print=pretty`);
  }

  getItemByItemId(id) {
    return request(`${PRE_URL}item/${id}.json?print=pretty`);
  }
}

export default HackerNewsApiService;