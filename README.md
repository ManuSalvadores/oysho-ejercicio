# Ejercicio E2E Oysho

Este repositorio contiene pruebas end-to-end (E2E) para el sitio web de Oysho. A continuación, se detallan los pasos necesarios para la instalación y ejecución de las pruebas, así como una descripción de la estructura del proyecto.

## Requisitos de Instalación

- Node.js
- npm

## Instrucciones de Instalación

1. Clona el repositorio: `git clone https://github.com/ManuSalvadores/oysho-ejercicio.git`
2. Instala las dependencias: `npm install`

## Uso

Para correr los test utilizando el entorno gráfico de cypress, se encuentra disponible el siguiente comando:

`npm run cypress:open`

O bien

`npm cypress run` para correr los test por consola unicamente.

## Estructura del Proyecto

Dentro de la carpeta cypress/e2e se encuentran los tests, divididos por la página correspondiente.

Dentro de la carpeta cypress/support se encuentra el archivo commands.js, donde se definen algunos comandos personalizados.

La función gherkinSyntax utiliza el concepto originario del Behavior Driven Development (BDD) para proporcionar un mejor entendimiento de los tests a través de logs en el entorno gráfico de Cypress.

La función visitPage centraliza el routing hacia las distintas páginas web desde los diferentes tests.

# Propuestas de Mejora

A pesar de que este ejercicio realiza pruebas directamente contra el entorno de producción, tengo algunas propuestas para mejorarlo:

Mocks y Entornos de Desarrollo:

Incluir mocks que permitan pruebas más exhaustivas.
Establecer entornos de desarrollo para facilitar la ejecución de pruebas en diferentes contextos.

Función de Login:

Agregar una función de login en commands.js para simular el inicio de sesión con un usuario funcional.
Crear casos de prueba que cubran escenarios una vez que el usuario está autenticado correctamente.

Integración de TypeScript:

Considerar la incorporación de TypeScript para mejorar el control durante el desarrollo.
Este proyecto proporciona una base sólida, y estas sugerencias pueden llevarlo al siguiente nivel para garantizar pruebas más completas y robustas.
