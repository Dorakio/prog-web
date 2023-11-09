# Promise <h1>
>Objeto que representa a conclusão ou o fracasso de uma tarefa e seu valor resultante
>Método assíncrono
>Em vez de retornar imediatamente o valor final, retorna uma promise

~~~javascript
function someAsynFunction() {
   return new Promise((resolve, reject){
      if (somethingWasSuccesful) {
         resolve();     
      } else {
         reject()
      }
   });
}
~~~
