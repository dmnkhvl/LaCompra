<template>
  <ion-card-header>
    <ion-card-title>{{ list.title }}</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <ion-list lines="none">
      <p v-if="!list.items.length">No items</p>
      <ion-item v-for="item in list.items" :key="item.id">
        <ion-label>{{ item.name }}</ion-label>
        <ion-badge>{{ item.value + " " + item.unit }}</ion-badge>
      </ion-item>
    </ion-list>
  </ion-card-content>
</template>

<script lang="ts">
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
} from "@ionic/vue";
export default {
  components: {
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
  },
  props: {
    list: Object,
  },
};
</script>
<style scoped>
ion-item {
  background-color: white;
}
</style>
