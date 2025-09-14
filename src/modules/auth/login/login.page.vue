<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-96">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <form @submit.prevent="onLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Correo</label>
          <input
            v-model="loginForm.email"
            type="email"
            required
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f79e78] focus:border-[#f79e78]"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            v-model="loginForm.password"
            type="password"
            required
            class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f79e78] focus:border-[#f79e78]"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-[#c34b16] text-white py-2 px-4 rounded-lg hover:bg-[#f79e78]"
        >
          Iniciar sesión
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-4">
        ¿No tienes cuenta?
        <router-link to="/crear-cuenta" class="text-[#c34b16] hover:underline">
          Regístrate
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const loginForm = ref({
  email: "",
  password: "",
})

const onLogin = async () => {
  console.log("Mock login:", loginForm.value)

  await new Promise((resolve) => setTimeout(resolve, 800))

  localStorage.removeItem("user")

  localStorage.setItem(
    "user",
    JSON.stringify({
      firstName: "Usuario",
      lastName: "Demo",
      email: loginForm.value.email,
      role: "fullAdmin",
    })
  )

  router.push("/user-panel")
}
</script>
