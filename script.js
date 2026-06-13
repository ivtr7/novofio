    /* ============ DADOS DA PÁGINA ============ */

  // Impactos da calvície (seção dor)
  const impactos = [
    { icone:'heart',     texto:'Sua autoestima' },
    { icone:'camera',    texto:'Sua confiança para tirar fotos' },
    { icone:'eye',       texto:'A forma como você se vê no espelho' },
    { icone:'briefcase', texto:'Sua imagem pessoal e profissional' },
    { icone:'users',     texto:'Sua segurança nos relacionamentos' },
    { icone:'sparkles',  texto:'Sua vontade de se cuidar novamente' },
  ];

  // Diferenciais da doutora
  const diferenciais = [
    'Formação específica em transplante capilar',
    'Membro da Sociedade Brasileira de Cirurgia Capilar',
    'Atendimento personalizado',
    'Planejamento individualizado para cada paciente',
    'Acompanhamento completo do pré ao pós-procedimento',
  ];

  // Indicações
  const indicacoes = [
    'Entradas avançadas',
    'Rarefação no topo da cabeça',
    'Falhas capilares',
    'Calvície hereditária',
    'Perda de densidade dos fios',
    'Insatisfação com a aparência causada pela perda de cabelo',
  ];

  // Etapas do processo
  const etapas = [
    { icone:'search',          titulo:'Avaliação individualizada',         texto:'Analisamos seu histórico, grau de calvície, qualidade dos fios e área doadora.' },
    { icone:'pen-tool',        titulo:'Planejamento da linha capilar',     texto:'A linha capilar é planejada de forma harmônica, respeitando suas características faciais e buscando naturalidade.' },
    { icone:'scissors',        titulo:'Procedimento',                      texto:'Os folículos são retirados da área doadora e implantados cuidadosamente na região que precisa de preenchimento.' },
    { icone:'clipboard-check', titulo:'Acompanhamento pós-procedimento',   texto:'Você recebe orientações e suporte para uma recuperação mais tranquila e segura.' },
    { icone:'trending-up',     titulo:'Evolução dos resultados',           texto:'Os fios crescem gradualmente ao longo dos meses, proporcionando uma transformação progressiva e natural.' },
  ];

  // Serviços
  const servicos = [
    { icone:'user',        titulo:'Transplante Capilar Masculino',  texto:'Para homens com entradas, rarefação ou calvície avançada. Restaura a densidade respeitando o formato do rosto e a linha capilar masculina.' },
    { icone:'user-check',  titulo:'Transplante Capilar Feminino',   texto:'Para mulheres com afinamento, falhas localizadas ou redução de densidade. Planejamento que respeita as características femininas.' },
    { icone:'eye',         titulo:'Transplante de Sobrancelha',     texto:'Ideal para sobrancelhas com falhas, cicatrizes ou pouca densidade. Reconstrução do desenho fio a fio.' },
    { icone:'scissors',    titulo:'Transplante de Barba',           texto:'Para homens com falhas ou pouca densidade na barba que desejam uma aparência mais uniforme e marcante.' },
  ];

  // Diferenciais clínica
  const porQues = [
    { icone:'shield-check', titulo:'Planejamento individual',  texto:'Cada paciente possui uma estratégia própria, definida a partir da avaliação da área doadora, grau de perda capilar e objetivo desejado.' },
    { icone:'award',        titulo:'Naturalidade',             texto:'O objetivo não é apenas preencher falhas. É criar um resultado harmônico, respeitando sua aparência e suas características individuais.' },
    { icone:'building-2',   titulo:'Estrutura premium',        texto:'Ambiente moderno, confortável e preparado para oferecer uma experiência segura e acolhedora ao paciente.' },
    { icone:'hand-heart',   titulo:'Atendimento humanizado',   texto:'Você é acompanhado em todas as etapas do processo, desde a avaliação até a evolução dos resultados.' },
  ];

  // FAQ
  const faqs = [
    { q:'O transplante capilar dói?', a:'O procedimento é realizado com anestesia local para proporcionar mais conforto ao paciente durante o processo.' },
    { q:'O resultado fica artificial?', a:'Não. Todo o planejamento é feito buscando naturalidade, harmonia facial e uma linha capilar compatível com cada paciente.' },
    { q:'Os fios transplantados caem novamente?', a:'Os folículos utilizados são retirados de áreas mais resistentes à ação hormonal responsável pela calvície.' },
    { q:'Quanto tempo leva para aparecer o resultado?', a:'A evolução acontece gradualmente ao longo dos meses após o procedimento. O crescimento dos fios é progressivo.' },
    { q:'Tenho pouca área doadora. Ainda posso fazer?', a:'Isso precisa ser avaliado individualmente durante a consulta. A análise da área doadora é uma das etapas mais importantes do planejamento.' },
  ];

  /* ============ FUNÇÕES AUXILIARES ============ */

  // Rola suavemente até a seção de contato
  function rolarParaContato(){
    document.getElementById('agendar')?.scrollIntoView({ behavior:'smooth' });
  }

  // Cria um ícone Lucide (placeholder substituído pelo script)
  function icone(nome){ return `<i data-lucide="${nome}"></i>`; }

  /* ============ RENDERIZAÇÃO DAS LISTAS ============ */

  // Impactos
  document.getElementById('grade-impactos').innerHTML = impactos.map(it => `
    <div class="card-impacto">
      <div class="icone-quadrado">${icone(it.icone)}</div>
      <span>${it.texto}</span>
    </div>
  `).join('');

  // Diferenciais (lista com check)
  document.getElementById('lista-diferenciais').innerHTML = diferenciais.map(d => `
    <li>
      <span class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
      <span>${d}</span>
    </li>
  `).join('');

  // Indicações numeradas
  document.getElementById('grade-indicacoes').innerHTML = indicacoes.map((it,i) => `
    <div class="card-impacto">
      <span class="num-redondo">${String(i+1).padStart(2,'0')}</span>
      <span>${it}</span>
    </div>
  `).join('');

  // Etapas do processo (zig-zag em desktop, empilhado no mobile)
  document.getElementById('lista-etapas').innerHTML = etapas.map((e,i) => {
    const par = i % 2 === 1;
    return `
      <div class="etapa">
        <div class="etapa-mobile-cabecalho">
          <div class="icone-marca">${icone(e.icone)}</div>
          <span class="etiqueta-etapa">ETAPA ${String(i+1).padStart(2,'0')}</span>
        </div>
        <div class="etapa-conteudo ${par ? 'ordem-2' : 'texto-direita'}">
          <span class="etiqueta-etapa etiqueta-etapa-desktop">ETAPA ${String(i+1).padStart(2,'0')}</span>
          <h3>${e.titulo}</h3>
          <p>${e.texto}</p>
        </div>
        <div class="icone-desktop ${par ? 'ordem-1 alinhar-direita' : 'alinhar-esquerda'}">
          <div class="icone-grande">${icone(e.icone)}</div>
        </div>
      </div>
    `;
  }).join('');

  // Cards de serviço
  document.getElementById('grade-servicos').innerHTML = servicos.map(s => `
    <div class="card-servico">
      <div class="card-servico-glow"></div>
      <div style="position:relative;">
        <div class="icone-card-servico">${icone(s.icone)}</div>
        <h3>${s.titulo}</h3>
        <p class="descricao">${s.texto}</p>
      </div>
    </div>
  `).join('');

  // Cards de antes/depois (placeholders visuais)
  document.getElementById('grade-resultados').innerHTML = [1,2,3,4,5,6].map(i => `
    <div class="card-resultado">
      <div class="resultado-fundo">
        <div class="lado-antes"><span class="rotulo-antes">ANTES</span></div>
        <div class="lado-depois"><span class="rotulo-depois">DEPOIS</span></div>
      </div>
      <div class="resultado-icone"><div>${icone('sparkles')}</div></div>
      <div class="resultado-rodape">Caso #${String(i).padStart(2,'0')}</div>
    </div>
  `).join('');

  // Diferenciais (cards)
  document.getElementById('grade-diferenciais').innerHTML = porQues.map(p => `
    <div class="card-diferencial">
      <div class="icone-gradiente">${icone(p.icone)}</div>
      <h3>${p.titulo}</h3>
      <p>${p.texto}</p>
    </div>
  `).join('');

  // FAQ com abrir/fechar
  const listaFaq = document.getElementById('lista-faq');
  listaFaq.innerHTML = faqs.map((f,i) => `
    <div class="item-faq ${i===0 ? 'aberto' : ''}" data-indice="${i}">
      <button class="botao-faq" type="button">
        <span>${f.q}</span>
        ${icone('chevron-down')}
      </button>
      <div class="conteudo-faq"><div><p>${f.a}</p></div></div>
    </div>
  `).join('');

  // Manipula clique nas perguntas
  listaFaq.addEventListener('click', (ev) => {
    const botao = ev.target.closest('.botao-faq');
    if(!botao) return;
    const item = botao.parentElement;
    const jaAberto = item.classList.contains('aberto');
    listaFaq.querySelectorAll('.item-faq').forEach(el => el.classList.remove('aberto'));
    if(!jaAberto) item.classList.add('aberto');
  });

  // Atualiza ano do rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();

  // Inicializa os ícones Lucide (após injetar HTML)
  lucide.createIcons();
