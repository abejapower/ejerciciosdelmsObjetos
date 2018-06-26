/*Escribe una función llamada "addArrayProperty(obj, key, array)".

Dado un objeto, una clave y un array, "addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada, con su valor establecido en el array dado.

Ejemplo de entrada:

var myObj = {};
var myStr = 'myProperty';
var myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); // --> [1, 3]*/
function addArrayProperty(obj, key, arr) {
    obj[key]=arr
    return arr;
  }
  
  //module.exports = addArrayProperty

/*  Escribe una función llamada "removeStringValuesLongerThan".

Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el número dado.

Ejemplo de entrada:

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }*/
function removeStringValuesLongerThan(num, obj) {
    for (var property in obj) {
      if (typeof obj[property] === 'string' && obj[property].length > num) {
        delete obj[property];
      }
    }
    return obj;
  }
  
 // module.exports = removeStringValuesLongerThan;

/*Escriba una función llamada getElementOfArrayProperty.

Dado un objeto, una clave y un índice numérico, getElementOfArrayProperty devuelve el valor del elemento en el índice dado del arreglo localizado dentro del objeto dado en la clave dada.

Notas:

Si el arreglo está vacío, debería devolver undefined.
Si el índice dado está fuera de rango del arreglo ubicado en la clave dada, debería devolver undefined.
Si la propiedad en la clave dada no es un arreglo, debería devolver undefined.
Si no hay ninguna propiedad en la clave, debería devolverse undefined.
Ejemplo de entrada:

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'*/
function getElementOfArrayProperty(obj, key, index) {
    if ( obj[key] === undefined ) {
      return undefined;
    }
    if ( Array.isArray(obj[key]) === false ){
      return undefined;
    }
    
    return obj[key][index];
  }
 // module.exports = getElementOfArrayProperty;
 /*Escriba una función 'transformFirstAndLast' que toma un array y devuelve un objeto con:

el primer elemento del array como la clave del objeto, y
el último elemento del array como valor de esa clave.
Ejemplo de entrada:

['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
Valor de retorno de la función (salida):

{
  Queen: 'Beyonce'
}
No cambie el array de entrada. Suponga que todos los elementos del array de entrada serán del tipo string.

Tenga en cuenta que el array de entrada puede tener un número variable de elementos. Tu código debería acomodarse de manera flexible.

Ejemplo, debe manejar la entrada como:

['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']
Valor de retorno de la función (salida):

{
  Kevin: "Spacey"
}*/
function transformFirstAndLast(array) {
    var keyString = array[0];
    var valueString = array[array.length - 1];
    var newObject = {};
    
    newObject[keyString] = valueString;
    
    return newObject;
  }
  
  module.exports = transformFirstAndLast;

/*Escribe una función llamada listAllValues que devuelve un array de todos los valores del objeto de entrada.

Ejemplo de entrada:

{
  name: 'Krysten',
  age: 33,
  hasPets: false
}
Valor de retorno de la función (salida):

['Krysten', 33, false]
Tenga en cuenta que la entrada puede tener un número diferente de claves y valores que la muestra dada. Por ejemplo, también debe manejar una entrada como:

{
  a: 'a',
  number: 11,
  hungry: true,
  grammyWins: 1
}
Valor de retorno de la función (salida):

['a', 11, true, 1]*/

function listAllValues(obj) {
    var result = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
      return result;
    }
    
   // module.exports = listAllValues;
/*Escriba una función llamada "getSumOfAllElementsAtProperty".

Dado un objeto y una key, "getSumOfAllElementsAtProperty" devuelve la suma de todos los elementos del array.

Notas:

Si el array está vacío, debe devolver 0.
Si la propiedad en la key dada no es un array, debe devolver 0.
Si no hay ninguna propiedad en la key dada, debe devolver 0.
var obj = {
  key: [4, 1, 8];
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 13*/
function getSumOfAllElementsAtProperty(obj, key) {
    var sum = 0;
      if ( Array.isArray(obj[key]) === false || obj[key].length < 1 ) {
        return 0;
      }
    
      for ( var element in obj[key] ) {
        sum += obj[key][element];
      }
      return sum;
    }
    
   // module.exports = getSumOfAllElementsAtProperty;
   /*Escribir una función llamada "addObjectProperty".

Dado dos objetos y una clave, "addObjectProperty" establece una nueva propiedad en el primer objeto en la clave dada. El valor de esta nueva propiedad es el segundo objeto completo.

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }*/
function addObjectProperty(obj1, key, obj2) {
    obj1[key] = obj2;
    }
    
  //  module.exports = addObjectProperty;
/*Escribe una función llamada "addFullNameProperty".

Dado un objeto que tiene una propiedad "firstName" y una propiedad "lastName", "addFullNameProperty" devuelve una propiedad "fullName" cuyo valor es una cadena con el nombre y el apellido separados por un espacio.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'*/
function addFullNameProperty(obj) {
    var fullName = obj.firstName.concat(" "+ obj.lastName); 
    obj.fullName = fullName; //or obj[fullName] = fullName;
    return obj;
  }
  
  module.exports = addFullNameProperty;
  

  
  