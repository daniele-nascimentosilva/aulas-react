import NewCard from "./NewCard";
const Card = () => {
    return (
        <div>
            <h2>Meu Card</h2>
            <NewCard description="Card de Exemplo"></NewCard> 
            <NewCard title="Outro Card" description="Outro Card de Exemplo"></NewCard>

          
        </div>
    );
}  

export default Card;