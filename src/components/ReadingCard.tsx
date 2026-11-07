import { Button, Card } from '@mui/material'
import type { ReactNode } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export type Reading = { phrase: string; image: string }

type ReadingCardProps = {
  className?: string
  title: string
  icon: ReactNode
  reading: Reading | null
  imageAlt: string
  actionLabel: string
  revealedActionLabel: string
  onReveal: () => void
}

function ReadingCard({
  className = '',
  title,
  icon,
  reading,
  imageAlt,
  actionLabel,
  revealedActionLabel,
  onReveal,
}: ReadingCardProps) {
  return (
    <Card
      component="article"
      className={`reading-card ${className}${reading ? ' is-revealed' : ''}`}
      elevation={0}
    >
      <div className="card-heading">{icon}<h2>{title}</h2></div>
      {reading && (
        <div className="reading-result" aria-live="polite">
          <img className="reading-image" src={reading.image} alt={imageAlt} />
          <p className="message">{reading.phrase}</p>
        </div>
      )}
      <Button className="reveal-button" type="button" onClick={onReveal} disableRipple>
        <Sparkles size={18} aria-hidden="true" />
        <span>{reading ? revealedActionLabel : actionLabel}</span>
        <ArrowUpRight className="button-arrow" size={19} aria-hidden="true" />
      </Button>
    </Card>
  )
}

export default ReadingCard
