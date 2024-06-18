// view.js

class View {
    constructor() {
        this.verticesInput = document.getElementById('vertices');
        this.inicioInput = document.getElementById('inicio');
        this.finInput = document.getElementById('fin');
        this.pesoInput = document.getElementById('peso');
    }

    getVertices() {
        return this.verticesInput.value.split(',').map(v => v.trim());
    }

    getArista() {
        return {
            inicio: this.inicioInput.value,
            fin: this.finInput.value,
            peso: parseInt(this.pesoInput.value, 10)
        };
    }

    clearVerticesInput() {
        this.verticesInput.value = '';
    }

    clearAristaInputs() {
        this.inicioInput.value = '';
        this.finInput.value = '';
        this.pesoInput.value = '1';
    }

    showAlert(message) {
        alert(message);
    }
}

export default View;
