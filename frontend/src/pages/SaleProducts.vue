<template>
  <h1 class="text-center text-h3">Produtos da Venda</h1>
  <div class="q-ma-md">
    <div class="flex justify-between">
      <q-btn label="Adicionar item" @click="plus_show_modal(true)" />
      <span><b>Total à pagar:</b> {{ totals[0] }}</span>
      <span><b>Total de imposto:</b> {{ totals[1] }}</span>
      <q-btn color="positive" label="Finalizar" to="/venda" />
    </div>
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
import { useRoute  } from "vue-router";
import saleProductService from "src/services/saleProduct";
import typeServiceApi from "src/services/product";
import GenericTable from "src/components/Generic/GenericTable.vue";
import GenericModalInputs from "src/components/Generic/GenericModalInputs.vue";

const route = useRoute();
const sales_id = route.params.id


//Get Options
const { list:typeServiceApiList } = typeServiceApi();
const options=ref([])

const getOptions = async (page = 0, form = {}) => {
  let data = await typeServiceApiList(0, null);
  let result_options =JSON.parse(data.success);

  options.value = result_options.map(item => {
    return {
      value: item.id,
      label: item.name
    }
  });
};
getOptions()
//End Get Options

//Tabel
const { post,remove,update,getById } = saleProductService();

const totals=ref([])

const getItens = async (page = 0, form = {}) => {
  loading.value = true;
    let data = await getById(sales_id);
  rows.value =JSON.parse(data.success);
if(data[0]){
  totals.value =JSON.parse(data[0]);
}else{
  totals.value =['0.00','0.00'];
}

  loading.value = false;
};

const postItens = async(form) =>{sd
  let data = await post(form)
  getItens();
  plus_input.value=[
  { label: "Produto", type: "select", name: "products_id", value: "",options:options },
  { label: "Quantidade", type: "text", name: "qty", value: "" },
  { label: "", type: "hidden", name: "sales_id", value: sales_id },
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
  { name: "code", align: "left", label: "Código", field: "code" },
  { name: "name", align: "left", label: "Produto", field: "name" },
  { name: "unit_value_tax", align: "left", label: "Valor Unitário Imposto", field: "unit_value_tax" },
  { name: "unit_value", align: "left", label: "Valor Unitário", field: "unit_value" },
  { name: "qty", align: "left", label: "Qtd", field: "qty" },
  { name: "total", align: "left", label: "Total", field: "total" },
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
  { label: "Produto", type: "select", name: "products_id", value: "",options:options },
  { label: "Quantidade", type: "text", name: "qty", value: "" },
  { label: "", type: "hidden", name: "sales_id", value: sales_id },
]);
const plus_modal_loading = ref(false);
const plus_title = ref("Adicionar produto");
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
  { label: "", type: "hidden", name: "id", value: data.id },
   { label: "Quantidade", type: "text", name: "qty", value: data.qty },
  ]
  
  temp.value = temp.value+1
  update_show_modal(true);
}

const update_input = ref([
{ label: "", type: "hidden", name: "id", value: '' },
   { label: "Quantidade", type: "text", name: "qty", value: '' },
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

