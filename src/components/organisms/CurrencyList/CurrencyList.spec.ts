import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CurrencyList from "@/components/organisms/CurrencyList/CurrencyList.vue";

const wrapper = mount(CurrencyList, {
  propsData: {
    currencyList: {
      currencies: [
        { name: 'TEST', selected: false },
        { name: 'CURRENCY', selected: false },
        { name: 'USD', selected: false },
        { name: 'EUR', selected: false },
        { name: 'YEN', selected: false },
      ]
    }
  }
});

describe('Currency list component loaded', () => {
  it('component loaded', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('currencies are loading', () => {
    expect(wrapper.props().currencyList.currencies.length).toBe(5);
  });
});
