import { useEffect, useState } from 'react'
import './App.css'
import QuoteCard from './components/quote-card'
// API link -> https://api.quotable.io/quotes/random

export default function App() {

  const [quote, setQuote] = useState()

  useEffect(() => {
    getQuote()
  }, [])

  async function getQuote() {
    const data = await fetch('https://api.quotable.io/quotes/random?maxLength=80').then(res => res.json())
    setQuote(data)
  }

  return (
    <main className='bg-[#111729] h-screen flex flex-col gap-3 justify-center items-center text-[#fafafa] relative font-Outfit'>
      {
        quote?.map((q) => (
          <QuoteCard key={q._id} author={q.author} tags={q.tags} quote={q.content} />
        ))
      }
      <menu className='flex items-center gap-0'>
        <button onClick={() => getQuote()} className='border border-[#4A5567] rounded-tl-lg rounded-bl-lg px-2'>
          <img src="/Regroup.svg" alt="get random quote" />
        </button>
        <button className='border border-[#4A5567] rounded-tr-lg rounded-br-lg px-2'>
          <img src="/link.svg" alt="no se" />
        </button>
      </menu>
    </main >
  )
}