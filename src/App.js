import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import 'bootstrap/dist/css/bootstrap.css';// Put any other imports below so that CSS from your// components takes precedence over default styles.Copy

const App = () =>{
  return (
    <>
    <Header />
    <main className='py-3'>
    <Container>
      <HomeScreen />
    </Container>
    </main>
    <Footer />
    </>
  )
}

export default App;
