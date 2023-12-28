<script setup lang="ts">
interface currencyProps {
  currencyList: {
    currencies: {
      name: string,
      selected: boolean
    }[]
  }
}
const props = defineProps<currencyProps>();

function addRemoveCurrency (value: string) {
  Object.values(props.currencyList.currencies).map((e) => {
    if (e.name === value) {
      (document.getElementById(e.name) as HTMLInputElement).checked = !e.selected;
      e.selected = !e.selected;
    }
  });
}
</script>

<template>
  <div class="currency_list_wrapp">
    <div class="selected_currencies">
      <div
        v-for="{ name, selected } in currencyList.currencies"
        :key="name"
        :class="{ active: selected, selected: true }"
      >
        <span class="remove" @click="addRemoveCurrency(name)">X</span>
        {{ name }}
      </div>
    </div>
    <div class="availaible_currencies">
      <div
        v-for="{ name, selected } in currencyList.currencies"
        :key="name"
        :class="{ currency: true, active: selected }"
      >
        <input
          :id="name"
          type="checkbox"
          :name="name"
          :value="name"
          class="currency_checkbox"
          @click="addRemoveCurrency(name)"
        >
        <span class="checkmark" />
        <label
          :for="name"
          v-html="name"
        />
      </div>
    </div>
  </div>
</template>
