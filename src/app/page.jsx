import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
   <div className="overflow-hidden">
     <Hero/>
     <Skills/>
     <About/>
     <Services/>
     <Contact/>
     <Footer/>
   </div>
  )
}
