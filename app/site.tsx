"use client";

import { FormEvent, useEffect, useState } from "react";

export type SitePage = "home" | "booking" | "faq" | "contact";
type Lang = "en" | "zh";

const copy = {
  en: {
    language: "Language",
    notice: "Canadian Dental Care Plan (CDCP) + major private insurance accepted",
    brand: "HomeSmile",
    brandLine: "Mobile Dental Hygiene · Kathy Liu",
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
      floatingOne: "Insurance",
      floatingOneSub: "major plans welcome",
      floatingTwo: "Your home",
      floatingTwoSub: "your comfort",
      trustTitle: "Dental hygiene that fits your life",
      trustIntro:
        "A calm, convenient option for busy adults, seniors, caregivers, and anyone who feels more comfortable at home.",
      pillars: [
        {
          number: "INSURANCE",
          title: "Private insurance welcome",
          body: "We accept most major private dental insurance plans.",
        },
        {
          number: "CDCP",
          title: "Canadian Dental Care Plan",
          body: "Eligible services are available through the Canadian Dental Care Plan (CDCP), with coverage confirmed before treatment.",
        },
        {
          number: "HOME",
          title: "Stay where you’re comfortable",
          body: "Kathy arrives with the professional equipment needed for your visit.",
        },
      ],
      serviceEyebrow: "What to expect",
      serviceTitle: "Cleanings, preventive care, and whitening—brought to you",
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
        {
          title: "Teeth whitening",
          body: "Professional whitening options designed around your smile goals, comfort, and oral health.",
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
      aboutTitle: "Gentle care with a personal touch",
      aboutBody:
        "Kathy Liu is an independent mobile dental hygienist who brings calm, attentive care into the comfort of home. Her approach is gentle, unhurried, and focused on helping every client feel informed and at ease.",
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
          body: "Finish your cleaning or whitening visit, then carry on with your day—already at home.",
        },
      ],
      faqEyebrow: "Good to know",
      faqTitle: "Questions before your first visit?",
      faqBody: "Learn about the setup, insurance, the Canadian Dental Care Plan (CDCP), whitening, and what to prepare.",
      faqCta: "Read all FAQs",
      finalTitle: "Ready for a cleaner smile—at home?",
      finalBody: "Request a visit with Kathy and make your next cleaning or whitening appointment the easiest one yet.",
    },
    booking: {
      eyebrow: "Book your visit",
      title: "Your next cleaning or whitening visit can come to you.",
      intro:
        "Choose a time that works for you. Kathy will confirm your location, care needs, and Canadian Dental Care Plan (CDCP) or private insurance details before the visit.",
      placeholderTitle: "Online booking is almost ready",
      placeholderBody:
        "Your Calendly scheduling widget will live here. Once connected, clients can choose an available at-home appointment in a few taps.",
      placeholderLabel: "Calendly booking area",
      placeholderNote: "Scheduling integration placeholder",
      checklistTitle: "Before you book",
      checklist: [
        "Have your address or postal code ready so the service area can be confirmed.",
        "Share any mobility, accessibility, or comfort needs in advance.",
        "If using the Canadian Dental Care Plan (CDCP) or private insurance, keep your plan information nearby for coverage confirmation.",
      ],
      cdcpTitle: "Canadian Dental Care Plan & private insurance",
      cdcpBody:
        "We provide eligible services through the Canadian Dental Care Plan (CDCP) and accept most major private dental insurance plans. Coverage, co-payments, and frequency limits vary, so benefits will be confirmed before treatment. Please do not send private health information through an unsecured message.",
      supportTitle: "Not sure what to book?",
      supportBody: "Send a general inquiry and Kathy will help you choose the right visit.",
      supportCta: "Contact Kathy",
    },
    faqPage: {
      eyebrow: "Frequently asked questions",
      title: "Everything you need to feel ready.",
      intro:
        "A mobile dental hygiene visit is simple. Here are answers about care, setup, whitening, payment, and insurance coverage.",
      categories: ["Your visit", "Care & safety", "CDCP & insurance"],
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
        q: "Do you accept the Canadian Dental Care Plan and private insurance?",
        a: "Yes. We provide eligible services through the Canadian Dental Care Plan (CDCP) and accept most major private dental insurance plans. Coverage, co-payments, and frequency limits depend on your plan details.",
      },
      {
        q: "How does billing and reimbursement work?",
        a: "Billing arrangements will be confirmed when you book. Have your Canadian Dental Care Plan or private insurance information available so Kathy can explain the options that apply to you.",
      },
      {
        q: "Do you offer teeth whitening?",
        a: "Yes. Kathy offers professional teeth whitening and will review your oral health, goals, and sensitivity before recommending an option.",
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
      line: "Professional cleaning and whitening in the comfort of your home.",
      legal: "HomeSmile Mobile Dental Hygiene • Care by Kathy Liu",
      note: "Canadian Dental Care Plan and private insurance coverage vary by plan and service.",
    },
  },
  zh: {
    language: "语言",
    notice: "支持加拿大牙科保健计划（CDCP）和多数私人保险 • 舒舒服服在家洁牙",
    brand: "HomeSmile",
    brandLine: "Kathy Liu 到家牙齿护理",
    nav: { home: "首页", booking: "预约", faq: "常见问题", contact: "联系" },
    menu: "菜单",
    close: "关闭",
    book: "预约到家服务",
    learn: "看看服务流程",
    home: {
      eyebrow: "专业到家牙齿护理",
      title: "不用出门，也能拥有清爽健康的笑容。",
      intro: "Kathy 把专业、温柔的牙齿护理带到你家。省下开车、停车和候诊的时间，安心坐在家里就好。",
      imageAlt: "开心展示洁净健康笑容的人",
      floatingOne: "私人保险",
      floatingOneSub: "多数主流计划都接受",
      floatingTwo: "就在家里",
      floatingTwoSub: "轻松又自在",
      trustTitle: "牙齿护理，也可以很轻松",
      trustIntro: "适合忙碌的上班族、长者、照顾者，也适合更喜欢在熟悉环境里接受护理的你。",
      pillars: [
        { number: "保险", title: "支持私人保险", body: "接受大多数主流私人牙科保险计划，预约前会帮你确认相关信息。" },
        { number: "CDCP", title: "加拿大牙科保健计划", body: "提供加拿大牙科保健计划（CDCP）涵盖的合资格服务，治疗前会先确认保障。" },
        { number: "到家", title: "留在熟悉的家里", body: "Kathy 会带上服务需要的专业设备，直接到你家。" },
      ],
      serviceEyebrow: "可以做什么",
      serviceTitle: "从洁牙到美白，专业护理送到家",
      serviceIntro: "每次服务都会先聊聊你的口腔状况、舒适需求和想要改善的地方。",
      services: [
        { title: "口腔检查和洁牙", body: "仔细查看口腔健康状况，再专业清除牙菌斑和牙结石。" },
        { title: "抛光和氟化护理", body: "根据你的需要，提供牙齿抛光和氟化护理建议。" },
        { title: "日常护理建议", body: "给你简单、实用的刷牙和牙缝清洁建议，让每天护理更容易。" },
        { title: "牙齿美白", body: "根据你的牙齿状况、敏感度和理想效果，提供专业美白选择。" },
      ],
      comfortEyebrow: "按你的节奏来",
      comfortTitle: "熟悉的空间，合适的时间，更安心的护理。",
      comfortBody: "到家服务省下交通、停车和候诊时间。Kathy 会布置干净舒适的护理区域，把注意力都放在你身上。",
      comfortList: ["不用开车，也不用在诊所等候", "熟悉的环境，整个人更放松", "方便长者、照顾者和全家安排", "遵循专业感染预防和消毒流程"],
      comfortAlt: "在舒适环境中接受温和牙齿护理的客户",
      aboutEyebrow: "认识 Kathy",
      aboutTitle: "温柔、细心，不赶时间",
      aboutBody: "Kathy Liu 是一位独立执业的到家牙科保健师。她希望把专业护理做得更轻松、更有人情味，让每位客户都能听明白、放下心。",
      aboutQuote: "照顾好牙齿，不该是一件压力很大的事。",
      aboutAlt: "牙科保健师手里拿着牙齿模型",
      stepsEyebrow: "从预约到结束都很简单",
      stepsTitle: "到家服务怎么进行",
      steps: [
        { title: "选一个方便的时间", body: "提交预约，再告诉我们你的地址和无障碍或舒适需求。" },
        { title: "Kathy 到你家", body: "通常准备一小块光线好的空间和一个电源插座就可以了。" },
        { title: "轻松完成护理", body: "洁牙或美白结束后，你已经在家，可以直接继续当天的安排。" },
      ],
      faqEyebrow: "预约前可以先看看",
      faqTitle: "第一次到家服务，有问题很正常。",
      faqBody: "这里整理了服务准备、加拿大牙科保健计划（CDCP）、私人保险、牙齿美白和时间安排。",
      faqCta: "查看所有常见问题",
      finalTitle: "准备好在家轻松护理牙齿了吗？",
      finalBody: "预约 Kathy 的到家服务，让下一次洁牙或美白更省心。",
    },
    booking: {
      eyebrow: "预约到家服务",
      title: "下一次洁牙或美白，让护理直接来找你。",
      intro: "选一个适合你的时间。到访前，Kathy 会确认地址、护理需求，以及加拿大牙科保健计划（CDCP）或私人保险信息。",
      placeholderTitle: "在线预约马上就好",
      placeholderBody: "Calendly 预约工具会放在这里。连接后，几下点击就能选好到家服务时间。",
      placeholderLabel: "Calendly 预约区域",
      placeholderNote: "预约系统预留位置",
      checklistTitle: "预约前准备一下",
      checklist: ["准备好地址或邮政编码，方便确认服务范围。", "提前告诉我们行动、无障碍或舒适方面的需求。", "如果使用 CDCP 或私人保险，请准备好计划信息，方便确认保障。"],
      cdcpTitle: "加拿大牙科保健计划和私人保险",
      cdcpBody: "我们提供加拿大牙科保健计划（CDCP）涵盖的合资格服务，也接受大多数主流私人牙科保险。具体保障、共付金额和次数限制以你的计划为准，治疗前会先确认。请不要通过普通留言发送私人健康信息。",
      supportTitle: "不确定该预约哪项服务？",
      supportBody: "发一条简单消息给 Kathy，她会帮你选。",
      supportCta: "联系 Kathy",
    },
    faqPage: {
      eyebrow: "常见问题",
      title: "提前了解，预约更安心。",
      intro: "到家牙齿护理其实很简单。这里整理了服务流程、安全、牙齿美白、付款和保险信息。",
      categories: ["到家服务", "护理和安全", "CDCP 和保险"],
      closingTitle: "还有问题？",
      closingBody: "给 Kathy 留个言，她会帮你轻松准备第一次到家服务。",
    },
    faqs: [
      { q: "到家牙齿护理包括什么？", a: "Kathy 会先了解你的健康情况和顾虑，查看口腔健康状况，再提供适合的预防护理。服务可能包括洁牙、抛光、氟化护理和个性化日常护理建议。" },
      { q: "家里需要准备什么？", a: "通常准备一小块整洁空间、舒适的护理位置、充足光线和一个电源插座就够了。Kathy 到访前会和你确认。" },
      { q: "一次服务需要多长时间？", a: "时间会根据你的口腔状况和是否第一次服务而不同。确认预约时，Kathy 会告诉你大概需要多久。" },
      { q: "接受加拿大牙科保健计划和私人保险吗？", a: "接受。我们提供加拿大牙科保健计划（CDCP）涵盖的合资格服务，也接受大多数主流私人牙科保险。具体保障、共付金额和次数限制以你的计划为准。" },
      { q: "付款和报销怎么处理？", a: "预约时会说明适合你的付款和报销方式。请准备好 CDCP 或私人保险信息，Kathy 会帮你了解下一步。" },
      { q: "可以做牙齿美白吗？", a: "可以。Kathy 提供专业牙齿美白，并会先了解你的口腔状况、理想效果和敏感情况，再推荐适合的选择。" },
      { q: "到家服务安全卫生吗？", a: "安全。服务会遵循专业的感染预防和控制流程，包括使用合适的防护用品和经过规范处理的器械。" },
      { q: "哪些人适合到家服务？", a: "到家服务很适合忙碌的上班族、长者、照顾者、行动或交通不便的人，也适合更喜欢熟悉环境的你。" },
      { q: "如果需要牙医治疗怎么办？", a: "如果 Kathy 发现需要牙医进一步检查或治疗的情况，她会清楚说明，并建议合适的转介或下一步。" },
      { q: "服务哪些地区？", a: "服务范围会根据地点和当天路线安排而不同。预约时提供邮政编码，Kathy 会帮你确认是否在当前服务范围内。" },
    ],
    contact: {
      eyebrow: "联系 Kathy",
      title: "让下一次护理轻松一点。",
      intro: "想问问题、确认服务范围，或不知道该选哪项服务，都可以给我们留言。",
      formTitle: "发个简单消息",
      name: "姓名", email: "邮箱", phone: "电话（选填）", postal: "邮政编码", message: "Kathy 可以怎么帮你？",
      namePh: "你的姓名", emailPh: "you@example.com", phonePh: "(000) 000-0000", postalPh: "A1A 1A1",
      messagePh: "简单说说你的问题就好，请不要填写私人医疗信息。",
      send: "发送留言",
      privacy: "请不要填写健康卡号码或私人医疗信息。",
      demo: "留言流程已经准备好。网站正式上线前，需要连接 Kathy 的收件邮箱。",
      visitTitle: "到家预约", visitBody: "每次到访前都会确认服务范围和时间。",
      replyTitle: "认真回复", replyBody: "Kathy 会在护理安排允许的情况下尽快回复一般问题。",
      urgentTitle: "牙齿紧急情况？", urgentBody: "到家洁牙不是紧急服务。如果出现剧烈疼痛、肿胀、外伤或无法止血，请尽快联系牙医或紧急医疗服务。",
    },
    footer: {
      line: "专业洁牙和美白，舒舒服服在家完成。",
      legal: "HomeSmile 到家牙齿护理 • Kathy Liu 提供服务",
      note: "CDCP 和私人保险的具体保障以个人计划和服务项目为准。",
    },
  },
} as const;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo-wrap" aria-hidden="true">
      <span className="logo-mark">H</span>
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
    document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
  }, []);

  const t = copy[lang];
  const href = (path: string) => `${path}?lang=${lang}`;
  const changeLanguage = (next: Lang) => {
    setLang(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
    document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
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
                  <span><i>✓</i> {lang === "en" ? "Private insurance" : "私人保险"}</span>
                  <span><i>✓</i> CDCP</span>
                  <span><i>✓</i> {lang === "en" ? "At home" : "到家服务"}</span>
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
                <p className="eyebrow">{lang === "en" ? "Comfort meets care" : "舒适和专业，都可以有"}</p>
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
                <div className="image-caption"><span>01</span>{lang === "en" ? "Care in a familiar space" : "在熟悉的家里接受护理"}</div>
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
                <div className="signature"><span>Kathy</span><small>Kathy Liu • {lang === "en" ? "Mobile dental hygienist" : "到家牙科保健师"}</small></div>
              </div>
              <div className="about-image-wrap">
                <img src="/images/dental-care.jpg" alt={t.home.aboutAlt} width="1600" height="1067" loading="lazy" />
                <div className="experience-seal"><strong>CDCP</strong><span>{lang === "en" ? "+ PRIVATE INSURANCE" : "和私人保险"}</span></div>
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
              <div className="final-copy"><p className="eyebrow">{lang === "en" ? "Care comes to you" : "专业护理来到你家"}</p><h2>{t.home.finalTitle}</h2><p>{t.home.finalBody}</p></div>
              <a className="button button-coral" href={href("/booking")}>{t.book} <span>→</span></a>
            </section>
          </>
        )}

        {page === "booking" && (
          <>
            <section className="page-hero section-pad booking-hero">
              <div><p className="eyebrow">{t.booking.eyebrow}</p><h1>{t.booking.title}</h1><p>{t.booking.intro}</p></div>
              <div className="page-hero-stat"><strong>CDCP</strong><span>{lang === "en" ? "Canadian Dental Care Plan + private insurance" : "加拿大牙科保健计划 + 私人保险"}</span></div>
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
        <div className="footer-bottom"><span>{t.footer.legal}</span><span>{t.footer.note}</span><span>© {new Date().getFullYear()} HomeSmile</span></div>
      </footer>
      {page !== "booking" && <a className="mobile-book-bar" href={href("/booking")}>{t.book} <span>→</span></a>}
    </div>
  );
}
