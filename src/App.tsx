import './App.css'
import EtaCalculator from './EtaCalculator'

export default function App() {
  return (
    <>
      <header>
        <h1>Travel Time Calculator</h1>
      </header>
      <p>Given the distance and speed of travel this app will calculate how long your journey will take.</p>
      <main>
        <EtaCalculator />
      </main>
    </>
  )
};