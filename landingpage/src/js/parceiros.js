document.addEventListener("DOMContentLoaded", function () {
    const parceiros = [
      {
        name: "Adimar Sarkis",
        profissao: "Advogado",
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg",
        details: "Especialista em direito trabalhista e previdenciário.",
      },
      {
        name: "João Silva",
        profissao: "Consultor",
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg",
        details: "Consultor empresarial com 10 anos de experiência.",
      },
      {
        name: "Maria Oliveira",
        profissao: "Contadora",
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-3.jpg",
        details: "Contadora especializada em tributos e finanças.",
      },
      {
        name: "Carlos Souza",
        profissao: "Engenheiro",
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-4.jpg",
        details: "Engenheiro civil com vasta experiência em construção.",
      },
      {
        name: "Ana Pereira",
        profissao: "Arquiteta",
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-5.jpg",
        details: "Arquiteta renomada com projetos premiados.",
      },
      {
        name: "Pedro Santos",
        profissao: "Médico",
        photo: "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-6.jpg",
        details: "Médico especialista em cardiologia.",
      },
      // Adicione mais parceiros conforme necessário
    ];
    const parceirosContainer = document.querySelector(".parceiros-container");
    parceiros.forEach((parceiro) => {
      const cardParceiro = document.createElement("div");
      cardParceiro.classList = "cardParceiro";
      cardParceiro.innerHTML = `
        <div class="meta">
          <div class="photo" style="background-image: url(${parceiro.photo});"></div>
        </div>
        <div class="description">
          <h2 class="name">${parceiro.name}</h2>
          <h3 class="profissao">${parceiro.profissao}</h3>
          <p class="details">${parceiro.details}</p>
          <p class="read-more">
            <a href='https://wa.me/5513981158016' target='_blank'>Contate-os por nosso intermedio</a>
          </p>
        </div>
      `;
      parceirosContainer.appendChild(cardParceiro);
    });
  });