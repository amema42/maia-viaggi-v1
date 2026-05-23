export const itemDetails: Record<string, Record<string, {title: string, description: string, tips: string[]}>> = {
  'Documenti': {
    'Passaporto valido 6+ mesi': {
      title: 'Passaporto',
      description: 'Il passaporto deve essere valido per almeno 6 mesi dalla data di rientro. Molti paesi non permettono l\'ingresso se la scadenza è troppo vicina.',
      tips: [
        'Controlla la data di scadenza prima di prenotare',
        'Rinnova il passaporto se scade entro 6 mesi',
        'Verifica che ci siano pagine libere per i timbri',
        'Fai una copia digitale e cartacea'
      ]
    },
    'Visti necessari': {
      title: 'Visti',
      description: 'Alcuni paesi richiedono un visto d\'ingresso. Informati con largo anticipo sui requisiti specifici della tua destinazione.',
      tips: [
        'Controlla sul sito dell\'ambasciata i requisiti',
        'Richiedi il visto con almeno 30 giorni di anticipo',
        'Prepara documenti: foto, prenotazioni, assicurazione',
        'Considera i visti elettronici (eVisa) quando disponibili'
      ]
    },
    'Copie digitali': {
      title: 'Copie Digitali',
      description: 'Conserva copie digitali di tutti i documenti importanti in cloud o email. In caso di smarrimento, velocizzerai le procedure.',
      tips: [
        'Scansiona passaporto, visti, carte d\'identità',
        'Salva su Google Drive, Dropbox o email',
        'Includi prenotazioni hotel e voli',
        'Condividi con un familiare di fiducia'
      ]
    },
    'Carta d\'identità': {
      title: 'Carta d\'Identità',
      description: 'Per viaggi in Europa, la carta d\'identità valida per l\'espatrio è sufficiente. Verifica sempre i requisiti del paese di destinazione.',
      tips: [
        'Valida per viaggi in UE e paesi Schengen',
        'Controlla che sia valida per l\'espatrio',
        'Porta anche il passaporto per sicurezza',
        'Alcuni paesi extra-UE la accettano'
      ]
    }
  },
  'Salute': {
    'Assicurazione sanitaria': {
      title: 'Assicurazione Sanitaria',
      description: 'Un\'assicurazione viaggio copre spese mediche, rimpatrio e imprevisti. È essenziale per viaggi extra-UE dove le cure possono costare migliaia di euro.',
      tips: [
        'Scegli copertura adeguata alla destinazione',
        'Verifica massimali per spese mediche (min. 50.000€)',
        'Includi rimpatrio sanitario e bagaglio',
        'Porta sempre la polizza stampata e digitale'
      ]
    },
    'Vaccini richiesti': {
      title: 'Vaccini',
      description: 'Alcuni paesi richiedono vaccinazioni obbligatorie (es. febbre gialla). Altre sono consigliate per proteggere la tua salute.',
      tips: [
        'Consulta il sito Viaggiare Sicuri del Ministero',
        'Prenota visita presso ASL o centro vaccinazioni',
        'Fai i vaccini almeno 4-6 settimane prima',
        'Porta il certificato internazionale di vaccinazione'
      ]
    },
    'Kit pronto soccorso': {
      title: 'Kit Pronto Soccorso',
      description: 'Un kit base con medicinali e materiale di primo soccorso può risolvere piccoli problemi senza cercare farmacie all\'estero.',
      tips: [
        'Cerotti, garze, disinfettante, forbicine',
        'Antidolorifici, antifebbrili, antistaminici',
        'Farmaci per mal di stomaco e diarrea',
        'Repellente per insetti e crema solare'
      ]
    },
    'Farmaci personali': {
      title: 'Farmaci Personali',
      description: 'Se assumi farmaci regolarmente, porta una scorta sufficiente per tutto il viaggio più qualche giorno extra.',
      tips: [
        'Porta farmaci nella confezione originale',
        'Richiedi ricetta medica in inglese',
        'Metti metà scorta nel bagaglio a mano',
        'Verifica che siano legali nel paese di destinazione'
      ]
    }
  },
  'Denaro': {
    'Carte internazionali': {
      title: 'Carte Internazionali',
      description: 'Usa carte di credito/debito con circuiti internazionali (Visa, Mastercard). Avvisa la banca prima di partire per evitare blocchi.',
      tips: [
        'Avvisa la banca delle date e destinazioni',
        'Verifica commissioni per prelievi all\'estero',
        'Porta almeno 2 carte diverse',
        'Attiva notifiche SMS per ogni transazione'
      ]
    },
    'Valuta locale': {
      title: 'Valuta Locale',
      description: 'Cambia una piccola somma prima di partire per spese immediate (taxi, mance). Evita cambi in aeroporto: tassi sfavorevoli.',
      tips: [
        'Cambia 50-100€ prima della partenza',
        'Usa bancomat locali per prelievi (miglior tasso)',
        'Evita cambiavalute in aeroporto e zone turistiche',
        'Controlla il tasso di cambio su XE.com'
      ]
    },
    'App pagamento': {
      title: 'App Pagamento',
      description: 'App come Revolut, Wise o PayPal facilitano pagamenti e trasferimenti con tassi vantaggiosi e senza commissioni nascoste.',
      tips: [
        'Scarica Revolut o Wise prima di partire',
        'Ricarica con valuta locale per risparmiare',
        'Usa per pagamenti contactless',
        'Ideale per dividere spese con compagni di viaggio'
      ]
    },
    'Numero emergenza': {
      title: 'Numero Emergenza',
      description: 'Salva i numeri per bloccare carte in caso di furto o smarrimento. Agisci rapidamente per evitare addebiti fraudolenti.',
      tips: [
        'Salva numero blocco carte in rubrica',
        'Annota anche numero assistenza banca',
        'Chiama immediatamente in caso di furto',
        'Fai denuncia alla polizia locale'
      ]
    }
  },
  'Abbigliamento': {
    'Vestiti comodi': {
      title: 'Vestiti Comodi',
      description: 'Scegli abiti pratici, traspiranti e adatti al clima. Preferisci tessuti che si asciugano velocemente e non si stropicciano.',
      tips: [
        'Vestiti a strati per adattarti al clima',
        'Tessuti tecnici traspiranti e leggeri',
        'Colori neutri facili da abbinare',
        'Porta un cambio completo nel bagaglio a mano'
      ]
    },
    'Giacca impermeabile': {
      title: 'Giacca Impermeabile',
      description: 'Una giacca leggera e impermeabile ti protegge da pioggia e vento senza occupare spazio. Essenziale in ogni stagione.',
      tips: [
        'Scegli modello pieghevole e leggero',
        'Verifica che sia traspirante (Gore-Tex)',
        'Utile anche come antivento',
        'Controlla le previsioni meteo prima di partire'
      ]
    },
    'Scarpe comode': {
      title: 'Scarpe Comode',
      description: 'Scarpe già rodate e comode sono fondamentali per camminare tutto il giorno senza vesciche. Porta un paio di riserva.',
      tips: [
        'Usa scarpe già rodate, mai nuove',
        'Suola antiscivolo e supporto plantare',
        'Porta un paio di riserva (sandali o sneakers)',
        'Calze tecniche anti-vesciche'
      ]
    },
    'Cappello/Occhiali': {
      title: 'Cappello e Occhiali',
      description: 'Proteggiti dal sole con cappello e occhiali da sole con protezione UV. Essenziali in destinazioni calde e soleggiate.',
      tips: [
        'Cappello a tesa larga per protezione totale',
        'Occhiali con protezione UV400',
        'Porta occhiali di riserva',
        'Considera occhiali da vista con lenti fotocromatiche'
      ]
    }
  },
  'Accessori': {
    'Zaino/Borsa': {
      title: 'Zaino/Borsa',
      description: 'Uno zaino comodo e capiente è ideale per escursioni giornaliere. Scegli modelli con scomparti e protezione antipioggia.',
      tips: [
        'Zaino da 20-30L per escursioni giornaliere',
        'Spallacci imbottiti e cintura ventrale',
        'Scomparti per organizzare oggetti',
        'Copertura antipioggia inclusa'
      ]
    },
    'Bottiglia acqua': {
      title: 'Bottiglia Acqua',
      description: 'Una borraccia riutilizzabile ti fa risparmiare e riduce la plastica. Scegli modelli isolati per mantenere la temperatura.',
      tips: [
        'Borraccia in acciaio inox (500ml-1L)',
        'Isolamento termico per bevande calde/fredde',
        'Riempi dopo i controlli di sicurezza',
        'Filtra l\'acqua locale se necessario'
      ]
    },
    'Guida turistica': {
      title: 'Guida Turistica',
      description: 'Una guida cartacea o app offline ti aiuta a scoprire luoghi, storia e cultura senza dipendere dalla connessione internet.',
      tips: [
        'Lonely Planet o Rough Guide per info dettagliate',
        'App offline: Maps.me, Google Maps offline',
        'Scarica mappe e guide prima di partire',
        'Segna i luoghi da visitare in anticipo'
      ]
    },
    'Macchina fotografica': {
      title: 'Macchina Fotografica',
      description: 'Immortala i tuoi ricordi con una buona fotocamera o smartphone. Porta batterie e schede di memoria extra.',
      tips: [
        'Smartphone con buona fotocamera è sufficiente',
        'Fotocamera mirrorless per qualità superiore',
        'Batterie e schede SD di riserva',
        'Backup foto su cloud ogni sera'
      ]
    }
  },
  'Tech': {
    'SIM/Roaming': {
      title: 'SIM/Roaming',
      description: 'Attiva un piano roaming o acquista una SIM locale per rimanere connesso. Confronta i costi prima di partire.',
      tips: [
        'In UE: roaming gratuito incluso',
        'Extra-UE: SIM locale o eSIM (Airalo, Holafly)',
        'Verifica copertura e costi del tuo operatore',
        'Scarica mappe e guide offline prima di partire'
      ]
    },
    'Power bank': {
      title: 'Power Bank',
      description: 'Un caricabatterie portatile ti salva quando sei in giro tutto il giorno. Scegli capacità adeguata (10.000-20.000 mAh).',
      tips: [
        'Capacità 10.000-20.000 mAh',
        'Ricarica rapida (Quick Charge, Power Delivery)',
        'Porta nel bagaglio a mano (vietato in stiva)',
        'Ricarica ogni sera in hotel'
      ]
    },
    'Adattatori': {
      title: 'Adattatori',
      description: 'Ogni paese ha prese elettriche diverse. Un adattatore universale ti permette di ricaricare ovunque.',
      tips: [
        'Adattatore universale con USB integrato',
        'Verifica voltaggio (110V vs 220V)',
        'Multipresa per ricaricare più dispositivi',
        'Controlla tipo di presa del paese di destinazione'
      ]
    },
    'Backup contatti': {
      title: 'Backup Contatti',
      description: 'Salva numeri importanti (hotel, ambasciata, emergenze) offline. In caso di problemi con il telefono, avrai tutto a portata di mano.',
      tips: [
        'Salva contatti su Google/iCloud',
        'Annota numeri importanti su carta',
        'Numero ambasciata italiana nel paese',
        'Contatti hotel, tour operator, compagnia aerea'
      ]
    }
  }
};
