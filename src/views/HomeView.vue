<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <div class="section">
      <h3>{{ counter.title }}</h3>

      <div>
        <button class="btn" @click="counter.decreaseCounter(2)">--</button>
        <button class="btn" @click="counter.decreaseCounter(1)">-</button>
        <span class="counter">{{ counter.count }}</span>
        <button class="btn" @click="counter.increaseCounter(1)">+</button>
        <button class="btn" @click="counter.increaseCounter(2)">++</button>
      </div>

      <div class="edit">
        <h4>Edit counter title:</h4>
        <input type="text" v-autofocus v-model="counter.title" />
      </div>
    </div>

    <div class="section">
      <p>This counter is {{ counter.oddOrEven }}</p>
    </div>

    <!-- <div class="section">
      <h3>{{ counterData.title }}</h3>
      <div>
        <button class="btn" @click="decreaseCounterData(2)">--</button>
        <button class="btn" @click="decreaseCounterData(1)">-</button>
        <span class="counter">{{ counterData.count }}</span>
        <button class="btn" @click="increaseCounterData(1)">+</button>
        <button class="btn" @click="increaseCounterData(2)">++</button>
      </div>

      <div class="edit">
        <h4>Edit counter title:</h4>
        <input type="text" v-model="counterData.title" v-autofocus />
      </div>
    </div>

    <div class="section">
      <p>This counter is {{ oddOrEven }}</p>
    </div> -->
  </div>
</template>

<script setup>
/* Imports */
import {
  ref,
  onMounted,
  onUnmounted,
  onBeforeMount,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
  onUpdated,
  onBeforeUpdate,
} from 'vue';
import { vAutofocus } from '@/directives/vAutofocus.js';
import { useCounterStore } from '@/stores/counter.js';
// import { useCounter } from '@/use/useCounter';

/* App Title */
const appTitle = 'My Coutner App';
const appTitleRef = ref(null);

onMounted(() => {
  console.log('Do stuff related to App Title');

  console.log(`The app title is: ${appTitleRef.value.offsetWidth}px wide.`);
});

/* Counter */
// const counter = useCounter();
// const { counterData, increaseCounterData, decreaseCounterData } = counter;
const counter = useCounterStore();
console.log('counter', counter);

/* Directives */
// const vAutofocus = {
//   created(el) {
//     console.log('el', el);
//   },

//   mounted(el) {
//     console.log('el', el);
//     el.focus();
//   },

//   beforeUnmount(el) {
//     console.log('el', el);
//     el.blur();
//   },
// };

/* Lifecycle Hooks */
// onBeforeMount(() => {
//   console.log('onBeforeMount');
// });

// onMounted(() => {
//   console.log('onMounted');
// });

// onBeforeUnmount(() => {
//   console.log('onBeforeUnmount');
// });

// onUnmounted(() => {
//   console.log('onUnmounted');
// });

// onBeforeUpdate(() => {
//   console.log('onBeforeUpdate');
// });

// onUpdated(() => {
//   console.log('onUpdated');
// });

// onActivated(() => {
//   console.log('onActivated');
// });

// onDeactivated(() => {
//   console.log('onDeactivated');
// });
</script>

<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(10);

    function increaseCounter() {
      counter.value++;
    }

    function decreaseCounter() {
      counter.value--;
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    };
  },
};
</script> -->

<!-- <script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increaseCounter() {
      this.counter++;
    },

    decreaseCounter() {
      this.counter--;
    },
  },

  directives: {
    autofocus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script> -->

<style>
.home {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn,
.counter {
  font-size: 40px;
  padding: 20px;
}

.edit {
  margin-top: 40px;
}

.section + .section {
  margin-top: 50px;
}
</style>
