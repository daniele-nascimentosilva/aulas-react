const orderPizza = () => {
    return new Promise((resolve, reject) => {
        console.log("Pedido enviado para a cozinha...");

        setTimeout(() => {
            const hasError = Math.random() < 0.8;

            if (hasError) {
                reject("Erro ao preparar a pizza")
            } else {
                resolve("Pizza Pronta!")
            }
        }, 1000);

    })
};

const deliveryPizza = () => {
    return new Promise((resolve) => {
        console.log("A Pizza está a caminho");

        setTimeout(() => {
            resolve('Pizza entregue');
        }, 2000);

    })
}

//aqui vamos fazer o retorno de uma promise usando o async/await. Isso quer dizer que esta á uma operação assíncrona. Uma operação assíncrona é qualquer tarefa que demora um tempo para ser concluída, como é o caso das promises, e não trava o resto do programa enquanto está acontecendo. Quando uma função é marcada como async, ela automaticamente retorna uma promise. 
const makeOrder = async () => {

    try {

        const pizzaMessage = await orderPizza();
        console.log(pizzaMessage);

        const deliveryPizzaMessage = await deliveryPizza()
        console.log(deliveryPizzaMessage);
    } catch (error) {
        console.log("Ocorreu um erro:", error);

    }

}
makeOrder()