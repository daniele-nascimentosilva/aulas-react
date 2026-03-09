
// isso é um objeto
const heroObject = {
    name: "Homem de Ferro",
    age: 48,
    hasPowers: false
}

// console.log(heroObject.name);
// console.log(typeof heroObject);

//isso é um json, é como se fosse um objeto mas dentro de uma string
const heroJson = '{"name": "Homem de Ferro", "age": 48, "hasPower": false }'
// console.log(heroJson.name);

//muitas vezes pode vir um texto assim dentro da aplicação e você quer transformar ele num objeto, é possível fazer isso? Sim, fazemos isso utilizando o parse, ele interpreta uma string e o transforma em um objeto. 

const hero = JSON.parse(heroJson)
//se eu der um console e buscar pelo typeoff, ele irá retornar como objeto e se buscar por uma propriedade ele retornará com o valor, pois agora ele é um objeto. O memso não ocorrerá se eu tentar buscar uma propriedade antes de transformar usando o parse, ele vai retornar como undefined.
// console.log(typeof hero);

//Se eu quiser transformar de um objeto para uma string eu faço utilziando o JSON.stringify. 
const heroString = JSON.stringify(hero)
console.log(typeof heroString);
console.log(heroString);





