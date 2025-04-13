document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botao-flutuante");
  const formulario = document.getElementById("formulario-flutuante");
  const formContato = document.getElementById("formContato");

  if (botao && formulario) {
    botao.addEventListener("click", () => {
      formulario.classList.toggle("oculto");
    });
  }

  if (formContato) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(formContato);
      const dados = Object.fromEntries(formData.entries());

      const telefone = '5551992671278'; // Substitua pelo seu número com DDI e DDD
      const texto = `Olá! Meu nome é ${dados.nome}, sou de ${dados.cidade}. Meu e-mail é ${dados.email}. Mensagem: ${dados.mensagem}`;

      const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
      window.open(urlWhatsApp, '_blank');

      formContato.reset();
      formulario.classList.add("oculto");
    });
  }
});
