(function () {
  const STORAGE_KEY = "stepgate_legal_lang";
  const DEFAULT_LANG = "ru";

  const I18N = {
    ru: {
      langLabel: "Язык",
      back: "← Назад",
      index_title: "StepGate Legal",
      index_h1: "Юридические документы",
      index_lead: "Политики и понятные объяснения для пользователей StepGate.",
      index_privacy: "Политика конфиденциальности",
      index_terms: "Условия использования",
      index_data_use: "Как мы используем данные",
      index_updated: "Обновлено: 2026-04-16",

      privacy_title: "Политика конфиденциальности StepGate",
      privacy_h1: "Политика конфиденциальности",
      privacy_lead: "Как StepGate работает с вашими данными.",
      privacy_updated: "Обновлено: 2026-04-16",
      privacy_intro_h: "Введение",
      privacy_intro_p: "StepGate помогает ограничивать доступ к выбранным приложениям и возвращать доступ через активность. Здесь указано, какие данные мы используем и зачем.",
      privacy_data_h: "Какие данные использует StepGate",
      privacy_data_1: "Время использования выбранных контролируемых приложений.",
      privacy_data_2: "Шаги/активность из Health Connect и/или доступных источников устройства.",
      privacy_data_3: "Статусы разрешений, нужные для корректной работы функций.",
      privacy_perm_h: "Какие разрешения используются",
      privacy_perm_1: "Доступ к статистике приложений — для учета времени в выбранных приложениях.",
      privacy_perm_2: "Accessibility Service — для обнаружения запуска выбранных приложений и показа экрана ограничения.",
      privacy_perm_3: "Activity Recognition / Health Connect — для чтения шагов.",
      privacy_perm_4: "Показ поверх других окон — для экрана ограничения поверх контролируемых приложений.",
      privacy_use_h: "Как используются данные",
      privacy_use_1: "Расчет базового доступа по недавней истории использования.",
      privacy_use_2: "Обновление дневного доступа после поступления новых данных по шагам.",
      privacy_use_3: "Определение доступного времени в приложениях под контролем.",
      privacy_use_4: "Показ экрана ограничения при исчерпании дневного лимита.",
      privacy_store_h: "Где хранятся данные",
      privacy_store_p1: "Данные хранятся локально на вашем устройстве. Мы не отправляем usage/steps на наши серверы.",
      privacy_store_p2: "Часть обработки может выполняться системными компонентами Android, которые предоставляют разрешения и API.",
      privacy_share_h: "Передача третьим лицам",
      privacy_share_p: "Мы не продаем и не передаем персональные данные третьим лицам.",
      privacy_third_h: "Сторонние сервисы",
      privacy_third_p: "StepGate не использует рекламные SDK и стороннюю аналитику.",
      privacy_not_h: "Что StepGate не читает",
      privacy_not_1: "Сообщения, переписки, email",
      privacy_not_2: "Текст/контент на экране в других приложениях",
      privacy_not_3: "Ввод с клавиатуры и пароли",
      privacy_not_4: "Фото, файлы, контакты",
      privacy_acc_h: "Disclosure для Accessibility",
      privacy_acc_p1: "Accessibility используется только для запуска выбранных приложений и показа экрана ограничения после лимита.",
      privacy_acc_p2: "StepGate не читает сообщения, не извлекает текст, не перехватывает ввод и не делает посторонние автоматические действия.",
      privacy_hc_h: "Health Connect",
      privacy_hc_p: "При подключении Health Connect приложение запрашивает только чтение шагов для step-based логики.",
      privacy_retention_h: "Хранение данных",
      privacy_retention_p: "Данные остаются на устройстве до удаления данных приложения или деинсталляции.",
      privacy_delete_h: "Как удалить данные",
      privacy_delete_p: "Очистите данные приложения в настройках системы или удалите StepGate.",
      privacy_children_h: "Дети",
      privacy_children_p: "StepGate не предназначен для детей младше 13 лет.",
      privacy_contact_h: "Контакты",
      privacy_contact_p: "Вопросы по политике: burteloffluther@gmail.com",

      terms_title: "Условия использования StepGate",
      terms_h1: "Условия использования",
      terms_lead: "Условия, которые регулируют использование StepGate.",
      terms_updated: "Обновлено: 2026-04-16",
      terms_accept_h: "Принятие условий",
      terms_accept_p: "Используя StepGate, вы соглашаетесь с этими условиями.",
      terms_what_h: "Что делает StepGate",
      terms_what_p: "StepGate помогает ограничивать доступ к выбранным приложениям и возвращать доступ через движение.",
      terms_user_h: "Обязанности пользователя",
      terms_user_1: "Выбирать приложения для контроля.",
      terms_user_2: "Поддерживать необходимые разрешения включенными.",
      terms_user_3: "Использовать приложение в рамках законодательства вашей страны.",
      terms_avail_h: "Доступность и гарантии",
      terms_avail_p: "Приложение предоставляется по принципу «как есть» и «по мере доступности».",
      terms_liability_h: "Ограничение ответственности",
      terms_liability_p: "Мы не несем ответственность за косвенный ущерб в максимальном объеме, разрешенном законом.",
      terms_changes_h: "Изменения приложения и условий",
      terms_changes_p: "Мы можем обновлять приложение и условия; продолжение использования означает согласие с обновлениями.",
      terms_end_h: "Прекращение использования",
      terms_end_p: "Вы можете прекратить использование в любой момент, удалив приложение.",
      terms_children_h: "Дети",
      terms_children_p: "StepGate не предназначен для детей младше 13 лет.",
      terms_contact_h: "Контакты",
      terms_contact_p: "Вопросы по условиям: burteloffluther@gmail.com",

      data_title: "Как StepGate использует данные",
      data_h1: "Как мы используем данные",
      data_lead: "Понятно и коротко, зачем StepGate нужны разрешения.",
      data_updated: "Обновлено: 2026-04-16",
      data_usage_h: "Зачем нужен доступ к статистике приложений",
      data_usage_p: "Чтобы учитывать время в приложениях под контролем и понимать, когда лимит исчерпан.",
      data_steps_h: "Зачем нужны шаги",
      data_steps_p: "Чтобы обновлять доступ после поступления новых записей шагов. Данные могут приходить с задержкой.",
      data_acc_h: "Зачем нужен Accessibility",
      data_acc_p: "Только для определения запуска контролируемого приложения и показа экрана ограничения. Не для чтения контента.",
      data_device_h: "Данные уходят с устройства?",
      data_device_p: "Нет. StepGate хранит данные локально и не отправляет на наши серверы.",
      data_no_perm_h: "Если разрешение не выдано",
      data_no_perm_p: "Приложение работает частично. Некоторые функции будут ограничены.",
      data_not_h: "Что StepGate не читает",
      data_not_1: "Сообщения и чаты",
      data_not_2: "Текст на экранах других приложений",
      data_not_3: "Ввод с клавиатуры и пароли",
      data_not_4: "Фото, файлы, контакты",
      data_contact_h: "Контакты",
      data_contact_p: "Вопросы по данным: burteloffluther@gmail.com"
    },

    en: {
      langLabel: "Language",
      back: "← Back"
    },

    de: {
      langLabel: "Sprache",
      back: "← Zurück"
    },

    es: {
      langLabel: "Idioma",
      back: "← Volver"
    },

    "pt-BR": {
      langLabel: "Idioma",
      back: "← Voltar"
    }
  };

  // Fill remaining DE/ES/PT-BR by overlaying EN text first and then custom dictionary below.
  const EN_FALLBACK = {
    index_title: "StepGate Legal",
    index_h1: "Legal documents",
    index_lead: "Policies and user-facing explanations for StepGate.",
    index_privacy: "Privacy Policy",
    index_terms: "Terms of Use",
    index_data_use: "How We Use Data",
    index_updated: "Last updated: 2026-04-16",

    privacy_title: "StepGate Privacy Policy",
    privacy_h1: "Privacy Policy",
    privacy_lead: "This policy explains how StepGate handles your data.",
    privacy_updated: "Last updated: 2026-04-16",
    privacy_intro_h: "Introduction",
    privacy_intro_p: "StepGate is a mobile app that helps you limit access to selected apps and regain access through movement. This policy explains what data the app accesses and how it is used.",
    privacy_data_h: "What data StepGate accesses",
    privacy_data_1: "App usage data such as usage duration for selected controlled apps.",
    privacy_data_2: "Steps/activity data from Health Connect and/or supported on-device sources.",
    privacy_data_3: "Permission states needed for required features.",
    privacy_perm_h: "Permissions used",
    privacy_perm_1: "Usage Access — read app usage for selected apps.",
    privacy_perm_2: "Accessibility Service — detect launch of selected controlled apps and show the limit screen.",
    privacy_perm_3: "Activity Recognition / Health Connect — read step data.",
    privacy_perm_4: "Overlay permission — show the limit screen on top of controlled apps.",
    privacy_use_h: "How the data is used",
    privacy_use_1: "Calculate baseline access from recent usage history.",
    privacy_use_2: "Adjust daily access after new step data arrives.",
    privacy_use_3: "Determine available time for controlled apps.",
    privacy_use_4: "Show a limit screen when a controlled app reaches its daily limit.",
    privacy_store_h: "Where data is stored",
    privacy_store_p1: "StepGate stores data locally on your device. We do not send usage or step data to our servers.",
    privacy_store_p2: "Data may still be processed by core Android platform components.",
    privacy_share_h: "Sharing with third parties",
    privacy_share_p: "We do not sell or share your personal data with third parties.",
    privacy_third_h: "Third-party services",
    privacy_third_p: "StepGate does not use third-party analytics or ad SDKs.",
    privacy_not_h: "What StepGate does not read",
    privacy_not_1: "Messages, chats, or email contents",
    privacy_not_2: "On-screen text in other apps",
    privacy_not_3: "Keyboard input or passwords",
    privacy_not_4: "Photos, files, or contacts",
    privacy_acc_h: "Accessibility-specific disclosure",
    privacy_acc_p1: "Accessibility is used only to detect launch of selected controlled apps and show a limit screen.",
    privacy_acc_p2: "StepGate does not use Accessibility to read messages, extract text, capture keystrokes, or perform unrelated actions.",
    privacy_hc_h: "Health Connect rationale",
    privacy_hc_p: "When enabled, StepGate requests read access to step data only.",
    privacy_retention_h: "Data retention",
    privacy_retention_p: "Data stays on your device until app data is deleted or StepGate is uninstalled.",
    privacy_delete_h: "How to delete your data",
    privacy_delete_p: "Clear app storage in system settings or uninstall StepGate.",
    privacy_children_h: "Children",
    privacy_children_p: "StepGate is not directed to children under 13.",
    privacy_contact_h: "Contact",
    privacy_contact_p: "Questions about this policy: burteloffluther@gmail.com",

    terms_title: "StepGate Terms of Use",
    terms_h1: "Terms of Use",
    terms_lead: "These terms govern your use of StepGate.",
    terms_updated: "Last updated: 2026-04-16",
    terms_accept_h: "Acceptance of terms",
    terms_accept_p: "By using StepGate, you agree to these Terms of Use.",
    terms_what_h: "What StepGate does",
    terms_what_p: "StepGate helps you limit access to selected apps and regain access through movement.",
    terms_user_h: "User responsibilities",
    terms_user_1: "Choose apps you want to control.",
    terms_user_2: "Maintain required permissions.",
    terms_user_3: "Use the app in accordance with local law.",
    terms_avail_h: "Availability and no guarantee",
    terms_avail_p: "StepGate is provided on an as-is and as-available basis.",
    terms_liability_h: "Limitation of liability",
    terms_liability_p: "To the maximum extent permitted by law, we are not liable for indirect or consequential damages.",
    terms_changes_h: "Changes to app or terms",
    terms_changes_p: "We may update the app or these terms from time to time.",
    terms_end_h: "Termination",
    terms_end_p: "You may stop using the app at any time by uninstalling it.",
    terms_children_h: "Children",
    terms_children_p: "StepGate is not directed to children under 13.",
    terms_contact_h: "Contact",
    terms_contact_p: "Questions about these terms: burteloffluther@gmail.com",

    data_title: "How StepGate Uses Data",
    data_h1: "How We Use Data",
    data_lead: "A plain-language explanation of why StepGate needs certain permissions.",
    data_updated: "Last updated: 2026-04-16",
    data_usage_h: "Why app usage access is needed",
    data_usage_p: "To track time in controlled apps and detect when a limit is exhausted.",
    data_steps_h: "Why step data is needed",
    data_steps_p: "Step data updates access after new records arrive; data may appear with delay.",
    data_acc_h: "Why accessibility is needed",
    data_acc_p: "Accessibility is used only for controlled app launch detection and limit screen display.",
    data_device_h: "Does data leave the device?",
    data_device_p: "No. StepGate stores data locally on your device.",
    data_no_perm_h: "What if a permission is not granted?",
    data_no_perm_p: "StepGate still runs, but some features are limited.",
    data_not_h: "What StepGate does not access",
    data_not_1: "Messages or chat contents",
    data_not_2: "On-screen text in other apps",
    data_not_3: "Keyboard input or passwords",
    data_not_4: "Photos, files, or contacts",
    data_contact_h: "Contact",
    data_contact_p: "Questions about data usage: burteloffluther@gmail.com"
  };

  const DE = {
    index_h1: "Rechtsdokumente",
    index_lead: "Richtlinien und Erklärungen für StepGate.",
    index_privacy: "Datenschutzerklärung",
    index_terms: "Nutzungsbedingungen",
    index_data_use: "Wie wir Daten verwenden",
    index_updated: "Aktualisiert: 2026-04-16"
  };

  const ES = {
    index_h1: "Documentos legales",
    index_lead: "Políticas y explicaciones para usuarios de StepGate.",
    index_privacy: "Política de privacidad",
    index_terms: "Términos de uso",
    index_data_use: "Cómo usamos los datos",
    index_updated: "Actualizado: 2026-04-16"
  };

  const PT = {
    index_h1: "Documentos legais",
    index_lead: "Políticas e explicações para usuários do StepGate.",
    index_privacy: "Política de privacidade",
    index_terms: "Termos de uso",
    index_data_use: "Como usamos os dados",
    index_updated: "Atualizado em: 2026-04-16"
  };

  I18N.en = { ...EN_FALLBACK, ...I18N.en };
  I18N.de = { ...EN_FALLBACK, ...DE, ...I18N.de };
  I18N.es = { ...EN_FALLBACK, ...ES, ...I18N.es };
  I18N["pt-BR"] = { ...EN_FALLBACK, ...PT, ...I18N["pt-BR"] };
  I18N.ru = { ...EN_FALLBACK, ...I18N.ru };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key]) node.textContent = dict[key];
    });
    const titleKey = document.body.getAttribute("data-title-key");
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];
    localStorage.setItem(STORAGE_KEY, lang);
    const select = document.getElementById("langSelect");
    if (select && select.value !== lang) select.value = lang;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("langSelect");
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial = saved && I18N[saved] ? saved : DEFAULT_LANG;
    if (select) {
      select.addEventListener("change", function () {
        applyLang(select.value);
      });
    }
    applyLang(initial);
  });
})();
