<template>
  <v-container>
    <v-app-bar app style="background-color: #fff159">
      <v-toolbar-title>Mercadolibre</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-responsive class="" max-width="460">
        <v-text-field
          v-model="itemName"
          flat
          label="Buscar productos, marcas y más…"
          hide-details
          rounded
          style="background-color: white"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-responsive>
      <v-btn class="ml-3" @click="search()" primary rounded> Buscar </v-btn>
    </v-app-bar>
    <v-row>
      <span class="ma-5" v-if="!items.results"
        >Sin informacion para mostrar</span
      >
      <v-col v-else v-for="n in items.results" :key="n.id" cols="3">
        <ItemCard style="cursor: pointer" @click="detail(n.title)" :item="n">
        </ItemCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemService from "../services/ItemService";
import ItemCard from "../components/ItemsCard.vue";

export default {
  name: "Home",
  components: {
    ItemCard,
  },
  data() {
    return {
      itemName: "",
      items: [],
    };
  },
  computed: {
    hasItems() {
      if (this.items.length > 0) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async search() {
      await ItemService.getAll(this.itemName)
        .then((response) => {
          this.items = response;
          console.table(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
