import { Bike, Laptop, Leaf, CalendarCheck, Plus, Minus, Phone, MapPin } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

interface MenuItem {
  name: string
  description: string
  price: string
  emoji: string
  tag?: string
}

type MenuCategory = "smoothie" | "coffee" | "tea" | "lemonade"

const menuData: Record<MenuCategory, MenuItem[]> = {
  smoothie: [
    { name: "Зелёный детокс", description: "Шпинат, огурец, яблоко, имбирь, лимон", price: "290 ₽", emoji: "🥒", tag: "Детокс" },
    { name: "Тропический заряд", description: "Манго, ананас, банан, куркума, кокосовое молоко", price: "320 ₽", emoji: "🥭", tag: "Энергия" },
    { name: "Ягодный антиоксидант", description: "Черника, малина, клубника, chia, миндальное молоко", price: "310 ₽", emoji: "🫐", tag: "Хит" },
    { name: "Авокадо Бустер", description: "Авокадо, банан, мёд, спирулина, овсяное молоко", price: "340 ₽", emoji: "🥑" },
    { name: "Свёкольный Иммун", description: "Свёкла, морковь, апельсин, имбирь, куркума", price: "280 ₽", emoji: "🫚", tag: "Иммунитет" },
    { name: "Протеиновый Старт", description: "Банан, арахисовая паста, какао, протеин, овсяное молоко", price: "350 ₽", emoji: "💪", tag: "Спорт" },
  ],
  coffee: [
    { name: "Чистый Американо", description: "Арабика 100%, холодная фильтрованная вода, без сахара", price: "180 ₽", emoji: "☕" },
    { name: "Овсяный Латте", description: "Эспрессо, овсяное молоко, без рафинированного сахара", price: "230 ₽", emoji: "🥛", tag: "Популярное" },
    { name: "Матча Латте", description: "Японский матча, миндальное молоко, агава", price: "270 ₽", emoji: "🍵", tag: "Хит" },
    { name: "Кофе с Куркумой", description: "Эспрессо, кокосовое молоко, куркума, корица, чёрный перец", price: "260 ₽", emoji: "✨", tag: "Здоровье" },
  ],
  tea: [
    { name: "Иван-чай с мятой", description: "Ферментированный иван-чай, свежая мята, мёд", price: "200 ₽", emoji: "🌿", tag: "Крафт" },
    { name: "Шиповник и облепиха", description: "Дикий шиповник, облепиха, имбирь — горячий или холодный", price: "210 ₽", emoji: "🍊", tag: "Витамины" },
    { name: "Чабрец и зверобой", description: "Горные травы, мёд, лимон — классический сбор", price: "190 ₽", emoji: "🌸" },
    { name: "Пуэр с ягодами", description: "Выдержанный пуэр, сушёные ягоды годжи, корица", price: "250 ₽", emoji: "🫖", tag: "Эксклюзив" },
  ],
  lemonade: [
    { name: "Огуречный Кул", description: "Огурец, мята, лимон, агава, минеральная вода", price: "220 ₽", emoji: "🌊", tag: "Освежает" },
    { name: "Имбирный Кикер", description: "Свежий имбирь, лимон, мёд, куркума, газированная вода", price: "230 ₽", emoji: "⚡", tag: "Бодрость" },
    { name: "Ягодный Морс", description: "Брусника, клюква, малина, стевия, мята", price: "240 ₽", emoji: "🍓", tag: "Хит" },
  ],
}

const categoryLabels: Record<MenuCategory, string> = {
  smoothie: "Смузи",
  coffee: "Кофе",
  tea: "Крафтовый чай",
  lemonade: "Лимонады",
}

const categoryIcons: Record<MenuCategory, string> = {
  smoothie: "🥤",
  coffee: "☕",
  tea: "🍵",
  lemonade: "🍋",
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("smoothie")

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как забронировать столик?",
      answer:
        "Забронировать столик можно прямо на сайте — нажмите кнопку «Забронировать стол» и выберите удобное время. Подтверждение придёт на ваш телефон или email. Бронь действует 15 минут после назначенного времени.",
    },
    {
      question: "Как оформить доставку на дом?",
      answer:
        "Выберите блюда из меню, укажите адрес и время доставки. Мы доставляем по посёлку Ванино. Минимальная сумма заказа — 500 рублей. Среднее время доставки — 40–60 минут.",
    },
    {
      question: "Можно ли арендовать зал для мероприятия?",
      answer:
        "Да! Мы сдаём зал в аренду для дней рождения, корпоративов, мастер-классов и других событий. Вместимость — до 30 человек. Свяжитесь с нами для уточнения деталей и стоимости.",
    },
    {
      question: "Как пользоваться велотренажёрами и рабочей зоной?",
      answer:
        "Велотренажёры и рабочие места с розетками доступны всем гостям кафе в течение визита. Просто займите свободное место. Работает быстрый Wi-Fi. Если планируете длительную работу — рекомендуем заранее забронировать место.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1A0F] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/6b53bfbc-0f70-4d6f-9cd6-de204cd5a663/files/bf5abb21-a20a-4707-b1c4-e638c903166b.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#0B1A0F]/95" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-green-500/30 backdrop-blur rounded-full">
            <Leaf className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-balance">Зелёный Импульс</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Меню", "Доставка", "Аренда зала", "Велозона", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+7"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors text-sm"
            >
              Позвонить
            </a>
            <Button className="bg-green-500 text-white hover:bg-green-400 rounded-full px-6 font-semibold">Забронировать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-green-500/20 ring-1 ring-green-400/40 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-green-300">ЗОЖ кафе в Ванино • Здоровое питание и активный отдых</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">
            Заряди себя<br />
            <span className="text-green-400">зелёным импульсом.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Здоровая еда с доставкой домой, бронь столиков и зала для мероприятий, велотренажёры и уютное рабочее пространство — всё в одном месте.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-400 rounded-full px-8 py-4 text-lg font-semibold">
              Заказать доставку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Забронировать столик
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-green-500/30 backdrop-blur rounded-full">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">п. Ванино, Хабаровский край</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Delivery */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-green-500/20 backdrop-blur p-8 text-center hover:ring-green-400/40 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 mb-6">
                <Icon name="Truck" size={24} className="text-green-400" fallback="Package" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Доставка на дом</h3>
              <p className="text-white/80 leading-relaxed">Свежая и полезная еда привезём прямо к вашей двери по всему Ванино.</p>
            </div>

            {/* Table booking */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-green-500/20 backdrop-blur p-8 text-center hover:ring-green-400/40 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 mb-6">
                <CalendarCheck className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Бронь столиков</h3>
              <p className="text-white/80 leading-relaxed">Зарезервируйте место заранее — никакого ожидания, только уют и вкусная еда.</p>
            </div>

            {/* Bikes */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-green-500/20 backdrop-blur p-8 text-center hover:ring-green-400/40 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 mb-6">
                <Bike className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Велотренажёры</h3>
              <p className="text-white/80 leading-relaxed">Совмещайте отдых и спорт — велотренажёры доступны для всех гостей кафе.</p>
            </div>

            {/* Workspace */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-green-500/20 backdrop-blur p-8 text-center hover:ring-green-400/40 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 mb-6">
                <Laptop className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Рабочее пространство</h3>
              <p className="text-white/80 leading-relaxed">Быстрый Wi-Fi, розетки и тихая атмосфера — идеально для работы с ноутбуком.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-green-500/20 ring-1 ring-green-400/40 backdrop-blur rounded-full">
              <span className="text-sm font-medium text-green-300">Всё натуральное, без сахара и химии</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Наше меню</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Каждый напиток готовится из свежих ингредиентов прямо при вас
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(menuData) as MenuCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all text-sm ${
                  activeCategory === cat
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                    : "bg-white/10 ring-1 ring-white/20 text-white/70 hover:bg-white/15 hover:text-white"
                }`}
              >
                {categoryIcons[cat]} {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Menu Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData[activeCategory].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 flex flex-col gap-4 hover:ring-green-500/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl">{item.emoji}</div>
                  {item.tag && (
                    <span className="px-3 py-1 rounded-full bg-green-500/20 ring-1 ring-green-400/30 text-green-300 text-xs font-semibold flex-shrink-0">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
                  <span className="text-xl font-bold text-green-400">{item.price}</span>
                  <Button
                    size="sm"
                    className="bg-green-500/20 text-green-300 hover:bg-green-500 hover:text-white ring-1 ring-green-400/30 rounded-full px-4 transition-all"
                  >
                    Заказать
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-400 rounded-full px-10 font-semibold">
              Заказать с доставкой
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как это работает</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Всё просто — выберите нужную услугу и наслаждайтесь.
              </p>
            </div>

            {/* Steps Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Выберите услугу</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Доставка, бронь столика, аренда зала или рабочее место — выберите то, что нужно именно вам.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Оформите заказ</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Заполните простую форму — укажите время, адрес или пожелания к мероприятию. Займёт меньше минуты.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Получите подтверждение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Мы свяжемся с вами, подтвердим бронь или заказ и ответим на все вопросы.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-400/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Наслаждайтесь!</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вкусная и здоровая еда, уютная атмосфера, велотренажёры и рабочее пространство — всё для вас.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-400 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Забронировать зал для мероприятия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о доставке, брони столиков, аренде зала и возможностях кафе.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0 text-green-400" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0 text-green-400" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-green-500/20 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
              <p className="text-white/70 text-lg">Готовы ответить на любые вопросы и принять вашу заявку</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder="+7 (000) 000-00-00"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Что вас интересует?
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="delivery">Доставка на дом</option>
                      <option value="table">Бронь столика</option>
                      <option value="hall">Аренда зала</option>
                      <option value="workspace">Рабочее место</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Комментарий
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none outline-none"
                      placeholder="Дата, время, особые пожелания..."
                    />
                  </div>
                  <Button className="w-full bg-green-500 text-white hover:bg-green-600 rounded-lg py-3 font-semibold text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <p className="text-xl text-white/90 leading-relaxed text-pretty">
                  Бронируйте столик, заказывайте доставку или арендуйте зал — мы всегда на связи и рады помочь.
                </p>

                <div className="space-y-4">
                  <a href="tel:+79635682811" className="rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur p-6 flex items-center gap-4 hover:ring-green-400/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Телефон</p>
                      <p className="font-semibold">+7 (963) 568-28-11</p>
                    </div>
                  </a>

                  <a href="https://t.me/Death2488" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur p-6 flex items-center gap-4 hover:ring-green-400/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" size={20} className="text-green-400" fallback="Phone" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Telegram</p>
                      <p className="font-semibold">@Death2488</p>
                    </div>
                  </a>

                  <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Адрес</p>
                      <p className="font-semibold">п. Ванино, Хабаровский край</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-400/30 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-green-400" fallback="CalendarCheck" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Режим работы</p>
                      <p className="font-semibold">Пн–Вс: 08:00 – 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="w-6 h-6 text-green-400" />
                  <span className="text-xl font-semibold">Зелёный Импульс</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  ЗОЖ кафе в посёлке Ванино. Доставка полезной еды, уютное пространство для работы и отдыха, велотренажёры и аренда зала для любых мероприятий.
                </p>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-green-400">УСЛУГИ</h3>
                <ul className="space-y-3">
                  {["Доставка на дом", "Бронь столика", "Аренда зала", "Велотренажёры"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-green-400">О НАС</h3>
                <ul className="space-y-3">
                  {["Наше меню", "ЗОЖ питание", "Команда", "О кафе"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-green-400">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Условия доставки", "Политика"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-2">Акции и новинки меню</h3>
                <p className="text-white/60 text-sm mb-4">Подпишитесь и узнавайте первыми о специальных предложениях</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-green-400/50 focus:outline-none"
                  />
                  <Button className="bg-green-500 text-white hover:bg-green-400 rounded-lg px-6 h-[50px] font-semibold">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Зелёный Импульс — ЗОЖ кафе, п. Ванино</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index