<script setup>
const props = defineProps(['extra_class', 'text', 'to'])
const classes = `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${props.extra_class}`
</script>
<template>
  <router-link
    active-class="bg-gray-900 text-white"
    :class="classes"
    :to="props.to"
  >
    <slot />
  </router-link>
</template>
