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

### Llamar al servicio y recibir los datos
1. En **lista-per.component.ts**
    - Importaremos el servicio `import { PersonajesService } from 'src/app/personajes.service';`
    - Importaremos la interfaz OnInit `import { OnInit } from '@angular/core';`
    - Implementaremos la interfaz `export class ListaPerComponent implements OnInit{...}`
    - Crearemos un atributo que almacene los datos: `personajes:any = null;`
    - Definiremos el parámetro en el constructor: `constructor(private personajesDelServicio: PersonajesService){ };`
    - Obtendremos los datos desde la funcion *ngOnInit()*: `this.personajesService.getPersonajes().subscribe( result => this.personajes = result);`
2. En **lista-per.component.html**
    - Crearemos un bucle ngFor `<div *ngFor="let personaje of personajes">...</div>`
    - Mostraremos los datos dentro del bucle `{{personaje.name}}...` 

### Lista de personajes
![imagen](https://github.com/santiarroyave/sao-fe-gc-ejercicios-T17-rick-and-morty-services-07-2023/assets/135848692/109fcfc0-2d51-4026-a73f-0371af5ae144)

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
