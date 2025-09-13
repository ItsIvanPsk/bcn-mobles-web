<template>
  <footer class="footer">
    <!-- Columna 1 -->
    <div class="footer-col">
      <h3>BCN Mobles</h3>
      <p>© 2025 Todos los derechos reservados</p>
    </div>

    <!-- Columna 2 -->
    <div class="footer-col">
      <h4>Enlaces legales</h4>
      <ul>
        <li><button @click="goTo('aviso-legal')">Aviso legal</button></li>
        <li><button @click="goTo('politica-de-privacidad')">Privacidad</button></li>
        <li><button @click="goTo('acuerdo-de-cookies')">Cookies</button></li>
        <li><button @click="goTo('preguntas-frequentes')">FAQs</button></li>
      </ul>
    </div>

    <!-- Columna 3 -->
    <div class="footer-col">
      <h4>Síguenos</h4>
        <div class="socials">
          <a href="https://www.facebook.com/Bcnmobles" target="_blank" aria-label="Facebook">
            <img class="h-[2rem] w-[2rem]" src="/public/fb_logo.png"/>
          </a>
          <a href="https://www.instagram.com/bcnmobles/?hl=es" target="_blank" aria-label="Instagram">
            <img class="h-[2rem] w-[2rem]" src="/public/ig_logo.png"/>
          </a>
        </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(page: string) {
  router.push(`/${page}`)
}
</script>

<style scoped lang="scss">
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  background: #222;
  color: #eee;
  font-size: 0.9rem;

  .footer-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3, h4 {
      margin-bottom: 0.8rem;
      color: #fff;
    }

    p {
      color: #bbb;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0.4rem 0;

        button {
          background: none;
          border: none;
          color: #eee;
          cursor: pointer;
          font-size: 0.9rem;
          transition: color 0.2s ease;

          &:hover {
            color: #1e90ff;
          }
        }
      }
    }

    .socials {
      display: flex;
      gap: 1rem;
      font-size: 1.8rem;

      a {
        color: #eee;
        transition: transform 0.2s ease, color 0.2s ease;

        &:hover {
          transform: scale(1.2);
          color: #1e90ff;
        }

        .material-icons {
          font-size: 1.8rem;
          vertical-align: middle;
        }
      }
    }

  }
}
</style>
