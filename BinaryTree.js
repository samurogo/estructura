// Creamos la clase de nodos
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Definimos el arbol
class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    // Función del árbol para agregar un valor
    insertar(valor) {
        // Crear nodo
        const nodoNuevo = new Nodo(valor);
        // Si el árbol está vacío
        if (this.raiz === null) {
            this.raiz = nodoNuevo;
            return true;
        }
        else {
            // Buscar la posición en el árbol si ya tiene datos
            let nodoActual = this.raiz;
            while (true) {
                // Si es menor se va al sub-árbol de la izquierda
                if (valor < nodoActual.valor) {
                    // Si el hijo de la izquierda está vacío se inserta un nodo
                    if (nodoActual.izquierda === null) {
                        nodoActual.izquierda = nodoNuevo;
                        return true;
                    }
                    // Se mueve hacia el nodo de la izquierda
                    nodoActual = nodoActual.izquierda;
                }
                // Si es mayor o igual te vas a la derecha
                else {
                    // Si el sub-árbol derecho es nulo, se inserta un nuevo nodo
                    if (nodoActual.derecha === null) {
                        nodoActual.derecha = nodoNuevo;
                        return true;
                    }
                    // Te mueves al nodo de la derecha
                    nodoActual = nodoActual.derecha;
                }
            }
        }
    }

    // Aca esta el cambio
    // Función para la búsqueda
    buscar(valor) {
        // Se inicia la búsqueda en la raíz
        let nodoActual = this.raiz;
        let coincidencias = [];

        // Recorre el árbol hasta que se encuentre una coincidencia
        while (nodoActual !== null) {
            // Si el valor es igual, añádelo al arreglo de coincidencias
            if (valor === nodoActual.valor) {
                coincidencias.push(nodoActual.valor);
            }

            // Si el valor es menor, ve al sub-árbol izquierdo
            if (valor < nodoActual.valor) {
                nodoActual = nodoActual.izquierda;
            }
            // Si el valor es mayor, ve al sub-árbol derecho
            else {
                nodoActual = nodoActual.derecha;
            }
        }

        // Retorna el arreglo de coincidencias
        return coincidencias;
    }
}

// Ejemplo de uso
const binaryTree = new BinaryTree();
binaryTree.insertar(5);
binaryTree.insertar(5);
binaryTree.insertar(3);
binaryTree.insertar(8);
binaryTree.insertar(11);

// Ejemplo de uso para buscar todas las coincidencias
const coincidencias = binaryTree.buscar(8);
console.log(coincidencias); 
