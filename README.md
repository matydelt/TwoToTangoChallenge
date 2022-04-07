# twototango

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## para el correcto funcionamiento del endpoint tuve que utilizar una proxy de un proyecto en heroku para activarlo debe ir a

https://cors-anywhere.herokuapp.com/corsdemo

## y hacerle click en el boton de esa pagina , si no va a tener problema con los cors de la api puede comentar la linea 21 y descomentar la 20 en el file index.ts ubicado en la carpeta store



## si de todas maneras la api no responde hay casos de prueba para su muestra de las vistas para que estas se visualicen solo tiene que descomentar la linea 3 y comentar la 4 en SongsList.vue en la carpeta components