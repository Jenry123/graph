class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertices(...vertices) {
        for (let value of vertices) {
            if (!this.adjacencyList.has(value)) {
                this.adjacencyList.set(value, []);
            }
        }
    }

    addConnection(start, end, weight = 1) {
        if (this.adjacencyList.has(start) && this.adjacencyList.has(end)) {
            this.adjacencyList.get(start).push({ node: end, weight });
            this.adjacencyList.get(end).push({ node: start, weight });
            return true;
        }
        return false;
    }

    dijkstra(start) {
        const distances = new Map();
        const visited = new Set();

        // Inicializar distancias con infinito para todos los vértices excepto el inicial
        for (let vertex of this.adjacencyList.keys()) {
            distances.set(vertex, Infinity);
        }
        distances.set(start, 0);

        while (true) {
            let minDistance = Infinity;
            let minVertex = null;

            // Encontrar vértice no visitado con la distancia mínima actual
            for (let [vertex, distance] of distances) {
                if (!visited.has(vertex) && distance < minDistance) {
                    minDistance = distance;
                    minVertex = vertex;
                }
            }

            if (minVertex === null) break; // Si no hay vértices por visitar, salir del ciclo

            visited.add(minVertex);

            // Actualizar distancias de los vecinos del vértice actual
            const neighbors = this.adjacencyList.get(minVertex);
            for (let neighbor of neighbors) {
                const totalWeight = distances.get(minVertex) + neighbor.weight;
                if (totalWeight < distances.get(neighbor.node)) {
                    distances.set(neighbor.node, totalWeight);
                }
            }
        }

        return distances;
    }
}

export default Graph;
