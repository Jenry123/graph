import Graph from "../models/Graph.js";

let g = new Graph();

window.addVertices = function() {
    const verticesInput = document.getElementById('vertices').value;
    const vertices = verticesInput.split(',').map(v => v.trim());
    g.addVertices(...vertices);
    document.getElementById('vertices').value = '';
    alert(`zonas agregadas: ${vertices.join(', ')}`);
}

window.addArista = function() {
    const inicio = document.getElementById('inicio').value;
    const fin = document.getElementById('fin').value;
    const peso = parseInt(document.getElementById('peso').value, 10);
    if (g.addConexion(inicio, fin, peso)) {
        alert(`ruta agregada: ${inicio} -> ${fin} (Peso: ${peso})`);
    } else {
        alert(`Error: No se pudo agregar la ruta ${inicio} --> ${fin}`);
    }
    document.getElementById('inicio').value = '';
    document.getElementById('fin').value = '';
    document.getElementById('peso').value = '1';
}

window.dfs = function() {
    const vertices = [...g.adjacencyList.keys()];
    if (vertices.length > 0) {
        let recorrido = 'Recorrido : ';
        g.dfs(vertices[0], val => {
            recorrido += `${val} `;
        });
        alert(recorrido);
    } else {
        alert('No hay vértices en el grafo.');
    }
}

function mostrarSalida(mensaje) {
    alert(mensaje);
}
