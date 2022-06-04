<template>
  <div class="home">Home</div>
</template>

<script>
import ItemService from "../services/ItemService";

export default {
  name: "Home",
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    await ItemService.getAll(1)
      .then((response) => {
        console.table(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
