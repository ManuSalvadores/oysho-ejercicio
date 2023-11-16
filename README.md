# Instrucciones para correr el proyecto:

Se utiliza la version #v18.18.2 de node.
Se utiliza la version #v13.5.1 de cypress.

Encontraran en devDependencies eslint y prettier como herramientas para facilitar el desarrollo.

# Comandos a utilizar

Instalar dependencias utilizando el comando **npm i**

Para correr los test utilizando el entorno gráfico de cypress, se encuentra disponible el siguiente comando:
**npm run cypress:open**

O bien utilizar **npx cypress run** para correr los test por consola unicamente.

# Estructura del proyecto

Dentro de la carpeta cypress/e2e se encuentran los test divididos por la page correspondiente.

Dentro de la carpeta cypress/support se encuentra el file commands.js el cual utilicé para definir algunos comandos personalizados.

En primer lugar cree la función gherkinSyntax, la cual utiliza este concepto originario del Behavior Driven Development (BDD) que en este caso busca un mejor entendimiento de los tests a través de logs en el entorno gráfico de cypress.

Por otro lado, se define la función visitPage la cual utiliza un switch para centralizar el routing de las web a visitar desde los distintos test.

# Propuestas

Si bien este es un ejercicio que testea directamente contra producción, sería ideal desde el lado de desarrollo, poder incluir distintos mocks que permitan realizar pruebas más exhaustivas o bien testear en distintas resoluciones.
También agregar una función de login dentro de commands.js que permita loguear con un user funcional y crear casos de testing que cubran los escenarios posibles una vez que el usuario se encuentra logueado correctamente.
Por último tambien se podría agregar typescript como una herramienta más de control durante el desarrollo.
