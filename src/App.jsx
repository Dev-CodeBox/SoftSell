import ChatWidget from './components/ChatWidget'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'

function App() {

  return (
    <>
      <div className="App">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </div>
    </>
  )
}

export default App
