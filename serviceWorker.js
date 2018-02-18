if ('serviceWorker' in navigator)
{
		navigator.serviceWorker.register('sw.js?v=31').then(function(registration)
		{
		  console.log('ServiceWorker registrado com sucesso em: ', registration.scope);
		}).catch(function(err)
		{
		  console.log('ServiceWorker não registrado, erro: ', err);
		});
}
