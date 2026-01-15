import React from 'react'
import Hero from './components/Hero'
import PainUrgency from './components/PainUrgency'
import Differentiators from './components/Differentiators'
import UsageGuide from './components/UsageGuide'
import Testimonials from './components/Testimonials'
import Offers from './components/Offers'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Hero />
            <PainUrgency />
            <Differentiators />
            <UsageGuide />
            <Testimonials />
            <Offers />
            <Footer />
        </div>
    )
}

export default App
