<template>
  <div class="modals">
    <h1>Modals</h1>

    <div>
      <label for="">Show dark modals?</label>
      <input type="checkbox" v-model="showDarkModals" />
    </div>

    <button @click="showModal = true">Show modals</button>

    <component
      :is="showDarkModals ? ModalDark : Modal"
      v-model="showModal"
      title="My defineProps title"
    >
      <template #title>My new title</template>
      <!-- <template v-slot:title>My new title</template> -->

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quod
        quidem sequi odio, consequatur vero rerum esse repudiandae iste tempora
        error commodi praesentium asperiores voluptatum eaque officia? Quae,
        saepe optio!
      </p>
    </component>
  </div>
</template>

<script setup>
/* Imports */
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

/* Props */
const props = defineProps({
  userData: { type: Object },
});

/* Modals */
const showModal = ref(false);
const showDarkModals = ref(false);
</script>

<!-- <script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
};
</script> -->
