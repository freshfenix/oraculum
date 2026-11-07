import { MoonStar } from 'lucide-react'

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Оракул — на головну">
        <span className="brand-mark"><MoonStar size={19} /></span>
        <span>ORACULUM</span>
      </a>
      <span className="topbar-note">ТВОЄ ТИХЕ МІСЦЕ ДЛЯ НАТХНЕННЯ</span>
    </header>
  )
}

export default Header
