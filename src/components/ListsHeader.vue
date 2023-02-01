<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>My lists</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="listStore.presentCreateListAlert">
          <ion-icon slot="icon-only" :icon="addCircleOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { addCircleOutline } from "ionicons/icons";
import { listStore } from "@/main";
export default {
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
  },
  computed: {
    listStore() {
      return listStore;
    },
    addCircleOutline() {
      return addCircleOutline;
    },
  },
};
</script>
