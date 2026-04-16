(function () {
  const STORAGE_KEY = "stepgate_legal_lang";
  const SUPPORTED = ["ru", "en", "de", "es", "pt"];

  const LABELS = {
    ru: { label: "Язык" },
    en: { label: "Language" },
    de: { label: "Sprache" },
    es: { label: "Idioma" },
    pt: { label: "Idioma" },
  };

  function parseFile(name) {
    const m = name.match(/^(index|privacy|terms|data-use)(?:\.(ru|de|es|pt))?\.html$/);
    if (!m) return null;
    return { doc: m[1], lang: m[2] || "en" };
  }

  function fileFor(doc, lang) {
    return lang === "en" ? `${doc}.html` : `${doc}.${lang}.html`;
  }

  function preferredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : "ru";
  }

  function injectLanguageSelector(currentDoc, currentLang) {
    const holder = document.createElement("div");
    holder.className = "lang-fab";

    const label = document.createElement("label");
    label.className = "lang-label";
    label.setAttribute("for", "langSelect");
    label.textContent = (LABELS[currentLang] || LABELS.en).label;

    const select = document.createElement("select");
    select.className = "lang-select";
    select.id = "langSelect";
    select.setAttribute("aria-label", "Language");

    const options = [
      { value: "ru", text: "Русский" },
      { value: "en", text: "English" },
      { value: "de", text: "Deutsch" },
      { value: "es", text: "Español" },
      { value: "pt", text: "Português" },
    ];

    options.forEach((opt) => {
      const o = document.createElement("option");
      o.value = opt.value;
      o.textContent = opt.text;
      if (opt.value === currentLang) o.selected = true;
      select.appendChild(o);
    });

    select.addEventListener("change", () => {
      const nextLang = select.value;
      localStorage.setItem(STORAGE_KEY, nextLang);
      window.location.href = fileFor(currentDoc, nextLang);
    });

    holder.appendChild(label);
    holder.appendChild(select);
    document.body.appendChild(holder);
  }

  function rewriteDocLinks(currentLang) {
    const mapping = {
      "index.html": fileFor("index", currentLang),
      "privacy.html": fileFor("privacy", currentLang),
      "terms.html": fileFor("terms", currentLang),
      "data-use.html": fileFor("data-use", currentLang),
      "index.ru.html": fileFor("index", currentLang),
      "privacy.ru.html": fileFor("privacy", currentLang),
      "terms.ru.html": fileFor("terms", currentLang),
      "data-use.ru.html": fileFor("data-use", currentLang),
      "index.de.html": fileFor("index", currentLang),
      "privacy.de.html": fileFor("privacy", currentLang),
      "terms.de.html": fileFor("terms", currentLang),
      "data-use.de.html": fileFor("data-use", currentLang),
      "index.es.html": fileFor("index", currentLang),
      "privacy.es.html": fileFor("privacy", currentLang),
      "terms.es.html": fileFor("terms", currentLang),
      "data-use.es.html": fileFor("data-use", currentLang),
      "index.pt.html": fileFor("index", currentLang),
      "privacy.pt.html": fileFor("privacy", currentLang),
      "terms.pt.html": fileFor("terms", currentLang),
      "data-use.pt.html": fileFor("data-use", currentLang),
    };

    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href || href.includes("://") || href.startsWith("#")) return;
      if (mapping[href]) a.setAttribute("href", mapping[href]);
    });
  }

  function removeLanguageMetaLines() {
    document.querySelectorAll(".meta").forEach((node) => {
      const t = (node.textContent || "").trim();
      if (/^(Languages|Sprachen|Sprache|Idiomas|Idioma|Языки)\s*:/i.test(t)) {
        node.remove();
      }
    });
  }

  function removeGarbageArtifacts() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((n) => {
      const original = n.nodeValue || "";
      const cleaned = original.replace(/`r`n/g, "").replace(/\u0060r\u0060n/g, "");
      if (cleaned !== original) n.nodeValue = cleaned;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const file = window.location.pathname.split("/").pop() || "index.html";
    const parsed = parseFile(file);
    if (!parsed) return;

    const { doc, lang: currentLang } = parsed;
    const preferred = preferredLang();

    if (currentLang === "en" && preferred !== "en") {
      window.location.replace(fileFor(doc, preferred));
      return;
    }

    localStorage.setItem(STORAGE_KEY, currentLang);
    rewriteDocLinks(currentLang);
    removeGarbageArtifacts();
    removeLanguageMetaLines();
    injectLanguageSelector(doc, currentLang);
  });
})();
