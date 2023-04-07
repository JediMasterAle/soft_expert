<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Soft Expert </q-toolbar-title>

        <div>by Alexandre Kazuo Carvalhal</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="q-pa-md text-center">
        <q-avatar size="140px" font-size="90%" color="teal" text-color="white" icon="person" />
      </div>
      <q-separator class="q-ma-md"/>
      <q-list>
        <q-item-label header>  </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "Tipo",
    icon: "list",
    link: "/tipo",
  },
  {
    title: "Produto",
    icon: "shopping_cart",
    link: "/produto",
  },
  {
    title: "Venda",
    icon: "attach_money",
    link: "/venda",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
