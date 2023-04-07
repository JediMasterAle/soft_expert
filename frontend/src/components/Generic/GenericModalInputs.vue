<template>
  <q-dialog v-model="is_show_modal">
    <q-card style="width: 700px; max-width: 80vw">
      <form @submit.prevent="send_data()">
        <q-card-section>
          <div class="text-h6">{{ title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-for="(input, index) in props.input" :key="index">
            <div v-if="input.type == 'date'">
              <q-input
                outlined
                :label="input.label"
                type="date"
                class="q-my-sm"
                v-model="data[input.name]"
              />
            </div>
            <div v-else-if="input.type == 'text'">
              <q-input
                outlined
                :label="input.label"
                type="text"
                class="q-my-sm"
                v-model="data[input.name]"
              />
            </div>
            <div v-else-if="input.type == 'select'">
              <q-select
                outlined
                :label="input.label"
                class="q-my-sm"
                v-model="data[input.name]"
                :options="input.options"
                option-label="label"
                emit-value
                map-options
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" type="submit" />
          <q-btn flat label="Cancelar" color="negative" v-close-popup />
        </q-card-actions>
      </form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";

const emits = defineEmits(["inputs_data", "close_modal"]);

const data = ref([]);

props.input.forEach((input) => {
  data.value[input.name] = input.value;
});

function send_data() {
  if (data.value && data.value.types_id && data.value.types_id.value) {
    data.value.types_id = data.value.types_id.value;
  }
  emits("inputs_data", data.value);
  btn_cancel(true);
}


function btn_cancel(is_ignore_action = false) {
  if (is_ignore_action) {
    return;
  }

  props.input.forEach((input) => {
    data.value[input.name] = input.value;
  });
  emits("close_modal", props.action);
}

const props = defineProps({
  input: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  is_show: {
    type: Boolean,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
});

const is_show_modal = computed({
  get: () => {
    return props.is_show;
  },
  set: (value) => {
    btn_cancel();
    return;
  },
});
</script>

<style>
</style>