<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-[#f79e78]/30 px-4">
    <div class="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg text-center animate-fade-in">
      <h2 class="text-3xl font-extrabold text-[#c34b16] mb-2 flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-4xl text-[#c34b16]">person</span>
        ¡Bienvenido, {{ user?.firstName || 'Usuario' }}!
      </h2>

      <div v-if="user" class="space-y-6 mt-6">
        <!-- Avatar solo por iniciales -->
        <div class="flex flex-col items-center gap-2">
          <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-[#c34b16] to-[#f79e78] flex items-center justify-center text-white text-4xl font-bold shadow-lg mb-2">
            {{ initials }}
          </div>
        </div>

        <!-- Info personal -->
        <div class="grid grid-cols-2 gap-4 text-left">
          <div class="bg-gray-50 rounded-xl p-4 shadow-sm">
            <p class="font-semibold text-gray-700 mb-1">Nombre</p>
            <p>{{ user.firstName }} {{ user.lastName }}</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 shadow-sm">
            <p class="font-semibold text-gray-700 mb-1">Email</p>
            <p>{{ user.email }}</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 shadow-sm">
            <p class="font-semibold text-gray-700 mb-1">Rol</p>
            <span :class="user.role === 'fullAdmin' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'" class="px-2 py-1 rounded-full text-sm font-medium">{{ user.role }}</span>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 shadow-sm">
            <p class="font-semibold text-gray-700 mb-1">Newsletter</p>
            <span :class="user.newsletter ? 'text-green-600' : 'text-gray-400'">{{ user.newsletter ? 'Suscrito' : 'No suscrito' }}</span>
          </div>
        </div>

        <!-- Extras -->
        <div class="grid grid-cols-2 gap-4 text-left">
          <div class="bg-white rounded-xl p-4 border shadow-sm">
            <p class="font-semibold text-gray-700 mb-1">Fecha de registro</p>
            <p>{{ user.registeredAt || '01/10/2025' }}</p>
          </div>
          <div class="bg-white rounded-xl p-4 border shadow-sm">
            <p class="font-semibold text-gray-700 mb-1">Último acceso</p>
            <p>{{ lastAccess }}</p>
          </div>
        </div>

        <!-- Acciones -->
        <div class="flex flex-col gap-2 mt-4">
          <button @click="editUser" class="w-full bg-[#f79e78] text-[#c34b16] py-2 px-4 rounded-lg hover:bg-[#c34b16] hover:text-white transition shadow-md font-semibold flex items-center justify-center gap-2">
            <span class="material-symbols-outlined">edit</span> Editar datos personales
          </button>
          <button @click="changePassword" class="w-full bg-[#c34b16] text-white py-2 px-4 rounded-lg hover:bg-[#f79e78] transition shadow-md font-semibold flex items-center justify-center gap-2">
            <span class="material-symbols-outlined">lock</span> Cambiar contraseña
          </button>
          <button @click="logout" class="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-red-100 hover:text-red-600 transition shadow-md font-semibold flex items-center justify-center gap-2">
            <span class="material-symbols-outlined">logout</span> Cerrar sesión
          </button>
        </div>
      </div>

      <!-- No logueado -->
      <div v-else class="text-gray-600 animate-fade-in">
        <p class="mb-4">No estás logueado.</p>
        <router-link
          to="/iniciar-sesion"
          class="inline-block px-4 py-2 rounded-lg bg-[#c34b16] text-white hover:bg-[#f79e78] transition shadow-md"
        >
          Ir al Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from '../../../store/auth';

const router = useRouter()
const auth = useAuthStore();
const user = ref<any>(null)
const avatarUrl = ref<string | null>(null)
const lastAccess = ref<string>(new Date().toLocaleString())

const storedUser = localStorage.getItem("user")
if (storedUser) {
  user.value = JSON.parse(storedUser)
}

const initials = computed(() => {
  if (!user.value) return "?"
  return (
    (user.value.firstName?.[0] || "") +
    (user.value.lastName?.[0] || "")
  ).toUpperCase()
})

function onAvatarChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      avatarUrl.value = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}

function editUser() {
  alert('Funcionalidad de edición de datos próximamente.')
}

function changePassword() {
  alert('Funcionalidad de cambio de contraseña próximamente.')
}

function logout() {
  localStorage.removeItem("user")
  user.value = null
  auth.logout();
  router.push("/iniciar-sesion")
}
</script>
