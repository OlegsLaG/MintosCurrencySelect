<script setup lang="ts">
import { reactive } from 'vue';
import CurrencyList from "@/components/organisms/CurrencyList/CurrencyList.vue";

const currencyList: { currencies: { name: string, selected: boolean }[] } = reactive({
  currencies: [
    { name: 'EUR', selected: false },
    { name: 'PLN', selected: false },
    { name: 'GEL', selected: false },
    { name: 'DKK', selected: false },
    { name: 'CZK', selected: false },
    { name: 'GBP', selected: false },
    { name: 'SEK', selected: false },
    { name: 'USD', selected: false },
    { name: 'RUB', selected: false },
  ]
});


</script>

<template>
  <div class="main">
    <CurrencyList :currency-list="currencyList" />
  </div>
</template>
