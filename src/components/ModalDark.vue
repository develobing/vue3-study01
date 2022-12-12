<template>
  <teleport to=".modals-container">
    <div class="modal-dark" v-if="modelValue">
      <div class="modal-content">
        <h1>{{ title }}</h1>
        <!-- <h1><slot name="title" /></h1> -->

        <slot />
        <!-- <pre>
          {{ $slots.title }}
        </pre> -->

        <button @click="$emit('update:modelValue', false)">Hide modal</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: 'Default title',
    required: true,
  },
});
console.log('props.title', props.title);

const emit = defineEmits(['update:modelValue']);

const handleButtonClick = () => {
  console.log('handleButtonClick');
  emit('update:modelValue', false);
};

const slots = useSlots();
console.log(slots.title());
</script>

<!-- <script>
export default {
  emits: ['hideModal'],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script> -->

<style>
.modal-dark {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dark .modal-content {
  width: 350px;
  height: 500px;
  background-color: #333;
  color: #fff;
}
</style>
