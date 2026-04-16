(function () {
  const STORAGE_KEY = "stepgate_legal_lang";
  const SUPPORTED = ["en", "de", "es", "pt"];

  const LABELS = {
    en: { label: "Language" },
    de: { label: "Sprache" },
    es: { label: "Idioma" },
    pt: { label: "Idioma" },
  };

  function parseFile(name) {
    const m = name.match(/^(index|privacy|terms|data-use)(?:\.(de|es|pt))?\.html$/);
    if (!m) return null;
    return { doc: m[1], lang: m[2] || "en" };
  }

  function fileFor(doc, lang) {
    return lang === "en" ? `${doc}.html` : `${doc}.${lang}.html`;
  }

  function preferredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : "en";
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
    injectLanguageSelector(doc, currentLang);
  });
})();
