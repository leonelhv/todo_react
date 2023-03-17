import { Footer } from "./components/Footer"
import { InputBox } from "./components/InputBox"
import { Todos } from "./components/Todos"

function App(): JSX.Element {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <InputBox />
      </header>

      <section className="main">
        <Todos />
      </section>
      <Footer />
    </section>
  )
}

export default App
