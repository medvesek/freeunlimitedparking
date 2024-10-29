<script setup lang="ts">
import QrCode from "./components/QrCode.vue";
import { addMinutes, format } from "date-fns";
import { useLocalStorage } from "./composables/localStorage";

const [positionTop, resetPositionTop] = useLocalStorage("positionTop", "0");
const [size, resetSize] = useLocalStorage("size", "150");
const [content, resetContent] = useLocalStorage("content", generateCode);

function generateCode() {
  return format(addMinutes(new Date(), 15), "yyyyMMddHHmmssSSS");
}

function reset() {
  resetPositionTop();
  resetSize();
  resetContent();
}
</script>

<template>
  <div class="container">
    <div>
      <QrCode
        :content="content"
        :width="Number(size)"
        :style="{ position: 'relative', top: `${positionTop}px` }"
      />
    </div>

    <div style="padding-bottom: 80px">
      <div>Position top: <input type="text" v-model="positionTop" /> px</div>
      <div>Size: <input type="text" v-model="size" /> px</div>
      <div>Content: <input type="text" v-model="content" /></div>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
