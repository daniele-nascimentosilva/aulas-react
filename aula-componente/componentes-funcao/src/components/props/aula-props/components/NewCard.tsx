
type CardProps = {
  title: string;
  description: string;
};
const Card = ({description }: CardProps) => {
   return <p>Card: {description}</p>;
}
export default Card;