import NewTask from "./NewTask";

//componete pai, ou seja, aquele que vai compartilhar o componente filho
const Tasks = () => {
    return (
     <div>
        <h2>Minhas Tarefas</h2>

        <NewTask description></NewTask>
        <NewTask description></NewTask>
    </div>
    ) 
}
export default Tasks;

