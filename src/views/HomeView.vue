<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>

    <div class="section">
      <h3>{{ counterTitle }}</h3>

      <div>
        <button class="btn" @click="decreaseCounter">-</button>
        <span class="counter">{{ counter }}</span>
        <button class="btn" @click="increaseCounter">+</button>
      </div>

      <div class="edit">
        <h4>Edit counter title:</h4>
        <input type="text" v-model="counterTitle" />
      </div>
    </div>

    <div class="section">
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
        <input type="text" v-model="counterData.title" />
      </div>
    </div>

    <div class="section">
      <p>This counter is {{ oddOrEven }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue';

const appTitle = 'My Coutner App';

const counter = ref(10),
  counterTitle = ref('Counter');

watch(counter);

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

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

function increaseCounter() {
  counter.value++;
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
