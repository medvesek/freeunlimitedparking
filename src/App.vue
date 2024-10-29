<script setup lang="ts">
import { ref } from "vue";
import QrCode from "./components/QrCode.vue";
import { addMinutes, format } from "date-fns";

const paddingTop = ref("0");
const size = ref("150");
const content = ref(format(addMinutes(new Date(), 15), "yyyyMMddHHmmssSSS"));
</script>

<template>
  <div :style="{ 'text-align': 'center', 'padding-top': `${paddingTop}px` }">
    <QrCode :content="content" :width="Number(size)" />
    <div>Padding top: <input type="text" v-model="paddingTop" />px</div>
    <div>Size: <input type="text" v-model="size" /></div>
    <div>Content: <input type="text" v-model="content" /></div>
  </div>
</template>

<style scoped></style>
