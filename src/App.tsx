import './App.css'
import Calculator from './Calculator'

export default function App() {
  return (
    <>
      <header>
        <h1>ETA Calculator</h1>
      </header>
      <p>Given the distance and speed of travel this app will calculate how long your journey will take.</p>
      <main>
        <Calculator />
      </main>
    </>
  )
};