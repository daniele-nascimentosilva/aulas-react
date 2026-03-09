// vamos criar um componente Card que receberá filhos (children) como props. Esses filhos podem ser qualquer elemento React, como textos, imagens, outros componentes, etc. Para isso, vamos definir um tipo para as props do componente Card. O cartão vai ter essa propriedade children, que será do tipo React.ReactNode, que é um tipo especial do React que representa qualquer coisa que pode ser renderizada pelo React.

import "./Card.css"; 
type CardProps = {
  children: React.ReactNode; 
}
  // aqui vamos criar o componente Card que recebe as props do tipo CardProps

  const Card = ({children}: CardProps) => {
    return (
      <div className="card">{children}</div>
    );
  };
  export default Card;