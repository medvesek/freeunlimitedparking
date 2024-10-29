<script lang="ts" setup>
import qrcode from "qrcode";
import { ref, watch } from "vue";

const props = defineProps({
  width: {
    type: Number,
    required: false,
    default: 200,
  },
  content: {
    type: String,
    required: true,
  },
});
const dataUrl = ref("");

watch(
  () => props.content,
  async () => {
    dataUrl.value = await qrcode.toDataURL(props.content, {
      width: props.width,
    });
  },
  { immediate: true }
);

watch(
  () => props.width,
  async () => {
    dataUrl.value = await qrcode.toDataURL(props.content, {
      width: props.width,
    });
  },
  { immediate: true }
);
</script>

<template>
  <img :src="dataUrl" />
</template>
