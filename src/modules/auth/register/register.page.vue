<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-96">
      <h2 class="text-2xl font-bold text-center mb-6">Registro</h2>

      <Form @submit="onRegister" :validation-schema="schema" class="space-y-4">
        <!-- Nombre -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Nombre</label>
          <Field
            name="firstName"
            type="text"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f79e78] focus:border-[#f79e78]"
          />
          <ErrorMessage name="firstName" class="text-red-500 text-sm" />
        </div>

        <!-- Apellido -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Apellido</label>
          <Field
            name="lastName"
            type="text"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f79e78] focus:border-[#f79e78]"
          />
          <ErrorMessage name="lastName" class="text-red-500 text-sm" />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Correo</label>
          <Field
            name="email"
            type="email"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f79e78] focus:border-[#f79e78]"
          />
          <ErrorMessage name="email" class="text-red-500 text-sm" />
        </div>

        <!-- Contraseña -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Contraseña</label>
          <Field
            name="password"
            type="password"
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f79e78] focus:border-[#f79e78]"
          />
          <ErrorMessage name="password" class="text-red-500 text-sm" />
        </div>

        <!-- Botón -->
        <button
          type="submit"
          class="w-full bg-[#c34b16] text-white py-2 px-4 rounded-lg hover:bg-[#f79e78]"
        >
          Registrarse
        </button>
      </Form>

      <p class="text-center text-sm text-gray-600 mt-4">
        ¿Ya tienes cuenta?
        <router-link to="/iniciar-sesion" class="text-[#c34b16] hover:underline">
          Inicia sesión
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
import { useRouter } from "vue-router"

const router = useRouter()

const schema = yup.object({
  firstName: yup.string().required("El nombre es obligatorio"),
  lastName: yup.string().required("El apellido es obligatorio"),
  email: yup.string().required("El email es obligatorio").email("Debe ser un email válido"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "Mínimo 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(/[^a-zA-Z0-9]/, "Debe contener al menos un símbolo"),
})

const onRegister = async (values) => {
  console.log("Mock register:", values)

  // simulamos llamada a API (mock 200)
  await new Promise((resolve) => setTimeout(resolve, 800))

  // 🔹 limpiamos usuario previo
  localStorage.removeItem("user")

  // guardamos nuevo usuario
  localStorage.setItem(
    "user",
    JSON.stringify({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      role: "user",
    })
  )

  router.push("/user-panel")
}
</script>
