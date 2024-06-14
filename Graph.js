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

    addV(value) {
        if (!this.adjacencyList.has(value)) {
            this.adjacencyList.set(value, []);
        }
    }

    addConexion(start, end, weight = 1) {
        if (this.adjacencyList.has(start) && this.adjacencyList.has(end)) {
            this.adjacencyList.get(start).push({ node: end, weight });
            this.adjacencyList.get(end).push({ node: start, weight }); 
            return true;
        }
        return false;
    }

    dfs(start, callback) {
        const visited = new Set();
        const stack = [start];

        while (stack.length > 0) {
            const vertex = stack.pop();

            if (!visited.has(vertex)) {
                callback(vertex);
                visited.add(vertex);

                const neighbors = this.adjacencyList.get(vertex);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor.node)) {
                        stack.push(neighbor.node);
                    }
                }
            }
        }
    }
}

export default Graph;
