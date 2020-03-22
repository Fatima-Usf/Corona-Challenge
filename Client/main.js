function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const publicVapidKey = 'BKj8xTi-oib97fmdv_MSxsVEYZ8cmQ4C5jqOn1ZxK5K_r55HNQ9HFMbqadKJJL-Jt20V68p-lsWIssEErXZsEZE';
  
  const triggerPush = document.querySelector('.trigger-push');


  async function triggerPushNotification() {
    if ('serviceWorker' in navigator) {
      const register = await navigator.serviceWorker.register('/corona.js', {
        scope: '/'
      });

      const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
      });

      await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      console.error('Service workers are not supported in this browser');
    }
  }

  triggerPush.addEventListener('click', () => {
    triggerPushNotification().catch(error => console.error(error));
  });

  function flip(corona){
	var element = corona.currentTarget;
	if (element.className === "coronacard") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};