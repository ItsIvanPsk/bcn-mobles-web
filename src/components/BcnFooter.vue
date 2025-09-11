<template>
  <footer class="footer">
    <div class="footer-left">© 2025 BCN Mobles</div>
    <div class="footer-links">
      <button @click="goTo('aviso-legal')">Aviso legal</button>
      <button @click="goTo('privacidad')">Privacidad</button>
      <button @click="goTo('cookies')">Cookies</button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(page: string) {
  // aquí puedes hacer router.push a rutas internas
  // o abrir páginas estáticas
  router.push(`/${page}`)
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f5f5f5;
  font-size: 0.85rem;
  color: #555;

  .footer-left {
    margin-bottom: 0.5rem;
  }

  .footer-links {
    display: flex;
    gap: 1rem;

    button {
      background: none;
      border: none;
      font-size: 0.85rem;
      color: #007bff;
      cursor: pointer;
      padding: 0;
      transition: color 0.2s ease;

      &:hover {
        color: #0056b3;
      }
    }
  }
}
</style>
