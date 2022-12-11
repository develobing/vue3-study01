<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content post with ID of {{ $route.params.id }}</p>

    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>

    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>

    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>

    <p>
      <RouterLink to="/posts">&lt Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
console.log('route', route);
console.log('router', router);

const showPostId = () => {
  console.log('showPostId');
  alert(`Post ID: ${route.params.id}`);
};

const goHomeIn3Seconds = () => {
  console.log('goHomeIn3Seconds');
  setTimeout(() => {
    router.push({ name: 'home' });
  }, 3000);
};

const goToFirstPost = () => {
  console.log('goToFirstPost');
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1',
    },
  });
};
</script>
