// src/controllers/app.js

import Graph from '../models/Graph.js'; 
import View from '../view/View.js'; 

const graph = new Graph();
const view = new View();

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
    
    if (graph.addConnection(inicio, fin, peso)) {
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

function dijkstra() {
    const inicio = document.getElementById('dijkstraInicio').value;
    if (graph.adjacencyList.has(inicio)) {
        const distances = graph.dijkstra(inicio);
        let resultado = 'Distancias: ';
        for (let [vertex, distance] of distances) {
            resultado += `${vertex}: ${distance}, `;
        }
        view.showAlert(resultado);
    } else {
        view.showAlert(`Error: El vértice ${inicio} no existe en el grafo.`);
    }
}

// Asociación de eventos a los botones
document.getElementById('addVerticesBtn').addEventListener('click', addVertices);
document.getElementById('addAristaBtn').addEventListener('click', addArista);
document.getElementById('dfsBtn').addEventListener('click', dfs);
document.getElementById('dijkstraBtn').addEventListener('click', dijkstra);
