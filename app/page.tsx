import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hello/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  )
}
