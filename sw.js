
self.addEventListener('install', function(event) 
{
	
});	
self.addEventListener('fetch', function(event)
{
	
});
self.addEventListener('notificationclick', function(event) {  
  var messageId = event.notification.data;

  event.notification.close();

  if (event.action === 'Curti Muito')
  {
	    console.log("Que bom");
  }  
  else
  {
	  console.log("Que ótimo");
  }
}, false);