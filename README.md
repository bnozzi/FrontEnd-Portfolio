# Mi Portfolio Web

https://portfolioangular-roan.vercel.app/


## Descripcion 
Frontend  del proyecto final de [Argentina programa](https://www.argentina.gob.ar/economia/conocimiento/argentina-programa). 
Para este proyecto usé los conocimientos adquiridos en dicho programa, documentacion de las tecnologias usadas y distintos tutoriales. 

La arquitectura del proyecto es la siguiente: 
La ruta inicial muestra la primera version del proyecto hecho con html css y js 
Dentro de la carpeta Portfolio se encuentra el proyecto hecho en Angular 

Como visitante va a poder visualizar las distintas secciones del portfolio que son
- Sobre mi
- Proyectos
- Educacion 
- Skills 

Ademas podra iniciar sesion desde el boton login la barra de navegacion para poder editar dinamicamente los datos del portfolio,[aqui](#aclaracion) se encuentra detallado como podra hacerlo,  una vez habilitadas las opciones de edicion podra Agregar, Editar y Borrar los elementos de cada seccion mencionada anteriormente , pero al recargar se reestableceran los datos predeterminados 

## Tecnologias usadas 
Para este proyecto use las siguientes tecnologias :

- HTML
- CSS
- Bootstrap
- Angular 

## Instalación
Podrá clonar este repositorio con el siguiente comando
```console
git clone -b Angular+Auth --single-branch https://github.com/bnozzi/FrontEnd-Portfolio.git
```

### Aclaración : 
A la hora de poder editar los datos tendrá dos opciones : 

**Iniciar sesion para acceder a las opciones de edicion**

Para lograr esto me basé en [este](https://github.com/maxi7587/angular-jwt-tutorial) repositorio para generar un JWT a traves de un backend hecho en node.

Para poder iniciar sesion deberá:
1. clonar el repositorio del backend con el siguiente comando : 
`git clone https://github.com/SinghDigamber/node-token-based-authentication.git` 
2. Entrar en el directorio del proyecto con `cd node-token-based-authentication`
3. Eliminar la carpeta node_modules con el comando `rm -rf node_modules` (esto es necesario porque se han subido las dependnecias de la aplicación al proyecto, lo cual no es una buena práctica... se recomienta siempre agregar la carpeta node_modules en el archivo `.gitignore`)
4. Instalar las dependencias correctas con el comando `npm install`
5. Instalar nodemon y agregarlo como depnedencia de desarrollo al proyecto con el comando `npm install nodemon --save-dev`. Esto nos permitirá ejecutar un servidor que reinicia la aplicación cada vez que ocurre un cambio (en caso de que queramos modificar algo en el código del BE).
6. Agregar el comando nodemon dentro de la propiedad scripts en el archivo package.json (ejemplo: `"scripts": {... "nodemon": "nodemon"}`).
7. Ejecutar el servidor con el comando `npm run nodemon`.

Luego podra iniciar sesion desde el boton Login con los siguientes datos :
Email: test@test
Password: admin

**Modificar el localStorage para acceder a las opciones de edicion**

Simplemente desde la consola del navegador ponga el siguiente comando : 
`localStorage.setItem("access_token",<cualquier valor>)`
Y recarge la pagina 

De por hecho que no se contemplan cuestiones de seguridad respecto al inicio de sesion y edicion de datos ya que los unicos datos que se modifican son las las propiedades de las  clases de los componentes y que al recargar vuelve a los datos originales









