import Axios from "@/plugins/axiosMethods";
const RESOURCE_NAME = "item";

class ItemService {
  getAll(itemName) {
    return Axios.get(`sites/MCO/search?q=${itemName}`, {
      headers: "",
    });
  }
  getById(id) {
    return Axios.get(RESOURCE_NAME / id, { headers: "" });
  }
}

export default new ItemService();
