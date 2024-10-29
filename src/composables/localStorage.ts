import { Ref, ref, watch } from "vue";

export function useLocalStorage(
  key: string,
  initialValue: any
): [Ref<any>, () => void] {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(key) || "");
  } catch (e) {
    saved = typeof initialValue === "function" ? initialValue() : initialValue;
  }

  const value = ref(saved);

  watch(value, () => {
    localStorage.setItem(key, JSON.stringify(value.value));
  });

  function resetValue() {
    value.value =
      typeof initialValue === "function" ? initialValue() : initialValue;
    setTimeout(() => {
      localStorage.removeItem(key);
    });
  }

  return [value, resetValue];
}
