// Debes implementar las siguientes funciones:


function agregarTarea(tareas, tarea) {
    // Agrega una nueva tarea al array
    const nuevaTarea = {
        id: tareas.length + 1, //El id sera e l numero de la tarea
        descripcion: tarea,
        completada: false
    };
    return [...tareas, nuevaTarea];//devolviendo nuevo array con la tarea añadida
}

function eliminarTarea(tareas, id) {
    // Elimina una tarea por su índice
    return tareas.filter(tarea => tarea.id !== id);//Devolvemos nuevo array con la tarea añadida
}

function completarTarea(tareas, id) {
    // Marca una tarea como completada
    return tareas.map(tarea => {
        if (tarea.id === id){
            return {...tarea, completada: true};//Copia la tarea y cambia a completada
        }
        return tarea; //Devuelve las demas tareas sin cambios
    });
}

function listarTareas(tareas) {
    // Muestra todas las tareas numeradas con su estado
    console.log("\n-- Lista de tareas");
    tareas.forEach(tarea => {
        const estado = tarea.completada ? "X" : " ";
        console.log(`${tarea.id}.[${estado}] ${tarea.descripcion}`);
    });
}

function tareasPendientes(tareas) {
    // Retorna solo las tareas pendientes
    return tareas.filter(tarea => !tarea.completada);
}

//Probamos las funciones
let tareas = [];

tareas = agregarTarea(tareas, "Aprender JavaScript");
tareas = agregarTarea(tareas, "Practicar con ejercicios");
tareas = agregarTarea(tareas, "Leer documentacion");

listarTareas(tareas);

console.log("\n-- Completando primer tarea");
tareas = completarTarea(tareas, 1);
listarTareas(tareas);

console.log("\n-- Tareas pendientes");
const pendientes = tareasPendientes(tareas);
listarTareas(pendientes);

console.log("\n-- Eliminando la tarea 2");
tareas = eliminarTarea(tareas, 2);
listarTareas(tareas);