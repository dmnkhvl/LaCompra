import axios from "axios";
import router from "@/router";
import { alertController } from "@ionic/vue";
import { listStore } from "@/main";
import { defineStore } from "pinia";
import { ref } from "vue";
const API_URL = process.env.VUE_APP_API_URL;

export const useListStore = defineStore("lists", () => {
  const lists = ref([]);
  async function getLists() {
    try {
      const response = await axios.get(API_URL);
      lists.value = await response.data.data;
    } catch (err: any) {
      handleError(err);
    }
  }

  async function addList(title: string) {
    try {
      const response = await axios.post(API_URL, {
        title: title,
      });
      await getLists();
      const listId = await response.data.data.id;
      await router.push(`/list/${listId}`);
    } catch (err: any) {
      handleError(err);
    }
  }

  async function addItem(name: string, id: number) {
    try {
      await axios.post(`${API_URL}${id}/items`, {
        name: name,
        value: "1",
        unit: "piece",
        is_checked: false,
      });
      await getLists();
    } catch (err: any) {
      handleError(err);
    }
  }

  async function deleteList(id: any) {
    try {
      await axios.delete(`${API_URL}${id}`);
      await getLists();
      await router.push("/");
    } catch (err: any) {
      handleError(err);
    }
  }

  async function deleteItem(listId: number, itemId: number) {
    try {
      await axios.delete(`${API_URL}${listId}/items/${itemId}`);
      await getLists();
    } catch (err: any) {
      handleError(err);
    }
  }
  async function presentCreateListAlert() {
    const alert = await alertController.create({
      header: "List name",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Create",
          role: "confirm",
          handler: (alertData) => {
            if (alertData.listName.length) {
              listStore.addList(alertData.listName);
            } else listStore.addList("Unnamed list");
          },
        },
      ],
      inputs: [
        {
          name: "listName",
          type: "text",
          placeholder: "Groceries",
          attributes: {
            maxlength: 20,
          },
        },
      ],
    });
    await alert.present();
  }

  function handleError(err: any) {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          console.error("Unauthorized Error: Invalid API Key");
          break;
        case 403:
          console.error("Forbidden Error: Insufficient permissions");
          break;
        case 404:
          console.error("Not Found Error: Resource not found");
          break;
        case 400:
          console.error("Bad Request Error: Invalid request data");
          break;
        case 409:
          console.error(
            "Conflict Error: List with the same data already exists"
          );
          break;
        default:
          console.error(`Server Error: ${err.response.status}`);
      }
    } else {
      console.error("Network Error: Could not connect to API");
    }
  }

  return {
    lists,
    getLists,
    addList,
    deleteList,
    addItem,
    presentCreateListAlert,
    deleteItem,
  };
});
