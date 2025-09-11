<template>
  <div class="contact-page">
    <div class="contact-card">
      <h4 class="title">Contáctanos</h4>

      <form @submit.prevent="submitForm" class="form">
        <!-- Nombre -->
        <div class="form-group">
          <label for="name">Nombre</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Tu nombre"
            required
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="tu@email.com"
            required
          />
        </div>

        <!-- Mensaje -->
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            placeholder="Escribe tu mensaje..."
            required
          ></textarea>
        </div>

        <!-- Botón -->
        <div class="form-actions">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

function submitForm() {
  console.log('Formulario enviado:', form.value)

  // TODO: enviar formulario al backend
  form.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

<style scoped lang="scss">
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.contact-card {
  max-width: 500px;
  width: 100%;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  .title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form-group {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #333;
      }

      input,
      textarea {
        padding: 0.75rem 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 0.95rem;
        outline: none;

        &:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0,123,255,0.2);
        }
      }
    }

    .form-actions {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      button {
        background: #007bff;
        color: #fff;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 9999px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.2s ease;

        &:hover {
          background: #0056b3;
        }
      }
    }
  }
}
</style>
