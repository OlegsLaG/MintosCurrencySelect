import { describe, it, expect } from "vitest";
import App from './App.vue'
import { mount } from "@vue/test-utils";

const wrapper = mount(App);

describe('index page is loading', () => {
  it('app component loaded', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
