// criar um contador com limite personalizado: definir um valor inicial via input, definir um valor máximo via input, aumentar/diminuir o valor com botões - e +, exibir uma mensagem quando o valor máximo for atingido.
import { useState } from "react";

function MyInput() {
  const [initialValue, setInitialValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setCount(initialValue);
    setStarted(true);
  }
  const handleIncrease = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  }
  const handleDecrease = () => {
    if (count > initialValue) {
      setCount(count - 1);
    }
  }

  if (!started) {
    return (
      <div style={{ textAlign: 'center' , fontFamily: 'sans-serif'}}>
          <h2>Configurar Contador</h2>

          <div>
              <label>Valor Inicial: </label>
              <input type="number" value={initialValue} onChange={(e) => setInitialValue(Number(e.target.value))} />
          </div>
          <div>
              <label>Valor Máximo: </label>
              <input type="number" value={maxValue} onChange={(e) => setMaxValue(Number(e.target.value))} />
          </div>
          <button onClick={handleStart}>Iniciar Contador</button>
      </div>
      );
  }
  return (
    <div style={{ textAlign: 'center' , fontFamily: 'sans-serif'}}>
        <h2>Contador</h2>
        <p>Valor Atual: {count}</p>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        {count === maxValue && <p>Valor máximo atingido!</p>}
    </div>
  );
}

export default MyInput;

