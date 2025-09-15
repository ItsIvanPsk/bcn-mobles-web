<template>
  <div class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Condiciones de Uso</h1>

      <p class="text-gray-700 mb-4">
        Bienvenido a <strong>BCN Mobles</strong>. Al crear una cuenta y utilizar
        nuestros servicios, aceptas las siguientes condiciones:
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">1. Uso de la cuenta</h2>
      <p class="text-gray-700 mb-4">
        Al registrarte, te comprometes a proporcionar información veraz y a no
        compartir tu cuenta con terceros. Eres responsable de mantener la
        confidencialidad de tu contraseña.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">2. Tratamiento de datos</h2>
      <p class="text-gray-700 mb-4">
        Los datos que proporciones (nombre, apellidos, correo electrónico) se
        usarán para gestionar tu cuenta, tus solicitudes de presupuestos y citas
        en tienda. Podrás solicitar la eliminación de tus datos en cualquier
        momento.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">3. Newsletter</h2>
      <p class="text-gray-700 mb-4">
        Al registrarte, aceptas ser añadido a nuestra lista de newsletter. Esta
        suscripción te permitirá recibir novedades, ofertas y promociones de
        <strong>BCN Mobles</strong>. Podrás darte de baja en cualquier momento a
        través del enlace incluido en cada correo.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">4. Condiciones de compra</h2>
      <p class="text-gray-700 mb-4">
        Las compras se realizan siempre en tienda física tras concertar una cita.
        Los precios mostrados en la web son orientativos y pueden variar según la
        personalización del producto.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">5. Responsabilidad</h2>
      <p class="text-gray-700 mb-4">
        BCN Mobles no se hace responsable de daños o perjuicios derivados del uso
        indebido de la web o de la información proporcionada por el usuario.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">6. Aceptación</h2>
      <p class="text-gray-700 mb-4">
        Al pulsar en "Registrarse", confirmas que has leído y aceptas estas
        condiciones de uso, incluyendo la suscripción a la newsletter.
      </p>

      <div class="mt-8">
        <router-link
          to="/crear-cuenta"
          class="bg-[#c34b16] text-white px-6 py-2 rounded-lg hover:bg-[#f79e78]"
        >
          Volver al registro
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// no necesita lógica de momento
</script>
