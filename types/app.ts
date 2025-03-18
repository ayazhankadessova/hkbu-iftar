interface DialogInfo {
  title: string
  href: string
}

export interface DialogsInfo {
  [key: string]: DialogInfo
}

export interface HeroProps {
  title: string
  subtitle: string
  date: string
}
