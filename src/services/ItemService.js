import Axios from "@/plugins/axiosMethods";
const RESOURCE_NAME = "item";

class ItemService {
  getAll(paginationToken) {
    return Axios.get(RESOURCE_NAME, { headers: "" });
  }
  getById(id) {
    return Axios.get(RESOURCE_NAME / id, { headers: "" });
  }
}

export default new ItemService();
