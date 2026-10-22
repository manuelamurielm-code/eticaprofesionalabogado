/**
 * IURIS & ÉTICA - Base de Conocimiento y Traducciones Trilingüe
 * Basado estrictamente en:
 * - Ley 1123 de 2007 (Código Disciplinario del Abogado en Colombia)
 * - Ley 2213 de 2022 (Uso de TIC en la Justicia)
 * - Artículos 28, 29, 30, 31, 33, 34 y 35 de la Ley 1123 de 2007
 * - Art. 74 Constitución Política de Colombia (Secreto profesional inviolable)
 * - Sentencias C-301 de 2012 y C-290 de 2008 de la Corte Constitucional
 * - Ponencias del V Congreso Internacional de Ética y Bioética Algorítmica
 * - Guía de Deontología Jurídica y Casos Prácticos
 */

const IURIS_DATA = {
  // Configuración de idiomas disponibles
  languages: ['es', 'en', 'pt'],

  // Textos de interfaz y navegación
  ui: {
    es: {
      siteTitle: "Iuris & Ética",
      siteSubtitle: "Plataforma Inteligente de Ética Profesional del Abogado",
      badgeSkill: "Skill Inteligente Activa",
      navHome: "Inicio",
      navConsultor: "Consultorio Ético",
      navSimulador: "Simulador de Dilemas",
      navPilares: "6 Pilares",
      navRelaciones: "4 Relaciones",
      navSanciones: "Régimen Disciplinario",
      navDigital: "IA & Era Digital",
      navGlosario: "Glosario Ciudadano",
      toggleSimpleMode: "Lenguaje Simple",
      toggleTechnicalMode: "Modo Técnico Jurídico",
      themeDark: "Modo Oscuro",
      themeLight: "Modo Claro",
      heroHeadline: "El Equilibrio entre el Derecho y la Ética",
      heroSubheadline: "«La ley se estudia, la ética se ejerce ♡. El derecho te da las herramientas, la ética te dice cómo usarlas ♡.»",
      heroDescription: "Plataforma interactiva orientada a resolver dudas, analizar dilemas morales y disciplinarios, y traducir el derecho a un lenguaje transparente, honesto y comprensible para todos.",
      ctaConsultor: "Preguntar a la Skill Ética",
      ctaSimulador: "Probar Simulador de Casos",
      balanceTitle: "La Balanza Ético-Jurídica",
      balanceLawTitle: "El Derecho (Lo Legal)",
      balanceLawDesc: "El marco normativo escrito, las prohibiciones mínimas y las herramientas que la ley autoriza. Es el piso obligatorio del ejercicio profesional.",
      balanceEthicsTitle: "La Ética (Lo Deontológico)",
      balanceEthicsDesc: "Lo que debe hacer un buen abogado cuando nadie lo está vigilando. Es la búsqueda de la justicia, la verdad y la dignidad humana.",
      balanceHarmonizer: "Punto de Equilibrio: La Confianza Social",
      balanceHarmonizerDesc: "El abogado no trabaja solo para ganar a toda costa; trabaja para que la sociedad mantenga la fe en la justicia.",
      searchPlaceholder: "Escribe tu duda, caso o dilema (ej: ¿Qué hago si mi cliente me confiesa un delito? ¿Puedo usar IA?)...",
      searchBtn: "Consultar a la Skill",
      quickTopicsTitle: "O selecciona una necesidad frecuente:",
      allCategories: "Todos los temas",
      verdictTitle: "Dictamen de la Skill Deontológica",
      verdictRole: "Perspectiva del Rol:",
      verdictLaw: "¿Qué dice la Ley? (Marco Legal)",
      verdictEthics: "¿Qué dice la Ética? (Deontología)",
      verdictBalance: "El Equilibrio Ético-Jurídico",
      verdictSimple: "Explicación en Palabras Simples (Para Todos)",
      verdictAction: "Recomendación de Acción Concreta",
      verdictRisk: "Riesgo Disciplinario Potencial",
      listenAudio: "Escuchar en voz alta",
      stopAudio: "Detener voz",
      copyVerdict: "Copiar dictamen",
      copiedNotice: "¡Dictamen copiado al portapapeles!",
      simulatorTitle: "Simulador Interactivo de Dilemas Éticos",
      simulatorSubtitle: "Ponte a prueba frente a casos reales y escenarios de la vida cotidiana. ¿Qué harías tú?",
      chooseOption: "Elige la postura ética correcta:",
      correctAnswer: "¡Decisión Ética Correcta!",
      incorrectAnswer: "Riesgo Ético / Sanción Disciplinaria",
      nextCase: "Siguiente Dilema",
      resetSimulator: "Reiniciar Simulador",
      scoreTitle: "Tu Puntuación Deontológica:",
      pillarsTitle: "Los Seis Pilares que Sostienen la Profesión",
      pillarsSubtitle: "Los cimientos morales sobre los que se construye la confianza entre abogado, cliente y sociedad.",
      relationsTitle: "Cuatro Relaciones, Cuatro Deberes",
      relationsSubtitle: "El abogado en acción frente a todos los actores del ecosistema de justicia.",
      sanctionsTitle: "El Régimen Disciplinario en Colombia (Ley 1123 de 2007)",
      sanctionsSubtitle: "Administrado por la Comisión Nacional de Disciplina Judicial (desde el 13 de enero de 2021).",
      digitalTitle: "Ética, Inteligencia Artificial y Transformación Digital",
      digitalSubtitle: "Bioética algorítmica, ciberseguridad, lealtad digital y uso responsable de IA (Ley 2213 de 2022).",
      glossaryTitle: "Glosario Jurídico en Lenguaje Ciudadano",
      glossarySubtitle: "Términos del derecho explicados con claridad, sin tecnicismos innecesarios.",
      searchGlossary: "Buscar término (ej. Deontología, Dolo, Temeridad)...",
      footerNotice: "Desarrollado con fines pedagógicos y de resolución ética. Basado en la normativa colombiana y estándares internacionales de deontología.",
      viewAttachedDocs: "Documentos de Referencia Analizados",
      infographicTitle: "Infografía: La Ley se Estudia, la Ética se Ejerce",
      pdfTitle: "Documento Base: Ética Profesional del Abogado",
      skillFileTitle: "Especificación de la Skill Ética Digital"
    },
    en: {
      siteTitle: "Iuris & Ethics",
      siteSubtitle: "Smart Legal Professional Ethics Platform",
      badgeSkill: "Active Smart Skill",
      navHome: "Home",
      navConsultor: "Ethics Advisor",
      navSimulador: "Dilemma Simulator",
      navPilares: "6 Pillars",
      navRelaciones: "4 Duties",
      navSanciones: "Disciplinary Regime",
      navDigital: "AI & Digital Era",
      navGlosario: "Plain Glossary",
      toggleSimpleMode: "Plain Language",
      toggleTechnicalMode: "Technical Legal Mode",
      themeDark: "Dark Mode",
      heroSubheadline: "“The law is studied, ethics is practiced ♡. The law gives you the tools, ethics tells you how to use them ♡.”",
      heroDescription: "An interactive platform designed to answer questions, resolve moral and disciplinary dilemmas, and translate legal concepts into transparent, honest, and accessible language for everyone.",
      ctaConsultor: "Ask the Ethics Skill",
      ctaSimulador: "Try Dilemma Simulator",
      balanceTitle: "The Ethical-Legal Balance Scale",
      balanceLawTitle: "The Law (What Is Legal)",
      balanceLawDesc: "The written statutes, minimal prohibitions, and procedural tools authorized by statute. It represents the compulsory baseline of practice.",
      balanceEthicsTitle: "Ethics (The Deontological Good)",
      balanceEthicsDesc: "What a good lawyer ought to do when no one is watching. The unyielding pursuit of justice, truth, and human dignity.",
      balanceHarmonizer: "Point of Balance: Public Trust",
      balanceHarmonizerDesc: "A lawyer does not work to win at any cost; a lawyer works so society preserves faith in justice.",
      searchPlaceholder: "Type your query, case, or dilemma (e.g., What if my client confesses a crime? Can I use AI?)...",
      searchBtn: "Ask the Skill",
      quickTopicsTitle: "Or select a frequent topic:",
      allCategories: "All Topics",
      verdictTitle: "Deontological Skill Assessment",
      verdictRole: "Role Perspective:",
      verdictLaw: "What Does the Law Say? (Legal Framework)",
      verdictEthics: "What Does Ethics Demand? (Deontology)",
      verdictBalance: "The Ethical-Legal Balance",
      verdictSimple: "Plain Language Explanation (For Everyone)",
      verdictAction: "Concrete Recommended Action",
      verdictRisk: "Potential Disciplinary Risk",
      listenAudio: "Read aloud",
      stopAudio: "Stop audio",
      copyVerdict: "Copy assessment",
      copiedNotice: "Assessment copied to clipboard!",
      simulatorTitle: "Interactive Ethics Dilemma Simulator",
      simulatorSubtitle: "Test your moral and legal compass with realistic cases and daily legal dilemmas.",
      chooseOption: "Select the ethically sound decision:",
      correctAnswer: "Ethically Correct Decision!",
      incorrectAnswer: "Ethical Risk / Disciplinary Violation",
      nextCase: "Next Dilemma",
      resetSimulator: "Reset Simulator",
      scoreTitle: "Your Deontological Score:",
      pillarsTitle: "The Six Pillars of the Legal Profession",
      pillarsSubtitle: "The moral foundations that cultivate trust between lawyer, client, and society.",
      relationsTitle: "Four Relationships, Four Core Duties",
      relationsSubtitle: "The attorney in action across the entire justice ecosystem.",
      sanctionsTitle: "Disciplinary Regime (Law 1123 of 2007)",
      sanctionsSubtitle: "Enforced by the National Judicial Discipline Commission.",
      digitalTitle: "Ethics, Artificial Intelligence & Digital Era",
      digitalSubtitle: "Algorithmic bioethics, cybersecurity, digital good faith, and responsible AI usage (Law 2213 of 2022).",
      glossaryTitle: "Plain Language Citizen Legal Glossary",
      glossarySubtitle: "Key legal terms explained simply, without cumbersome legal jargon.",
      searchGlossary: "Search term (e.g., Deontology, Malice, Diligence)...",
      footerNotice: "Developed for educational and ethical problem-solving purposes. Based on Colombian statutory standards and international deontology principles.",
      viewAttachedDocs: "Analyzed Source Documents",
      infographicTitle: "Infographic: Law is Studied, Ethics is Practiced",
      pdfTitle: "Core Document: Professional Ethics of the Lawyer",
      skillFileTitle: "Digital Legal Ethics Skill Specification"
    },
    pt: {
      siteTitle: "Iuris & Ética",
      siteSubtitle: "Plataforma Inteligente de Ética Profissional do Advogado",
      badgeSkill: "Skill Inteligente Activa",
      navHome: "Início",
      navConsultor: "Consultório Ético",
      navSimulador: "Simulador de Dilemas",
      navPilares: "6 Pilares",
      navRelaciones: "4 Relações",
      navSanciones: "Regime Disciplinar",
      navDigital: "IA & Era Digital",
      navGlosario: "Glossário Cidadão",
      toggleSimpleMode: "Linguagem Simples",
      toggleTechnicalMode: "Modo Técnico Jurídico",
      themeDark: "Modo Escuro",
      themeLight: "Modo Claro",
      heroHeadline: "O Equilíbrio entre o Direito e a Ética",
      heroSubheadline: "«A lei se estuda, a ética se exerce ♡. O direito lhe dá as ferramentas, a ética lhe diz como usá-las ♡.»",ne: "«A lei se estuda, a ética se exerce. O direito lhe dá as ferramentas, a ética lhe diz como usá-las.»",
      heroDescription: "Plataforma interativa para solucionar dúvidas, analisar dilemas morais e disciplinares e traduzir conceitos jurídicos para uma linguagem simples e acessível a todos.",
      ctaConsultor: "Consultar a Skill Ética",
      ctaSimulador: "Testar Simulador de Casos",
      balanceTitle: "A Balança Ético-Jurídica",
      balanceLawTitle: "O Direito (O Legal)",
      balanceLawDesc: "O conjunto de normas escritas, proibições mínimas e instrumentos autorizados pela lei. É o piso obrigatório da prática.",
      balanceEthicsTitle: "A Ética (O Deontológico)",
      balanceEthicsDesc: "O que o bom advogado deve fazer quando ninguém está vigiando. A busca incansável pela justiça, verdade e dignidade humana.",
      balanceHarmonizer: "Ponto de Equilíbrio: A Confiança Social",
      balanceHarmonizerDesc: "O advogado não trabalha apenas para vencer a qualquer custo; trabalha para que a sociedade mantenha sua fé na justiça.",
      searchPlaceholder: "Digite sua dúvida, caso ou dilema (ex: Meu cliente confessou um crime? Posso usar IA?)...",
      searchBtn: "Consultar a Skill",
      quickTopicsTitle: "Ou escolha um tema frequente:",
      allCategories: "Todos os temas",
      verdictTitle: "Parecer da Skill Deontológica",
      verdictRole: "Perspectiva do Papel:",
      verdictLaw: "O que diz a Lei? (Marco Legal)",
      verdictEthics: "O que exige a Ética? (Deontologia)",
      verdictBalance: "O Equilíbrio Ético-Jurídico",
      verdictSimple: "Explicação em Palavras Simples (Para Todos)",
      verdictAction: "Recomendação de Ação Concreta",
      verdictRisk: "Risco Disciplinar Potencial",
      listenAudio: "Ouvir em voz alta",
      stopAudio: "Parar áudio",
      copyVerdict: "Copiar parecer",
      copiedNotice: "Parecer copiado para a área de transferência!",
      simulatorTitle: "Simulador Interativo de Dilemas Éticos",
      simulatorSubtitle: "Teste seu discernimento ético e jurídico frente a casos reais da vida profissional.",
      chooseOption: "Escolha a conduta ética correta:",
      correctAnswer: "Decisão Ética Correta!",
      incorrectAnswer: "Risco Ético / Infração Disciplinar",
      nextCase: "Próximo Dilema",
      resetSimulator: "Reiniciar Simulador",
      scoreTitle: "Sua Pontuação Deontológica:",
      pillarsTitle: "Os Seis Pilares da Advocacia",
      pillarsSubtitle: "As bases morais que sustentam a confiança entre advogado, cliente e sociedade.",
      relationsTitle: "Quatro Relações, Quatro Deveres",
      relationsSubtitle: "O advogado em ação diante de todos os membros do ecossistema de justiça.",
      sanctionsTitle: "O Regime Disciplinar (Lei 1123 de 2007)",
      sanctionsSubtitle: "Julgado pela Comissão Nacional de Disciplina Judicial.",
      digitalTitle: "Ética, Inteligência Artificial e Era Digital",
      digitalSubtitle: "Bioética algorítmica, cibersegurança e uso responsável da IA (Lei 2213 de 2022).",
      glossaryTitle: "Glossário Jurídico em Linguagem Cidadã",
      glossarySubtitle: "Termos jurídicos explicados de forma descomplicada, sem rodeios ou palavras difíceis.",
      searchGlossary: "Pesquisar termo (ex: Deontologia, Dolo, Temeridade)...",
      footerNotice: "Desenvolvido com finalidade pedagógica e de orientação ética. Baseado nas normas colombianas e na deontologia jurídica comparada.",
      viewAttachedDocs: "Documentos de Referência Analisados",
      infographicTitle: "Infográfico: A Lei se Estuda, a Ética se Exerce",
      pdfTitle: "Documento Base: Ética Profissional do Advogado",
      skillFileTitle: "Especificação da Skill Ética Digital"
    }
  },

  // Base de 6 Pilares
  pillars: [
    {
      id: "probidad",
      icon: "fa-scale-balanced",
      number: "01",
      title: {
        es: "Probidad y Honradez",
        en: "Probity and Honesty",
        pt: "Probidade e Honestidade"
      },
      tagline: {
        es: "Actuar con la verdad y sin falsedad ni trampas.",
        en: "Acting with truth, free from deceit or traps.",
        pt: "Agir com verdade, sem artimanhas ou enganos."
      },
      descTechnical: {
        es: "Deber de proceder con lealtad procesal y veracidad, absteniéndose de inducir a error al juez o contraparte, y custodiando pulcramente los dineros, títulos y bienes entregados en razón del mandato (Ley 1123/2007 Art. 28 num. 1 y Art. 35).",
        en: "Duty to proceed with procedural loyalty and truthfulness, never misleading the judge or counterpart, and scrupulously accounting for funds and assets entrusted under mandate (Law 1123/2007 Art. 28 & 35).",
        pt: "Dever de agir com lealdade processual e veracidade, jamais induzindo o juiz ou a parte contrária em erro, prestando contas rigorosas de valores e bens confiados (Lei 1123/2007)."
      },
      descSimple: {
        es: "Decir siempre la verdad y nunca quedarse con dinero ni documentos que pertenezcan al cliente. Si te confían recursos o papeles, deben estar a salvo y rendirse cuentas claras hasta el último centavo.",
        en: "Always tell the truth and never take or withhold money or documents belonging to your client. Clear accounting down to the penny.",
        pt: "Dizer sempre a verdade e jamais reter dinheiro ou documentos do cliente. Prestar contas claras de cada centavo confiado."
      },
      example: {
        es: "Un cliente te entrega $5 millones para pagar una caución judicial. Usar ese dinero para pagar tus gastos personales constituye una falta gravísima de apropiación indebida.",
        en: "A client gives you $1,000 for a court bond. Using that money for personal expenses is a severe disciplinary infraction.",
        pt: "O cliente entrega valores para depósito judicial. Utilizar esse dinheiro para gastos próprios configura infração disciplinar gravíssima."
      }
    },
    {
      id: "lealtad",
      icon: "fa-handshake-angle",
      number: "02",
      title: {
        es: "Lealtad con el Cliente",
        en: "Loyalty to the Client",
        pt: "Lealdade ao Cliente"
      },
      tagline: {
        es: "Fidelidad real y advertencia honesta sobre los riesgos.",
        en: "Genuine fidelity and frank disclosure of case risks.",
        pt: "Fidelidade autêntica e clareza sobre os riscos da causa."
      },
      descTechnical: {
        es: "Obligación de velar fielmente por los derechos del mandante, informándole con franqueza las probabilidades reales de éxito y no abandonar la gestión sin causa legalmente justificada ni dejar vencer términos (Ley 1123/2007 Art. 34).",
        en: "Fiduciary obligation to safeguard client interests, candidly advising on chances of success without false promises, and never abandoning representation without justified notice (Law 1123/2007 Art. 34).",
        pt: "Obrigação de zelar lealmente pelos direitos do constituinte, informando-o com clareza sobre as chances reais de sucesso e jamais renunciando sem prévio aviso justificado (Lei 1123/2007 Art. 34)."
      },
      descSimple: {
        es: "Estar del lado de tu cliente con honestidad: nunca prometer victorias imposibles para cobrar honorarios, y no dejar su caso botado a mitad de camino.",
        en: "Stand by your client honestly: never guarantee 100% victory just to charge a fee, and never abandon their case halfway.",
        pt: "Estar ao lado do cliente com franqueza: nunca prometer vitórias milagrosas para cobrar honorários e nunca abandonar o processo pelo caminho."
      },
      example: {
        es: "Decirle al cliente: «Le garantizo que ganamos la demanda», sabiendo que la jurisprudencia no lo favorece, solo para asegurar el contrato.",
        en: "Telling a client: 'I guarantee we will win', knowing precedent is contrary, merely to secure an upfront fee.",
        pt: "Dizer ao cliente: 'Garanto 100% de vitória', mesmo sabendo que a jurisprudência é desfavorável, apenas para receber o adiantamento."
      }
    },
    {
      id: "independencia",
      icon: "fa-compass",
      number: "03",
      title: {
        es: "Independencia Profesional",
        en: "Professional Independence",
        pt: "Independência Profissional"
      },
      tagline: {
        es: "Criterio libre de presiones políticas, económicas o ajenas.",
        en: "Unbiased counsel free from economic or political pressure.",
        pt: "Critério livre de pressões econômicas, políticas ou de terceiros."
      },
      descTechnical: {
        es: "Autonomía en el juicio técnico y ético del abogado frente al poderdante, funcionarios judiciales y terceros. Se vulnera al subordinar la defensa a intereses foráneos o incurrir en conflicto de interés (Ley 1123/2007 Art. 28 num. 4).",
        en: "Autonomous technical and moral judgment resisting undue interference from clients, magistrates, or external economic interests. Avoidance of conflicts of interest (Law 1123/2007 Art. 28).",
        pt: "Autonomia do parecer técnico e moral do advogado, sem ceder a pressões do cliente, juízes ou interesses econômicos externos (Lei 1123/2007 Art. 28)."
      },
      descSimple: {
        es: "Ser el dueño de tu propio criterio profesional. Si el cliente o tu jefe te piden hacer una jugada sucia o ilegal, debes decir NO con firmeza.",
        en: "Stay true to your professional judgment. If a client or boss pushes you to perform an unethical or dirty trick, you must say NO.",
        pt: "Manter a própria bússola moral. Se o cliente ou terceiro exigir uma manobra ilegal, você deve recusar prontamente."
      },
      example: {
        es: "Aceptar defender a dos socios en un juicio cuando sus pretensiones se contradicen, o dejarse presionar por un financista para alargar el juicio.",
        en: "Representing two partners whose interests conflict, or letting a litigation funder dictate unethical litigation delays.",
        pt: "Aceitar defender dois sócios com interesses opostos ou ceder à pressão de terceiros para postergar o processo de má-fé."
      }
    },
    {
      id: "diligencia",
      icon: "fa-business-time",
      number: "04",
      title: {
        es: "Diligencia y Competencia",
        en: "Diligence and Competence",
        pt: "Diligência e Competência"
      },
      tagline: {
        es: "Estudio riguroso, plazos al día y actualización constante.",
        en: "Rigorous study, prompt deadlines, and continuous learning.",
        pt: "Estudo rigoroso, cumprimento de prazos e atualização contínua."
      },
      descTechnical: {
        es: "Deber de capacitarse permanentemente, estudiar minuciosamente los asuntos encomendados y atender oportunamente los términos procesales. Quien carezca de idoneidad técnica en un área debe abstenerse de asumirla (Ley 1123/2007 Art. 34 num. 1 y 2).",
        en: "Duty of lifelong technical competence, thorough analysis of legal matters, and timely filing. One must decline cases outside one’s competence (Law 1123/2007 Art. 34).",
        pt: "Dever de capacitação técnica constante, estudo diligente dos autos e cumprimento estrito dos prazos processuais (Lei 1123/2007 Art. 34)."
      },
      descSimple: {
        es: "Hacer la tarea bien y a tiempo. No dejar que se venza un recurso por pereza o descuido. Si no dominas un tema complejo (por ejemplo, derecho penal internacional o patentes), dilo con humildad.",
        en: "Do your homework thoroughly and on time. Never let an appeal expire due to carelessness. If you lack expertise in an area, decline the case.",
        pt: "Fazer o trabalho com esmero e no prazo. Não perder prazos por descuido. Se não domina uma matéria específica, recuse com honestidade."
      },
      example: {
        es: "Dejar precluir el término de 3 días para apelar una sentencia adversa porque el abogado olvidó revisar la plataforma digital de la rama judicial.",
        en: "Missing a strict 3-day appellate deadline because the lawyer forgot to check the judicial electronic notification portal.",
        pt: "Perder o prazo de recurso de apelação por esquecer de conferir o diário oficial eletrônico."
      }
    },
    {
      id: "confidencialidad",
      icon: "fa-user-shield",
      number: "05",
      title: {
        es: "Confidencialidad y Secreto Profesional",
        en: "Confidentiality and Legal Privilege",
        pt: "Confidencialidade e Sigilo Profissional"
      },
      tagline: {
        es: "Reserva sagrada e inviolable sobre lo confiado.",
        en: "Inviolable sacred custody over client secrets.",
        pt: "Reserva absoluta e inviolável sobre confidências do cliente."
      },
      descTechnical: {
        es: "Garantía de rango constitucional (Art. 74 CP) y deber disciplinario (Art. 34 num. 4 Ley 1123/2007; Sentencia C-301/2012). Prohíbe divulgar secretos confiados por el cliente, incluso después de culminado el proceso o tras la muerte del mandante.",
        en: "Constitutional privilege (Art. 74 Colombian Constitution; Constitutional Court Ruling C-301/2012) and statutory duty. Prohibits revealing client confidences even after representation ends or upon the client's death.",
        pt: "Garantia constitucional e dever disciplinar. Proíbe a revelação de segredos confiados pelo cliente, mesmo após o término do mandato ou falecimento da parte."
      },
      descSimple: {
        es: "Lo que el cliente te cuenta en privado queda bajo llave para siempre. Nadie se atrevería a hablar con un abogado si temiera que este divulgará sus secretos en redes sociales o a la policía.",
        en: "What your client shares in private remains sealed forever. No one would dare seek legal advice if they feared leaks to the public or authorities.",
        pt: "Tudo o que o cliente confidencia permanece trancado para sempre. Ninguém confiaria em um advogado se houvesse risco de vazamento."
      },
      example: {
        es: "Un cliente te confiesa un hecho vergonzoso de su familia durante una consulta de divorcio. Comentarlo en una reunión social o podcast vulnera gravemente el secreto profesional.",
        en: "A client discloses a painful family secret during a divorce consultation. Disclosing it over coffee or in a podcast is a gross ethical violation.",
        pt: "O cliente revela um segredo pessoal sensível numa consulta de divórcio. Comentar sobre isso numa roda de amigos constitui infração grave."
      }
    },
    {
      id: "respeto",
      icon: "fa-gavel",
      number: "06",
      title: {
        es: "Respeto por la Justicia y los Colegas",
        en: "Respect for Justice and Peers",
        pt: "Respeito pela Justiça e Colegas"
      },
      tagline: {
        es: "Trato digno, rechazo a dilaciones y lealtad con el gremio.",
        en: "Dignified demeanor, no bad-faith delays, collegiality.",
        pt: "Urbanidade, repúdio a manobras protelatórias e lealdade com colegas."
      },
      descTechnical: {
        es: "Tratar con respeto a jueces, fiscales, contrapartes y colegas; prohibición taxativa de temeridad procesal, fraude o dilaciones injustificadas (chicanas), y competencia leal en la captación de clientes (Ley 1123/2007 Arts. 30, 31 y 33).",
        en: "Courteous respect toward judges, opposing counsel, and court staff; total prohibition of bad-faith dilatory tactics ('chicanery'), fraudulent motions, or unethical client solicitation (Law 1123/2007 Arts. 30, 31, 33).",
        pt: "Urbanidade com magistrados, promotores e advogados adversos; proibição absoluta de manobras protelatórias ('chicanas') e captação indevida de causas (Lei 1123/2007)."
      },
      descSimple: {
        es: "Jugar limpio en los tribunales. No inventar excusas falsas ni presentar tutelas repetitivas solo para frenar una orden judicial. Tratar con caballerosidad y respeto a los demás abogados.",
        en: "Play fair in court. Do not invent fake excuses or spam frivolous motions just to stall a ruling. Treat opposing colleagues with dignity.",
        pt: "Jogar limpo no tribunal. Não criar manobras mentirosas nem encher o processo de incidentes infundados para atrasar a decisão. Respeitar os colegas."
      },
      example: {
        es: "Presentar un certificado médico falso para aplazar una audiencia en la que tu cliente no tiene argumentos para defenderse.",
        en: "Submitting a fabricated sick note to force a hearing adjournment when your client has no viable legal defense.",
        pt: "Apresentar atestado médico falso para adiar uma audiência em que seu cliente não tem chances de vitória."
      }
    }
  ],

  // Las 4 Relaciones y Deberes
  relations: [
    {
      id: "cliente",
      icon: "fa-user-tie",
      title: {
        es: "Con el Cliente",
        en: "With the Client",
        pt: "Com o Cliente"
      },
      duties: {
        es: [
          "Lealtad absoluta y defensa apasionada dentro de la ley.",
          "Información veraz y transparente sobre riesgos y costos.",
          "Secreto profesional perpetuo e inviolable.",
          "Custodia y rendición de cuentas sobre dineros y expedientes."
        ],
        en: [
          "Fierce and loyal defense strictly within the bounds of law.",
          "Transparent reporting of legal risks and clear financial terms.",
          "Perpetual, inviolable confidentiality and attorney-client privilege.",
          "Meticulous custody and accounting of funds and case documents."
        ],
        pt: [
          "Lealdade irrestrita e defesa técnica dentro da legalidade.",
          "Informação honesta sobre os riscos reais e custos da causa.",
          "Sigilo profissional absoluto e contínuo.",
          "Prestação rigorosa de contas de valores e documentos."
        ]
      },
      simpleSummary: {
        es: "Tu cliente deposita su libertad o patrimonio en ti. Debes cuidarlo como a tu propia causa, sin mentirle jamás para cobrarle más.",
        en: "Your client entrusts their freedom or assets to you. Guard their trust as your own, never deceiving them to inflate fees.",
        pt: "O cliente entrega sua liberdade ou patrimônio a você. Cuide da causa com máxima dedicação, sem criar falsas ilusões."
      }
    },
    {
      id: "justicia",
      icon: "fa-landmark",
      title: {
        es: "Con la Administración de Justicia",
        en: "With the Courts & Justice System",
        pt: "Com a Administração da Justiça"
      },
      duties: {
        es: [
          "Veracidad en las afirmaciones de hecho y derecho.",
          "Rechazo categórico a la temeridad procesal y al fraude procesal.",
          "Puntualidad en audiencias y cumplimiento de órdenes legítimas.",
          "Uso ético y de buena fe de las plataformas judiciales digitales (Ley 2213 de 2022)."
        ],
        en: [
          "Truthfulness in allegations of fact and statements of law.",
          "Categorical refusal of bad-faith dilatory tactics and procedural fraud.",
          "Strict punctuality and compliance with lawful judicial orders.",
          "Good-faith usage of electronic judicial platforms (Law 2213 of 2022)."
        ],
        pt: [
          "Veracidade nos fatos e fundamentos apresentados ao juízo.",
          "Repúdio total à má-fé processual e a manobras fraudulentas.",
          "Pontualidade em audiências e acatamento às ordens legais.",
          "Uso ético e de boa-fé dos sistemas eletrônicos da Justiça (Lei 2213 de 2022)."
        ]
      },
      simpleSummary: {
        es: "El abogado es un colaborador de la justicia, no un saboteador del juzgado. El fin no justifica los medios tramposos.",
        en: "A lawyer is an officer of the court, not a saboteur. The end never justifies deceitful procedural tricks.",
        pt: "O advogado é indispensável à administração da justiça, não um sabotador do processo. Fins nobres não justificam fraudes."
      }
    },
    {
      id: "colegas",
      icon: "fa-users-line",
      title: {
        es: "Con los Colegas",
        en: "With Fellow Lawyers",
        pt: "Com os Colegas de Profissão"
      },
      duties: {
        es: [
          "Trato respetuoso y decoroso en audiencia y comunicaciones.",
          "Abstenerse de descalificar profesionalmente a la contraparte en público.",
          "No aprovecharse de errores involuntarios del colega que vulneren el debido proceso.",
          "Competencia leal en la oferta de servicios y fijación de honorarios."
        ],
        en: [
          "Courteous and professional demeanor in hearings and correspondence.",
          "Refraining from personal attacks or derogatory public comments.",
          "Refusing to exploit obvious clerical oversights that defeat due process.",
          "Fair competition in advertising and legal fee arrangements."
        ],
        pt: [
          "Tratamento urbano e respeitoso em audiências e petições.",
          "Não desqualificar o colega perante o cliente ou o público.",
          "Não se valer de lapsos materiais involuntários para burlar o contraditório.",
          "Concorrência leal na precificação e captação de clientes."
        ]
      },
      simpleSummary: {
        es: "Los abogados somos adversarios de ideas en el juicio, no enemigos personales en la vida. La fraternidad profesional engrandece el derecho.",
        en: "Lawyers are intellectual opponents in court, not personal enemies in life. Collegiality ennobles the rule of law.",
        pt: "Advogados debatem teses opostas em juízo, mas não são inimigos pessoais. O respeito mútuo fortalece toda a classe."
      }
    },
    {
      id: "sociedad",
      icon: "fa-earth-americas",
      title: {
        es: "Con la Sociedad",
        en: "With Society",
        pt: "Com a Sociedade"
      },
      duties: {
        es: [
          "Defensa irrestricta de los Derechos Humanos y el Estado Social de Derecho.",
          "Promoción de la resolución pacífica de conflictos y conciliación.",
          "Prevención del litigio innecesario y descongestión judicial.",
          "Función social de la abogacía como puente de paz y equidad."
        ],
        en: [
          "Uncompromising defense of Human Rights and democratic Rule of Law.",
          "Active promotion of peaceful conflict resolution and mediation.",
          "Preventing unnecessary litigation to alleviate court congestion.",
          "Upholding the social mission of law as an instrument of peace and equity."
        ],
        pt: [
          "Defesa intransigente dos Direitos Humanos e do Estado de Direito.",
          "Incentivo à mediação e à solução consensual de conflitos.",
          "Prevenção de litígios temerários e desafogo do Judiciário.",
          "Exercício da função social da advocacia em prol da paz e da justiça."
        ]
      },
      simpleSummary: {
        es: "El abogado debe ser un pacificador social. Si un pleito puede arreglarse con un buen acuerdo justo, es mejor que años de pleitos desgastantes.",
        en: "A lawyer should be a peacebuilder. If a dispute can be settled fairly through dialogue, it is far better than years of painful litigation.",
        pt: "O advogado deve ser um construtor de paz. Um acordo justo e dialogado é sempre melhor que anos de litígio desgastante."
      }
    }
  ],

  // Régimen Disciplinario y Sanciones (Ley 1123 de 2007)
  sanctions: {
    authority: {
      es: "Comisión Nacional de Disciplina Judicial (desde el 13 de enero de 2021, reemplazó a la Sala Disciplinaria del Consejo Superior de la Judicatura).",
      en: "National Judicial Discipline Commission (operating since Jan 13, 2021, replacing the Disciplinary Chamber of the Superior Council of Judicature).",
      pt: "Comissão Nacional de Disciplina Judicial (em exercício desde 13 de janeiro de 2021, substituindo o Conselho Superior da Magistratura)."
    },
    tiers: [
      {
        level: 1,
        code: "censura",
        badge: "Nivel 1",
        title: {
          es: "Censura",
          en: "Censure / Reprimand",
          pt: "Censura / Advertência Pública"
        },
        desc: {
          es: "Reprobación pública y formal por escrito sobre la falta cometida. Queda registrada en los antecedentes disciplinarios del abogado.",
          en: "Public and formal written reprimand for the ethical misconduct. Permanently recorded in the lawyer's professional record.",
          pt: "Reprovação formal e pública pela infração cometida, com anotação no prontuário funcional do profissional."
        },
        gravity: "Faltas leves / Primera infracción con atenuantes",
        color: "#C084FC"
      },
      {
        level: 2,
        code: "multa",
        badge: "Nivel 2",
        title: {
          es: "Multa Económica",
          en: "Monetary Fine",
          pt: "Multa Pecuniária"
        },
        desc: {
          es: "Sanción económica entre 1 y 100 Salarios Mínimos Mensuales Legales Vigentes (SMLMV), tasada según la gravedad y el beneficio obtenido. Puede imponerse de forma autónoma o concurrente con suspensión.",
          en: "Monetary penalty ranging between 1 and 100 Legal Monthly Minimum Wages (approx. depending on statutory baseline), assessed according to severity. Can be imposed standalone or jointly with suspension.",
          pt: "Penalidade financeira de 1 a 100 salários mínimos vigentes, graduada pela gravidade do fato e eventuais vantagens auferidas. Pode cumular com suspensão."
        },
        gravity: "Faltas de mediana gravedad / Perjuicio patrimonial",
        color: "#F472B6"
      },
      {
        level: 3,
        code: "suspension",
        badge: "Nivel 3",
        title: {
          es: "Suspensión del Ejercicio",
          en: "Suspension from Practice",
          pt: "Suspensão do Exercício Profissional"
        },
        desc: {
          es: "Prohibición absoluta de ejercer la abogacía y litigar durante un término que oscila entre 2 meses y 3 años. Si la falta involucra recursos o representación de entidades públicas, la suspensión es de 6 meses a 5 años.",
          en: "Strict prohibition from practicing law or appearing in court for a term between 2 months and 3 years. If the offense involves public funds or state entities, suspension spans 6 months to 5 years.",
          pt: "Interdição total de advogar e postular em juízo pelo período de 2 meses a 3 anos. Em casos envolvendo recursos ou entidades públicas, varia de 6 meses a 5 anos."
        },
        gravity: "Faltas graves / Deslealtad procesal o abandono injustificado",
        color: "#E11D48"
      },
      {
        level: 4,
        code: "exclusion",
        badge: "Nivel 4 (Máxima Sanción)",
        title: {
          es: "Exclusión de la Profesión",
          en: "Disbarment / Exclusion",
          pt: "Exclusão dos Quadros da Advocacia"
        },
        desc: {
          es: "Cancelación definitiva de la tarjeta profesional e inhabilitación perpetua para el ejercicio de la abogacía. La rehabilitación judicial solo puede solicitarse trascurrido un riguroso lapso de años y bajo condiciones excepcionales.",
          en: "Permanent cancellation of the legal license and total disqualification from legal practice. Reinstatement can only be petitioned after several years under strict statutory conditions.",
          pt: "Cancelamento definitivo do registro profissional e cassação do direito de advogar. A reabilitação somente é admitida após longos anos e condições extraordinárias."
        },
        gravity: "Faltas gravísimas / Dolo manifiesto / Delitos dolosos en ejercicio",
        color: "#9F1239"
      }
    ],
    graduationFactors: {
      mitigating: {
        es: [
          "Confesar la falta espontáneamente antes de la formulación formal de pliego de cargos.",
          "Reparar voluntariamente e integralmente el daño o perjuicio patrimonial causado al cliente.",
          "Ausencia total de antecedentes disciplinarios o sancionatorios previos.",
          "Haber actuado bajo legítima coacción o confusión excusable sobre la interpretación jurídica."
        ],
        en: [
          "Spontaneous confession before formal disciplinary charges are preferred.",
          "Voluntary and full restitution of damage or loss caused to the client.",
          "Flawless prior professional and disciplinary record.",
          "Demonstrating legitimate excusable confusion or reasonable legal doubt."
        ],
        pt: [
          "Confissão espontânea antes da formulação da acusação disciplinar.",
          "Reparação voluntária e integral do prejuízo econômico causado ao cliente.",
          "Histórico profissional ilibado, sem antecedentes disciplinares prévios.",
          "Comprovada boa-fé ou erro escusável na interpretação da lei."
        ]
      },
      aggravating: {
        es: [
          "Vulnerar derechos fundamentales o garantías constitucionales del cliente o terceros.",
          "Apropiarse o utilizar indebidamente dineros, títulos o documentos entregados en razón del encargo.",
          "Aprovecharse deliberadamente de la inexperiencia, necesidad extrema o ignorancia de la víctima.",
          "Reincidencia en la comisión de faltas disciplinarias dentro de los periodos de ley.",
          "Actuar con premeditación y dolo para burlar la administración de justicia."
        ],
        en: [
          "Violating fundamental constitutional rights of the client or opposing parties.",
          "Misappropriating funds, property, or confidential records entrusted by the client.",
          "Exploiting the client's financial distress, inexperience, or ignorance.",
          "Recidivism or repeated disciplinary sanctions.",
          "Premeditated malice to defraud the courts or the administration of justice."
        ],
        pt: [
          "Violação de direitos fundamentais ou garantias constitucionais do cliente.",
          "Apropriação indébita de valores, documentos ou títulos confiados.",
          "Exploração deliberada da vulnerabilidade, carência ou ignorância do constituinte.",
          "Reincidência em faltas disciplinares.",
          "Atuação premeditada com dolo para fraudar a Justiça."
        ]
      }
    }
  },

  // Sección Era Digital, IA y Ponencias del V Congreso
  digitalEra: {
    laws: {
      es: "Ley 2213 de 2022 (Vigencia permanente de las TIC en la rama judicial en Colombia).",
      en: "Law 2213 of 2022 (Permanent statutory framework for ICT in judicial proceedings).",
      pt: "Lei 2213 de 2022 (Marco legal permanente para uso de TIC no Judiciário)."
    },
    principles: [
      {
        id: "ia_alucinacion",
        icon: "fa-robot",
        title: {
          es: "Supervisión Humana y Riesgo de Alucinaciones en IA",
          en: "Human Oversight & AI Hallucination Risks",
          pt: "Supervisão Humana e Alucinações de IA"
        },
        desc: {
          es: "El uso de modelos de lenguaje (ChatGPT, Claude, etc.) para redactar alegatos no exime al abogado de su deber indelegable de diligencia. Citar jurisprudencia inventada o inexistente por alucinación algorítmica constituye fraude procesal y falta gravísima contra la lealtad con la justicia.",
          en: "Using LLMs to draft pleadings does not relieve counsel of non-delegable duties of diligence. Citing fake or hallucinated case law constitutes procedural fraud and a severe disciplinary offense.",
          pt: "O uso de IA generativa para redigir peças não isenta o advogado do dever indelegável de diligência. Citar decisões ou precedentes inexistentes gerados por alucinação constitui má-fé e fraude processual."
        },
        simpleTip: {
          es: "«Si la IA escribe tu memorial, tus ojos humanos deben verificar cada número de sentencia y cada artículo antes de firmar con tu tarjeta profesional.»",
          en: "'If AI drafts your motion, your human eyes must verify every citation and docket number before signing.'",
          pt: "'Se a IA redigir sua petição, seus olhos humanos devem conferir cada número de acórdão e artigo antes de assinar.'"
        }
      },
      {
        id: "nube_secreto",
        icon: "fa-cloud-lock",
        title: {
          es: "Ciberseguridad y Secreto Profesional en la Nube",
          en: "Cybersecurity & Cloud Confidentiality",
          pt: "Cibersegurança e Sigilo na Nuvem"
        },
        desc: {
          es: "Subir expedientes confidenciales a herramientas públicas o chats de IA que utilizan los datos para entrenamiento vulnera el secreto profesional (Art. 74 CP). Se exige cifrado de extremo a extremo y acuerdos de confidencialidad en servicios SaaS.",
          en: "Uploading confidential client files into public AI tools that use prompt data for model training breaches attorney-client privilege. Strong encryption and enterprise data privacy agreements are mandatory.",
          pt: "Inserir dados confidenciais de clientes em ferramentas públicas de IA que usam o texto para treinamento viola o sigilo profissional. É indispensável criptografia e ferramentas com privacidade corporativa garantida."
        },
        simpleTip: {
          es: "«No subas datos secretos, nombres reales ni confesiones delicadas a chats de IA gratuitos que usen tus preguntas para aprender.»",
          en: "'Never upload real names, financial data, or sensitive confessions into free AI tools that retain user prompts.'",
          pt: "'Não envie nomes reais, dados bancários ou segredos a chats públicos de IA que guardam conversas para treinamento.'"
        }
      },
      {
        id: "bioetica",
        icon: "fa-dna",
        title: {
          es: "Bioética Algorítmica y Dignidad Humana (V Congreso)",
          en: "Algorithmic Bioethics & Human Dignity",
          pt: "Bioética Algorítmica e Dignidade Humana"
        },
        desc: {
          es: "Basado en la ponencia de los Dres. Ávila Carrazco y Ávila Carrasco (V Congreso Internacional de Ética). La bioética algorítmica postula que los algoritmos en la justicia no deben discriminar ni deshumanizar a los justiciables. Las decisiones de justicia deben centrarse en el cuidado de las personas.",
          en: "Inspired by the V International Ethics Congress presentations. Algorithmic bioethics dictates that justice algorithms must never discriminate or dehumanize litigants. Judicial outcomes must remain person-centered.",
          pt: "Fundamentado no V Congresso Internacional de Ética. A bioética algorítmica exige que os sistemas algorítmicos no Direito não discriminem nem desumanizem as partes, preservando o valor intrínseco da dignidade humana."
        },
        simpleTip: {
          es: "«La tecnología es para servir a la justicia humana, no para reemplazar la empatía y la compasión que requiere el dolor ajeno.»",
          en: "'Technology is built to serve human justice, never to replace the empathy and compassion demanded by human conflict.'",
          pt: "'A tecnologia deve servir à justiça humana, jamais substituir a empatia e o discernimento diante da dor alheia.'"
        }
      },
      {
        id: "redes_sociales",
        icon: "fa-bullhorn",
        title: {
          es: "Redes Sociales, Publicidad y Decoro Profesional",
          en: "Social Media, Legal Advertising & Decorum",
          pt: "Redes Sociais, Publicidade e Decoro"
        },
        desc: {
          es: "La publicidad del abogado en TikTok, Instagram o LinkedIn debe ser sobria, pedagógica y veraz. Está prohibido el sensacionalismo, prometer resultados infalibles o denigrar colegas para captar clientela de forma desleal (Ley 1123/2007 Art. 31).",
          en: "Lawyer presence on social media must be educational, dignified, and truthful. Flashy sensationalism, guaranteeing verdicts, or disparaging colleagues to poach clients is strictly prohibited.",
          pt: "A publicidade profissional nas redes sociais deve ter caráter meramente informativo e sóbrio. É vedada a mercantilização, promessas infalíveis de êxito ou ridicularização de colegas."
        },
        simpleTip: {
          es: "«Educa en redes sociales con claridad, pero no conviertas la justicia en un espectáculo de promesas vacías.»",
          en: "'Educate on social media with clarity, but do not turn justice into a circus of impossible promises.'",
          pt: "'Eduque seu público com clareza, mas não transforme o Direito em um balcão de promessas vazias.'"
        }
      }
    ]
  },

  // Glosario Jurídico en Lenguaje Simple (Ciudadano)
  glossary: [
    {
      term: {
        es: "Deontología Jurídica",
        en: "Legal Deontology",
        pt: "Deontologia Jurídica"
      },
      simpleDef: {
        es: "La ética aplicada a los abogados: las reglas de lo que está bien y lo que está mal en el trabajo del derecho.",
        en: "Ethics applied to legal practice: the rules defining moral and professional duty in the practice of law.",
        pt: "A ética aplicada à advocacia: as regras sobre o que é correto e incorreto no exercício da profissão."
      },
      technicalDef: {
        es: "Tratado o ciencia de los deberes y normas morales que rigen imperativamente el ejercicio de los profesionales del derecho (Ley 1123 de 2007).",
        en: "The branch of ethics and legal philosophy governing the mandatory duties, obligations, and professional standards of legal practitioners.",
        pt: "Conjunto de princípios éticos e normas legais imperativas que regem o comportamento e os deveres do advogado perante a sociedade."
      }
    },
    {
      term: {
        es: "Secreto Profesional",
        en: "Attorney-Client Privilege / Confidentiality",
        pt: "Sigilo Profissional"
      },
      simpleDef: {
        es: "El candado que protege lo que le cuentas a tu abogado. Ni la policía ni los jueces pueden obligarlo a contarlo.",
        en: "The absolute lock guarding what you disclose to your lawyer. Neither courts nor police can force them to breach it.",
        pt: "O escudo absoluto que protege tudo o que você revela ao seu advogado. Nem juízes nem a polícia podem obrigá-lo a falar."
      },
      technicalDef: {
        es: "Derecho fundamental e inmunidad procesal consagrada en el artículo 74 de la Constitución Política de Colombia y Sentencia C-301 de 2012.",
        en: "Constitutional privilege and evidentiary immunity protected by Article 74 of the Colombian Constitution and precedent C-301 of 2012.",
        pt: "Garantia constitucional e prerrogativa profissional que assegura a inviolabilidade das confidências feitas pelo cliente ao advogado."
      }
    },
    {
      term: {
        es: "Temeridad Procesal (Chicana)",
        en: "Frivolous Litigation / Malicious Delay",
        pt: "Litigância de Má-Fé / Chicana"
      },
      simpleDef: {
        es: "Jugar sucio en un juicio: presentar demandas sabiendo que son falsas o inventar trámites inútiles solo para demorar el proceso y cansar a la otra persona.",
        en: "Playing dirty in court: filing claims known to be baseless or spamming unnecessary motions solely to stall and wear down the opposing party.",
        pt: "Deslealdade processual: ajuizar ações sabidamente descabidas ou criar incidentes falsos apenas para procrastinar o julgamento."
      },
      technicalDef: {
        es: "Conducta abusiva del derecho procesal tipificada en el Estatuto Disciplinario consistente en litigar a sabiendas de carecer de fundamento fáctico o jurídico.",
        en: "Abuse of legal process involving litigation pursued in bad faith without reasonable factual or legal foundation.",
        pt: "Uso abusivo dos meios processuais para protelar injustificadamente o cumprimento da lei ou induzir o juiz a erro."
      }
    },
    {
      term: {
        es: "Conflicto de Intereses",
        en: "Conflict of Interest",
        pt: "Conflito de Interesses"
      },
      simpleDef: {
        es: "Querer servir a dos amos opuestos al mismo tiempo. No puedes aconsejar al comprador y al vendedor del mismo negocio si tienen diferencias.",
        en: "Attempting to serve two competing masters at once. You cannot advise both buyer and seller in a contested dispute.",
        pt: "Tentar servir a dois lados opostos ao mesmo tempo. Não é permitido defender simultaneamente partes com interesses antagônicos."
      },
      technicalDef: {
        es: "Situación en la cual la lealtad e independencia del abogado se encuentran comprometidas por representar intereses contrapuestos o por beneficios personales.",
        en: "Circumstance wherein an attorney's fiduciary loyalty and professional independence are compromised by representing divergent interests.",
        pt: "Situação na qual a fidelidade e a isenção do patrono ficam comprometidas pela coexistência de interesses inconciliáveis."
      }
    },
    {
      term: {
        es: "Dolo",
        en: "Malice / Intentional Fraud (Dolus)",
        pt: "Dolo"
      },
      simpleDef: {
        es: "Hacer el mal a propósito, sabiendo exactamente que está prohibido y queriendo causar el daño.",
        en: "Doing wrong on purpose, fully conscious that it is unlawful and desiring the harmful result.",
        pt: "Cometer o ato ilícito de propósito, ciente da ilegalidade e com a intenção deliberada de causar o dano."
      },
      technicalDef: {
        es: "Forma de culpabilidad caracterizada por el conocimiento de los hechos constitutivos de falta disciplinaria y la voluntad libre y consciente de ejecutarlos.",
        en: "The highest grade of fault where the agent acts with knowledge of the unlawful elements of the offense and conscious volition to execute it.",
        pt: "Elemento subjetivo em que o agente tem plena consciência da ilicitude de sua conduta e deseja ativamente o resultado lesivo."
      }
    },
    {
      term: {
        es: "Culpa / Negligencia",
        en: "Negligence / Lack of Diligence",
        pt: "Culpa / Negligência"
      },
      simpleDef: {
        es: "Meter la pata por descuido, pereza o falta de cuidado, aunque no tuvieras la intención de causar daño.",
        en: "Failing one's duty through carelessness, laziness, or lack of attention, even without malice.",
        pt: "Causar prejuízo por desleixo, descuido ou imprudência, mesmo sem a intenção direta de prejudicar."
      },
      technicalDef: {
        es: "Infracción al deber objetivo de cuidado que era exigible al profesional del derecho conforme a la lex artis.",
        en: "Breach of the objective standard of professional care required from a reasonably competent attorney.",
        pt: "Descumprimento do dever objetivo de zelo e prudência exigível do profissional do Direito na condução da causa."
      }
    },
    {
      term: {
        es: "Incompatibilidad",
        en: "Legal Incompatibility",
        pt: "Incompatibilidade"
      },
      simpleDef: {
        es: "Cargos o situaciones que por ley te impiden trabajar como abogado particular (por ejemplo, si eres juez activo o congresista en ciertas materias).",
        en: "Public offices or statuses that by law bar an individual from practicing private advocacy (e.g., active judges or public officers).",
        pt: "Cargos públicos ou situações que impedem legalmente o indivíduo de exercer a advocacia privada (ex: juízes em exercício)."
      },
      technicalDef: {
        es: "Imposibilidad jurídica temporal o permanente de ejercer la profesión debido al ejercicio concomitante de funciones públicas o situaciones regladas en la Ley 1123/2007 Art. 29.",
        en: "Statutory bar precluding legal representation due to concurrent holding of public judicial or administrative offices.",
        pt: "Proibição legal total do exercício da advocacia decorrente da titularidade de determinadas funções públicas."
      }
    },
    {
      term: {
        es: "Bioética Algorítmica",
        en: "Algorithmic Bioethics",
        pt: "Bioética Algorítmica"
      },
      simpleDef: {
        es: "Cuidar que la inteligencia artificial y las computadoras respeten la dignidad de las personas de carne y hueso, sin discriminarlas por números.",
        en: "Ensuring artificial intelligence and algorithms respect the intrinsic dignity of human beings, without unfair automated discrimination.",
        pt: "Garantir que a inteligência artificial e os algoritmos respeitem a dignidade das pessoas de carne e osso, sem discriminações automáticas."
      },
      technicalDef: {
        es: "Disciplina que estudia la ética en el desarrollo y despliegue de modelos algorítmicos para garantizar la no discriminación, la dignidad humana y el principio de no maleficencia en la sociedad digital.",
        en: "Subfield of ethics governing algorithmic design and automated decision systems to guarantee human dignity, equity, and non-maleficence.",
        pt: "Ramo da ética aplicada que analisa os sistemas algorítmicos e a IA para preservar os direitos fundamentais e evitar vieses discriminatórios."
      }
    }
  ],

  // Simulador de Casos y Dilemas Interactivos
  dilemmas: [
    {
      id: "caso_1",
      title: {
        es: "Caso 1: El secreto ante terceros (De la Infografía)",
        en: "Case 1: Confidentiality Against Third Parties (From Infographic)",
        pt: "Caso 1: O Sigilo Diante de Terceiros (Do Infográfico)"
      },
      situation: {
        es: "Un cliente te confía información altamente confidencial durante una consulta preliminar. Luego, un familiar cercano de tu cliente te solicita que le reveles esa información asegurando que tiene «buenas intenciones» y que será útil para ayudar al cliente.",
        en: "A client discloses sensitive confidential details in a preliminary consultation. Later, the client's close relative begs you to share that information, claiming pure intentions to 'help' the client.",
        pt: "Um cliente confidencia informações confidenciais numa consulta. Logo depois, um familiar próximo pede que você conte tudo, alegando 'boas intenções' para ajudar o cliente."
      },
      source: "Infografía Oficial de Ética Profesional",
      options: [
        {
          id: "opt_a",
          text: {
            es: "A. Revelarla si crees que el familiar tiene intenciones nobles y sinceras.",
            en: "A. Reveal it if you genuinely believe the relative means well.",
            pt: "A. Revelar se você acreditar que o familiar tem intenções nobres e sinceras."
          },
          isCorrect: false,
          explanation: {
            es: "Incorrecto. Las supuestas «buenas intenciones» de un tercero jamás autorizan a violar el secreto profesional. Solo el titular del secreto puede liberar al abogado, o una orden de ley estricta.",
            en: "Incorrect. Supposed 'good intentions' of a third party never waive legal confidentiality. Only the client can authorize release.",
            pt: "Incorreto. Supostas 'boas intenções' de terceiros nunca autorizam a quebra do sigilo profissional. Apenas o cliente pode liberar o advogado."
          },
          penalty: "Censura o Suspensión disciplinaria por violación de reserva (Art. 34 num. 4 Ley 1123/2007)."
        },
        {
          id: "opt_b",
          text: {
            es: "B. Proteger la confidencialidad, evaluar las obligaciones jurídicas aplicables y verificar si existe alguna excepción legal.",
            en: "B. Protect confidentiality, evaluate applicable legal obligations, and verify if any strict statutory exception exists.",
            pt: "B. Proteger a confidencialidade, avaliar as obrigações jurídicas aplicáveis e verificar se existe alguma exceção legal."
          },
          isCorrect: true,
          explanation: {
            es: "¡Correcto! El secreto profesional es inviolable (Art. 74 CP). La regla de oro es guardar reserva absoluta, salvo que concurra una causal legal taxativa (como evitar la consumación inminente de un delito grave, Sentencia C-301/2012).",
            en: "Correct! Legal privilege is inviolable (Art. 74 Constitution). Absolute silence is the default rule unless an extraordinary statutory exception applies (e.g. preventing imminent bodily harm).",
            pt: "Correto! O sigilo profissional é inviolável. A regra basilar é guardar reserva estrita, ressalvadas hipóteses legais expressas e extraordinárias."
          },
          penalty: "Ninguna. Conducta deontológicamente impecable."
        },
        {
          id: "opt_c",
          text: {
            es: "C. Compartir solo una parte pequeña de la información para calmar la angustia del familiar.",
            en: "C. Share only a small part of the facts to appease the relative's anxiety.",
            pt: "C. Compartilhar apenas um resumo breve para acalmar a angústia da família."
          },
          isCorrect: false,
          explanation: {
            es: "Incorrecto. El secreto profesional no admite filtraciones «a medias». Cualquier dato sustraído de la consulta es confidencial.",
            en: "Incorrect. Attorney-client privilege admits no partial leaks. Any confidential detail leaked violates duty.",
            pt: "Incorreto. O sigilo não admite vazamentos graduais. Qualquer dado divulgado quebra a confiança do mandato."
          },
          penalty: "Falta contra la lealtad debida al cliente."
        },
        {
          id: "opt_d",
          text: {
            es: "D. Publicar el caso en redes sociales sin nombrar al cliente para pedir opiniones a la comunidad.",
            en: "D. Post the situation on social media anonymously to crowd-source opinions.",
            pt: "D. Publicar o caso nas redes sociais anonimamente para pedir palpites à comunidade."
          },
          isCorrect: false,
          explanation: {
            es: "Incorrecto. Por el contexto específico, las partes podrían ser fácilmente identificadas, constituyendo negligencia y violación al decoro profesional.",
            en: "Incorrect. Contextual clues often allow parties to be identified, breaching client trust and decorum.",
            pt: "Incorreto. Detalhes contextuais permitem identificar as partes, violando a privacidade e o decoro."
          },
          penalty: "Multa y reproche público."
        }
      ]
    },
    {
      id: "caso_2",
      title: {
        es: "Caso 2: El cliente que pide ocultar una prueba (Del PDF)",
        en: "Case 2: The Client Demanding Evidence Suppression (From PDF)",
        pt: "Caso 2: O Cliente que Exige Ocultar uma Prova (Do PDF)"
      },
      situation: {
        es: "Tu cliente te entrega un contrato original firmado por él que demuestra claramente que sí incumplió la obligación por la que lo están demandando. Te exige: «Guárdese este papel en su cajón o rómpalo, que nadie en el juzgado se puede enterar».",
        en: "Your client hands you an original signed agreement proving he breached the contract at issue. He instructs you: 'Keep this paper locked in your drawer or shred it; no one in court can ever see it.'",
        pt: "Seu cliente entrega um contrato original assinado que comprova o descumprimento da obrigação em disputa. Ele ordena: 'Esconda esse papel ou destrua-o; o juiz nunca pode ver isso'."
      },
      source: "Documento Oficial: Ética Profesional del Abogado (Pág. 4)",
      options: [
        {
          id: "opt_a",
          text: {
            es: "A. Destruir el documento para complacer al cliente, ya que el abogado debe hacer todo lo que el cliente pida.",
            en: "A. Destroy the document to please the client, since an attorney must obey all client wishes.",
            pt: "A. Destruir o documento para atender ao cliente, pois o advogado deve fazer tudo o que o cliente mandar."
          },
          isCorrect: false,
          explanation: {
            es: "Grave error. Destruir u ocultar pruebas rompe el deber de veracidad ante la justicia y constituye el delito de fraude procesal y destrucción de documento (Art. 33 Ley 1123/2007).",
            en: "Fatal error. Concealing or destroying evidence violates duty of candor to tribunals and constitutes procedural fraud and criminal suppression of documents.",
            pt: "Erro gravíssimo. Destruir ou ocultar provas viola o dever de verdade perante o tribunal e constitui fraude processual e crime."
          },
          penalty: "Suspensión de 2 a 3 años o exclusión definitiva de la abogacía."
        },
        {
          id: "opt_b",
          text: {
            es: "B. Explicarle las graves consecuencias de alterar la verdad, negarse tajantemente a destruir el documento y buscar una estrategia de defensa legítima (o renunciar al poder si insiste).",
            en: "B. Explain the severe legal consequences, flatly refuse to suppress evidence, and pursue a lawful defense strategy (or withdraw if he insists).",
            pt: "B. Explicar as graves consequências de fraudar a verdade, recusar categoricamente a ocultação e estruturar uma defesa legítima (ou renunciar se ele insistir)."
          },
          isCorrect: true,
          explanation: {
            es: "¡Excelente! La ética no permite complicidad con el fraude. El abogado debe asesorar al cliente con honestidad, explorar vías como la renegociación o atenuación, y jamás prestarse para ocultar pruebas.",
            en: "Excellent! Legal ethics forbids complicity in fraud. Counsel must steer the client toward legitimate legal defenses, settlement, or withdraw if commanded to commit fraud.",
            pt: "Excelente! A ética não tolera cumplicidade com a fraude. O advogado deve buscar acordos justos ou teses legítimas, recusando manobras ilegais."
          },
          penalty: "Ninguna. Salvaguarda la dignidad de la justicia y la propia profesión."
        },
        {
          id: "opt_c",
          text: {
            es: "C. Ir de inmediato a la fiscalía a denunciar a tu propio cliente por pedirte eso.",
            en: "C. Immediately rush to the prosecutor to report your own client.",
            pt: "C. Ir imediatamente à delegacia denunciar o próprio cliente por ter feito o pedido."
          },
          isCorrect: false,
          explanation: {
            es: "Incorrecto. Traicionarías el secreto profesional de una consulta privada. El abogado no es un informante policial de su cliente; simplemente debe negarse a cometer la ilegalidad.",
            en: "Incorrect. You would breach attorney-client privilege. An attorney is an independent counselor, not an undercover informant against their client.",
            pt: "Incorreto. Você violaria o dever de sigilo. O advogado não é espião da acusação; ele deve orientar, recusar a prática ilícita e, se necessário, renunciar ao mandato."
          },
          penalty: "Violación grave de la lealtad debida al cliente."
        }
      ]
    },
    {
      id: "caso_3",
      title: {
        es: "Caso 3: La oferta del colega «con contactos» en el juzgado (Del PDF)",
        en: "Case 3: The Colleague Offering 'Court Connections' (From PDF)",
        pt: "Caso 3: A Proposta do Colega com 'Contatos' no Tribunal (Do PDF)"
      },
      situation: {
        es: "En los pasillos del palacio de justicia, un colega litigante se te acerca y te dice: «Oye, yo conozco al oficial mayor y al juez de este despacho. Dame $2 millones para ellos y te aseguro que sacan la sentencia a tu favor la próxima semana».",
        en: "In the courthouse corridors, an opposing lawyer whispers: 'I'm close friends with the clerk and the judge. Give me $500 for them, and I guarantee your ruling in our favor next week.'",
        pt: "Nos corredores do fórum, outro advogado cochicha: 'Tenho amigos no gabinete do juiz. Me passe um valor para eles e garanto a sentença favorável na semana que vem'."
      },
      source: "Documento Oficial: Ética Profesional del Abogado (Pág. 4)",
      options: [
        {
          id: "opt_a",
          text: {
            es: "A. Aceptar la propuesta discretamente y cobrarle el dinero al cliente como «gastos imprevistos de trámite».",
            en: "A. Discretely accept the bribe and bill the client as 'unforeseen court processing costs'.",
            pt: "A. Aceitar discretamente e cobrar o valor do cliente como 'despesas extraordinárias do processo'."
          },
          isCorrect: false,
          explanation: {
            es: "Gravísimo delito de cohecho por dar u ofrecer y falta disciplinaria de la más alta gravedad (Art. 33 Ley 1123/2007). Destruye por completo la función social del derecho.",
            en: "Gross bribery crime and most severe disciplinary offense. Totally annihilates the social purpose of the rule of law.",
            pt: "Crime gravíssimo de corrupção e infração disciplinar intolerável. Destrói a dignidade de toda a Justiça."
          },
          penalty: "Exclusión de la profesión y proceso penal con pena de prisión."
        },
        {
          id: "opt_b",
          text: {
            es: "B. Rechazar tajantemente la oferta, manifestarle que litigarás con argumentos legales y pruebas, y poner en conocimiento de las autoridades el hecho si persiste.",
            en: "B. Flatly reject the crooked offer, affirm you will litigate strictly on legal merits and evidence, and report the occurrence to authorities.",
            pt: "B. Recusar terminantemente a oferta ilícita, afirmar que litiga apenas com base na lei e nas provas, e comunicar o fato aos órgãos competentes."
          },
          isCorrect: true,
          explanation: {
            es: "¡Totalmente correcto! Buscar influencias indebidas atenta contra la independencia judicial y el respeto a la justicia. La abogacía honesta se defiende con argumentos y rectitud.",
            en: "Totally correct! Seeking improper influence corrupts judicial independence. Honorable advocacy relies solely on legal merits and evidence.",
            pt: "Correto! O tráfico de influência e a corrupção destroem o Estado de Direito. A boa advocacia se constrói com teses jurídicas e retidão moral."
          },
          penalty: "Ninguna. Actuación honorable acorde a la dignidad de la profesión."
        }
      ]
    },
    {
      id: "caso_4",
      title: {
        es: "Caso 4: Socios en disputa comercial (Del PDF)",
        en: "Case 4: Business Partners in Dispute (From PDF)",
        pt: "Caso 4: Sócios em Conflito Comercial (Do PDF)"
      },
      situation: {
        es: "Carlos y Andrés fundaron una empresa juntos y tú has sido su abogado de confianza por años. Hoy entran a tu oficina gritando porque Andrés acusa a Carlos de desviar dineros de la sociedad. Ambos te dicen: «Queremos que tú nos representes a ambos en la negociación porque nos conoces a los dos».",
        en: "Carlos and Andres built a business together and you've been their counsel for years. They storm into your office: Andres accuses Carlos of embezzlement. Both declare: 'We want you to represent both of us because you know us both.'",
        pt: "Dois sócios de uma empresa que você assessora há anos entram em litígio: um acusa o outro de desvio de fundos. Ambos pedem que você represente os dois na partilha."
      },
      source: "Documento Oficial: Ética Profesional del Abogado (Pág. 4)",
      options: [
        {
          id: "opt_a",
          text: {
            es: "A. Aceptar representar a ambos para cobrar el doble de honorarios y redactar el acuerdo a tu gusto.",
            en: "A. Agree to represent both to charge double fees and draft the agreement however you see fit.",
            pt: "A. Aceitar representar ambos para cobrar o dobro de honorários."
          },
          isCorrect: false,
          explanation: {
            es: "Existe un conflicto de interés insalvable. El abogado no puede ser leal a ambos cuando sus patrimonios e intereses chocan frontalmente (Ley 1123/2007 Art. 34 num. 3).",
            en: "Unwaivable conflict of interest. An attorney cannot maintain equal loyalty when clients' economic interests clash directly.",
            pt: "Conflito de interesses intransponível. É impossível manter lealdade a partes com interesses antagônicos."
          },
          penalty: "Suspensión del ejercicio profesional por falta contra la lealtad."
        },
        {
          id: "opt_b",
          text: {
            es: "B. Explicarles con claridad el conflicto de intereses: negarse a representarlos simultáneamente en el litigio y recomendarles que cada uno contrate a su propio abogado independiente (o actuar solo como mediador imparcial si ambos lo solicitan y no hay proceso contradictorio).",
            en: "B. Candidly explain the conflict of interest: decline dual representation, advising each to retain independent counsel (or act purely as neutral mediator if permissible).",
            pt: "B. Explicar com clareza o conflito de interesses: recusar o patrocínio conjunto no litígio e orientar que cada um contrate seu próprio advogado independente."
          },
          isCorrect: true,
          explanation: {
            es: "¡Respuesta ética exacta! La lealtad no se divide. Advertir el conflicto a tiempo y abstenerse de representar intereses contrapuestos es la esencia de la independencia.",
            en: "Spot-on ethical response! Fiduciary loyalty cannot be split. Disclosing the conflict and stepping down preserves professional integrity.",
            pt: "Decisão correta! A lealdade processual é indivisível. Recusar a representação simultânea protege ambas as partes e o profissional."
          },
          penalty: "Ninguna. Cumplimiento ejemplar del régimen de incompatibilidades e intereses."
        }
      ]
    },
    {
      id: "caso_5",
      title: {
        es: "Caso 5: La IA que inventó una sentencia (Del Documento Digital)",
        en: "Case 5: The AI Hallucinating Fake Citations (From Digital Skill)",
        pt: "Caso 5: A IA que Inventou Jurisprudência Falsa (Do Documento Digital)"
      },
      situation: {
        es: "Estás corto de tiempo para presentar una demanda importante. Usas una herramienta gratuita de Inteligencia Artificial generativa y te redacta un alegato brillante con citas de una supuesta «Sentencia T-892 de 2023 de la Corte Constitucional» que te da la razón absoluta.",
        en: "You are rushing against a strict deadline. You ask a free generative AI tool for a brief, and it produces eloquent arguments citing a nonexistent 'Ruling T-892/2023 of the Constitutional Court' that gives you 100% victory.",
        pt: "Aflito com o prazo, você pede que uma IA gratuita redija sua petição. Ela entrega um texto brilhante citando um suposto acórdão paradigmático que garante sua vitória."
      },
      source: "tica_profesional_del_abogado_digital.md & Ley 2213 de 2022",
      options: [
        {
          id: "opt_a",
          text: {
            es: "A. Radicar la demanda inmediatamente sin verificar, confiando en que la computadora sabe más que uno.",
            en: "A. File the pleading immediately without checking, assuming computers don't make mistakes.",
            pt: "A. Protocolar a petição imediatamente sem checar, confiando cegamente no texto da máquina."
          },
          isCorrect: false,
          explanation: {
            es: "Alucinación de IA. Como ocurrió en sonados casos judiciales internacionales, presentar sentencias inexistentes engaña al juez, constituye temeridad procesal y falsedad, y genera severas sanciones a la tarjeta profesional.",
            en: "AI Hallucination. Filing fabricated citations misleads the court, constitutes procedural deception, and results in heavy court sanctions and professional discipline.",
            pt: "Alucinação de IA. Protocolar precedentes fictícios induz o magistrado a erro, configurando litigância de má-fé e infração disciplinar grave."
          },
          penalty: "Suspensión del ejercicio profesional y multa por temeridad procesal (Ley 1123/2007 Art. 33)."
        },
        {
          id: "opt_b",
          text: {
            es: "B. Verificar personalmente en la relatoría oficial de la Corte la existencia y texto de cada sentencia, contrastar las normas y asumir la responsabilidad personal del escrito.",
            en: "B. Personally verify each citation and precedent in official court repositories, validate quotes, and maintain human responsibility.",
            pt: "B. Conferir pessoalmente a existência de cada julgado nos repositórios oficiais dos tribunais e assumir a responsabilidade direta pelo conteúdo."
          },
          isCorrect: true,
          explanation: {
            es: "¡Excelente! La IA es solo una herramienta de apoyo, nunca un sustituto de la mente y la diligencia del abogado. El abogado es el único responsable ético y legal de lo que firma.",
            en: "Excellent! AI is merely assistive technology, never a substitute for human diligence and critical thinking. The lawyer is strictly liable for every signed statement.",
            pt: "Excelente! A IA é ferramenta de apoio, jamais substituta do raciocínio e da diligência humana. O profissional responde pessoalmente por cada linha assinada."
          },
          penalty: "Ninguna. Aplicación perfecta de la diligencia digital."
        }
      ]
    }
  ],

  // Base de Conocimiento para Consultas Libres (Skill Inteligente)
  knowledgeBase: [
    {
      keywords: ["confiesa", "delito", "crimen", "culpable", "asesinato", "robo", "secreto", "confesar", "confess", "crime", "guilty", "confessou", "culpado"],
      topic: "Confesión del cliente y Secreto Profesional",
      role: "Abogado Litigante y Defensor",
      legalBasis: "Constitución Política de Colombia Art. 74; Sentencia C-301 de 2012; Ley 1123 de 2007 Art. 34 numeral 4.",
      law: {
        es: "El secreto profesional tiene rango constitucional inviolable (Art. 74 CP). Si un cliente te confiesa en consulta que cometió un delito pretérito, estás amparado y obligado por la reserva legal: no puedes ser obligado a declarar contra él ni a delatarlo.",
        en: "Legal privilege has absolute constitutional rank (Art. 74). If a client confesses past wrongdoing during confidential consultation, the lawyer is legally bound by confidentiality and cannot be compelled to testify.",
        pt: "O sigilo profissional tem estatura constitucional inviolável. Se o cliente confessar um crime passado na consulta, o advogado está estritamente obrigado ao sigilo, não podendo ser testemunha."
      },
      ethics: {
        es: "Defender a una persona culpable no significa aplaudir el delito ni mentirle al juez diciendo que es un santo. Significa asegurar que se le respete el debido proceso, que no se violen sus garantías fundamentales y que la pena sea justa.",
        en: "Defending a guilty client does not mean endorsing the offense or lying to the court. It means ensuring due process, constitutional guarantees, and fair adjudication.",
        pt: "Defender quem cometeu um delito não significa mentir ao juiz nem forjar álibis falsos. Significa assegurar o devido processo legal e uma pena justa."
      },
      balance: {
        es: "Equilibrio: Puedes exigir que la fiscalía pruebe su acusación sin inventar coartadas falsas. Jamás presentes testigos mentirosos, pero tampoco reveles lo confesado.",
        en: "Balance: Put the prosecution to its proof without presenting perjured testimony. Never fabricate false alibis, but never betray the client's confidence.",
        pt: "Equilíbrio: Exigir que a acusação prove os fatos sem inventar álibis mentirosos. Jamais cometer perjúrio, mas nunca trair o cliente."
      },
      simple: {
        es: "Tu abogado es tu defensor legal, no tu cómplice de mentiras ni un policía encubierto. Puede exigir que el juicio sea limpio, pero no puede subir al estrado a inventar cuentos que sabe que son falsos.",
        en: "Your lawyer is your legal shield, not an accomplice in lies, nor an undercover cop. They ensure a fair trial, but cannot invent false stories in court.",
        pt: "Seu advogado é seu defensor técnico, não um cúmplice de mentiras nem um delator. Ele garante um julgamento justo, mas não pode inventar farsas no tribunal."
      },
      action: {
        es: "1. Mantén estricta reserva de lo escuchado.\n2. Diseña la estrategia enfocada en la legalidad de la prueba y la correcta tipificación.\n3. Advierte al cliente que no tolerarás falsos testimonios.\n4. Si el cliente insiste en cometer un delito futuro inminente contra la vida de alguien, la Sentencia C-301 de 2012 contempla la excepción para salvaguardar bienes jurídicos supremos.",
        en: "1. Preserve strict confidentiality.\n2. Focus the defense on procedural regularity and evidentiary sufficiency.\n3. Make clear you will not suborn perjury.\n4. If the client threatens imminent future crimes against life, exceptional privilege carve-outs may apply (Ruling C-301/2012).",
        pt: "1. Mantenha sigilo absoluto sobre a confissão.\n2. Foque a defesa na legalidade probatória e no devido processo.\n3. Advirta que não tolerará testemunhas falsas.\n4. Se houver ameaça iminente de dano à vida humana futura, avalie as exceções legais extraordinárias."
      },
      risk: "Bajo si mantienes reserva y no mientes. Altísimo (Exclusión) si aportas pruebas falsas o sobornas testigos."
    },
    {
      keywords: ["ia", "chatgpt", "inteligencia artificial", "claude", "alucinacion", "memorial", "sentencia falsa", "deepfake", "artificial intelligence", "hallucination"],
      topic: "Uso de Inteligencia Artificial y Tecnologías en la Práctica Jurídica",
      role: "Abogado / Estudiante / Servidor Judicial",
      legalBasis: "Ley 2213 de 2022 (Uso de TIC en la Justicia); Ley 1123 de 2007 Arts. 28 num. 1 y 33 (Lealtad procesal y diligencia); Pronunciamientos de la CNDJ.",
      law: {
        es: "La Ley 2213 de 2022 ordena el uso de tecnologías para la celeridad judicial, pero supedita su validez al deber de buena fe y lealtad procesal. El abogado es civil y disciplinariamente responsable por cualquier escrito suscrito con su firma digital.",
        en: "Law 2213 of 2022 enables digital judicial technology under duties of procedural good faith. The attorney remains personally accountable for any digitally signed motion.",
        pt: "A Lei 2213 de 2022 autoriza o uso de ferramentas digitais no Judiciário, vinculada ao dever estrito de boa-fé. O advogado responde pessoalmente por qualquer petição assinada."
      },
      ethics: {
        es: "El criterio jurídico, la empatía y la ponderación de la justicia humana son indelegables a una máquina. Usar IA sin verificación crítica es una renuncia perezosa al deber de diligencia y estudio profesional.",
        en: "Legal reasoning, empathy, and moral balancing cannot be outsourced to algorithms. Using generative AI without human verification constitutes gross negligence.",
        pt: "O discernimento ético e a sensibilidade humana não podem ser delegados a um software. Usar IA sem checagem crítica constitui quebra da diligência profissional."
      },
      balance: {
        es: "Equilibrio: La IA es una excelente calculadora lingüística y asistente de borradores, pero el abogado debe ser el filtro ético y el verificador final de cada jurisprudencia.",
        en: "Balance: AI serves as a powerful research assistant, but counsel must remain the ultimate ethical gatekeeper and factual verifier.",
        pt: "Equilíbrio: A IA é um excelente copiloto de pesquisa, mas o advogado deve ser o crivo moral e técnico de cada citação."
      },
      simple: {
        es: "Puedes usar la inteligencia artificial como usas una calculadora o un corrector ortográfico, pero jamás firmes un documento sin comprobar tú mismo que las leyes y casos que cita realmente existen en la vida real.",
        en: "You may use AI just like a calculator or spell-checker, but never sign any paper without personally verifying that cited laws and rulings actually exist.",
        pt: "Você pode usar IA como apoio de redação, mas nunca assine petições sem conferir se os artigos e acórdãos citados realmente existem no mundo real."
      },
      action: {
        es: "1. No ingreses datos personales confidenciales del cliente en IA abiertas.\n2. Busca en la página oficial de la Corte cada sentencia citada por la IA.\n3. Lee el texto original para no descontextualizar la ratio decidendi.\n4. Asume el control total de la estrategia jurídica.",
        en: "1. Never input privileged client details into public LLMs.\n2. Cross-examine every cited case in official reporters.\n3. Read the primary source to avoid distorted legal principles.\n4. Maintain full human ownership of the brief.",
        pt: "1. Não alimente sistemas públicos de IA com dados sigilosos do cliente.\n2. Cheque cada jurisprudência nos repositórios oficiais.\n3. Leia o acórdão original para não distorcer o precedente.\n4. Mantenha a autoria e responsabilidade integral da peça."
      },
      risk: "Suspensión de 2 meses a 3 años y multa por temeridad procesal y fraude al citar precedentes espurios."
    },
    {
      keywords: ["honorarios", "cobro", "plata", "dinero", "garantizar", "exito", "cuentas", "fees", "money", "guarantee", "honorarios", "adiantamento"],
      topic: "Pacto de Honorarios, Rendición de Cuentas y Transparencia",
      role: "Abogado y Cliente",
      legalBasis: "Ley 1123 de 2007 Art. 35 (Faltas a la honradez del abogado); Art. 28 num. 8 (Fijar honorarios con equidad).",
      law: {
        es: "Los honorarios deben estipularse claramente por escrito (contrato de prestación de servicios). Está prohibido asegurar el resultado del proceso, retener dineros del cliente sin autorización o cobrar gastos simulados.",
        en: "Fees must be clearly established in writing. It is forbidden to guarantee outcomes, withhold client funds without authorization, or bill fabricated expenses.",
        pt: "Os honorários devem ser ajustados expressamente por escrito. É proibido prometer resultado infalível, reter valores indevidamente ou cobrar despesas fictícias."
      },
      ethics: {
        es: "El abogado asume una obligación de medios diligentes, no de resultado infalible. Vender humo o cobrar de más aprovechándose de la angustia de quien tiene un familiar preso o enfermo atenta contra la honradez.",
        en: "An attorney provides competent professional means, not guaranteed outcomes. Exploiting a client's desperation violates human dignity and probity.",
        pt: "A obrigação do advogado é de meio e diligência, não de resultado garantido. Explorar o desespero do cliente fere a honradez e a boa-fé."
      },
      balance: {
        es: "Equilibrio: El trabajo profesional merece una retribución digna y justa, pero pactada con transparencia total sobre qué cubre y qué no cubre el contrato.",
        en: "Balance: Skilled legal work deserves fair remuneration, agreed upon with total clarity regarding covered and excluded services.",
        pt: "Equilíbrio: O trabalho técnico deve ser dignamente remunerado, com total clareza contratual sobre o que está e o que não está incluso."
      },
      simple: {
        es: "Cuentas claras conservan la confianza. El abogado debe decirte desde el primer día: cuánto cobra, cómo se paga, y qué pasa si el juez decide en contra. Desconfía de quien te diga: «Tranquilo, le garantizo que ganamos».",
        en: "Clear accounts maintain trust. A lawyer must tell you upfront: exact costs, payment terms, and risks. Beware anyone saying: 'Guaranteed win.'",
        pt: "Contas claras mantêm a confiança. O advogado deve explicar desde o início quanto custa o serviço e os riscos. Desconfie de promessas de vitória certa."
      },
      action: {
        es: "1. Firma siempre un contrato escrito de honorarios.\n2. Entrega recibos formales por cada pago recibido.\n3. Rinde cuentas documentadas al cliente cada vez que ingrese o salga dinero del caso.\n4. Devuelve de inmediato los saldos no utilizados al terminar la gestión.",
        en: "1. Always execute a written fee agreement.\n2. Provide formal receipts for all retainers.\n3. Maintain an itemized ledger of litigation disbursements.\n4. Promptly refund unearned retainers upon termination.",
        pt: "1. Assine sempre um contrato escrito de honorários.\n2. Emita recibos formais de cada quantia recebida.\n3. Preste contas documentadas de todas as custas do processo.\n4. Devolva prontamente valores não utilizados ao final da causa."
      },
      risk: "Suspensión de 6 meses a 3 años y obligación de restituir el dinero recibido indebidamente."
    },
    {
      keywords: ["conflicto", "interes", "socios", "dos clientes", "ex cliente", "contrario", "conflict", "interest", "partners", "conflito", "socio"],
      topic: "Conflicto de Intereses e Incompatibilidades",
      role: "Asesor Jurídico y Litigante",
      legalBasis: "Ley 1123 de 2007 Art. 34 numeral 3 y Art. 29 (Incompatibilidades).",
      law: {
        es: "El abogado no puede patrocinar, asesorar ni representar a personas que tengan intereses contrapuestos en el mismo asunto o en asuntos conexos, ni usar contra un excliente la información confidencial conocida en virtud del mandato anterior.",
        en: "Counsel is statutorily prohibited from representing adverse parties in identical or related matters, or using former clients' confidential data against them.",
        pt: "É vedado ao advogado patrocinar interesses opostos na mesma causa ou em litígios conexos, bem como utilizar informações sigilosas contra ex-clientes."
      },
      ethics: {
        es: "La lealtad no puede fragmentarse ni subastarse al mejor postor. Si tus deberes hacia el cliente A te impiden defender con fervor al cliente B, tu independencia se ha quebrado.",
        en: "Loyalty cannot be divided or auctioned to the highest bidder. If duty to party A impedes undivided zeal for party B, independence is broken.",
        pt: "A lealdade não pode ser fracionada. Se o dever para com o cliente A impedir a dedicação plena ao cliente B, a independência está corrompida."
      },
      balance: {
        es: "Equilibrio: Si surge una colisión de intereses, la única salida digna es advertirlo de inmediato a las partes y renunciar a la representación litigiosa de ambos o de quien genere el choque.",
        en: "Balance: When conflicts arise, the only honorable course is full disclosure and immediate withdrawal from contested representation.",
        pt: "Equilíbrio: Havendo colisão de interesses, a conduta correta é declarar o conflito imediatamente e renunciar ao patrocínio conflitante."
      },
      simple: {
        es: "No puedes estar en misa y en procesión. Si dos personas que asesorabas ahora se están peleando, no puedes ponerte la camiseta de ninguno de los dos para pelear contra el otro.",
        en: "You cannot play for both teams. If two people you used to advise enter a bitter fight, you cannot take sides and attack the other.",
        pt: "Não se pode jogar nos dois times. Se duas partes que você assessorava entram em litígio, você não pode advogar contra nenhuma delas usando o que sabe."
      },
      action: {
        es: "1. Realiza una verificación de conflictos antes de aceptar cualquier caso nuevo.\n2. Si hay vínculo previo con la contraparte que involucró confidencias, rechaza el encargo.\n3. Explica a las partes con serenidad el motivo legal de tu abstención.",
        en: "1. Run conflict checks before accepting new matters.\n2. If prior ties with opposing parties involved confidential insights, decline representation.\n3. Inform parties politely of your professional withdrawal.",
        pt: "1. Realize triagem de conflitos antes de aceitar qualquer nova causa.\n2. Se houve acesso anterior a dados sigilosos da outra parte, recuse o mandato.\n3. Notifique as partes com formalidade e respeito."
      },
      risk: "Suspensión de 1 a 2 años por deslealtad profesional."
    },
    {
      keywords: ["juez", "audiencia", "retrasar", "chicana", "dilacion", "aplazar", "mentir", "delay", "frivolous", "judge", "atrasar", "adiar"],
      topic: "Temeridad, Dilaciones y Respeto a los Jueces",
      role: "Litigante ante Tribunales",
      legalBasis: "Ley 1123 de 2007 Art. 33 (Faltas contra la administración de justicia); Código General del Proceso Art. 78.",
      law: {
        es: "Constituye falta disciplinaria promover causas a sabiendas manifiestamente infundadas, presentar recursos o incidentes dilatorios con el único fin de entorpecer el proceso, o faltar al respeto a las autoridades judiciales.",
        en: "Filing demonstrably baseless claims, spamming dilatory motions to obstruct proceedings, or disrespecting judges is a direct statutory violation.",
        pt: "Constitui infração disciplinar ajuizar pretensões sabidamente infundadas, criar incidentes protelatórios para emperrar o processo ou desrespeitar magistrados."
      },
      ethics: {
        es: "El tiempo de los tribunales pertenece a la sociedad. Quien utiliza trucos sucios para que un caso no se resuelva perjudica a las personas que esperan justicia y desprestigia a todo el gremio.",
        en: "Court time belongs to the public. Engaging in dirty procedural delay harms litigants awaiting justice and degrades the legal profession.",
        pt: "O tempo da Justiça pertence a toda a sociedade. Manobras protelatórias prejudicam os jurisdicionados e depreciam a nobreza da advocacia."
      },
      balance: {
        es: "Equilibrio: El derecho a la defensa permite usar todos los recursos que la ley otorga, siempre y cuando tengan un fundamento real y razonable en derecho, no una intención de burlar el fallo.",
        en: "Balance: The right of defense authorizes all statutory remedies that possess a genuine legal basis, never those deployed purely to derail a ruling.",
        pt: "Equilíbrio: A ampla defesa permite interpor todos os recursos legais cabíveis, desde que com fundamento legítimo, nunca com o intuito de zombar da decisão."
      },
      simple: {
        es: "Defender bien no es hacer trampa. Presentar papeles repetidos o inventar enfermedades falsas para que no haya audiencia no te hace un 'abogado astuto'; te hace un abogado tramposo que puede perder su licencia.",
        en: "A strong defense is not cheating. Filing repetitive motions or fake sick notes to skip hearings doesn't make you smart; it makes you dishonest and risks disbarment.",
        pt: "Defender bem não é trapacear. Apresentar petições repetitivas ou atestados falsos para adiar audiências não é esperteza; é deslealdade que custa a carteira da Ordem."
      },
      action: {
        es: "1. Prepara las audiencias con debida anticipación.\n2. Presenta recursos solo cuando exista un verdadero agravio jurídico o error procesal.\n3. Dirígete a los jueces y contrapartes con cortesía y lenguaje técnico ponderado.",
        en: "1. Prepare hearings thoroughly in advance.\n2. File appeals only when genuine legal error or prejudice exists.\n3. Address the bench and opposing counsel with decorum and reasoned arguments.",
        pt: "1. Prepare as audiências com rigorosa antecedência.\n2. Recorra apenas quando houver efetivo prejuízo processual ou erro de direito.\n3. Trate magistrados e partes com urbanidade e linguagem técnica sóbria."
      },
      risk: "Multa de 1 a 50 SMLMV y suspensión del ejercicio profesional."
    },
    {
      keywords: ["whatsapp", "nube", "google drive", "ciberseguridad", "filtrar", "seguridad", "cloud", "leak", "vazamento", "nuvem", "hacker"],
      topic: "Secreto Profesional, Ciberseguridad y Manejo Digital de Archivos",
      role: "Abogado y Firma Jurídica",
      legalBasis: "Constitución Política Art. 15 y 74; Ley 1581 de 2012 (Protección de Datos); Ley 2213 de 2022.",
      law: {
        es: "El abogado está en la obligación de custodiar diligentemente los documentos y datos de sus clientes. Almacenar expedientes sensibles en servicios sin cifrado o compartir información por redes no seguras expone al abogado a responsabilidad disciplinaria y civil.",
        en: "Attorneys must exercise due diligence in securing client data. Storing sensitive case files on unencrypted cloud platforms exposes counsel to disciplinary sanctions.",
        pt: "O advogado tem o dever indelegável de proteger os dados e documentos do cliente. Armazenar autos sensíveis em nuvens desprotegidas acarreta sanções disciplinares."
      },
      ethics: {
        es: "La confidencialidad en el siglo XXI ya no es solo guardar papeles bajo llave en una oficina física; es proteger las claves, los correos y las carpetas digitales para que nadie espíe la intimidad del cliente.",
        en: "Confidentiality in the 21st century is no longer just locking physical cabinets; it requires safeguarding digital credentials, encrypted email, and protected folders.",
        pt: "O sigilo profissional no século XXI vai muito além de trancar armários: exige senhas fortes, criptografia e guarda responsável do patrimônio digital do cliente."
      },
      balance: {
        es: "Equilibrio: Aprovechar la nube y el trabajo remoto (Ley 2213) sin descuidar los estándares mínimos de ciberseguridad y consentimiento informado del poderdante.",
        en: "Balance: Embrace cloud storage and remote litigation (Law 2213) while implementing rigorous cybersecurity standards and informed client consent.",
        pt: "Equilíbrio: Aproveitar a agilidade da computação em nuvem sem abrir mão de protocolos rígidos de cibersegurança e consentimento do constituinte."
      },
      simple: {
        es: "Si manejas los secretos de las personas, no puedes dejarlos en cualquier computador público ni enviarlos a grupos familiares de WhatsApp. Debes proteger la información de tus clientes como guardarías su dinero.",
        en: "If you handle people's deepest secrets, you cannot leave them on public computers or forward them in casual messaging groups. Guard client data like gold.",
        pt: "Se você cuida dos segredos de alguém, não pode deixá-los abertos em computadores públicos nem repassá-los em grupos informais. Proteja os dados do cliente como ouro."
      },
      action: {
        es: "1. Utiliza autenticación de dos factores (2FA) en todas tus cuentas jurídicas.\n2. Cifra los discos duros y copias de seguridad de los expedientes.\n3. No uses redes Wi-Fi públicas abiertas para acceder a expedientes reservados.\n4. Si hay una brecha de seguridad, notifica de inmediato al cliente.",
        en: "1. Enforce two-factor authentication (2FA) across all professional accounts.\n2. Encrypt hard drives and cloud backups containing litigation files.\n3. Avoid open public Wi-Fi networks for confidential court matters.\n4. Promptly notify clients if any data breach occurs.",
        pt: "1. Ative autenticação em duas etapas (2FA) em todas as contas profissionais.\n2. Criptografe discos e backups que contenham processos de clientes.\n3. Não acerte processos em redes Wi-Fi públicas desprotegidas.\n4. Em caso de vazamento, comunique imediatamente o cliente."
      },
      risk: "Censura o suspensión disciplinaria según el perjuicio causado al mandante."
    }
  ]
};
