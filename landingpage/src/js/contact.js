// function contactByWhatsapp(event) {
//     event.preventDefault(); // Previne o comportamento padrão do botão

//     const numeroTelefone = '68999899039'; // Número de telefone do destinatário
    
//     const nome = document.querySelector('#nome').value;
//     const email = document.querySelector('#email').value;
//     const msg = document.querySelector('#msg').value;

//     console.log('Nome:', nome);
//     console.log('Email:', email);
//     console.log('Mensagem:', msg);

//     const mensagem = 
//     `Olá! Me chamo ${nome}, gostaria de mais informações. Minhas informações:
//     *Nome:* ${nome}
//     *Email:* ${email}
    
//     ${msg}
//     `;


//     // Usando a URL padrão do WhatsApp para garantir compatibilidade
//     const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

//     console.log('URL WhatsApp:', urlWhatsApp);

//     // Abrir a URL do WhatsApp
//     window.location.href = urlWhatsApp;
// }

// const button = document.querySelector("#enviar");

// if (button) {
//     button.addEventListener("click", contactByWhatsapp);
// } else {
//     console.error('Botão não encontrado');
// }
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio tradicional do formulário
    
    // Coletando os dados do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('msg').value.trim();
    
    // Verificando se todos os campos estão preenchidos
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }
    
    // Número de telefone no formato correto
    const numeroWhatsApp = '5513981158016'; // Código do país + número
    
    // Criando a mensagem que será enviada
    const texto = `Olá! Meu nome é ${nome}. Gostaria de mais informações.\n\n*Nome:* ${nome}\n*Email:* ${email}\n*Mensagem:* ${mensagem}`;
    
    // Codificando a mensagem para URL
    const textoCodificado = encodeURIComponent(texto);
    
    // Criando o link do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
    
    // Abrindo o WhatsApp em uma nova janela/aba
    window.open(urlWhatsApp, '_blank');
    
    // Opcional: Limpar o formulário após o envio
    this.reset();
});