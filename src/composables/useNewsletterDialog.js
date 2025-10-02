import { ref } from 'vue';

export function useNewsletterDialog() {
  const showDialog = ref(false);
  const alreadyPrompted = ref(false);

  function checkAndPrompt() {
    if (!sessionStorage.getItem('newsletterPrompted')) {
      showDialog.value = true;
      sessionStorage.setItem('newsletterPrompted', 'true');
      alreadyPrompted.value = true;
    }
  }

  function closeDialog() {
    showDialog.value = false;
  }

  function subscribe(email) {
    const now = new Date();
    const data = {
      allowed: true,
      email,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };
    localStorage.setItem('newsletterSubscribed', JSON.stringify(data));
    showDialog.value = false;
  }

  return {
    showDialog,
    checkAndPrompt,
    closeDialog,
    subscribe,
    alreadyPrompted
  };
}
