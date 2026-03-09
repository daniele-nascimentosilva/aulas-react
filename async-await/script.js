
const orderPizza = () => {
    return new Promise((resolve) => {
        console.log("Pedido enviado para a cozinha...");

        setTimeout(() => {
            resolve("Pizza Pronta")
        }, 3000);
        
    })
    };

     const deliveryPizza = () => {
        return new Promise((resolve) =>{
        console.log("A Pizza está a caminho");

        setTimeout(() => {
            resolve('Pizza entregue');
        }, 2000);
        
        })
     }

    const makeOrder = async () => {
        const pizzaMessage = await orderPizza();
        console.log(pizzaMessage);

        const deliveryPizzaMessage = await deliveryPizza()
        console.log(deliveryPizzaMessage);
        

        
        
    }
    makeOrder()