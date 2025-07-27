document.addEventListener("DOMContentLoaded", function () {
  const textLong = `
    <strong class='forteDescription' >Departamento Pessoal</strong>- Administração de folha de pagamento, benefícios e obrigações trabalhistas. Orientação sobre legislação trabalhista e estratégias para evitar disputas judiciais e buscar soluções extrajudiciais. Acompanhamento de demandas judiciais <br />
    <strong class='forteDescription'>Auditoria Contábil (Serviço Avulso)</strong>- Análise detalhada das demonstrações financeiras para garantir transparência e conformidade. <br />
    <strong class='forteDescription'>Serviços Avulsos</strong>- Soluções personalizadas para atender necessidades específicas.   <br />              
      💼 Por que nos escolher? <br />
      ✅ Atendimento personalizado e suporte contínuo.<br />
      ✅ Tecnologia e inovação para otimizar seus processos.<br />
      ✅ Compromisso com resultados e crescimento sustentável.<br />
    Conte conosco para manter sua empresa organizada, regularizada e preparada para crescer.
  `;
  const services = {
    empresas: [
      {
        title: "Saúde e Segurança do Trabalho",
        id: 1,
        description:
          "OFERECEMOS SERVIÇOS DE SAÚDE E SEGURANÇA DO TRABALHO - SST PARA MÉDIAS E PEQUENAS EMPRESAS, INCLUSIVE MEI'S",
        details:
          "Elaboramos PGR,, Laudos como PCMSO, LTCAT, LTI, LTP entre outros e Declaração de Inexistência de Riscos;                      Auxiliamos no controle de EPI's, e na manutenção da Saúde do seu Colaborador entre muitos outros serviços para comodidade da empresa e cumprimento das obrigações para com o e-Social e o Fisco.",
        diferenciais:
          "A gestão de SST (Segurança e Saúde do Trabalho) integrada ao e-Social garante o envio correto dos eventos obrigatórios, como acidentes de trabalho e monitoramento da saúde ocupacional. Com um sistema integrado à folha de pagamento, é possível centralizar informações, gerar relatórios e gráficos para análise, além de controlar exames admissionais, demissionais e periódicos, assegurando a conformidade legal e a segurança dos colaboradores.",
      },
      {
        title: "Trabalho e Previdência",
        id: 2,
        description:
          "PRESTAMOS SERVIÇOS DE CONSULTORIA E ASSESSORIA  ESPECIALIZADA AO CIDADÃO E TRABALHADOR ",
        details:
          "Os serviços junto as repartições públicas são <strong class='forteDescription'>gratuitos</strong>, e qualquer pessoa pode requerer seus direitos <strong class='forteDescription'>com ou sem intermediários</strong>. No entanto, ter orientação adequada pode evitar problemas e agilizar processos. É aqui que a ConsAtpreV faz a diferença! Não deixe que a falta de informação comprometa seu futuro! Conte com a experiência da ConsAtpreV e tenha segurança no acesso aos seus direitos.",
        diferenciais: `
          Nossa equipe atua com eficiência e compromisso, oferecendo informação detalhada e suporte técnico especializado para garantir que você cumpra seus deveres e acesse todos os direitos sem dificuldades <br />
          📢 Por que contar com a ConsAtpreV? <br />
          ✅ Esclarecimento completo sobre direitos e deveres previdenciários. <br /> 
          ✅  Análise detalhada para garantir que você receba tudo a que tem direito <br />
          ✅ Acompanhamento estratégico para facilitar requerimentos e revisões.  <br />
          ✅ Buscamos incansavelmente os melhores resultados para você!`,
      },
      {
        title: "Contabilidade Geral e Fiscal",
        id: 3,
        description:
          "Prestamos serviços contábeis, incluindo abertura, manutenção e encerramento de empresas",
        details:
          "Bem vindo a nossa especialidade! Oferecemos serviços completos para empresas que buscam eficiência e segurança financeira.",
        diferenciais: `${textLong} Com isso, você ganha mais tempo para focar no que realmente importa: o crescimento do seu negócio.`,
      },
    ],
    cidadao: [
      {
        title: "Direitos Trabalhistas",
        id: 4,
        description: "Assessoria completa para trabalhadores",
        details:
          "Proteção dos direitos trabalhistas com orientação especializada.",
        diferenciais: "Atendimento personalizado para resolução de conflitos.",
      },
      {
        title: "Direitos Previdenciários",
        id: 5,
        description: "Consultoria em benefícios do INSS",
        details: "Análise de elegibilidade para aposentadorias e auxílios.",
        diferenciais: "Otimização de benefícios e acompanhamento de processos.",
      },
      {
        title: "Apoio ao Jus Postulandi",
        id: 6,
        description: "Assistência para atuação sem advogado",
        details: "Preparação de documentos e orientação processual.",
        diferenciais: "Empoderamento jurídico para autodefesa.",
      },
    ],
    geral: [
      {
        title: "Intermediações Jurídica",
        id: 7,
        description:
          "Intermediamos acordos, conciliações e negócios em geral (exceto imobiliários)",
        details:
          "Oferecemos serviços de intermediamos acordos, conciliações e negócios em geral (exceto imobiliários), garantindo segurança e conformidade para sua empresa.",
        diferenciais:
          "Com um processo eficiente e imparcial, buscamos resolver conflitos,  formalizar parcerias e garantir negociações seguras, facilitando a comunicação entre as partes para alcançar soluções justas e vantajosas, Intermediamos acordos e conciliações inclusive os que envolvem os direitos de família e sucessões, sempre com foco na transparência e no melhor resultado para todos os envolvidos.",
      },
      {
        title: "Consultoria Processual",
        id: 8,
        description: "Orientação em procedimentos judiciais",
        details: "Acompanhamento de processos.",
        diferenciais: "Explicação clara de etapas processuais.",
      },
      {
        title: "Terceirização de Serviços",
        id: 9,
        description:
          "Oferecemos serviços de terceirização para diversas áreas da sua empresa.",
        details:
          "Temos parceiros selecionados com quem trabalhamos. Para conhecê-los, clique em 'Saiba mais'",
      },
    ],
  };

  const servicesContainer = document.getElementById("services-container");
  const detalhesContainer = document.getElementById("conteudo-detalhes");
  const detalhesSection = document.getElementById("detalhes-servico");

  // Clear container before rendering
  servicesContainer.innerHTML = "";

  // Render sections with improved visual separation
  renderSection("PARA EMPRESAS", services.empresas, "empresas");
  renderSection("PARA O CIDADÃO", services.cidadao, "cidadao");
  renderSection("INTERESSE GERAL", services.geral, "geral");

  function renderSection(title, servicesArray, categoryClass) {
    const section = document.createElement("section");
    section.className = `service-category ${categoryClass}`;

    const sectionHeader = document.createElement("div");
    sectionHeader.className = "category-header";

    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "category-title";
    sectionTitle.textContent = title;
    sectionHeader.appendChild(sectionTitle);

    const sectionLine = document.createElement("div");
    sectionLine.className = "category-line";
    sectionHeader.appendChild(sectionLine);

    section.appendChild(sectionHeader);

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "cards-container";

    servicesArray.forEach((service, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const isAltStyle = index % 2 === 0;
  const isSpecialCase = service.id === 9;
  const isSaudeSeguranca = service.id === 1; // ID do serviço de Saúde e Segurança do Trabalho

  card.innerHTML = `
    <div class='blog-card ${isAltStyle ? "alt" : ""} block'>
      <div class="meta">
        <div class="photo" style="background-image: url(${
          isAltStyle
            ? "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg"
            : "https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"
        })"></div>
      </div>
      <div class="description">
        <h1>${service.title}</h1>
        <h2>${service.description}</h2>
        <p>${service.details}</p>
        ${
          isSpecialCase
            ? '<p class="read-more"><a href="#parceiros">Saiba Mais</a></p>'
            : isSaudeSeguranca
              ? `<p class="read-more"><a href="seguranca-saude.html">Saiba Mais</a></p>`
              : `<button class="saiba-mais" data-id="${service.id}">Saiba Mais</button>`
        }
      </div>
    </div>
  `;

  cardsContainer.appendChild(card);
});

    section.appendChild(cardsContainer);
    servicesContainer.appendChild(section);
  }

  servicesContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("saiba-mais")) {
      const serviceId = parseInt(e.target.getAttribute("data-id"));
      let selectedService = null;

      for (const category in services) {
        selectedService = services[category].find((s) => s.id === serviceId);
        if (selectedService) break;
      }

      if (selectedService) {
        detalhesContainer.innerHTML = `
          <h3>${selectedService.title}</h3>
          <p class='texto'>${selectedService.diferenciais}</p>
        `;

        detalhesSection.style.display = "block";
        detalhesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  detalhesSection.style.display = "none";
});
