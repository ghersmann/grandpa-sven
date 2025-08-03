<template>
  <div>
    <p>{{ t('home1') }}</p>
    <p>{{ t('home2') }}</p>
    <router-link :to="{ name: 'contact' }"><p class="link1">{{ t('link1') }}</p></router-link>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.link1 {
    text-decoration: underline;
}
</style>