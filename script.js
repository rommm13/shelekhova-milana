(() => {
  'use strict';
  const t = {
    ru: {
      navAbout:'Обо мне',navJourney:'Мой путь',navBeyond:'За пределами учёбы',navContact:'Контакты',
      heroEyebrow:'ЗНАКОМСТВО, А НЕ ПРОСТО РЕЗЮМЕ',hero1:'Любознательна',hero2:'по натуре,',hero3:'упорна',hero4:'по выбору.',
      heroLead:'Привет, я Милана. Учусь на экономиста в Москве, изучаю цифровую аналитику. Люблю сложные вопросы, иностранные языки и ощущение, когда впервые открываешь для себя новое место.',meetMe:'Давай знакомиться',exploreJourney:'Мой путь',heroNote:'Я ещё в начале пути. И мне это нравится.',heroCaption:'Москва, Россия · 2026',
      aboutMarker:'НЕМНОГО ОБО МНЕ',about1:'К целям отношусь',about2:'серьёзно,',about3:'к себе',about4:'с иронией.',
      aboutP1:'Я учусь на первом курсе Финансового университета при Правительстве РФ. Моя программа объединяет экономику, финансовые инструменты, цифровой анализ и программирование.',aboutP2:'Больше всего мне нравится понимать, как устроен мир и как мыслят люди. Сложный кейс, разговор на испанском или прогулка по незнакомому городу могут научить чему-то новому.',aboutQuote:'Всегда есть что открыть. ↗',
      fact1:'Дважды призёр заключительного этапа Всероссийской олимпиады по испанскому, 2025 и 2026',fact2:'Языки, которые мне интересны: русский, английский, испанский и французский',fact3:'Год поступления на экономику и цифровой анализ в университет',
      journeyMarker:'ЧЕМ ЗАНИМАЮСЬ',journey1:'Учиться',journey2:'мне действительно',journey3:'нравится.',journeyIntro:'Каждый новый опыт что-то даёт: навык, знакомство или иной взгляд на привычную задачу.',
      timelineMeta1:'2026 — СЕЙЧАС · ОБРАЗОВАНИЕ',timelineTitle1:'Финансовый университет, Москва',timelineP1:'Бакалавриат по экономике. Изучаю финансовые инструменты и технологии цифрового анализа на программе, сочетающей экономику и программирование.',
      timelineMeta2:'2026 · КЕЙС-ЧЕМПИОНАТ',timelineTitle2:'Changellenge Cup Moscow',timelineP2:'Работаю в команде над реальным бизнес-кейсом. Учусь превращать идеи, анализ и совместную работу в конкретное решение.',
      timelineMeta3:'2026 · ВОЛОНТЁРСТВО',timelineTitle3:'Международная финансовая конференция',timelineP3:'Помогала с регистрацией и встречей гостей на конференции Финансового университета о трансформации финансовых рынков в цифровой экономике. Получила благодарность.',
      timelineMeta4:'2025 И 2026 · ДОСТИЖЕНИЯ',timelineTitle4:'Всероссийская олимпиада по испанскому',timelineP4:'Дважды призёр заключительного этапа; абсолютный победитель регионального этапа в Московской области в 2026 году.',
      awardLabel:'МОМЕНТ, КОТОРЫЙ ХОЧЕТСЯ ЗАПОМНИТЬ',awardTitle:'Люди делают достижения ещё ценнее.',awardText:'Олимпиады подарили мне не только сложные задания, но и друзей, и смелость выходить за привычные рамки.',
      outsideMarker:'ЗА ПРЕДЕЛАМИ УЧЁБЫ',outside1:'Плотный график,',outside2:'насыщенная жизнь.',outsideIntro:'Я много учусь. Но оставляю время и на то, ради чего хочется двигаться вперёд: путешествия, спорт и разговоры с интересными людьми.',
      storyTag1:'ОТКРЫВАТЬ',storyTitle1:'Больше мест. Больше взглядов.',storyP1:'Путешествия напоминают мне, что мир намного шире повседневных привычек. И в этом их особая прелесть.',
      storyTag2:'ОБЩАТЬСЯ',storyTitle2:'Люди тоже многому учат.',storyP2:'Разные культуры, разные взгляды, разные языки. Самые интересные разговоры редко идут по сценарию.',
      storyTag3:'НЕ СДАВАТЬСЯ',storyTitle3:'Дисциплина со мной давно.',storyP3:'Годы занятий тхэквондо научили: результат редко приходит за одну ночь. Этот урок пригодился и за пределами спорта.',
      languageMarker:'ЯЗЫКИ ОБЪЕДИНЯЮТ',language1:'Разные слова,',language2:'общий интерес.',languageP:'Я начала изучать языки, потому что мне было интересно. Продолжаю, потому что каждый из них помогает лучше понимать людей и культуры.',certificate:'Сертификат DELE B1 · языковая школа окончена с отличием',russian:'Русский',english:'Английский',spanish:'Испанский',french:'Французский',native:'Родной',
      contactMarker:'КОНТАКТНАЯ ИНФОРМАЦИЯ',contactPre:'Я только начинаю.',contact1:'Впереди',contact2:'столько всего.',contactBody:'Всегда интересны содержательные разговоры, новый опыт и возможность учиться у людей по всему миру.',contactTelegramLabel:'Telegram',contactPhoneLabel:'Телефон',contactEmailLabel:'E-mail',contactAddressLabel:'Адрес',contactAddress:'Московская область, Россия',backTop:'Наверх'
    }
  };
  const english = {};
  document.querySelectorAll('[data-i18n]').forEach(el => english[el.dataset.i18n] = el.textContent);
  const toggle = document.getElementById('langToggle');
  const label = document.getElementById('langLabel');
  const apply = lang => {
    const dictionary = lang === 'ru' ? t.ru : english;
    document.querySelectorAll('[data-i18n]').forEach(el => { const value = dictionary[el.dataset.i18n]; if(value !== undefined) el.textContent = value; });
    document.documentElement.lang = lang;
    document.title = lang === 'ru' ? 'Милана Шелехова | Личный сайт' : 'Milana Shelekhova | Curious by nature';
    label.textContent = lang === 'ru' ? 'EN' : 'RU';
    toggle.setAttribute('aria-label',lang === 'ru' ? 'Переключить на английский' : 'Switch to Russian');
    try { localStorage.setItem('milana-language',lang); } catch (_) {}
  };
  let stored = null;
  try { stored = localStorage.getItem('milana-language'); } catch (_) {}
  apply(stored === 'ru' ? 'ru' : 'en');
  toggle.addEventListener('click', () => apply(document.documentElement.lang === 'ru' ? 'en' : 'ru'));
  document.getElementById('year').textContent = new Date().getFullYear();
  const progress = document.getElementById('progress');
  let requested = false;
  const update = () => { const amount = Math.max(0,document.documentElement.scrollHeight-window.innerHeight); progress.style.width = (amount ? window.scrollY/amount*100 : 0) + '%';requested=false;};
  window.addEventListener('scroll',()=>{if(!requested){requested=true;requestAnimationFrame(update)}},{passive:true});
  window.addEventListener('resize',update);update();
})();
