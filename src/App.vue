<script setup lang="ts">
import QrCode from "./components/QrCode.vue";
import { format } from "date-fns";
import { useLocalStorage } from "./composables/localStorage";
import { ref } from "vue";

const [positionTop, resetPositionTop] = useLocalStorage("positionTop", "0");
const [size, resetSize] = useLocalStorage("size", "150");
const [content, resetContent] = useLocalStorage("content", generateCode);

function generateCode() {
  return format(new Date(), "yyyyMMddHHmmssSSS");
}

function reset() {
  resetPositionTop();
  resetSize();
  resetContent();
}

const showOptions = ref(false);
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

    <div>
      <div v-if="showOptions" style="display: flex; justify-content: center">
        <div
          style="
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 6px 4px;
            padding-bottom: 80px;
          "
        >
          <div style="text-align: right">Position top:</div>
          <input type="text" v-model="positionTop" />
          <div style="text-align: left">px</div>

          <div style="text-align: right">Size:</div>
          <input type="text" v-model="size" />
          <div style="text-align: left">px</div>

          <div style="text-align: right">Content:</div>
          <input type="text" v-model="content" />
          <div style="text-align: left"></div>

          <div></div>
          <div>
            <button @click="reset" style="margin-top: 5px; width: 100%">
              Reset
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <div
        style="
          text-align: left;
          cursor: pointer;
          margin-bottom: 3px;
          margin-left: 3px;
        "
        @click="showOptions = !showOptions"
      >
        +
      </div>
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
