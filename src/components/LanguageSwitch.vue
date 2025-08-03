<template>
  <section class="btn-sect">
    <button @click="switchLanguage" class="btn-lang">
      {{ t(locale === 'de' ? 'lang.english' : 'lang.german') }}
    </button>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Ellie, Selma, Ella, irma

export default {
  name: 'LanguageSwitch',
  setup() {
    const { t, locale } = useI18n()

    const currentHost = window.location.hostname
    const devMode = currentHost === 'localhost' || currentHost === '127.0.0.1'
    const currentPath = window.location.pathname

    function switchLanguage() {
      if (devMode) {
        locale.value = locale.value === 'de' ? 'en' : 'de'
        const newLang = locale.value
        window.history.replaceState(null, '', `?lang=${newLang}`)
      } else {
        const newHost = currentHost.includes('empfohlenvonopasven.de')
          ? 'recommendedbygrandpasven.com'
          : 'empfohlenvonopasven.de'
        window.location.href = `https://${newHost}${currentPath}`
      }
    }

    return {
      locale,
      t,
      switchLanguage,
    }
  },
}
</script>

<style scoped>
.btn-sect {
  position: relative;
  z-index: 10;
  padding: 1rem;
  width: 30rem;
  display: flex;
  justify-content: center;
}

.btn-lang {
  background: transparent;
  border: 2px solid rgb(234, 231, 223);
  color: rgb(234, 231, 223);
  font-family: shrikhand;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.btn-lang:hover {
  background: rgb(234, 231, 223);
  color: rgb(15, 44, 112);
}
</style>
