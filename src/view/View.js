class View {
    constructor() {
        this.verticesInput = document.getElementById('vertices');
        this.inicioInput = document.getElementById('inicio');
        this.finInput = document.getElementById('fin');
        this.pesoInput = document.getElementById('peso');
        this.outputContainer = document.getElementById('salida'); // Contenedor de salida
    }

    // Obtiene los vértices desde la entrada y los convierte en un array
    getVertices() {
        return this.verticesInput.value.split(',').map(v => v.trim());
    }

    // Obtiene los valores de inicio, fin y peso de la arista desde las entradas
    getArista() {
        return {
            inicio: this.inicioInput.value,
            fin: this.finInput.value,
            peso: parseInt(this.pesoInput.value, 10)
        };
    }

    // Limpia la entrada de vértices
    clearVerticesInput() {
        this.verticesInput.value = '';
    }

    // Limpia las entradas de la arista
    clearAristaInputs() {
        this.inicioInput.value = '';
        this.finInput.value = '';
        this.pesoInput.value = '1';
    }

    // Muestra una alerta con un mensaje dado
    showAlert(message) {
        alert(message);
    }

    // Muestra un mensaje en el contenedor de salida
    showOutput(message) {
        this.outputContainer.innerText = message;
    }
}

export default View;
