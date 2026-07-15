"use client";

import { FormEvent, useEffect, useState } from "react";

export type SitePage = "home" | "booking" | "faq" | "contact";
type Lang = "en" | "zh";

const copy = {
  en: {
    language: "Language",
    notice: "CDCP-eligible care • Appointments in the comfort of your home",
    brand: "Kathy Liu",
    brandLine: "Mobile Dental Hygiene",
    nav: { home: "Home", booking: "Book", faq: "FAQ", contact: "Contact" },
    menu: "Menu",
    close: "Close",
    book: "Book an at-home visit",
    learn: "See how it works",
    home: {
      eyebrow: "Professional mobile dental hygiene",
      title: "A fresh, healthy smile—without leaving home.",
      intro:
        "Kathy brings gentle, professional dental hygiene care to you. No commute, no waiting room, and no rushing your day.",
      imageAlt: "A person smiling with clean, healthy teeth",
      floatingOne: "10+ years",
      floatingOneSub: "of experience",
      floatingTwo: "Your home",
      floatingTwoSub: "your comfort",
      trustTitle: "Dental hygiene that fits your life",
      trustIntro:
        "A calm, convenient option for busy adults, seniors, caregivers, and anyone who feels more comfortable at home.",
      pillars: [
        {
          number: "10+",
          title: "Years of experience",
          body: "Thoughtful care shaped by more than a decade of hands-on dental hygiene experience.",
        },
        {
          number: "CDCP",
          title: "Eligible services",
          body: "CDCP-eligible care with clear guidance about coverage before your appointment.",
        },
        {
          number: "HOME",
          title: "Stay where you’re comfortable",
          body: "Kathy arrives with the professional equipment needed for your visit.",
        },
      ],
      serviceEyebrow: "What to expect",
      serviceTitle: "Complete preventive care, brought to you",
      serviceIntro:
        "Every visit begins with a conversation about your health, comfort, and goals.",
      services: [
        {
          title: "Assessment & cleaning",
          body: "A careful oral health assessment followed by professional plaque and tartar removal.",
        },
        {
          title: "Polish & fluoride",
          body: "Polishing and fluoride recommendations tailored to your needs and preferences.",
        },
        {
          title: "Practical home care",
          body: "Simple, personalized advice to make brushing and interdental care easier every day.",
        },
      ],
      comfortEyebrow: "Care on your terms",
      comfortTitle: "Your space. Your schedule. Your peace of mind.",
      comfortBody:
        "At-home care removes the travel, parking, and waiting room from your appointment. Kathy sets up a clean, comfortable treatment area and gives you her full attention.",
      comfortList: [
        "No commute or clinic waiting room",
        "A familiar setting for a calmer visit",
        "Convenient for caregivers and families",
        "Professional infection prevention protocols",
      ],
      comfortAlt: "A patient receiving gentle dental care",
      aboutEyebrow: "Meet Kathy",
      aboutTitle: "Experienced care with a personal touch",
      aboutBody:
        "Kathy Liu is an independent mobile dental hygienist with more than 10 years of experience. Her approach is gentle, unhurried, and focused on helping each client feel informed and at ease.",
      aboutQuote: "Good oral health should feel approachable—and fit into real life.",
      aboutAlt: "Dental hygienist holding a model of teeth",
      stepsEyebrow: "Simple from start to finish",
      stepsTitle: "How an at-home visit works",
      steps: [
        {
          title: "Choose a time",
          body: "Request an appointment and share your location and accessibility needs.",
        },
        {
          title: "Kathy comes to you",
          body: "A small, well-lit area and access to an electrical outlet are usually all that’s needed.",
        },
        {
          title: "Relax and smile",
          body: "Receive professional preventive care, then carry on with your day—already at home.",
        },
      ],
      faqEyebrow: "Good to know",
      faqTitle: "Questions before your first visit?",
      faqBody: "Learn about the setup, CDCP coverage, appointment length, and what to prepare.",
      faqCta: "Read all FAQs",
      finalTitle: "Ready for a cleaner smile—at home?",
      finalBody: "Request a visit with Kathy and make your next dental hygiene appointment the easiest one yet.",
    },
    booking: {
      eyebrow: "Book your visit",
      title: "Your next cleaning can come to you.",
      intro:
        "Choose a time that works for you. Kathy will confirm your location, care needs, and CDCP details before the visit.",
      placeholderTitle: "Online booking is almost ready",
      placeholderBody:
        "Your Calendly scheduling widget will live here. Once connected, clients can choose an available at-home appointment in a few taps.",
      placeholderLabel: "Calendly booking area",
      placeholderNote: "Scheduling integration placeholder",
      checklistTitle: "Before you book",
      checklist: [
        "Have your address or postal code ready so the service area can be confirmed.",
        "Share any mobility, accessibility, or comfort needs in advance.",
        "If using CDCP, keep your member information nearby for coverage confirmation.",
      ],
      cdcpTitle: "Using the Canadian Dental Care Plan?",
      cdcpBody:
        "Eligible services may be covered through CDCP. Coverage and co-payments vary, so your benefits will be confirmed before treatment. Please do not send private health information through an unsecured message.",
      supportTitle: "Not sure what to book?",
      supportBody: "Send a general inquiry and Kathy will help you choose the right visit.",
      supportCta: "Contact Kathy",
    },
    faqPage: {
      eyebrow: "Frequently asked questions",
      title: "Everything you need to feel ready.",
      intro:
        "A mobile dental hygiene visit is simple. Here are answers about care, setup, payment, and CDCP eligibility.",
      categories: ["Your visit", "Care & safety", "Coverage"],
      closingTitle: "Still have a question?",
      closingBody: "Send Kathy a note and she’ll help you prepare for a comfortable visit.",
    },
    faqs: [
      {
        q: "What happens during an at-home dental hygiene visit?",
        a: "Kathy reviews your health history and concerns, completes an oral health assessment, and provides appropriate preventive hygiene care. This may include scaling, polishing, fluoride, and personalized home-care guidance.",
      },
      {
        q: "What do I need to provide at home?",
        a: "Usually, a small clear area, a comfortable spot for treatment, good lighting, and access to an electrical outlet are enough. Kathy will confirm the setup with you before arriving.",
      },
      {
        q: "How long is an appointment?",
        a: "Timing depends on your oral health needs and whether it is your first visit. Kathy will provide an estimate when your appointment is confirmed.",
      },
      {
        q: "Are your services CDCP eligible?",
        a: "Yes, eligible dental hygiene services can be provided under the Canadian Dental Care Plan. Coverage, co-payments, and frequency limits depend on your plan details and will be confirmed before treatment.",
      },
      {
        q: "Do you direct bill insurance or CDCP?",
        a: "Billing arrangements will be confirmed when you book. Have your plan or CDCP information available so Kathy can explain the options that apply to you.",
      },
      {
        q: "Is mobile dental hygiene safe and sanitary?",
        a: "Yes. Professional infection prevention and control procedures are followed, including appropriate personal protective equipment and properly processed instruments.",
      },
      {
        q: "Who benefits from mobile dental hygiene?",
        a: "At-home visits can be helpful for busy adults, older adults, caregivers, people with mobility or transportation barriers, and anyone who prefers care in a familiar setting.",
      },
      {
        q: "What if I need treatment from a dentist?",
        a: "If Kathy identifies something that needs a dentist’s assessment or treatment, she will explain the finding and recommend an appropriate referral or next step.",
      },
      {
        q: "What areas do you serve?",
        a: "Service availability depends on your location and travel schedule. Share your postal code when booking so Kathy can confirm whether your home is within the current service area.",
      },
    ],
    contact: {
      eyebrow: "Get in touch",
      title: "Let’s make your next visit easy.",
      intro:
        "Ask a question, check the service area, or request help choosing the right appointment.",
      formTitle: "Send a general inquiry",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      postal: "Postal code",
      message: "How can Kathy help?",
      namePh: "Your name",
      emailPh: "you@example.com",
      phonePh: "(000) 000-0000",
      postalPh: "A1A 1A1",
      messagePh: "Please keep this message general and do not include private medical information.",
      send: "Send inquiry",
      privacy: "Please do not include health card numbers or private medical information.",
      demo:
        "This inquiry flow is ready. Connect the form to Kathy’s preferred inbox before launch.",
      visitTitle: "At-home appointments",
      visitBody: "Service area and availability are confirmed before every visit.",
      replyTitle: "Thoughtful replies",
      replyBody: "General inquiries are answered as soon as the care schedule allows.",
      urgentTitle: "Dental emergency?",
      urgentBody:
        "Mobile hygiene is not an emergency service. For severe pain, swelling, trauma, or uncontrolled bleeding, contact a dentist or urgent medical care.",
    },
    footer: {
      line: "Professional dental hygiene care in the comfort of your home.",
      legal: "Kathy Liu (DBA) • Independent Mobile Dental Hygiene",
      note: "CDCP eligibility and coverage vary by client and service.",
    },
  },
  zh: {
    language: "語言",
    notice: "符合 CDCP 資格的服務 • 在舒適家中接受護理",
    brand: "Kathy Liu",
    brandLine: "流動牙科衛生服務",
    nav: { home: "首頁", booking: "預約", faq: "常見問題", contact: "聯絡" },
    menu: "選單",
    close: "關閉",
    book: "預約到府服務",
    learn: "了解服務流程",
    home: {
      eyebrow: "專業流動牙科衛生服務",
      title: "清新健康笑容，足不出戶也能擁有。",
      intro: "Kathy 將溫和、專業的牙科衛生護理帶到您家。毋須通勤、毋須等候，也不必打亂一天的安排。",
      imageAlt: "展現潔淨健康牙齒的笑容",
      floatingOne: "10+ 年",
      floatingOneSub: "專業經驗",
      floatingTwo: "安坐家中",
      floatingTwoSub: "自在舒適",
      trustTitle: "配合您生活的牙科衛生護理",
      trustIntro: "適合忙碌成人、長者、照顧者，以及在家中感到更自在的每一位客戶。",
      pillars: [
        { number: "10+", title: "多年專業經驗", body: "超過十年的臨床牙科衛生經驗，提供細心周到的護理。" },
        { number: "CDCP", title: "合資格服務", body: "提供符合 CDCP 資格的護理，並於預約前清楚說明保障。" },
        { number: "到府", title: "留在舒適家中", body: "Kathy 攜帶服務所需的專業設備親自到訪。" },
      ],
      serviceEyebrow: "服務內容",
      serviceTitle: "全面預防護理，直接送到您家",
      serviceIntro: "每次到訪都先了解您的健康狀況、舒適需要和護理目標。",
      services: [
        { title: "口腔評估與潔牙", body: "仔細評估口腔健康，並專業清除牙菌斑和牙石。" },
        { title: "拋光與氟化護理", body: "按您的需要和選擇提供牙齒拋光及氟化建議。" },
        { title: "實用居家護理", body: "提供簡單個人化建議，讓每天刷牙和牙縫清潔更容易。" },
      ],
      comfortEyebrow: "按您的需要接受護理",
      comfortTitle: "您的空間、您的時間、您的安心。",
      comfortBody: "到府服務免去交通、泊車和候診時間。Kathy 會設置整潔舒適的護理空間，專心照顧您的需要。",
      comfortList: ["毋須通勤或在診所候診", "熟悉環境，護理過程更放鬆", "方便照顧者和家庭安排", "遵守專業感染預防程序"],
      comfortAlt: "在舒適環境接受溫和牙科護理的客戶",
      aboutEyebrow: "認識 Kathy",
      aboutTitle: "豐富經驗，貼心照顧",
      aboutBody: "Kathy Liu 是獨立流動牙科衛生師，擁有超過十年經驗。她以溫和、不催促的方式，讓每位客戶了解自己的口腔健康並安心接受護理。",
      aboutQuote: "良好口腔健康應該簡單易行，也能融入日常生活。",
      aboutAlt: "牙科衛生師手持牙齒模型",
      stepsEyebrow: "由開始到完成都很簡單",
      stepsTitle: "到府服務流程",
      steps: [
        { title: "選擇時間", body: "提出預約，並提供地點及無障礙或舒適需要。" },
        { title: "Kathy 親自到訪", body: "通常只需一小片光線充足的空間和電源插座。" },
        { title: "輕鬆享受清新笑容", body: "完成專業預防護理後，您已在家中，可立即繼續一天的生活。" },
      ],
      faqEyebrow: "預約前須知",
      faqTitle: "首次到訪前有疑問？",
      faqBody: "了解所需空間、CDCP 保障、所需時間和準備事項。",
      faqCta: "查看所有常見問題",
      finalTitle: "準備好在家中擁有更潔淨笑容嗎？",
      finalBody: "向 Kathy 提出預約，讓下次牙科衛生護理變得前所未有地輕鬆。",
    },
    booking: {
      eyebrow: "預約到府服務",
      title: "下次潔牙，可以直接來到您家。",
      intro: "選擇合適時間。Kathy 會在到訪前確認地點、護理需要及 CDCP 資料。",
      placeholderTitle: "網上預約即將啟用",
      placeholderBody: "Calendly 預約工具將顯示於此。連接後，客戶只需幾下點按即可選擇到府服務時間。",
      placeholderLabel: "Calendly 預約區域",
      placeholderNote: "預約系統預留位置",
      checklistTitle: "預約前準備",
      checklist: ["準備地址或郵區編號，以便確認服務範圍。", "預先告知行動、無障礙或舒適方面的需要。", "如使用 CDCP，請準備會員資料以確認保障。"],
      cdcpTitle: "使用加拿大牙科保健計劃？",
      cdcpBody: "合資格服務可能獲 CDCP 保障。保障和共同付款因人而異，治療前會先確認。請勿透過不安全訊息傳送私人健康資料。",
      supportTitle: "不確定應預約哪項服務？",
      supportBody: "傳送一般查詢，Kathy 會協助您選擇合適到訪。",
      supportCta: "聯絡 Kathy",
    },
    faqPage: {
      eyebrow: "常見問題",
      title: "讓您安心準備的所有資訊。",
      intro: "流動牙科衛生服務其實很簡單。以下解答護理、設置、付款和 CDCP 資格等問題。",
      categories: ["到府服務", "護理與安全", "保障資料"],
      closingTitle: "還有其他問題？",
      closingBody: "傳送訊息給 Kathy，她會協助您準備舒適的到府護理。",
    },
    faqs: [
      { q: "到府牙科衛生服務包括甚麼？", a: "Kathy 會先了解您的健康紀錄和疑慮，進行口腔健康評估，並提供合適的預防護理，包括刮牙、拋光、氟化護理及個人化居家護理建議。" },
      { q: "家中需要準備甚麼？", a: "通常只需一小片整潔空間、舒適的護理位置、充足光線和電源插座。Kathy 會在到訪前與您確認。" },
      { q: "一次服務需要多久？", a: "時間視乎您的口腔健康需要及是否首次到訪。Kathy 會在確認預約時提供估計。" },
      { q: "服務符合 CDCP 資格嗎？", a: "符合資格的牙科衛生服務可納入加拿大牙科保健計劃。實際保障、共同付款和次數限制視個人計劃而定，治療前會先確認。" },
      { q: "可以直接向保險或 CDCP 收費嗎？", a: "付款安排會在預約時確認。請準備保險或 CDCP 資料，Kathy 會說明適用選項。" },
      { q: "流動牙科衛生服務安全衛生嗎？", a: "安全。服務遵守專業感染預防和控制程序，包括使用合適防護裝備及妥善處理器具。" },
      { q: "哪些人適合到府服務？", a: "到府服務適合忙碌成人、長者、照顧者、行動或交通不便人士，以及偏好熟悉環境的客戶。" },
      { q: "如果需要牙醫治療怎麼辦？", a: "如 Kathy 發現需要牙醫評估或治療的情況，她會清楚解釋並建議合適轉介或下一步。" },
      { q: "服務哪些地區？", a: "服務範圍視地點和行程安排而定。預約時提供郵區編號，Kathy 會確認您家是否在目前服務範圍內。" },
    ],
    contact: {
      eyebrow: "聯絡我們",
      title: "讓下次護理變得更簡單。",
      intro: "提出問題、查詢服務範圍，或請我們協助選擇合適預約。",
      formTitle: "傳送一般查詢",
      name: "姓名", email: "電郵", phone: "電話（選填）", postal: "郵區編號", message: "Kathy 可以如何協助您？",
      namePh: "您的姓名", emailPh: "you@example.com", phonePh: "(000) 000-0000", postalPh: "A1A 1A1",
      messagePh: "請保持內容一般，勿提供私人醫療資料。",
      send: "傳送查詢",
      privacy: "請勿提供醫療卡號碼或私人醫療資料。",
      demo: "查詢流程已準備就緒。推出網站前，請連接 Kathy 選用的收件箱。",
      visitTitle: "到府預約", visitBody: "每次到訪前均會確認服務範圍及時間。",
      replyTitle: "細心回覆", replyBody: "一般查詢會在護理日程容許下盡快回覆。",
      urgentTitle: "牙科緊急情況？", urgentBody: "流動牙科衛生並非緊急服務。如有劇痛、腫脹、創傷或出血不止，請聯絡牙醫或緊急醫療服務。",
    },
    footer: {
      line: "在舒適家中享受專業牙科衛生護理。",
      legal: "Kathy Liu (DBA) • 獨立流動牙科衛生服務",
      note: "CDCP 資格和保障視客戶及服務而定。",
    },
  },
} as const;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo-wrap" aria-hidden="true">
      <span className="logo-mark">K</span>
      {!compact && <span className="logo-spark">+</span>}
    </span>
  );
}

export function Site({ page }: { page: SitePage }) {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("lang");
    const next: Lang = selected === "zh" ? "zh" : "en";
    setLang(next);
    document.documentElement.lang = next === "zh" ? "zh-Hant" : "en";
  }, []);

  const t = copy[lang];
  const href = (path: string) => `${path}?lang=${lang}`;
  const changeLanguage = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
    document.documentElement.lang = next === "zh" ? "zh-Hant" : "en";
    setMenuOpen(false);
  };

  const navItems: { key: SitePage; label: string; path: string }[] = [
    { key: "home", label: t.nav.home, path: "/" },
    { key: "booking", label: t.nav.booking, path: "/booking" },
    { key: "faq", label: t.nav.faq, path: "/faq" },
    { key: "contact", label: t.nav.contact, path: "/contact" },
  ];

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormReady(true);
  };

  return (
    <div className={`site ${lang === "zh" ? "is-zh" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="notice-bar">
        <span className="notice-dot" />
        {t.notice}
      </div>
      <header className="site-header">
        <a className="brand" href={href("/")} aria-label={`${t.brand} ${t.brandLine}`}>
          <Logo />
          <span>
            <strong>{t.brand}</strong>
            <small>{t.brandLine}</small>
          </span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={href(item.path)}
              aria-current={page === item.key ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="language-switcher" aria-label={t.language}>
            <button className={lang === "en" ? "active" : ""} onClick={() => changeLanguage("en")} type="button">EN</button>
            <button className={lang === "zh" ? "active" : ""} onClick={() => changeLanguage("zh")} type="button">中文</button>
          </div>
          <a className="button button-small nav-book" href={href("/booking")}>{t.nav.booking} <span>→</span></a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
          {menuOpen ? t.close : t.menu}
        </button>
      </header>

      <main id="main">
        {page === "home" && (
          <>
            <section className="hero section-pad">
              <div className="hero-copy">
                <p className="eyebrow">{t.home.eyebrow}</p>
                <h1>{t.home.title}</h1>
                <p className="hero-intro">{t.home.intro}</p>
                <div className="hero-actions">
                  <a className="button" href={href("/booking")}>{t.book} <span>→</span></a>
                  <a className="text-link" href="#how-it-works">{t.learn} <span>↓</span></a>
                </div>
                <div className="micro-trust">
                  <span><i>✓</i> 10+ {lang === "en" ? "years" : "年經驗"}</span>
                  <span><i>✓</i> CDCP</span>
                  <span><i>✓</i> {lang === "en" ? "At home" : "到府服務"}</span>
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-image-frame">
                  <img src="/images/hero-smile.jpg" alt={t.home.imageAlt} width="1229" height="1800" />
                </div>
                <div className="floating-card floating-experience">
                  <strong>{t.home.floatingOne}</strong><span>{t.home.floatingOneSub}</span>
                </div>
                <div className="floating-card floating-home">
                  <span className="home-icon" aria-hidden="true">⌂</span>
                  <div><strong>{t.home.floatingTwo}</strong><span>{t.home.floatingTwoSub}</span></div>
                </div>
              </div>
            </section>

            <section className="trust-section section-pad">
              <div className="section-heading centered narrow">
                <p className="eyebrow">{lang === "en" ? "Comfort meets care" : "舒適與專業兼備"}</p>
                <h2>{t.home.trustTitle}</h2>
                <p>{t.home.trustIntro}</p>
              </div>
              <div className="pillar-grid">
                {t.home.pillars.map((pillar) => (
                  <article className="pillar-card" key={pillar.title}>
                    <span className="pillar-number">{pillar.number}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="services-section section-pad">
              <div className="section-heading split-heading">
                <div><p className="eyebrow">{t.home.serviceEyebrow}</p><h2>{t.home.serviceTitle}</h2></div>
                <p>{t.home.serviceIntro}</p>
              </div>
              <div className="service-grid">
                {t.home.services.map((service, index) => (
                  <article className="service-card" key={service.title}>
                    <span className="service-index">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                    <span className="service-rule" />
                  </article>
                ))}
              </div>
            </section>

            <section className="comfort-section section-pad">
              <div className="comfort-image">
                <img src="/images/comfort-care.jpg" alt={t.home.comfortAlt} width="1600" height="1067" loading="lazy" />
                <div className="image-caption"><span>01</span>{lang === "en" ? "Care in a familiar space" : "熟悉空間內的專業護理"}</div>
              </div>
              <div className="comfort-copy">
                <p className="eyebrow">{t.home.comfortEyebrow}</p>
                <h2>{t.home.comfortTitle}</h2>
                <p>{t.home.comfortBody}</p>
                <ul className="check-list">
                  {t.home.comfortList.map((item) => <li key={item}><span>✓</span>{item}</li>)}
                </ul>
                <a className="button button-light" href={href("/booking")}>{t.book} <span>→</span></a>
              </div>
            </section>

            <section className="about-section section-pad">
              <div className="about-copy">
                <p className="eyebrow">{t.home.aboutEyebrow}</p>
                <h2>{t.home.aboutTitle}</h2>
                <p>{t.home.aboutBody}</p>
                <blockquote>“{t.home.aboutQuote}”</blockquote>
                <div className="signature"><span>Kathy</span><small>Kathy Liu • {lang === "en" ? "Mobile dental hygienist" : "流動牙科衛生師"}</small></div>
              </div>
              <div className="about-image-wrap">
                <img src="/images/dental-care.jpg" alt={t.home.aboutAlt} width="1600" height="1067" loading="lazy" />
                <div className="experience-seal"><strong>10+</strong><span>{lang === "en" ? "YEARS OF CARE" : "年專業護理"}</span></div>
              </div>
            </section>

            <section className="steps-section section-pad" id="how-it-works">
              <div className="section-heading centered narrow">
                <p className="eyebrow">{t.home.stepsEyebrow}</p>
                <h2>{t.home.stepsTitle}</h2>
              </div>
              <div className="step-grid">
                {t.home.steps.map((step, index) => (
                  <article className="step-card" key={step.title}>
                    <span className="step-bubble">{index + 1}</span>
                    <div><h3>{step.title}</h3><p>{step.body}</p></div>
                  </article>
                ))}
              </div>
            </section>

            <section className="faq-teaser section-pad">
              <div className="faq-teaser-copy">
                <p className="eyebrow">{t.home.faqEyebrow}</p>
                <h2>{t.home.faqTitle}</h2>
                <p>{t.home.faqBody}</p>
                <a className="text-link text-link-dark" href={href("/faq")}>{t.home.faqCta} <span>→</span></a>
              </div>
              <div className="faq-mini-list">
                {t.faqs.slice(0, 3).map((faq, index) => (
                  <details key={faq.q} open={index === 0}>
                    <summary>{faq.q}<span>+</span></summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="final-cta section-pad">
              <div className="final-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="final-plus">+</span></div>
              <div className="final-copy"><p className="eyebrow">{lang === "en" ? "Care comes to you" : "專業護理來到您家"}</p><h2>{t.home.finalTitle}</h2><p>{t.home.finalBody}</p></div>
              <a className="button button-coral" href={href("/booking")}>{t.book} <span>→</span></a>
            </section>
          </>
        )}

        {page === "booking" && (
          <>
            <section className="page-hero section-pad booking-hero">
              <div><p className="eyebrow">{t.booking.eyebrow}</p><h1>{t.booking.title}</h1><p>{t.booking.intro}</p></div>
              <div className="page-hero-stat"><strong>10+</strong><span>{lang === "en" ? "years making care more comfortable" : "年經驗，讓護理更舒適"}</span></div>
            </section>
            <section className="booking-layout section-pad">
              <div className="calendar-placeholder" id="calendly-placeholder">
                <div className="calendar-top"><span className="calendar-dot" /><strong>{t.booking.placeholderLabel}</strong><small>{t.booking.placeholderNote}</small></div>
                <div className="calendar-body">
                  <div className="calendar-icon" aria-hidden="true"><span>⌑</span></div>
                  <h2>{t.booking.placeholderTitle}</h2>
                  <p>{t.booking.placeholderBody}</p>
                  <div className="time-slot-preview" aria-hidden="true"><span>9:00</span><span>11:30</span><span>2:00</span></div>
                </div>
              </div>
              <aside className="booking-aside">
                <div className="info-card"><span className="card-label">01</span><h2>{t.booking.checklistTitle}</h2><ul className="check-list compact">{t.booking.checklist.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></div>
                <div className="info-card cdcp-card"><span className="card-label">CDCP</span><h2>{t.booking.cdcpTitle}</h2><p>{t.booking.cdcpBody}</p></div>
              </aside>
            </section>
            <section className="support-strip section-pad"><div><h2>{t.booking.supportTitle}</h2><p>{t.booking.supportBody}</p></div><a className="button button-light" href={href("/contact")}>{t.booking.supportCta} <span>→</span></a></section>
          </>
        )}

        {page === "faq" && (
          <>
            <section className="page-hero section-pad faq-hero">
              <div><p className="eyebrow">{t.faqPage.eyebrow}</p><h1>{t.faqPage.title}</h1><p>{t.faqPage.intro}</p></div>
              <div className="category-chips">{t.faqPage.categories.map((item) => <span key={item}>{item}</span>)}</div>
            </section>
            <section className="faq-page-grid section-pad">
              <div className="faq-page-list">
                {t.faqs.map((faq, index) => (
                  <details key={faq.q} open={index === 0}>
                    <summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span>{faq.q}<span className="faq-plus">+</span></summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
              <aside className="faq-side-card">
                <Logo />
                <h2>{t.faqPage.closingTitle}</h2>
                <p>{t.faqPage.closingBody}</p>
                <a className="button button-coral" href={href("/contact")}>{t.nav.contact} <span>→</span></a>
              </aside>
            </section>
          </>
        )}

        {page === "contact" && (
          <>
            <section className="page-hero section-pad contact-hero">
              <div><p className="eyebrow">{t.contact.eyebrow}</p><h1>{t.contact.title}</h1><p>{t.contact.intro}</p></div>
              <img src="/images/clean-smile.jpg" alt={t.home.imageAlt} width="1200" height="1800" />
            </section>
            <section className="contact-layout section-pad">
              <form className="contact-form" onSubmit={submitContact}>
                <div className="form-heading"><span>01</span><h2>{t.contact.formTitle}</h2></div>
                <div className="form-grid">
                  <label><span>{t.contact.name}</span><input required name="name" placeholder={t.contact.namePh} autoComplete="name" /></label>
                  <label><span>{t.contact.email}</span><input required name="email" type="email" placeholder={t.contact.emailPh} autoComplete="email" /></label>
                  <label><span>{t.contact.phone}</span><input name="phone" type="tel" placeholder={t.contact.phonePh} autoComplete="tel" /></label>
                  <label><span>{t.contact.postal}</span><input required name="postal" placeholder={t.contact.postalPh} autoComplete="postal-code" /></label>
                  <label className="full-field"><span>{t.contact.message}</span><textarea required name="message" rows={5} placeholder={t.contact.messagePh} /></label>
                </div>
                <div className="form-footer"><div><button className="button" type="submit">{t.contact.send} <span>→</span></button><small>{t.contact.privacy}</small></div>{formReady && <p className="form-ready" role="status">{t.contact.demo}</p>}</div>
              </form>
              <aside className="contact-info">
                <article><span>01</span><h3>{t.contact.visitTitle}</h3><p>{t.contact.visitBody}</p></article>
                <article><span>02</span><h3>{t.contact.replyTitle}</h3><p>{t.contact.replyBody}</p></article>
                <article className="urgent-card"><span>!</span><h3>{t.contact.urgentTitle}</h3><p>{t.contact.urgentBody}</p></article>
              </aside>
            </section>
          </>
        )}
      </main>

      <footer className="site-footer section-pad">
        <div className="footer-top">
          <div><a className="brand footer-brand" href={href("/")}><Logo /><span><strong>{t.brand}</strong><small>{t.brandLine}</small></span></a><p>{t.footer.line}</p></div>
          <div className="footer-links">{navItems.map((item) => <a key={item.key} href={href(item.path)}>{item.label}</a>)}</div>
          <a className="button button-coral" href={href("/booking")}>{t.book} <span>→</span></a>
        </div>
        <div className="footer-bottom"><span>{t.footer.legal}</span><span>{t.footer.note}</span><span>© {new Date().getFullYear()} Kathy Liu</span></div>
      </footer>
      {page !== "booking" && <a className="mobile-book-bar" href={href("/booking")}>{t.book} <span>→</span></a>}
    </div>
  );
}
