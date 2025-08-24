document.addEventListener("DOMContentLoaded", () => {//cuando el contenido del documento esta cargado ->
    const COMMANDS = document.querySelectorAll(".command");//selecciono todos los elementos de la clase command -> nodeList
    let lastCommand = null;

    COMMANDS.forEach(command => {
        command.addEventListener("click", () => {//añade click listener a cada elemento
            if (lastCommand != null && lastCommand !== command) {
                //si lastCommand no es null,y es diferente al actual comando activo, lo remueve
                lastCommand.classList.remove("command-show");//lo remueve
            }
            command.classList.toggle("command-show");//activa descripcion del comando que se clickeo

            if (command.classList.contains("command-show")) {
                //guardo el comando un comando activo
                lastCommand = command;
            } else {
                lastCommand = null;
            }
        });
    });
});

