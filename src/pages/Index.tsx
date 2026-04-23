import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/ecffb4b1-d975-40b4-b68c-78227948cc17/files/52445089-e822-4e88-bcfc-a53f728e160d.jpg";

const SERVICES = [
  {
    icon: "Building2",
    title: "Промышленное строительство",
    desc: "Заводы, склады, производственные комплексы под ключ. Полный контроль качества на каждом этапе.",
  },
  {
    icon: "Landmark",
    title: "Коммерческая недвижимость",
    desc: "Офисные центры, торговые объекты, гостиницы. Строим в срок и в рамках бюджета.",
  },
  {
    icon: "HardHat",
    title: "Реконструкция и модернизация",
    desc: "Капитальный ремонт и техническое перевооружение действующих объектов.",
  },
  {
    icon: "Ruler",
    title: "Проектирование",
    desc: "Разработка проектной документации, прохождение экспертизы, согласование в госорганах.",
  },
  {
    icon: "Wrench",
    title: "Инженерные системы",
    desc: "Электрика, вентиляция, отопление, водоснабжение, слаботочные системы.",
  },
  {
    icon: "ShieldCheck",
    title: "Технический надзор",
    desc: "Строительный контроль и авторский надзор за объектами любой сложности.",
  },
];

const REVIEWS = [
  {
    name: "Алексей Морозов",
    company: "ГК «ПромИнвест»",
    rating: 5,
    text: "Сдали объект на три недели раньше срока. Качество отделки превзошло ожидания. Работаем уже с третьим объектом.",
  },
  {
    name: "Светлана Козлова",
    company: "ТЦ «Меридиан»",
    rating: 5,
    text: "Генеральный подрядчик взял на себя все согласования и коммуникации с субподрядчиками. Нам оставалось только принимать результат.",
  },
  {
    name: "Дмитрий Васильев",
    company: "Завод «ТехноМаш»",
    rating: 5,
    text: "Реконструкция производственного цеха 8 000 м² за 7 месяцев. Ни одного нарушения по технике безопасности. Рекомендую.",
  },
  {
    name: "Наталья Иванова",
    company: "Отель «Северный»",
    rating: 5,
    text: "Строительство гостиничного комплекса под ключ. Команда профессионалов, прозрачная отчётность и строгое соблюдение бюджета.",
  },
];

const STATS = [
  { value: "18+", label: "лет на рынке" },
  { value: "240+", label: "сданных объектов" },
  { value: "3 млн м²", label: "построено площадей" },
  { value: "98%", label: "клиентов возвращаются" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <span className="font-oswald text-background text-sm font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>СП</span>
            </div>
            <span className="text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>СтройПроект</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#services", label: "Услуги" },
              { href: "#reviews", label: "Отзывы" },
              { href: "#contacts", label: "Контакты" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-gold text-background px-5 py-2.5 text-xs font-medium tracking-widest uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <Icon name="Send" size={14} />
            Telegram
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {[
              { href: "#services", label: "Услуги" },
              { href: "#reviews", label: "Отзывы" },
              { href: "#contacts", label: "Контакты" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://t.me/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold text-background px-5 py-2.5 text-xs font-medium tracking-widest uppercase w-fit"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              <Icon name="Send" size={14} />
              Telegram
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 w-full">
          <div className="max-w-2xl">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 animate-fade-in" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Генеральный подрядчик полного цикла
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '-0.01em' }}
            >
              СТРОИМ
              <br />
              <span className="text-gold">НАДЁЖНО.</span>
              <br />
              СДАЁМ
              <br />
              В СРОК.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-in-up delay-200 font-light">
              18 лет на рынке промышленного и коммерческого строительства.
              <br />
              Берём объект под полную ответственность — от проекта до ключей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gold text-background px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
              <a
                href="#contacts"
                className="flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-200"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-gold mb-1"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Что мы делаем
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            НАШИ УСЛУГИ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon name={service.icon} size={18} className="text-gold" />
              </div>
              <h3
                className="text-lg font-semibold mb-3 tracking-wide"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Нам доверяют
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ОТЗЫВЫ КЛИЕНТОВ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-background border border-border p-8 relative group hover:border-gold transition-colors duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-gold fill-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6 font-light italic">
                  «{review.text}»
                </p>
                <div className="border-t border-border pt-5">
                  <div className="font-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {review.name}
                  </div>
                  <div className="text-xs text-gold mt-0.5">{review.company}</div>
                </div>
                <div className="absolute top-8 right-8 text-5xl leading-none text-border font-serif select-none">
                  "
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Связаться с нами
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ОБСУДИМ
              <br />
              ВАШ ПРОЕКТ
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 font-light">
              Оставьте заявку — наш менеджер свяжется с вами в течение одного рабочего дня
              и проведёт бесплатную консультацию.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center transition-colors duration-200">
                  <Icon name="Send" size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Telegram</div>
                  <div className="text-sm group-hover:text-gold transition-colors">@yourhandle</div>
                </div>
              </a>

              <a href="tel:+74951234567" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center transition-colors duration-200">
                  <Icon name="Phone" size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Телефон</div>
                  <div className="text-sm group-hover:text-gold transition-colors">+7 (495) 123-45-67</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <Icon name="MapPin" size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Адрес</div>
                  <div className="text-sm">Москва, Пресненская наб., 8</div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card border border-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center gap-4">
                <div className="w-14 h-14 border border-gold flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  ЗАЯВКА ОТПРАВЛЕНА
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Мы свяжемся с вами в течение рабочего дня
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors duration-200 placeholder:text-muted-foreground/50"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors duration-200 placeholder:text-muted-foreground/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                    Описание объекта
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Кратко опишите ваш проект..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gold text-background px-6 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[var(--gold-light)] transition-colors duration-200 flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  <Icon name="ArrowRight" size={16} />
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground text-center font-light">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gold flex items-center justify-center">
              <span className="text-background text-xs font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>СП</span>
            </div>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              СтройПроект © 2024
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Лицензия СРО №XXXX-ХXXX — Генеральный подрядчик полного цикла
          </p>
          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gold hover:text-[var(--gold-light)] text-xs tracking-wider uppercase transition-colors"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <Icon name="Send" size={13} />
            Telegram
          </a>
        </div>
      </footer>
    </div>
  );
}