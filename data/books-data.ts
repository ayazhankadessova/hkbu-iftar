interface Book {
  id: number
  title: string
  author: string
  publisher?: string
  description: string
  genre: string
  imageUrl: string
}

export const books: Book[] = [
  {
    id: 1,
    title: 'Islam: A Very Short Introduction',
    author: 'Malise Ruthven',
    publisher: 'Oxford University Press',
    description: `The book provides essential clarifications and insights in to the big issues, including the major divisions between movements such as the Shi'is, the Sunnis, and the Wahhabis, and the Central importance of Shari'a (Islamic law) in Islamic life.`,
    genre: 'Religion, Non-fiction',
    imageUrl: '/books/islam-intro.png', 
  },
  {
    id: 2,
    title: 'The Heart of the Quran: Commentary of Surah Yasin',
    author: 'Asim Khan',
    description:
      'A well-researched commentary on Surah Yasin, complete with diagrams and illustrations. The commentary highlights the nuances of Quranic language and draws the attention of readers towards practical changes they can make in their lives.',
    genre: 'Religious Commentary',
    imageUrl: '/books/the-heart-of-quran.webp',
  },
  {
    id: 3,
    title: 'Muhammad: A Very Short Introduction',
    author: 'Jonathan A.C. Brown',
    publisher: 'Oxford University Press',
    description: `"This is an excellent introduction to the life of Muhammad (s.a.w). Jonathan Brown is providing the reader with a rigorous study based on the classical Islamic tradition, yet well balanced between elements of faith and rational discussions, useful for Muslims and non-Muslims alike. Very easy to read, profound, and interesting to study." - Tariq Ramadan, Professor of Contemporary Islamic Studies, Oxford.`,
    genre: 'Biography, Religion',
    imageUrl: '/books/muhammad-saw-intro-2.png',
  },
  {
    id: 4,
    title: 'The Productive Muslim',
    author: 'Mohammad Fares',
    description: `In this work, Mohammed Faris, the founder of ProductiveMuslim.com, provides a practical framework that helps urban global Muslims lead a productive lifestyle spiritually, physically and socially. `,
    genre: 'Self-help, Spirituality',
    imageUrl: '/books/muslim-productivity.jpg',
  },
  {
    id: 5,
    title: 'Islamic Finance',
    author: 'Muhammad Elbruz, Maxence Clairmidi',
    description:
      'Dive into the principles and prohibitions of Islamic finance through this richly knowledgeable and analytical work. The authors offer an in-depth exploration of lawful and unlawful operations, providing a unique perspective on finance in accordance with the ethical principles of Islam.',
    genre: 'Finance, Business',
    imageUrl: '/books/islamic-finance.jpg',
  },
  {
    id: 6,
    title: 'As Long as the Lemon Trees Grow',
    author: 'Zoulfa Katouh',
    description:
      'A love letter to Syria and its people, As Long as the Lemon Trees Grow is a speculative novel set amid the Syrian Revolution, burning with the fires of hope, love, and possibility.',
    genre: 'Historical Fiction, Young Adult',
    imageUrl: '/books/lemon-trees-grow.png',
  },
]
