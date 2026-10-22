/**
 * IURIS & ÉTICA - Controlador Principal y Motor Interactivo
 * Gestión reactiva de idiomas (ES, EN, PT), modo de lenguaje simple/técnico,
 * motor de búsqueda para la Skill Deontológica, simulador y síntesis de voz.
 */

class IurisApp {
  constructor() {
    this.currentLang = localStorage.getItem('iuris_lang') || 'es';
    this.isSimpleMode = localStorage.getItem('iuris_mode') !== 'technical'; // Por defecto lenguaje simple
    this.currentTheme = localStorage.getItem('iuris_theme') || 'dark';
    this.activeDilemmaIndex = 0;
    this.score = 0;
    this.answeredDilemmas = {};
    this.speechSynthesis = window.speechSynthesis || null;
    this.currentUtterance = null;
    this.isSpeaking = false;

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupEventListeners();
    this.renderAll();
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('iuris_theme', theme);
    const icon = document.querySelector('#themeToggleBtn i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  setLanguage(lang) {
    if (!IURIS_DATA.languages.includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('iuris_lang', lang);
    this.stopSpeaking();
    this.renderAll();
  }

  toggleLanguageMode() {
    this.isSimpleMode = !this.isSimpleMode;
    localStorage.setItem('iuris_mode', this.isSimpleMode ? 'simple' : 'technical');
    this.renderAll();
  }

  renderAll() {
    this.renderUITexts();
    this.renderPillars();
    this.renderRelations();
    this.renderSanctions();
    this.renderDigitalEra();
    this.renderGlossary();
    this.renderDilemmaSimulator();
  }

  renderUITexts() {
    const strings = IURIS_DATA.ui[this.currentLang];
    
    // Actualizar botones de idioma activo
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });

    // Actualizar botón de modo simple/técnico
    const modeBtn = document.getElementById('modeToggleBtn');
    if (modeBtn) {
      modeBtn.classList.toggle('technical', !this.isSimpleMode);
      modeBtn.innerHTML = this.isSimpleMode 
        ? `<i class="fa-solid fa-feather-pointed"></i> <span>${strings.toggleSimpleMode}</span>`
        : `<i class="fa-solid fa-scale-balanced"></i> <span>${strings.toggleTechnicalMode}</span>`;
      modeBtn.title = this.isSimpleMode 
        ? "Haz clic para cambiar a modo técnico jurídico con citas de artículos y leyes" 
        : "Haz clic para cambiar a lenguaje simple y comprensible para todos";
    }

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) {
        el.textContent = strings[key];
      }
    });

    // Actualizar placeholders
    const searchInput = document.getElementById('consultorSearchInput');
    if (searchInput) {
      searchInput.placeholder = strings.searchPlaceholder;
    }
    const searchBtn = document.getElementById('consultorSearchBtn');
    if (searchBtn) {
      searchBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> <span>${strings.searchBtn}</span>`;
    }
    const glossarySearchInput = document.getElementById('glossarySearchInput');
    if (glossarySearchInput) {
      glossarySearchInput.placeholder = strings.searchGlossary;
    }
  }

  // Render 6 Pilares
  renderPillars() {
    const container = document.getElementById('pillarsGrid');
    if (!container) return;

    container.innerHTML = IURIS_DATA.pillars.map(p => {
      const title = p.title[this.currentLang] || p.title.es;
      const tagline = p.tagline[this.currentLang] || p.tagline.es;
      const desc = this.isSimpleMode 
        ? (p.descSimple[this.currentLang] || p.descSimple.es)
        : (p.descTechnical[this.currentLang] || p.descTechnical.es);
      const example = p.example[this.currentLang] || p.example.es;

      return `
        <div class="pillar-card">
          <div class="pillar-top">
            <div class="pillar-icon-wrap">
              <i class="fa-solid ${p.icon}"></i>
            </div>
            <span class="pillar-num">${p.number}</span>
          </div>
          <h3 class="pillar-title">${title}</h3>
          <p class="pillar-tagline">${tagline}</p>
          <p class="pillar-desc">${desc}</p>
          <div class="pillar-example-box">
            <strong><i class="fa-solid fa-lightbulb"></i> Ejemplo Práctico:</strong>
            ${example}
          </div>
        </div>
      `;
    }).join('');
  }

  // Render 4 Relaciones
  renderRelations() {
    const container = document.getElementById('relationsGrid');
    if (!container) return;

    container.innerHTML = IURIS_DATA.relations.map(r => {
      const title = r.title[this.currentLang] || r.title.es;
      const duties = r.duties[this.currentLang] || r.duties.es;
      const summary = r.simpleSummary[this.currentLang] || r.simpleSummary.es;

      return `
        <div class="relation-card">
          <div class="relation-icon">
            <i class="fa-solid ${r.icon}"></i>
          </div>
          <h3 class="relation-title">${title}</h3>
          <ul class="relation-duties-list">
            ${duties.map(d => `<li><i class="fa-solid fa-check"></i> <span>${d}</span></li>`).join('')}
          </ul>
          <div class="relation-simple-summary">
            <i class="fa-solid fa-heart-pulse"></i> ${summary}
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Sanciones
  renderSanctions() {
    const ladderContainer = document.getElementById('sanctionsLadder');
    const mitigatingContainer = document.getElementById('mitigatingList');
    const aggravatingContainer = document.getElementById('aggravatingList');
    const authorityEl = document.getElementById('sanctionsAuthority');

    if (authorityEl) {
      authorityEl.textContent = IURIS_DATA.sanctions.authority[this.currentLang] || IURIS_DATA.sanctions.authority.es;
    }

    if (ladderContainer) {
      ladderContainer.innerHTML = IURIS_DATA.sanctions.tiers.map(s => {
        const title = s.title[this.currentLang] || s.title.es;
        const desc = s.desc[this.currentLang] || s.desc.es;
        return `
          <div class="sanction-step ${s.code}">
            <span class="sanction-badge">${s.badge}</span>
            <h3 class="sanction-title">${title}</h3>
            <p class="sanction-desc">${desc}</p>
            <span class="sanction-gravity"><i class="fa-solid fa-triangle-exclamation"></i> ${s.gravity}</span>
          </div>
        `;
      }).join('');
    }

    if (mitigatingContainer) {
      const mList = IURIS_DATA.sanctions.graduationFactors.mitigating[this.currentLang] || IURIS_DATA.sanctions.graduationFactors.mitigating.es;
      mitigatingContainer.innerHTML = mList.map(item => `<li><i class="fa-solid fa-circle-check"></i> <span>${item}</span></li>`).join('');
    }

    if (aggravatingContainer) {
      const aList = IURIS_DATA.sanctions.graduationFactors.aggravating[this.currentLang] || IURIS_DATA.sanctions.graduationFactors.aggravating.es;
      aggravatingContainer.innerHTML = aList.map(item => `<li><i class="fa-solid fa-circle-xmark"></i> <span>${item}</span></li>`).join('');
    }
  }

  // Render Era Digital
  renderDigitalEra() {
    const container = document.getElementById('digitalGrid');
    if (!container) return;

    container.innerHTML = IURIS_DATA.digitalEra.principles.map(d => {
      const title = d.title[this.currentLang] || d.title.es;
      const desc = d.desc[this.currentLang] || d.desc.es;
      const tip = d.simpleTip[this.currentLang] || d.simpleTip.es;

      return `
        <div class="digital-card">
          <div class="digital-icon">
            <i class="fa-solid ${d.icon}"></i>
          </div>
          <h3 class="digital-title">${title}</h3>
          <p class="digital-desc">${desc}</p>
          <div class="digital-tip">
            <i class="fa-solid fa-quote-left"></i> ${tip}
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Glosario
  renderGlossary(filter = '') {
    const container = document.getElementById('glossaryGrid');
    if (!container) return;

    const termQuery = filter.trim().toLowerCase();
    const items = IURIS_DATA.glossary.filter(item => {
      const term = (item.term[this.currentLang] || item.term.es).toLowerCase();
      const simple = (item.simpleDef[this.currentLang] || item.simpleDef.es).toLowerCase();
      return term.includes(termQuery) || simple.includes(termQuery);
    });

    if (items.length === 0) {
      container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">No se encontraron términos para "${filter}".</p>`;
      return;
    }

    container.innerHTML = items.map(g => {
      const term = g.term[this.currentLang] || g.term.es;
      const simple = g.simpleDef[this.currentLang] || g.simpleDef.es;
      const technical = g.technicalDef[this.currentLang] || g.technicalDef.es;

      return `
        <div class="glossary-card">
          <h4 class="glossary-term"><i class="fa-solid fa-book-bookmark"></i> ${term}</h4>
          <p class="glossary-def-simple"><strong>En simple:</strong> ${simple}</p>
          <p class="glossary-def-technical"><strong>Definición jurídica:</strong> ${technical}</p>
        </div>
      `;
    }).join('');
  }

  // Render Simulador de Dilemas
  renderDilemmaSimulator() {
    const dilemma = IURIS_DATA.dilemmas[this.activeDilemmaIndex];
    if (!dilemma) return;

    const caseIndicator = document.getElementById('simCaseIndicator');
    const scoreBadge = document.getElementById('simScoreBadge');
    const titleEl = document.getElementById('simTitle');
    const textEl = document.getElementById('simText');
    const sourceEl = document.getElementById('simSource');
    const optionsGrid = document.getElementById('simOptionsGrid');
    const feedbackBox = document.getElementById('simFeedbackBox');
    const nextBtn = document.getElementById('simNextBtn');

    if (caseIndicator) {
      caseIndicator.textContent = `Dilema ${this.activeDilemmaIndex + 1} de ${IURIS_DATA.dilemmas.length}`;
    }
    if (scoreBadge) {
      scoreBadge.innerHTML = `<i class="fa-solid fa-trophy"></i> <span>${this.score} pts</span>`;
    }
    if (titleEl) {
      titleEl.textContent = dilemma.title[this.currentLang] || dilemma.title.es;
    }
    if (textEl) {
      textEl.textContent = dilemma.situation[this.currentLang] || dilemma.situation.es;
    }
    if (sourceEl) {
      sourceEl.innerHTML = `<i class="fa-solid fa-file-shield"></i> ${dilemma.source}`;
    }

    // Limpiar feedback al cambiar de caso
    if (feedbackBox) {
      feedbackBox.style.display = 'none';
      feedbackBox.className = 'feedback-box';
    }
    if (nextBtn) {
      nextBtn.style.display = 'none';
    }

    const isAnswered = this.answeredDilemmas[this.activeDilemmaIndex] !== undefined;
    const selectedOptionId = this.answeredDilemmas[this.activeDilemmaIndex];

    if (optionsGrid) {
      optionsGrid.innerHTML = dilemma.options.map(opt => {
        const text = opt.text[this.currentLang] || opt.text.es;
        let btnClass = 'option-btn';
        if (isAnswered) {
          btnClass += ' disabled';
          if (opt.id === selectedOptionId) {
            btnClass += opt.isCorrect ? ' correct' : ' wrong';
          } else if (opt.isCorrect) {
            btnClass += ' correct';
          }
        }
        return `
          <button class="${btnClass}" data-opt-id="${opt.id}" ${isAnswered ? 'disabled' : ''}>
            <span>${text}</span>
          </button>
        `;
      }).join('');

      // Adjuntar eventos a las opciones
      if (!isAnswered) {
        optionsGrid.querySelectorAll('.option-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const optId = btn.getAttribute('data-opt-id');
            this.handleDilemmaChoice(optId);
          });
        });
      } else {
        // Mostrar feedback si ya fue respondido
        const chosen = dilemma.options.find(o => o.id === selectedOptionId);
        if (chosen) {
          this.showFeedback(chosen);
        }
      }
    }
  }

  handleDilemmaChoice(optionId) {
    const dilemma = IURIS_DATA.dilemmas[this.activeDilemmaIndex];
    const option = dilemma.options.find(o => o.id === optionId);
    if (!option) return;

    this.answeredDilemmas[this.activeDilemmaIndex] = optionId;
    if (option.isCorrect) {
      this.score += 20;
    }

    this.renderDilemmaSimulator();
    this.showFeedback(option);
  }

  showFeedback(option) {
    const feedbackBox = document.getElementById('simFeedbackBox');
    const headline = document.getElementById('simFeedbackHeadline');
    const text = document.getElementById('simFeedbackText');
    const sanction = document.getElementById('simFeedbackSanction');
    const nextBtn = document.getElementById('simNextBtn');
    const strings = IURIS_DATA.ui[this.currentLang];

    if (!feedbackBox) return;

    feedbackBox.style.display = 'block';
    feedbackBox.className = `feedback-box ${option.isCorrect ? 'correct' : 'wrong'}`;

    if (headline) {
      headline.innerHTML = option.isCorrect
        ? `<i class="fa-solid fa-circle-check"></i> ${strings.correctAnswer}`
        : `<i class="fa-solid fa-triangle-exclamation"></i> ${strings.incorrectAnswer}`;
    }

    if (text) {
      text.textContent = option.explanation[this.currentLang] || option.explanation.es;
    }

    if (sanction) {
      sanction.innerHTML = `<strong>Régimen Disciplinario Aplicable:</strong> ${option.penalty}`;
    }

    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.textContent = this.activeDilemmaIndex < IURIS_DATA.dilemmas.length - 1 
        ? strings.nextCase 
        : strings.resetSimulator;
    }
  }

  nextDilemma() {
    if (this.activeDilemmaIndex < IURIS_DATA.dilemmas.length - 1) {
      this.activeDilemmaIndex++;
    } else {
      // Reiniciar
      this.activeDilemmaIndex = 0;
      this.score = 0;
      this.answeredDilemmas = {};
    }
    this.renderDilemmaSimulator();
  }

  // ==========================================================================
  // Motor Inteligente de la Skill: Consultorio Ético-Jurídico
  // ==========================================================================
  consultSkill(query) {
    if (!query || !query.trim()) return;

    const normalized = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const words = normalized.split(/\s+/).filter(w => w.length > 2);

    let bestMatch = null;
    let highestScore = 0;

    // Búsqueda ponderada en la base de conocimientos
    IURIS_DATA.knowledgeBase.forEach(item => {
      let matchCount = 0;
      item.keywords.forEach(kw => {
        const normKw = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (normalized.includes(normKw)) {
          matchCount += 3;
        }
        words.forEach(word => {
          if (normKw.includes(word) || word.includes(normKw)) {
            matchCount += 1;
          }
        });
      });

      if (matchCount > highestScore) {
        highestScore = matchCount;
        bestMatch = item;
      }
    });

    // Si no hay match exacto, usar el primero como fallback o generar dictamen analítico
    if (!bestMatch || highestScore === 0) {
      bestMatch = this.generateDynamicAssessment(query);
    }

    this.displayVerdict(bestMatch, query);
  }

  generateDynamicAssessment(query) {
    // Generador sintético de dictamen ético según el método de la skill
    return {
      topic: `Consulta Ciudadana: "${query.slice(0, 50)}..."`,
      role: "Abogado Litigante y Asesor Jurídico",
      legalBasis: "Ley 1123 de 2007 (Art. 28 deberes profesionales) y Constitución Política de Colombia.",
      law: {
        es: `Frente a la consulta planteada ("${query}"), el ordenamiento jurídico exige actuar bajo los principios de buena fe procesal, debida diligencia y lealtad con el cliente y la justicia. Cualquier actuación contraria a la ley o que induzca en error al juez es objeto de investigación sancionatoria ante la Comisión Nacional de Disciplina Judicial.`,
        en: `Regarding the inquiry ("${query}"), statutory law imposes strict adherence to procedural good faith, due diligence, and undivided loyalty to both client and justice system.`,
        pt: `Diante da consulta ("${query}"), o ordenamento jurídico exige atuação orientada pela boa-fé processual, diligência e respeito à verdade dos fatos.`
      },
      ethics: {
        es: "El abogado debe preguntarse qué es lo correcto más allá de lo que está estrictamente prohibido. La ética exige proteger la confianza del cliente sin convertirse en instrumento de ilegalidad o engaño.",
        en: "Ethics requires asking what is right beyond bare statutory prohibitions. An attorney must guard client trust without becoming an instrument of deceit.",
        pt: "A ética exige fazer o que é correto mesmo sem vigilância. O advogado deve preservar a confiança do cliente sem se tornar cúmplice de fraudes."
      },
      balance: {
        es: "Punto de Equilibrio: La defensa firme de los intereses del cliente siempre debe encontrar su límite infranqueable en la verdad y el respeto al debido proceso.",
        en: "Point of Balance: Zealous advocacy of client interests must always halt before the inviolable boundary of truth and fair administration of justice.",
        pt: "Ponto de Equilíbrio: A defesa enérgica dos interesses do cliente encontra seu limite ético intransponível na verdade e na dignidade da Justiça."
      },
      simple: {
        es: "En cristiano: haz siempre lo correcto y no busques atajos dudosos. Lo que no puedas contar con la frente en alto frente a un juez o a tu familia, no lo hagas en tu profesión.",
        en: "In plain terms: always do the right thing without taking shady shortcuts. If you couldn't proudly explain it to a judge or your family, don't do it.",
        pt: "Em português simples: faça o que é correto e fuja de atalhos escusos. Se você não puder explicar sua conduta com orgulho perante o juiz, não a pratique."
      },
      action: {
        es: "1. Analiza si la situación compromete tu independencia o genera un conflicto de interés.\n2. Consulta expresamente el Código Disciplinario del Abogado (Ley 1123 de 2007).\n3. Informa claramente los riesgos al cliente por escrito.\n4. Si la conducta requerida por el cliente es ilegal, rechaza el encargo formalmente.",
        en: "1. Assess whether independence or conflicts are compromised.\n2. Review the statutory Code of Professional Conduct.\n3. Transparently document risks in writing to the client.\n4. Flatly refuse any unlawful client commands.",
        pt: "1. Verifique se há risco à sua independência ou conflito de interesses.\n2. Consulte o Código de Ética e Disciplina.\n3. Comunique os riscos por escrito ao cliente.\n4. Recuse expressamente pedidos ilegais."
      },
      risk: "Censura o suspensión de 2 a 12 meses en caso de incurrir en negligencia o falta de lealtad."
    };
  }

  displayVerdict(item, query) {
    const verdictBox = document.getElementById('verdictBox');
    if (!verdictBox) return;

    const strings = IURIS_DATA.ui[this.currentLang];
    
    document.getElementById('verdictTopic').textContent = item.topic;
    document.getElementById('verdictRole').textContent = item.role;
    document.getElementById('verdictLegalBasis').textContent = item.legalBasis;
    
    document.getElementById('verdictLawText').textContent = item.law[this.currentLang] || item.law.es;
    document.getElementById('verdictEthicsText').textContent = item.ethics[this.currentLang] || item.ethics.es;
    document.getElementById('verdictBalanceText').textContent = item.balance[this.currentLang] || item.balance.es;
    document.getElementById('verdictSimpleText').textContent = item.simple[this.currentLang] || item.simple.es;
    document.getElementById('verdictActionText').textContent = item.action[this.currentLang] || item.action.es;
    document.getElementById('verdictRiskText').innerHTML = `<strong>${strings.verdictRisk}:</strong> ${item.risk}`;

    verdictBox.style.display = 'block';
    verdictBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Guardar para lectura por voz
    this.currentVerdictText = `
      ${item.topic}.
      ${strings.verdictLaw}: ${item.law[this.currentLang] || item.law.es}.
      ${strings.verdictEthics}: ${item.ethics[this.currentLang] || item.ethics.es}.
      ${strings.verdictSimple}: ${item.simple[this.currentLang] || item.simple.es}.
      ${strings.verdictAction}: ${item.action[this.currentLang] || item.action.es}.
    `;
  }

  // Síntesis de voz accesible
  toggleSpeech() {
    if (!this.speechSynthesis) {
      alert("Tu navegador no soporta síntesis de voz.");
      return;
    }

    if (this.isSpeaking) {
      this.stopSpeaking();
      return;
    }

    if (!this.currentVerdictText) return;

    this.currentUtterance = new SpeechSynthesisUtterance(this.currentVerdictText);
    
    // Configurar idioma de voz
    const langMap = {
      es: 'es-ES',
      en: 'en-US',
      pt: 'pt-BR'
    };
    this.currentUtterance.lang = langMap[this.currentLang] || 'es-ES';
    this.currentUtterance.rate = 1.0;

    const speakBtn = document.getElementById('speakVerdictBtn');

    this.currentUtterance.onstart = () => {
      this.isSpeaking = true;
      if (speakBtn) {
        speakBtn.classList.add('speaking');
        speakBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> <span>${IURIS_DATA.ui[this.currentLang].stopAudio}</span>`;
      }
    };

    this.currentUtterance.onend = () => {
      this.isSpeaking = false;
      if (speakBtn) {
        speakBtn.classList.remove('speaking');
        speakBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>${IURIS_DATA.ui[this.currentLang].listenAudio}</span>`;
      }
    };

    this.currentUtterance.onerror = () => {
      this.stopSpeaking();
    };

    this.speechSynthesis.speak(this.currentUtterance);
  }

  stopSpeaking() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    const speakBtn = document.getElementById('speakVerdictBtn');
    if (speakBtn) {
      speakBtn.classList.remove('speaking');
      speakBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>${IURIS_DATA.ui[this.currentLang].listenAudio}</span>`;
    }
  }

  copyVerdictToClipboard() {
    if (!this.currentVerdictText) return;
    navigator.clipboard.writeText(this.currentVerdictText).then(() => {
      const copyBtn = document.getElementById('copyVerdictBtn');
      if (copyBtn) {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> <span>${IURIS_DATA.ui[this.currentLang].copiedNotice}</span>`;
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
        }, 2200);
      }
    });
  }

  // Balanza Interactiva: Tilted States
  setBalanceFocus(state) {
    const grid = document.getElementById('balanceGrid');
    const lawCol = document.getElementById('scaleLawCol');
    const ethicsCol = document.getElementById('scaleEthicsCol');
    
    document.querySelectorAll('.balance-tab').forEach(t => t.classList.remove('active'));

    if (!grid || !lawCol || !ethicsCol) return;

    grid.classList.remove('tilt-left', 'tilt-right');
    lawCol.classList.remove('highlighted');
    ethicsCol.classList.remove('highlighted');

    if (state === 'law') {
      grid.classList.add('tilt-left');
      lawCol.classList.add('highlighted');
      document.querySelector('[data-balance="law"]')?.classList.add('active');
    } else if (state === 'ethics') {
      grid.classList.add('tilt-right');
      ethicsCol.classList.add('highlighted');
      document.querySelector('[data-balance="ethics"]')?.classList.add('active');
    } else {
      document.querySelector('[data-balance="equilibrium"]')?.classList.add('active');
    }
  }

  setupEventListeners() {
    // Selector de idiomas
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Conmutador de modo simple/técnico
    document.getElementById('modeToggleBtn')?.addEventListener('click', () => {
      this.toggleLanguageMode();
    });

    // Conmutador de tema oscuro/claro
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
      this.toggleTheme();
    });

    // Balanza interactiva pestañas
    document.querySelectorAll('.balance-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.setBalanceFocus(tab.getAttribute('data-balance'));
      });
    });

    // Búsqueda del Consultorio Ético
    const searchForm = document.getElementById('consultorSearchForm');
    const searchInput = document.getElementById('consultorSearchInput');
    searchForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.consultSkill(searchInput.value);
    });

    // Chips de temas rápidos
    document.querySelectorAll('.topic-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const query = chip.getAttribute('data-query');
        if (searchInput) searchInput.value = query;
        this.consultSkill(query);
      });
    });

    // Botones de acciones del dictamen
    document.getElementById('speakVerdictBtn')?.addEventListener('click', () => {
      this.toggleSpeech();
    });
    document.getElementById('copyVerdictBtn')?.addEventListener('click', () => {
      this.copyVerdictToClipboard();
    });

    // Botón siguiente en el simulador
    document.getElementById('simNextBtn')?.addEventListener('click', () => {
      this.nextDilemma();
    });

    // Buscador de glosario en vivo
    document.getElementById('glossarySearchInput')?.addEventListener('input', (e) => {
      this.renderGlossary(e.target.value);
    });
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.iurisApp = new IurisApp();
});
