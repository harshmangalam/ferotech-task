import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SocialIcons from './components/SocialIcons'
import Home from './screens/Home'
import { Container ,useMediaQuery,useTheme} from '@material-ui/core'
import About from './screens/About'
import Rooms from './screens/Rooms'
import Services from './screens/Services'
import Gallary from './screens/Gallary'
import ThingsToDo from './screens/ThingsToDo'
import GuestReview from './screens/GuestReview'
import ContactUs from './screens/ContactUs'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <div>
      <Router>
        <Navbar />
        {mdScreen && <SocialIcons />}

        <Container style={{ marginTop: '100px' }}>
          <Home />
          <About />
          <Rooms />
          <Services />
          <Gallary />
          <ThingsToDo />
          <GuestReview />
        </Container>

        <div style={{ marginTop: '60px' }}>
          <ContactUs />
        </div>
      </Router>
    </div>
  )
}

export default App
