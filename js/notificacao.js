function notificacao()
{
  Notification.requestPermission(function(result)
  {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration)
	  {
        registration.showNotification('Uma pergunta rápida!',
		{
          body: 'Está gostando do conteúdo?',
          icon: '../logo_gdg.png',
		  vibrate: [200, 100, 200, 100, 200, 100, 200],
		  actions: [  
		   {action: 'Curti Muito', title: 'Curti Muito'},
		   {action: 'Curti Demais', title: 'Curti Demais'}]
        });
      });
    }
  });
}

