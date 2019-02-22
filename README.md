# Creaofis

Realizar un pequeño sistema en donde haciendo uso de la siguiente API https://openweathermap.org/api , y usando la última versión de Angular se demuestren la utilización de los siguientes conceptos:

- Features Modules
- Creación de Componentes Genéricos reutilizable.
  - Exportar a Librería su UI y behaviors e implementar en el proyecto en al menos dos instancias del componente donde se pueda observar diferente aspecto y la reutilización del mismo.
- Implementación de NGRX.
- Implementación de RXJS.
- El sistema debería de tener como mínimo 2 funcionalidades diferentes por ejemplo cambio de ciudad.
- Opcional Test Unitario del módulo desarrollado.

---

## Solution Applied

I have build an architecture with different projects. All modules are **lazy-loaded**.

The whole project is setup in order to be deployed in github in the **docs** folder. I have created different libraries for the ease of reuse.

The app is deployed in: https://pearpages.com/creaofis.

I have focused above all in the architecture which I thought it was the goal of the structure.

+ The app is the project **clx-creaofis**.
+ Bussiness models have their own libary **bss-business**.
+ Reusable dummy components are in **cui-ui**
+ Feature Weather Module which uses the prior libraries (bss-business and cui-ui) is **cwe-weather**.

### Things to improve

+ Define pending interfaces
+ Create more dummy components
+ More weather widgets

### Vendor

+ prettier
+ husky

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

> We use /docs folder so we can publish in github

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
