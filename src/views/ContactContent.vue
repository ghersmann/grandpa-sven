<template>
  <div>
    <p>{{ t('contact1') }}</p>
    <p>{{ t('contact2') }}</p>
    <p>{{ t('contact3') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
