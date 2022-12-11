<template>
  <div class="modals">
    <h1>Modals</h1>

    <button @click="showModal = true">Show modals</button>

    <Modal v-model="showModal" title="My defineProps title">
      <template #title>My new title</template>
      <!-- <template v-slot:title>My new title</template> -->

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quod
        quidem sequi odio, consequatur vero rerum esse repudiandae iste tempora
        error commodi praesentium asperiores voluptatum eaque officia? Quae,
        saepe optio!
      </p>
    </Modal>
  </div>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

/* Modals */
const showModal = ref(false);
</script>

<!-- <script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
};
</script> -->
