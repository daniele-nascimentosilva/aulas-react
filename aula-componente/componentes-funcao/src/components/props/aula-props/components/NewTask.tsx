//componente filho

//primeiro vamos garantir que ele terá um tipo, então vamos criar um tipo pra ele. Vamos criar uma lista de tarefas e ela terá uma descrição. Essa descrição será uma string, por isso vamos usar uma tipagem do TypeScript.
type TaskProps = {
  description?: string;
};

//criando o componente NewTask = nova tarefa
const NewTask = ({description = "Nenhuma tarefa cadastrada"}: TaskProps) => {
    return <p>Tarefa: {description}</p>;
}
export default NewTask;

