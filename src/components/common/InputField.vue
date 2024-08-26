<template>
  <div
    class="text-dark bg-light px-2 py-1 rounded-t-lg border-b-primary border-b-[3px]"
  >
    <label class="flex flex-col">
      <span class="text-sm font-bold">{{ label }}</span>
      <textarea
        class="resize-none border-none outline-none bg-transparent h-40"
        v-if="type == 'textarea'"
        v-model="model"
      ></textarea>
      <select
        class="border-none outline-none bg-transparent"
        v-else-if="type == 'select'"
        v-model="model"
      >
        <slot></slot>
      </select>
      <input
        class="border-none outline-none bg-transparent"
        v-else
        :type="type"
        v-model="model"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
