import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { MoonStar, Sparkles, Sun, WandSparkles } from 'lucide-react'
import './App.css'

const predictions = [
  'Сьогодні одна маленька сміливість відкриє двері до великої можливості.',
  'Те, що ти плекаєш із любов’ю, незабаром дасть перші плоди.',
  'Неочікувана розмова принесе саме ту підказку, на яку ти чекаєш.',
  'Довірся своєму темпу: навіть повільний крок наближає до мрії.',
  'Сьогодні світ відповість теплом на твою щиру доброту.',
  'Твоя давня ідея готова побачити світ — зроби перший крок.',
  'Зміни, яких ти прагнеш, уже починаються з твого сьогоднішнього вибору.',
  'Дозволь собі сказати «так» тому, що наповнює тебе світлом.',
]

const wishes = [
  'Нехай сьогоднішній день подарує тобі спокій, ясність і привід усміхнутися.',
  'Бажаю тобі зустріти добрих людей і помітити красу в найменших речах.',
  'Нехай у серці буде достатньо тепла, а в думках — місця для мрій.',
  'Бажаю сміливості обирати себе та ніжності до власного шляху.',
  'Нехай усе важливе складається легко, а поруч завжди буде підтримка.',
  'Бажаю тобі натхнення, затишку й тихої впевненості у завтрашньому дні.',
  'Нехай цей день нагадає: ти вже маєш у собі багато сили й світла.',
  'Бажаю маленького дива, великої любові та часу для себе.',
]

function randomPhrase(phrases: string[], current: string | null) {
  const options = phrases.filter((phrase) => phrase !== current)
  return options[Math.floor(Math.random() * options.length)]
}

function DailyReading() {
  const [prediction, setPrediction] = useState<string | null>(null)
  const [wish, setWish] = useState<string | null>(null)
  const now = new Date()
  const today = new Intl.DateTimeFormat('uk-UA', {
    day: 'numeric',
    month: 'long',
  }).format(now)

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Оракул — на головну">
          <span className="brand-mark"><MoonStar size={19} /></span>
          <span>ORACULUM</span>
        </a>
        <span className="topbar-note">ТВОЄ ТИХЕ МІСЦЕ ДЛЯ НАТХНЕННЯ</span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <div className="eyebrow"><span /> ПОСЛАННЯ ВСЕСВІТУ <span /></div>
        <h1 id="page-title">Твій день <em>у світлі зірок</em></h1>
        <p className="date-line">
          <Sun size={21} aria-hidden="true" />
          <span className="date-caption">СЬОГОДНІ</span>
          <time dateTime={`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`}>{today}</time>
        </p>
        <p className="intro-copy">Зроби глибокий вдих, прислухайся до себе — і відкрий послання, яке резонує саме з тобою.</p>
      </section>

      <section className="readings" aria-label="Послання на сьогодні">
        <article className="reading-card prediction-card">
          <div className="card-topline"><span>КАРТА 01</span><span className="card-orbit">✧</span><span>ТВІЙ НАПРЯМ</span></div>
          <div className="card-art" aria-hidden="true"><div className="sun-disc"><span>✦</span></div><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="star star-a">✦</span><span className="star star-b">✧</span></div>
          <div className="card-heading"><span className="icon-medallion"><MoonStar size={18} /></span><span>ПЕРЕДБАЧЕННЯ НА ДЕНЬ</span></div>
          <p className={`message ${prediction ? 'message-revealed' : ''}`} aria-live="polite">
            {prediction ?? 'Твоя карта чекає, коли ти будеш готова її відкрити.'}
          </p>
          <button className="reveal-button" type="button" onClick={() => setPrediction((current) => randomPhrase(predictions, current))}>
            <Sparkles size={16} /> {prediction ? 'Відкрити інше передбачення' : 'Відкрити передбачення'} <span aria-hidden="true">↗</span>
          </button>
        </article>

        <article className="reading-card wish-card">
          <div className="card-topline"><span>КАРТА 02</span><span className="card-orbit">✧</span><span>ТВОЄ ТЕПЛО</span></div>
          <div className="card-art wish-art" aria-hidden="true"><div className="heart-moon"><span>♡</span></div><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="star star-a">✧</span><span className="star star-b">✦</span></div>
          <div className="card-heading"><span className="icon-medallion"><WandSparkles size={18} /></span><span>ПОБАЖАННЯ НА ДЕНЬ</span></div>
          <p className={`message ${wish ? 'message-revealed' : ''}`} aria-live="polite">
            {wish ?? 'На тебе чекають слова, що зігріють серце.'}
          </p>
          <button className="reveal-button" type="button" onClick={() => setWish((current) => randomPhrase(wishes, current))}>
            <Sparkles size={16} /> {wish ? 'Отримати інше побажання' : 'Отримати побажання'} <span aria-hidden="true">↗</span>
          </button>
        </article>
      </section>

      <footer className="page-footer"><span>✧</span> ТИ — АВТОРКА СВОЄЇ ІСТОРІЇ <span>✧</span></footer>
    </main>
  )
}

function NotFound() {
  return <main className="not-found"><MoonStar size={30} /><h1>Сторінку не знайдено</h1><a href="/">Повернутися до послань</a></main>
}

function App() {
  return <Routes><Route path="/" element={<DailyReading />} /><Route path="*" element={<NotFound />} /></Routes>
}

export default App
