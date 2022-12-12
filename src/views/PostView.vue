<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>

      <!-- <li><RouterLink to="/postDetail/id1">Post 1</RouterLink></li>
      <li><RouterLink to="/postDetail/id2">Post 2</RouterLink></li>
      <li><RouterLink to="/postDetail/id3">Post 3</RouterLink></li> -->
    </ul>
    <textarea name="" id="" cols="30" rows="10" v-autofocus></textarea>

    <div>
      <button
        class="counter-button"
        :class="{ yellow: counter.oddOrEven === 'odd' }"
        @click="counter.increaseCounter(1)"
      >
        {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus.js';
import { useCounterStore } from '@/stores/counter.js';
// import { useCounter } from '@/use/useCounter.js';

/* Posts */
const posts = ref([
  {
    id: 'id1',
    title: 'Post 1',
  },
  {
    id: 'id2',
    title: 'Post 2',
  },
  {
    id: 'id3',
    title: 'Post 3',
  },
]);

/* Counter */
const counter = useCounterStore();

// const { counterData, oddOrEven, increaseCounterData, decreaseCounterData } =
//   useCounter();
</script>

<style scoped>
ul {
  margin-bottom: 10px;
}

.counter-button {
  font-size: 2rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(230, 163, 163);
  cursor: pointer;
}

.yellow {
  background-color: rgb(255, 255, 0);
}
</style>
