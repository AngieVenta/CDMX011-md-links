# Markdown Links

## Índice

* [1. Descripción](#1-descripción)
* [2. Instrucciones de instalación](#2-instrucciones-de-instalación)
* [3. Instrucciones de uso](#3-instrucciones-de-uso)
* [4. Dependencies y devDependencies](#4-dependencies-y-devdependencies)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Maintainer](#6-maintainer)

***

## 1. Descripción

**MD-LINKS GAVP** es una librería y _CLI_ que te permite leer archivos _Markdown_ y obtener información útil sobre los enlaces o links que se incluyen en dichos documentos. 

De cada link, puedes obtener el path, url, texto que aparece dentro del link y código de respuesta HTTP. Así como estadísticas generales sobre los links de tus archivos  _Markdown_ .

## 2. Instrucciones de instalación 

Módulo instalable mediante npm 

```js
npm i md-links-gavp
```

## 3. Instrucciones de uso 

El módulo puede **importarse** en otros scripts de Node.js a través de la 
siguiente interfaz:

#### `mdLinks(path, options = {validate: , stats: })`

##### **Argumentos**

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
* `options`: Un objeto con las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links encontrados.
  - `stats`: Booleano que determina si se desea obtener estadísticas sobre los links encontrados.

##### **Valor de retorno**

La función returna una promesa (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

#### **Ejemplo (resultados como comentarios)**

```js
const mdLinks = require("md-links-gavp");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de la aplicación también puede ejecutarse de la siguiente
manera a través de la **terminal**:

`md-links <path-to-file> [options]`

Por ejemplo:
![md-links](https://i.ibb.co/kMhYZGb/mdLinks.jpg)

El comportamiento por defecto no valda si las URLs responden ok o no, solo identifica el archivo markdown (a partir de la ruta que recibe como argumento), analiza el archivo Markdown e imprimir los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasas la opción `--validate`, el módulo hace una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:
![md-links validate](https://i.ibb.co/dP0YC0M/md-Links-validate.jpg) 

El _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasas la opción `--stats` el output (salida) será un texto con estadísticas básicas sobre los links.

Por ejemplo:
![md-links stats](https://i.ibb.co/tBXhRw4/md-Links-stats.jpg) 

También puedes combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

Por ejemplo:
![md-links validate & stats](https://i.ibb.co/D7KtTbv/md-Links-val-stats.jpg) 

## 4. Dependencies y devDependencies

- Axios
- Chalk
- Commander
- Figlet
- Marked
- Jest
- EsLint

## 5. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### JavaScript

- [x] Diferenciar entre tipos de datos primitivos y no primitivos.

- [x] Arrays (arreglos).

- [x] Objetos (key, value).
 
- [x] Uso de condicionales (if-else, switch, operador ternario, lógica booleana).
  
- [x] Funciones (params, args, return).

- [x] Recursión o recursividad.

- [x] Módulos de CommonJS.

- [x] Diferenciar entre expresiones (expressions) y sentencias (statements).

- [x] Callbacks.

- [x] Promesas.

- [x] Pruebas unitarias (unit tests).

- [x] Pruebas asíncronas.

- [x] Uso de mocks y espías.

- [ ] Pruebas de compatibilidad en múltiples entornos de ejecución.

- [x] Uso de linter (ESLINT)

- [x] Uso de identificadores descriptivos (Nomenclatura y Semántica)

### Node.js

- [x] Instalar y usar módulos con npm

- [x] Configuración de package.json

- [x] Configuración de npm-scripts

- [x] process (env, argv, stdin-stdout-stderr, exit-code)

- [x] File system (fs, path)

### Control de Versiones (Git y GitHub)

- [x] Git: Instalación y configuración

- [x] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)

- [x] Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)

- [x] GitHub: Creación de cuenta y repos, configuración de llaves SSH

- [x] GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)

- [x] GitHub: Organización en Github (projects | issues | labels | milestones | releases)

### HTTP

- [x] Consulta o petición (request) y respuesta (response).

- [x] Codigos de status de HTTP

## 6. Maintainer
 - [Angélica Venta](https://github.com/AngieVenta)
