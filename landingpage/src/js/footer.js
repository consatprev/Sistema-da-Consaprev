document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector(".rodape-texto");
    console.log(footer)
    let date = new Date().getFullYear();

    footer.innerHTML = `© ${date} Consat'prev. Todos os direitos reservados.`;
});