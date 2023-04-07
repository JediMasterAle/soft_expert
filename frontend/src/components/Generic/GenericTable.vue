
<template>
  <q-table
    :loading="props.loading"
    class="my-sticky-header-table"
    :rows="props.rows"
    :columns="props.columns"
    row-key="name"
    flat
    bordered
    @row-click="rowclick"
    :filter="filter"
  >
    <template v-slot:body-cell-date="props">
      <q-td :props="props">
        {{ dateFormat(props.value) }}
      </q-td>
    </template>
    <template v-slot:body-cell-date_time="props">
      <q-td :props="props">
        {{ formatDateTime(props.value) }}
      </q-td>
    </template>
    <template v-slot:body-cell-delete_id="props">
      <q-td :props="props">
        <q-btn
          icon="delete"
          flat
          round
          color="negative"
          @click.stop="remove_item(props.value)"
        />
      </q-td>
    </template>
    <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
  </q-table>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const filter=ref('')
const props = defineProps({
  columns: {
    type: Object,
    required: true,
  },
  rows: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits([
  "change_page",
  "line_clicked",
  "delete_item",
]);

function dateFormat(value) {
  if (value == null || value == "") {
    return;
  }
  let data = value.split("-");
  return `${data[2]}/${data[1]}/${data[0]}`;
}

function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString('pt-BR');
  const formattedTime = date.toLocaleTimeString('pt-BR');
  return `${formattedDate} ${formattedTime}`;
}

function rowclick(evt, row) {
  emits("line_clicked", row.id);
}


function remove_item(value) {
  emits("delete_item", value);
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 70vh

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #f5f5f5

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
