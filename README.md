# T17 - Rick And Morty Services
## Apuntes
### Creación de servicio que obtenga datos de http
1. Crearemos un servicio usando el comando `ng g s personajes`
2. En **app.module.ts**
    - Importaremos el *HttpClientModule*: `import { HttpClientModule } from '@angular/common/http';`
    - Lo añadiremos al *imports*: `imports: [..., HttpClientModule]`
3. En **personajes.service.ts**
    - Importaremos el *HttpClient*: `import { HttpClient } from '@angular/common/http';`
    - Definiremos el parámetro "http" en constructor: `constructor(private http: HttpClient) { }`
    - Crearemos la funcion *return()*: `return this.http.get("https://rickandmortyapi.com/api/character");`

## Readme de Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
