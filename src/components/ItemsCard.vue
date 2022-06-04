<template>
  <div>
    <v-card height="290" width="380">
      <v-img class="white--text align-end" height="200px" :src="item.thumbnail">
        <v-card-title>{{ item.title }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0"> $ {{ item.price }} </v-card-subtitle>
      <v-card-text class="text--primary">
        <div>
          {{ `${item.location.country.name} - ${item.location.city.name}` }}
        </div>

        <div>Condicion: {{ item.condition }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ItemCard",
  props: {
    item: Object,
  },
};
</script>
