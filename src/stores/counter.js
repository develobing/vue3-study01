import { ref, computed } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Counter Title',
  }),

  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter(amount) {
      this.count -= amount;
    },
  },

  getters: {
    oddOrEven: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  },

  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++;
  //   },
  // },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
