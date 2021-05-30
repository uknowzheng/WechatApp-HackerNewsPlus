import { request } from "./util";
const PRE_URL = "https://www.uknowzheng.world/api/"
class UknowzhengApiService {

  constructor() {

  }

  getListByType(type = 'new') {
    return request(`${PRE_URL}${type}stories.json?print=pretty`);
  }

  getItemByItemId(id) {
    return request(`${PRE_URL}item/${id}.json?print=pretty`);
  }
}

export default UknowzhengApiService;