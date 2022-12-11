export const vAutofocus = {
  created(el) {
    console.log('el', el);
  },

  mounted(el) {
    console.log('el', el);
    el.focus();
  },

  beforeUnmount(el) {
    console.log('el', el);
    el.blur();
  },
};
