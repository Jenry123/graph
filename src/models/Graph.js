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
        const infinito = 99999999;
        const distances = new Map();
        const visited = new Set();
        const LPrima = new Set();
        const D = new Map();
        const DPrima = new Map();

        for (let vertex of this.adjacencyList.keys()) {
            distances.set(vertex, infinito);
            D.set(vertex, infinito);
            DPrima.set(vertex, infinito);
            LPrima.add(vertex);
        }
        distances.set(start, 0);
        D.set(start, 0);
        DPrima.set(start, 0);

        while (LPrima.size > 0) {
            let minDistance = infinito;
            let minVertex = null;

            for (let vertex of LPrima) {
                if (DPrima.get(vertex) < minDistance) {
                    minDistance = DPrima.get(vertex);
                    minVertex = vertex;
                }
            }

            if (minVertex === null) break;

            LPrima.delete(minVertex);
            visited.add(minVertex);

            const neighbors = this.adjacencyList.get(minVertex);
            for (let neighbor of neighbors) {
                if (LPrima.has(neighbor.node)) {
                    const alt = DPrima.get(minVertex) + neighbor.weight;
                    if (alt < DPrima.get(neighbor.node)) {
                        DPrima.set(neighbor.node, alt);
                        distances.set(neighbor.node, alt);
                    }
                }
            }
        }

        return distances;
    }

    dfs(start, callback) {
        const visited = new Set();

        const traverse = (vertex) => {
            if (!vertex) return;

            visited.add(vertex);
            callback(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor.node)) {
                    traverse(neighbor.node);
                }
            }
        };

        traverse(start);
    }

    get vertices() {
        return Array.from(this.adjacencyList.keys());
    }

    hasVertex(vertex) {
        return this.adjacencyList.has(vertex);
    }
}

export default Graph;
