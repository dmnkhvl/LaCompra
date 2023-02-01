<template>
  <ion-page>
    <ListsHeader />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"> My lists </ion-title>
        </ion-toolbar>
      </ion-header>
      <ListsCards />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// components
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import ListsHeader from "@/components/ListsHeader.vue";
import ListsCards from "@/components/ListsCards.vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    ListsHeader,
    ListsCards,
  },
};
</script>
