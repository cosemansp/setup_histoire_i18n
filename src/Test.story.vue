<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <Story
    title="i18n"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <h1>{{ t("i18n") }}</h1>
    <h2>{{ t("hello") }}</h2>
  </Story>
</template>
