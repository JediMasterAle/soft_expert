<template>
  <h1 class="text-center text-h3">Tipos de Produto</h1>
  <div class="q-ma-md">
    <q-btn label="Adicionar item" @click="plus_show_modal(true)" />
    <GenericModalInputs
      :input="plus_input"
      :loading="plus_modal_loading"
      :title="plus_title"
      :is_show="plus_is_show"
      :action="plus_action"
      @inputs_data="plusHandleSendDataModal"
      @close_modal="plusHandleCloseModal"
      :key="temp"
    />
    <GenericModalInputs
      :input="update_input"
      :loading="update_modal_loading"
      :title="update_title"
      :is_show="update_is_show"
      :action="update_action"
      @inputs_data="updateHandleSendDataModal"
      @close_modal="updateHandleCloseModal"
      :key="temp"
    />
  </div>
  <div class="q-ma-md">
    <GenericTable
      :columns="columns"
      :loading="loading"
      :rows="rows"
      
      @change_page="handleChangePage"
      @line_clicked="handleLineClicked"
      @delete_item="handleDeleteItem"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import typeService from "src/services/type";
import GenericTable from "src/components/Generic/GenericTable.vue";
import GenericModalInputs from "src/components/Generic/GenericModalInputs.vue";

//Tabel
const { list,post,remove,update } = typeService();
const getItens = async (page = 0, form = {}) => {
  loading.value = true;
  let data = await list(0, null);
  rows.value =JSON.parse(data.success);
  loading.value = false;
};

const postItens = async(form) =>{
  let data = await post(form)
  getItens();
  plus_input.value=[
  { label: "Tipo", type: "text", name: "name", value: "" },
  { label: "Imposto (%)", type: "text", name: "tax", value: "" },
  ]
}

const updateItens = async(form) =>{
  let data = await update(form)
  getItens();
}
const removeItens = async(id) =>{
  let data = await remove(id)
  getItens();
}

const columns = [
  { name: "id", align: "left", label: "ID", field: "id" },
  { name: "name", align: "left", label: "Tipo", field: "name" },
  { name: "tax", align: "left", label: "Imposto (%)", field: "tax" },
  { name: "delete_id", align: "left", label: "AÇÃO", field: "id" },
];
const loading = ref(false);
const rows = ref([]);

function handleChangePage(value) {
  getItens(value);
}

function handleDeleteItem(value) {
  removeItens(value)
}

getItens();
//End Tabel

//Modal plus
const plus_input = ref([
  { label: "Tipo", type: "text", name: "name", value: "" },
  { label: "Imposto (%)", type: "text", name: "tax", value: "" },
]);
const plus_modal_loading = ref(false);
const plus_title = ref("Adicionar tipo de produto");
const plus_is_show = ref(false);
const plus_action = ref("plus");
const temp = ref(0)

function plusHandleSendDataModal(data) {
  plus_input.value.forEach((item) => {
    if (item.name in data) {
      item.value = data[item.name];
    }
  });
  postItens(data);
  plus_show_modal(false);
}
function plusHandleCloseModal(value) {

  plus_show_modal(false);
}

function plus_show_modal(value) {
  temp.value = temp.value+1
  plus_is_show.value = value;
}
//End Modal plus

//Modal Update
function handleLineClicked(value) {
  const data = rows.value.find(objeto => objeto.id == value);
  update_input.value=[
    { label: "ID", type: "hidden", name: "id", value: value },
    { label: "Tipo", type: "text", name: "name", value: data.name },
    { label: "Imposto", type: "text", name: "tax", value: data.tax },
  ]
  temp.value = temp.value+1
  update_show_modal(true);
}

const update_input = ref([
  { label: "ID", type: "hidden", name: "id", value: "" },
  { label: "Tipo", type: "text", name: "name", value: "" },
  { label: "Imposto", type: "text", name: "text", value: "" },
]);
const update_modal_loading = ref(false);
const update_title = ref("Alterar tipo de produto");
const update_is_show = ref(false);
const update_action = ref("update");

function updateHandleSendDataModal(data) {
  update_input.value.forEach((item) => {
    if (item.name in data) {
      item.value = data[item.name];
    }
  });
  updateItens(data);
  getItens(null, data);
  update_show_modal(false);
}
function updateHandleCloseModal(value) {
  update_show_modal(false);
}

function update_show_modal(value) {
  update_is_show.value = value;
}
//End Modal Update
</script>

