import { AboutMe } from "./_components/aboutMe";
import { Benefits } from "./_components/benefits";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Price } from "./_components/price";
import { Testimonials } from "./_components/testimonails";

export default function Home(){
  return(
    <main className='bg-gray-950'>
      <Hero />
      <Benefits />
      <Testimonials />
      <Price />
      <AboutMe />
      <Footer />
    </main>
  )
}