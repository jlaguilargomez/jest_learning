# Testing

## ¿Qué vamos a aprender?

Estudiaremos por qué es importante hacer TEST y la importancia de estos para el buen desarrollo.

A la hora de llevar a cabo un proyecto, este puede crecer de forma cuasi incontrolada: incorporando nuevos componentes, funcionalidades, personas al equipo .... Cuando esto ocurre, tenemos que asegurar que nuestro código sigue funcionando como lo hacía el primer día que resolvimos la necesidad para el que este existe.

Llega un momento en el que esto es bastante insostenible, por lo que necesitaremos de algún tipo de "automatismo" que se encargue de controlar que nuestro código sigue funcionado correctamente. Para esto tenemos los TEST

## Updated code for this section

[aneagoie/testing-exercise](https://github.com/aneagoie/testing-exercise)

[aneagoie/robofriends-testing](https://github.com/aneagoie/robofriends-testing)

## Types of Tests

Dentro de los TEST, podemos encontrar 3 categorías principales:

- _Unit tests_
- _Integration tests_
- _Automation tests_

### Unit test

Testean funciones individuales, clases, métodos ... Es el más sencillo de llevar a cabo y el más necesario para toda aplicación

### Integration test

Se testea en este caso la integración de diferentes partes de la aplicación (conexiones, test ...)

### Automation test

Programamos "robots" que se encarguen de hacer pruebas similares a QA por nosotros (funcionalidades en el navegador, usabilidad ...)

## Testing libraries

Existen numerosas librerías y herramientas para llevar a cabo TEST, pero bien es cierto que una vez aprendida una (en nuestro caso JEST), es fácil trabajar con cualquier otra.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/520badf9-dace-4dca-8d76-d72cdaf5c97f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/520badf9-dace-4dca-8d76-d72cdaf5c97f/Untitled.png)

**Las siguientes secciones son teóricas y un poco complejas si no se han abordado los problemas de testing antes, pero conviene echarles un ojo en primera instancia y luego volver a ellas una vez comprendido todo**

## Unit Tests

Los tests unitarios están muy ligados a la programación funcional. ¿Por qué?, porque cuanto más "puras" sean nuestras funciones, más fácil será implementar los TEST para estas.

Si realizar un test unitario nos resulta complejo para una determinada función, eso es que la función NO ES PURA. Deberíamos revisarla a ver si es necesario ese "side effect" que contiene.

No testean los "contracts", es decir, las conexiones con servidor, librerías ...

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1bc63ea-0e7a-4137-8daa-b7d865a14f2c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1bc63ea-0e7a-4137-8daa-b7d865a14f2c/Untitled.png)

## Integration Test

_"Cross communication between different units of code"_

Podemos pensar en este tipo de test como herramientas que nos sirven para testear diferentes componentes de la aplicación y su interconexión entre ellos.

Suelen ser más pesados y "caros" que los _Unit tests_ , así como difíciles de llevar a cabo.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b43cec0-255f-4e22-960d-281c8fd3202b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b43cec0-255f-4e22-960d-281c8fd3202b/Untitled.png)

## Automation tests

UI test. Siempre o casi siempre se llevan a cabo en el navegador o en un navegador "simulado". Se trata de chequear la interacción del usuario con la aplicación.

Estos son los TEST más difíciles, con diferencia, de tratar, ya que lo suyo sería probar todas las funcionalidades en todos los escenarios 😆

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d186682c-e1fe-4e08-824f-2d6f7fffff84/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d186682c-e1fe-4e08-824f-2d6f7fffff84/Untitled.png)

Para ayudarnos con esta ardua tarea, algunos servidores incorporan "Automation test" ya preconfigurados:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/25ca0dab-c7d7-40ea-ae3b-ef1a0571109d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/25ca0dab-c7d7-40ea-ae3b-ef1a0571109d/Untitled.png)

Normalmente, este tipo de TEST se suelen encontrar en grandes empresas con productos muy caros que no "dan una puntada sin hilo".

Otras, simplemente se encargan de contratar a gente (QA - UAT) para que lleven a cabo estos TEST de forma "manual".

## Final note on testing

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a2c34ca0-20e8-459a-8e0d-36751e9fd167/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a2c34ca0-20e8-459a-8e0d-36751e9fd167/Untitled.png)

Ten en cuenta que los TEST se quedan unicamente en fase de desarrollo (`--save-dev`) y que, habitualmente, identificaremos a los archivos que se encargan de preparar y ejecutar dichos TEST con la nomenclatura `{nombreDeArchivo}.test.js`

## Setting up Jest

[Jest · 🃏 Delightful JavaScript Testing](https://jestjs.io/)

Creamos un nuevo archivo para configurar y probar JEST:

```jsx
npm install jest --save-dev
```

y preparamos el Script para lanzar JEST:

```jsx
"scripts": {
	"test":"jest"
}
```

Para que los test se ejecuten en modo "watch":

`"test:watch" : "jest --watchAll *.js"`

\*\*Podemos separar el test en 3 partes diferenciadas:

- SETUP: crear objetos, establecer condiciones ...
- EXERCISE: ejecutar las funcionalidades que se están testeando
- VERIFY: chequear si los resultados son acordes a lo esperado

y opcionalmente:

- TEARDOWN: resetear todas las condiciones que hayan variado durante el test (mediante hooks pervios: `before()`, `beforeEach()` ... con `after()`, `afterEach()`\*\*

## Our first test

```jsx
const { googleSearch } = require('./script');

dbMock = ['dog.com', 'lightcandles.com', 'dogpictures.com', 'marvel.com'];

it('is a silly test', () => {
  expect('hello').toBe('hello');
});

it('is a searching google', () => {
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  expect(googleSearch('test', dbMock)).toEqual([]);
});
```

## Writing tests

Ten en cuenta que el código de los TEST no va a ir a producción, por lo que no hace falta que sigamos tan ciegamente la regla DRY a la hora de escribirlos.

No es mala idea la de repetir el esquema una y otra vez si eso garantiza que hacemos más tests

Recuerda que siempre podemos agrupar test similares dentro de `describe('*description*', () => {...})` que sigue el mismo esquema compositivo que `it()`

## Quick note: upcoming API endpoint

_Heads up! In the next video, I am going to introduce you to an API endpoint that sometime may or may not be available (SWAPI API). To make sure you are still able to run the code properly, I have added a few other options for you to use so that you make sure the API endpoint we will be testing works. You can use any of the below APIs that work in the next video:_

\*I recommend using: **[http://swapi.py4e.com/api/people](http://swapi.py4e.com/api/people/)\***

**[\*Star Wars API](http://swapi.py4e.com/) or [Star Wars API (clone)](https://swapi.dev/)\***

**[_Numbers API_](http://numbersapi.com/#42)**

**[_Chuck Norris API_](https://api.chucknorris.io/)**

**[_Pokemon API_](https://pokeapi.co/)**

## Asynchronous Test

Creamos un nuevo archivo `script2.js` e instalamos la librería `node-fetch` para poder utilizar FETCH con NODE

[node-fetch](https://www.npmjs.com/package/node-fetch)

Preparamos el archivo (asíncrono) para trabajar con el a continuación creando TEST:

```jsx
const fetch = require('node-fetch');

const getPeopleAsync = async (fetch) => {
  const response = await fetch('https://swapi.py4e.com/api/people/');
  const data = await response.json();
  return {
    count: data.count,
    results: data.results
  };
};

getPeopleAsync(fetch).then(console.log);

module.exports = { getPeopleAsync };
```

Podemos definir en cada bloque IT el número de "assertions" que vamos a ejecutar (la cantidad de bloques `expect()`, vamos.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd6691b7-a227-46fc-b4f7-aca221e96734/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd6691b7-a227-46fc-b4f7-aca221e96734/Untitled.png)

En los test asíncronos, tenemos una forma de hacer consciente a JEST de cuándo nuestro test ha finalizado, pasándole el argumento `done` al callback de `*it`:\*

```jsx
describe('Star wars API', () => {
  it('calls swapi to get people', (done) => {
    expect.assertions(1);
    swapi.getPeopleAsync(fetch).then((data) => {
      expect(data.count).toEqual(87);
      done();
    });
  });
});
```

Otra forma de realizar esto es incluyendo un `return` en la promesa, de esa forma el test no se dá por finalizado hasta resolverse la `Promise`

```jsx
it('calls swapi to get people', () => {
  expect.assertions(1);
  return swapi.getPeopleAsync(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});
```

**Si no usamos uno de estos dos métodos, el test se completará antes de resolverse la promesa y, por lo tanto, fallará estrepitósamente**

**Es por eso por lo que se indica como muy importante el hecho de incluir siempre dentro de los test asíncronos el** `expect.assertions(...)` **indicando el número de pruebas realizadas**

### Example of asynchronous tests

Resumiendo, las formas que tenemos para llevar a cabo test asíncronos son las siguientes:

```jsx
describe('Star wars API', () => {
  test('calls swapi to get people', (done) => {
    expect.assertions(1);
    swapi.getPeopleAsync(fetch).then((data) => {
      expect(data.count).toEqual(87);
      done();
    });
  });

  test('calls swapi to get people', () => {
    expect.assertions(2);
    return swapi.getPeopleAsync(fetch).then((data) => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });

  test('async test / calls swapi to get people', async () => {
    expect.assertions(1);
    const data = await swapi.getPeopleAsync(fetch);

    expect(data.count).toBe(87);
  });
});
```

## Jest cheat sheet

[sapegin/jest-cheat-sheet](https://github.com/sapegin/jest-cheat-sheet)

## Mocks and Spies

Los test que hemos realizado hasta el momento han tardado aprox 3 segundos en realizarse. ¡Y sólo había uno asíncrono!

¿Qué ocurrirá cuando dependamos de más API's externas y tengamos que estar pendientes de la llegada de estos datos para que los **TEST** se realicen correctamente? Puede suponer un coste de tiempo brutal.

Vamos a crear **[MOCKS](https://github.com/aneagoie/udemy-testing-exercise)**, que se encargarán de "simular" los datos o funciones realizadas por llamadas asíncronas.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ecf9d7e9-d436-4292-a044-f337e4a6de2f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ecf9d7e9-d436-4292-a044-f337e4a6de2f/Untitled.png)

Como vemos en el ejemplo, hemos "mockeado" (SPY, en Jest), la respuesta del servidor, para poder probar la integración de nuestras funciones sin tener que estar recurriendo contínuamente a peticiones externas que pueden requerir de un tiempo preciado.
