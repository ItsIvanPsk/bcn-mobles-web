<template>
  <div class="faq-page">
    <h1>Preguntas Frecuentes (FAQ)</h1>

    <div 
      v-for="(faq, index) in faqs" 
      :key="index" 
      class="faq-item"
    >
      <div class="faq-question" @click="toggle(index)">
        <span>{{ faq.question }}</span>
        <span class="icon">{{ openFaqs.includes(index) ? "−" : "+" }}</span>
      </div>
      <transition name="accordion">
        <div v-if="openFaqs.includes(index)" class="faq-answer">
          <p>{{ faq.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openFaqs = ref<number[]>([])

const faqs = [
  {
    question: '¿Hacéis envíos a toda España?',
    answer: 'Sí, realizamos envíos a toda la península y Baleares. Para Canarias y Ceuta/Melilla puedes consultarnos condiciones especiales.'
  },
  {
    question: '¿Cuánto tarda en llegar mi pedido?',
    answer: 'El plazo habitual de entrega es de 5 a 7 días laborables. Si un producto está bajo pedido, te informaremos del tiempo estimado antes de confirmarlo.'
  },
  {
    question: '¿El transporte incluye el montaje de los muebles?',
    answer: 'Depende del producto. Algunos incluyen montaje gratuito, y en otros se puede solicitar como servicio adicional con un coste extra.'
  },
  {
    question: '¿Puedo devolver un producto si no me convence?',
    answer: 'Sí, dispones de 14 días naturales para realizar una devolución siempre que el producto esté en buen estado y en su embalaje original.'
  },
  {
    question: '¿Qué métodos de pago aceptáis?',
    answer: 'Puedes pagar con tarjeta de crédito/débito, transferencia bancaria o PayPal. En tienda física también aceptamos efectivo.'
  },
  {
    question: '¿Tenéis tienda física?',
    answer: 'Sí, puedes visitarnos en nuestra exposición en Barcelona. Allí podrás ver y probar algunos de nuestros productos destacados.'
  },
  {
    question: '¿Ofrecéis financiación?',
    answer: 'Sí, contamos con opciones de financiación a 3, 6 o 12 meses sin intereses en compras superiores a 300 €.'
  },
  {
    question: '¿Cómo puedo saber si un producto está en stock?',
    answer: 'En cada ficha de producto indicamos la disponibilidad. Si no hay stock, aparecerá el aviso de "agotado" o "bajo pedido".'
  },
  {
    question: '¿Qué garantía tienen los muebles?',
    answer: 'Todos nuestros productos tienen 2 años de garantía según la normativa europea. Algunos fabricantes ofrecen periodos más largos.'
  },
  {
    question: '¿Cómo puedo contactar con atención al cliente?',
    answer: 'Puedes escribirnos a soporte@bcnmobles.com o llamarnos al 93 123 45 67 en horario de lunes a viernes de 9:00 a 18:00.'
  }
]

function toggle(index: number) {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}
</script>

<style scoped lang="scss">
.faq-page {
  max-width: 800px;
  min-height: 77vh;
  margin: 2rem auto;
  padding: 1rem;
  font-family: sans-serif;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #222;
  }

  .faq-item {
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;

    .faq-question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
      color: #c34b16;
      transition: color 0.2s ease;

      &:hover {
        color: #f79e78;
      }

      .icon {
        font-size: 1.2rem;
      }
    }

    .faq-answer {
      margin-top: 0.5rem;
      color: #555;
      line-height: 1.5;
    }
  }
}

/* Animación acordeón */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
