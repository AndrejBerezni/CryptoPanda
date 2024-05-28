import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './router/Routes'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Router />
      </main>
      <Footer />
    </>
  )
}
