<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="contact-card q-pa-lg q-ma-md shadow-2 rounded-borders">
      <h4 class="text-center q-mb-md">Contáctanos</h4>

      <q-form @submit.prevent="submitForm" class="q-gutter-md">
        <q-input
          filled
          v-model="form.name"
          label="Nombre"
          :rules="[(val) => !!val || 'El nombre es obligatorio']"
        />

        <q-input
          filled
          v-model="form.email"
          label="Email"
          type="email"
          :rules="[(val) => !!val || 'El email es obligatorio']"
        />

        <q-input
          filled
          v-model="form.message"
          label="Mensaje"
          type="textarea"
          autogrow
          :rules="[(val) => !!val || 'El mensaje es obligatorio']"
        />

        <div class="row justify-center q-mt-md">
          <q-btn label="Enviar" type="submit" color="primary" rounded no-caps />
        </div>
      </q-form>
    </div>
  </q-page>
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

  // TODO: Enviar formulario de contacto

  form.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

<style scoped lang="scss">
.contact-card {
  max-width: 500px;
  width: 100%;
  background: white;
}
</style>
