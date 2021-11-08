Hola gente, seguro esto se va a ir modificando mediante prueba y error, pero acá va lo que se hasta ahora.



GLOSARIO COMANDOS:  

- git checkout -b nombrebranch:  con esto se cambia de rama hacia una nueva que creamos con el nombre que quieran (en este caso seria "nombrebranch")

- git branch -d nombre_rama: Para eliminar una rama de nuestro repositorio local 

-git checkout Master:  con esto se cambia a una rama existente (en este caso "Master")

-git branch:  con esto podemos ver en que rama estamos y que otras existen en el repo

- git push --set-upstream origin nombrebranch:    cuando crean una rama nueva al principio no les va a aparecer en el repositorio, este es el primer push que deberian hacer para que otros la puedan ver en la pagina de github( de todas formas cuando intenten hacer el primer push git no los va a dejar y les va a ofrecer esto, copien y peguen)

-git pull: actualiza lo que sea que este en la rama que nosotros no tengamos en el repo de nuestra pc (ej, si me levanto al otro dia y empiezo a laburar, pero alguien primero hizo un push a esa misma rama, yo no lo voy a tener en mi repo. Por lo tanto, para poder commitear y pushear, primero debo hacer esto antes de empezar a trabajar)

- git add .  : agrego todos los archivos nuevos y modificaciones que yo haya realizado

-git commit -m "comentario":  commiteo los cambios (aunque ya sabemos esto, siempre esta bueno que el nombre del comentario sea super especifico de lo que estamos haciendo)

-git push: asegurarse siempre obvio que estemos en la rama que queremos pushear





------------------------------------------------------------------------------------------------------------


DIA DE TRABAJO NORMAL:

1- Abro mi repositorio y me coloco en la rama donde estan los archivos actualizados desde los que quiero agregar una 	 nueva funcionalidad: git checkout Development (ejemplo).
	Si ya me encuentro en esa rama, es posible que esté desactualizada si otro compañero hizo un merge a la misma. Asi que hagan: git pull
	En caso de querer realizar un trabajo solo con el backend , me paro en la rama "Back-end". Si quiero tener toda la página hasta el momento, tanto front como back, me paro en "Development".


2- Creo una rama nueva con un nombre muy especifico para que los demas sepan en que funcionalidad estoy trabajando:
    git checkout -b backend/server/routes/user/getUserAccess (ejemplo)
   En mi nueva rama creada, van a copiarse automaticamente los archivos desde la rama en donde estaba parado antes, por eso es muy importanto no confundirse en el punto 1.

3-  git push --set-upstream origin backend/server/routes/user/getUserAccess.
	Este va a ser el primer push necesario para que su rama nueva aparezca en la página de github para que los demás puedan verla, y ver en qué están trabajando.

4- Una vez terminada mi nueva funcionalidad, los comandos simples. 
	 git add .
	 git commit -m "comentario"
	 git push

5- Luego, ir al repo de github. Entrar a "pull-request" y seleccionar desde nuestra rama (está a la derecha) hacia la 	 rama donde queremos hacer el merge "Backend" o "Frontend" (la de la izquierda, la flecha apunta hacia esta).
   En estas ramas, podemos hacer el merge automáticamente sin necesidad de que alguien lo revise, sin embargo, en caso de querer que el compañero que esté trabjando con uds en el backend controle lo que hicieron, buscan a la derecha donde dice "reviewers", tocan la ruedita y les va a dejar seleccionar quienes quieren que lo revisen.
   Puede pasar que si trabajaron en el mismo archivo, el merge tenga conflictos. Eso se resuelve en el momento, pero es importanto siempre que hagamos una funcionalidad, no tocar lo que hizo el otro. Siempre escriban su código nuevo DEBAJO. No siempre es posible claramente, y ahí veremos como resolverlo.

   

6- Luego de hacer el merge, eliminamos nuestra rama. Tocamos "branches" y nos va a salir el tacho de basura rojo para eliminarlo. Notar que no vamos a poder eliminar la rama mientras no se haya resuelto nuestro pull-request


7- Una vez que hayamos mergeado desde nuestra terminal, vamos a cambiarnos a esta rama :  -git checkout Back-end
  En esta vamos a tener actualizado el backend entero y lo podemos probar. Luego hacemos otro pull request hacia la rama "Development".  En esta rama vamos a necesitar la autorización de 2 compañeros para poder hacer el merge. Por lo tanto hay que esperar y comunicar el pull-request a ellos mediante el grupo de wp o poniendolos como "reviewers".
  Estos compañeros deben tocar el link "view" (a la derecha) y luego el botón verde "review changes". Este botón les va a dar la opción de dejarle un comentario, aprobarlo o solicitarle cambios.

  
