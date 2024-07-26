import Graph from '../models/Graph.js'; 
import View from '../view/View.js'; 

const graph = new Graph();
const view = new View();

function addVertices() {
    const vertices = view.getVertices();
    graph.addVertices(...vertices);
    view.clearVerticesInput();
    view.showAlert(`Zonas agregadas: ${vertices.join(', ')}`);
}

function addArista() {
    const { inicio, fin, peso } = view.getArista();
    
    if (graph.addConnection(inicio, fin, peso)) {
        view.showAlert(`Ruta agregada: ${inicio} -> ${fin} (Peso: ${peso})`);
    } else {
        view.showAlert(`Error: No se pudo agregar la ruta ${inicio} -> ${fin}`);
    }
    
    view.clearAristaInputs();
}

function dfs() {
    const vertices = graph.vertices;
    
    if (vertices.length > 0) {
        let recorrido = 'Recorrido: ';
        graph.dfs(vertices[0], val => {
            recorrido += `${val} `;
        });
        view.showOutput(recorrido);
    } else {
        view.showOutput('No hay vértices en el grafo.');
    }
}

function dijkstra() {
    const inicio = document.getElementById('dijkstraInicio').value;
    if (graph.hasVertex(inicio)) {
        const distances = graph.dijkstra(inicio);
        let resultado = 'Distancias: ';
        for (let [vertex, distance] of distances) {
            resultado += `${vertex}: ${distance}, `;
        }
        view.showOutput(resultado);
    } else {
        view.showAlert(`Error: El vértice ${inicio} no existe en el grafo.`);
    }
}

// Asociación de eventos a los botones
document.getElementById('addVerticesBtn').addEventListener('click', addVertices);
document.getElementById('addAristaBtn').addEventListener('click', addArista);
document.getElementById('dfsBtn').addEventListener('click', dfs);
document.getElementById('dijkstraBtn').addEventListener('click', dijkstra);
