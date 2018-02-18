function monitorBateria(bateria)
{
	atualizaInterface(bateria);

	bateria.addEventListener('levelchange', atualizaInterface.bind(null, bateria));
	bateria.addEventListener('chargingchange', atualizaInterface.bind(null, bateria));
	bateria.addEventListener('dischargingtimechange', atualizaInterface.bind(null, bateria));
	bateria.addEventListener('chargingtimechange', atualizaInterface.bind(null, bateria));
}

if ('getBattery' in navigator)
{
	navigator.getBattery().then(monitorBateria);
}

function atualizaInterface(bateria)
{
	
	carga = bateria.level * 100;
	
	$("#pbateria").html(carga+"%");
	
	
	
	var cor = '';
	if (bateria.charging === true)
	{
		cor = 'green';
	}
	else if (bateria.charging === false)
	{
		cor = 'red';
	}
	
	$("#campoBateria").css("background-image", "linear-gradient( to right, "+cor+" "+carga+"%,white 0% )");
	
	
	
	
	
}