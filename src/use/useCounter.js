import { ref, reactive, watch, computed, nextTick, onMounted } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

export function useCounter() {
  const counter = ref(10),
    counterTitle = ref('Counter');

  watch(counter, () => console.log('counter', counter));

  // const counterData = reactive({
  //   count: 0,
  //   title: 'My Counter',
  // });

  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      console.log('newCount', newCount);
      if (newCount === 20) alert('You reached 20!');
    }
  );

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'even';
    return 'odd';
  });

  async function increaseCounter() {
    counter.value++;

    await nextTick(() => {
      // do something after the dom has updated
      console.log('do something after the dom has updated - 111');
    });

    console.log('do something after the dom has updated - 222');
  }

  function decreaseCounter() {
    counter.value--;
  }

  function increaseCounterData(amount) {
    counterData.count = counterData.count + amount;
  }

  function decreaseCounterData(amount) {
    counterData.count = counterData.count - amount;
  }

  onMounted(() => {
    console.log('Do stuff related to Counter');
  });

  return {
    counter,
    counterTitle,
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
    increaseCounterData,
    decreaseCounterData,
  };
}
