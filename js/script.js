// if(window.SimpleSlide) {

// 	new SimpleSlide({
// 		slide: "quote", // nome do atributo data-slide="principal"
// 	  time: 5000 // tempo de transição dos slides
// 	});

// 	new SimpleSlide({
// 		slide: "portfolio",
// 	  time: 5000,
// 	  nav: true
// 	});

// }

if(window.SimpleAnime) {
	new SimpleAnime();
}


if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h4>Erro no envio!</h4><p>Um erro ocorreu, tente para o email contato@maximafidelidade.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h4>Formulário enviado com sucesso</h4><p>Em breve entraremos em contato com você.</p></div>", // mensagem de sucesso
	});
}

function initScrollSuave() {
	const linksInterno = document.querySelectorAll('a[href^="#"]');
	function scrollToSection(event) {
		event.preventDefault();
		const herf = event.currentTarget.getAttribute('href');
		const section = document.querySelector(herf);
	
		const top = section.offsetTop;
		window.scrollTo({
			top: top,
			behavior: "smooth"
		});
	}
	
	linksInterno.forEach((link) => {
		link.addEventListener('click', scrollToSection)
	})
}
initScrollSuave();