<template>
  <h1 class="text-center text-h3">Vendas</h1>
  <div class="q-ma-md">
    <q-btn label="Nova venda" @click="plus_show_modal(true)" />
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
import {  useRouter } from 'vue-router'
import saleService from "src/services/sale";
import GenericTable from "src/components/Generic/GenericTable.vue";
import GenericModalInputs from "src/components/Generic/GenericModalInputs.vue";

//Tabel
const { list,post,remove,update } = saleService();
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
  { label: "Data", type: "date", name: "date", value: "" },
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
  { name: "date", align: "left", label: "Data", field: "date" },
  { name: "total", align: "left", label: "Total", field: "total" },
  { name: "total_tax", align: "left", label: "Total Imposto", field: "total_tax" },
  { name: "total_itens", align: "left", label: "Totalde Itens", field: "total_itens" },
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

const router= useRouter()
function handleLineClicked(value) {
  router.push('/venda/'+value)
}

getItens();
//End Tabel

//Modal plus
const plus_input = ref([
  { label: "Data", type: "date", name: "date", value: "" },
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

</script>

