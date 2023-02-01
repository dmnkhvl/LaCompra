<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-back-button default-href="/lists" slot="start" />
        <ion-title> {{ list.title }} </ion-title>
        <ion-buttons slot="end">
          <ion-button @click="presentDeleteListAlert"
            ><ion-icon
              slot="icon-only"
              :icon="trashOutline"
              id="delete-button"
            ></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"> {{ list.title }} </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item-sliding v-for="item in list.items" :key="item.id">
          <ion-item>
            <ion-checkbox slot="start"></ion-checkbox>
            <ion-label>{{ item.name }}</ion-label
            ><ion-badge>{{ item.value + " " + item.unit }}</ion-badge>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option color="danger">
              <ion-icon
                slot="icon-only"
                :icon="trashOutline"
                @click="listStore.deleteItem(list.id, item.id)"
              >
              </ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
        <ion-item>
          <ion-checkbox slot="start" disabled> </ion-checkbox
          ><ion-input
            placeholder="New item"
            type="text"
            autofocus
            v-model="itemName"
            @change="listStore.addItem(itemName, list.id)"
          >
          </ion-input>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonList,
  IonItemSliding,
  alertController,
  IonLabel,
  IonBadge,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonCheckbox,
  IonInput,
  IonButtons,
  IonButton,
  IonBackButton,
} from "@ionic/vue";
import { useRoute } from "vue-router";
import { listStore } from "@/main";
import { trashOutline } from "ionicons/icons";
export default {
  data() {
    return {
      itemName: "",
      route: useRoute(),
    };
  },
  computed: {
    listStore() {
      return listStore;
    },
    trashOutline() {
      return trashOutline;
    },
    list() {
      return listStore.lists.find(
        (list) => list.id === parseInt(this.route.params.id)
      );
    },
  },
  methods: {
    async presentDeleteListAlert() {
      const alert = await alertController.create({
        header: "Are you sure?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Ok",
            role: "confirm",
            handler: () => {
              listStore.deleteList(this.list.value.id);
            },
          },
        ],
      });
      await alert.present();
    },
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonList,
    IonItemSliding,
    IonLabel,
    IonBadge,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonCheckbox,
    IonInput,
    IonButtons,
    IonButton,
    IonBackButton,
  },
};
</script>

<style scoped>
#delete-button {
  color: #c2394b;
}
</style>
