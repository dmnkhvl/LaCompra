<template>
  <ion-button
    v-if="!listStore.lists.length"
    expand="block"
    @click="listStore.presentCreateListAlert"
    ><ion-icon :icon="addOutline"></ion-icon>New list</ion-button
  >
  <ion-card
    v-for="list in listStore.lists"
    :key="list.id"
    :router-link="`/list/${list.id}`"
  >
    <ListCard :list="list" />
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonButton, IonIcon } from "@ionic/vue";
import { addOutline } from "ionicons/icons";
import ListCard from "@/components/ListCard.vue";
import { listStore } from "@/main";
export default {
  computed: {
    listStore() {
      return listStore;
    },
    addOutline() {
      return addOutline;
    },
  },
  components: {
    IonCard,
    IonButton,
    IonIcon,
    ListCard,
  },
  async mounted() {
    await listStore.getLists();
  },
};
</script>
<style scoped>
ion-button {
  margin: 1.8rem 1.2rem;
}

ion-icon {
  margin-right: 0.5rem;
}
</style>
