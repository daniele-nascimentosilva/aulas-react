import type { FormEvent } from 'react'
import './App.css'

function App() {

  const handleClick = () => {
    alert('Clicou no botão')
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('a tecla pressionada foi:', event.key)
  }
// o event: FormEvent<HTMLFormElement> indica que o evento é de um formulário HTML
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //esse preventDefault previne o comportamento padrão do formulário que é de recarregar a página
    event.preventDefault()
    alert('Formulário enviado') 
  }

  // o handleChange captura o valor atual do input enquanto o usuário digita e não apenas letra por letra, como o handleKeyPress
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('o valor atual é:', event.target.value)
  }

  return (
    <>
      {/* <button onClick={handleClick}>
        Clique aqui
      </button>

      <input type="text" onKeyDown={handleKeyPress} /> */}

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='digite algo' />
        <button type='submit'>Enviar</button>
        </form>

    </>
  ) 
}

export default App
