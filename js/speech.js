var recognition;
function iniciaReconhecimento()
{

	if (('webkitSpeechRecognition' in window))
	{
	
		
		recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.lang = 'pt-BR';
		recognition.start();
		recognition.onstart = function()
		{
			//ação pra quando começar a reconhecer
		};
		recognition.onerror = function(event)
		{
			//ação no erro
		}
		
		
		recognition.onend = function()
		{
			//quando finalizado
		}
		
		
		recognition.onresult = function(event)
		{
			var resultado_reconhecendo = '';
			var resultado_final = '';
			
			for (var i = event.resultIndex; i < event.results.length; ++i)
			{
				if (!event.results[i].isFinal)
				{
					resultado_reconhecendo += event.results[i][0].transcript;
					document.getElementById("momento").innerHTML = (resultado_reconhecendo);
				}
				else
				{
					
					resultado_final += event.results[i][0].transcript;
					document.getElementById("final").innerHTML = ("Final : " + resultado_final+"!");
					reconhecido(resultado_final);
				}
			}
			
			
		}// fim reconhecimento
		 
		
	}// fim else não suportado


}//fim função inicio




function fala(mensagem)
{
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	msg.voice = voices[17]; 
	msg.text = mensagem;
	speechSynthesis.speak(msg);
}


function reconhecido(frase)
{
	recognition.continuous = false;
	recognition.stop();
	frase = frase.toLowerCase();
	
	if(frase == "alô")
	{
		fala(('Olá'));
	}
	else if(frase == "olá tudo bom" || frase == "tudo bom" || frase == "tudo bem" || frase == "olá tudo bom")
	{
		fala(('tudo bem sim e o senhor?'));
	}
	else if(frase == "tudo bem também")
	{
		fala(('que ótimo'));
	}
	else if(frase == "que dahora" || frase == "que da hora")
	{
		fala(('eu sei'));
	}
	else if(frase == "testando" || frase == "teste")
	{
		fala(('teste'));
	}
	else if(frase.indexOf("pesquise") >-1)
	{
		var pesquisa = frase.substring(9);

		var win = window.open('http://www.google.com/#q='+pesquisa, '_blank');
		
		win.focus();
	}
	
	
		
}


