// src/controllers/app.js

import Graph from '../models/Graph.js'; // Ajusta la ruta según tu estructura de carpetas
import View from '../view/View.js'; // Ajusta la ruta según tu estructura de carpetas

const graph = new Graph();
const view = new View();


graph.addVertices('A', 'B', 'C');
graph.addConnection('A', 'B', 1);
graph.addConnection('A', 'C', 4);
graph.addConnection('B', 'C', 2);

// Ejemplo de uso del algoritmo de Dijkstra
const startVertex = 'A'; // Vértice inicial
const distances = graph.dijkstra(startVertex);

console.log(distances); 

function addVertices() {
    const verticesInput = document.getElementById('vertices').value;
    const vertices = verticesInput.split(',').map(v => v.trim());
    graph.addVertices(...vertices);
    view.clearVerticesInput();
    view.showAlert(`Zonas agregadas: ${vertices.join(', ')}`);
}

function addArista() {
    const inicio = document.getElementById('inicio').value;
    const fin = document.getElementById('fin').value;
    const peso = parseInt(document.getElementById('peso').value, 10);
    
    if (graph.addConnection(inicio,fin,peso)) {
        view.showAlert(`Ruta agregada: ${inicio} -> ${fin} (Peso: ${peso})`);
    } else {
        view.showAlert(`Error: No se pudo agregar la ruta ${inicio} -> ${fin}`);
    }
    
    view.clearAristaInputs();
}

function dfs() {
    const vertices = [...graph.adjacencyList.keys()];
    
    if (vertices.length > 0) {
        let recorrido = 'Recorrido: ';
        graph.dfs(vertices[0], val => {
            recorrido += `${val} `;
        });
        view.showAlert(recorrido);
    } else {
        view.showAlert('No hay vértices en el grafo.');
    }
}


// Asociación de eventos a los botones
document.getElementById('addVerticesBtn').addEventListener('click', addVertices);
document.getElementById('addAristaBtn').addEventListener('click', addArista);
document.getElementById('dfsBtn').addEventListener('click', dfs);
