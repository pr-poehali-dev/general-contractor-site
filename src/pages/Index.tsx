import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/ecffb4b1-d975-40b4-b68c-78227948cc17/files/1d5b60e6-9974-435e-8390-276132199073.jpg";

const SERVICES = [
  {
    icon: "Hammer",
    title: "Снос зданий и сооружений",
    desc: "Полный снос промышленных, жилых и коммерческих объектов любой сложности. Механизированный и взрывной методы.",
  },
  {
    icon: "HardHat",
    title: "Демонтаж конструкций",
    desc: "Поэлементный демонтаж несущих конструкций, перекрытий, фасадов и кровли с сохранением соседних объектов.",
  },
  {
    icon: "Truck",
    title: "Вывоз и утилизация мусора",
    desc: "Полный цикл вывоза строительных отходов. Сортировка, переработка и утилизация на сертифицированных полигонах.",
  },
  {
    icon: "Shovel",
    title: "Снос фундаментов",
    desc: "Разрушение и вывоз фундаментных плит, свайных полей, ленточных и монолитных оснований.",
  },
  {
    icon: "Factory",
    title: "Промышленный демонтаж",
    desc: "Демонтаж заводского оборудования, металлоконструкций, цехов и складских комплексов.",
  },
  {
    icon: "Recycle",
    title: "Рекультивация территорий",
    desc: "Расчистка и подготовка площадок под новое строительство. Планировка, засыпка котлованов, геодезический контроль.",
  },
];

const REVIEWS = [
  {
    name: "Михаил Степанов",
    company: "Девелопер «АрхСтрой»",
    rating: 5,
    text: "Снесли 4-этажный корпус завода за 12 дней. Всё чисто, в срок, без замечаний от надзорных органов. Буду обращаться снова.",
  },
  {
    name: "Ирина Белова",
    company: "ЖК «Новые кварталы»",
    rating: 5,
    text: "Провели демонтаж старой застройки на участке 1,5 га. Команда профессиональная, цены честные, документация — полный порядок.",
  },
  {
    name: "Андрей Кузнецов",
    company: "ПАО «МеталлоГрупп»",
    rating: 5,
    text: "Демонтировали металлоконструкции цеха общим весом 400 тонн. Работали параллельно с действующим производством — никаких инцидентов.",
  },
  {
    name: "Татьяна Орлова",
    company: "Управляющая компания «Центр»",
    rating: 5,
    text: "Снос аварийного здания в жилом квартале. Ограждения, пылеподавление, вывоз — всё организовано на высшем уровне.",
  },
];

const STATS = [
  { value: "15+", label: "лет опыта" },
  { value: "500+", label: "сносов выполнено" },
  { value: "2 млн т", label: "переработано отходов" },
  { value: "0", label: "нарушений по ТБ" },
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
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'var(--blue)' }}>
              <span className="text-white text-xs font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>ГП</span>
            </div>
            <span className="text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Генподрядчик
            </span>
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
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-white transition-all duration-200 hover:opacity-80"
            style={{ background: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}
          >
            <Icon name="Send" size={14} />
            Telegram
          </a>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
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
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://t.me/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-white w-fit"
              style={{ background: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}
            >
              <Icon name="Send" size={14} />
              Telegram
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(7,12,26,0.97) 40%, rgba(7,12,26,0.65) 70%, rgba(7,12,26,0.3) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,12,26,0.7) 0%, transparent 50%)' }} />

        {/* Diagonal blue accent line */}
        <div className="absolute left-0 top-0 h-full w-1" style={{ background: 'var(--blue)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="h-px w-10" style={{ background: 'var(--blue)' }} />
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--blue-light)', fontFamily: 'Oswald, sans-serif' }}>
                Генеральный подрядчик · Демонтаж зданий
              </p>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '-0.01em' }}
            >
              СНОСИМ
              <br />
              <span style={{ color: 'var(--blue)' }}>БЫСТРО.</span>
              <br />
              ЧИСТО.
              <br />
              БЕЗОПАСНО.
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 animate-fade-in-up delay-200 font-light">
              Промышленный и гражданский демонтаж под ключ.
              <br />
              Берём объект полностью — от разрешений до рекультивации.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white hover:opacity-90 transition-opacity duration-200"
                style={{ background: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}
              >
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
              <a
                href="#contacts"
                className="flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors duration-200"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in delay-600">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, var(--blue), transparent)' }} />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center px-6 py-2">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}
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
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: 'var(--blue)' }} />
            <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}>
              Что мы делаем
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
            НАШИ УСЛУГИ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-300 cursor-default relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-300"
                style={{ background: 'var(--blue)' }}
              />
              <div
                className="w-10 h-10 border border-border group-hover:border-[var(--blue)] flex items-center justify-center mb-6 transition-colors duration-300"
              >
                <Icon name={service.icon} size={18} style={{ color: 'var(--blue)' }} />
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
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--blue)' }} />
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}>
                Нам доверяют
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ОТЗЫВЫ КЛИЕНТОВ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-background border border-border p-8 relative group hover:border-[var(--blue)] transition-colors duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} style={{ color: 'var(--blue)', fill: 'var(--blue)' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6 font-light italic">
                  «{review.text}»
                </p>
                <div className="border-t border-border pt-5">
                  <div className="font-semibold text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {review.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--blue)' }}>
                    {review.company}
                  </div>
                </div>
                <div className="absolute top-6 right-8 text-6xl leading-none select-none font-serif" style={{ color: 'hsl(222 30% 18%)' }}>
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
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--blue)' }} />
              <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}>
                Связаться с нами
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
              ОБСУДИМ
              <br />
              ВАШ ОБЪЕКТ
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 font-light">
              Оставьте заявку — выедем на объект, сделаем бесплатный расчёт стоимости
              и согласуем сроки в течение одного рабочего дня.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-border group-hover:border-[var(--blue)] flex items-center justify-center transition-colors duration-200">
                  <Icon name="Send" size={16} style={{ color: 'var(--blue)' }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Telegram</div>
                  <div className="text-sm group-hover:text-[var(--blue)] transition-colors">@yourhandle</div>
                </div>
              </a>

              <a href="tel:+74951234567" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-border group-hover:border-[var(--blue)] flex items-center justify-center transition-colors duration-200">
                  <Icon name="Phone" size={16} style={{ color: 'var(--blue)' }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Телефон</div>
                  <div className="text-sm group-hover:text-[var(--blue)] transition-colors">+7 (495) 123-45-67</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <Icon name="MapPin" size={16} style={{ color: 'var(--blue)' }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Адрес</div>
                  <div className="text-sm">Москва, ул. Промышленная, 15</div>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card border border-border p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center gap-4">
                <div className="w-14 h-14 border flex items-center justify-center" style={{ borderColor: 'var(--blue)' }}>
                  <Icon name="Check" size={24} style={{ color: 'var(--blue)' }} />
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
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none transition-colors duration-200 placeholder:text-muted-foreground/50"
                    style={{ borderColor: undefined }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={(e) => e.target.style.borderColor = ''}
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
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none transition-colors duration-200 placeholder:text-muted-foreground/50"
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={(e) => e.target.style.borderColor = ''}
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
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 resize-none"
                    onFocus={(e) => e.target.style.borderColor = 'var(--blue)'}
                    onBlur={(e) => e.target.style.borderColor = ''}
                    placeholder="Адрес объекта, тип здания, площадь..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-4 text-sm font-semibold tracking-widest uppercase text-white hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
                  style={{ background: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}
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
            <div className="w-7 h-7 flex items-center justify-center" style={{ background: 'var(--blue)' }}>
              <span className="text-white text-xs font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>ГП</span>
            </div>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Генподрядчик © 2024
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Лицензия СРО · Демонтаж и снос зданий любой сложности
          </p>
          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-wider uppercase transition-colors hover:opacity-80"
            style={{ color: 'var(--blue)', fontFamily: 'Oswald, sans-serif' }}
          >
            <Icon name="Send" size={13} />
            Telegram
          </a>
        </div>
      </footer>
    </div>
  );
}
