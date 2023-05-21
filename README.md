# Mi Portfolio Web

## deploy 
https://frontend-portfolio-55042.web.app/

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

Ademas podra iniciar sesion desde el boton login la barra de navegacion para poder editar dinamicamente los datos del portfolio, una vez habilitadas las opciones de edicion el usuario podra Agregar, Editar y Borrar los elementos de cada seccion mencionada anteriormente. 

## Tecnologias usadas 
Para este proyecto use las siguientes tecnologias :

- HTML
- CSS
- Bootstrap
- Angular 

## rutas
- `/`: pagina principal. Si el usuario inicio sesion podrá crear, editar, o borrar en las diferentes secciones .
- `/login`:  Aqui el usuario podra iniciar sesion con sus credenciales para acceder a las opciones de edicion 
- `/addEducation`: Para añadir un objeto educacion en la seccion "educacion"
- `/editEducation/id`: para editar un objeto existente de la seccion educacion

## Aclaracion
Las peticiones se hacen al backend implementedo en [este](https://github.com/bnozzi/BackEnd-Portfolio/tree/spring-deploy) repositorio
Si las peticiones devueven un error 500  entonces el jwt es invalido o expiró por lo que tendrá que iniciar sesion nuevamente 








