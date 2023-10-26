import React, { useState } from "react";
import "./listaNotas.css";

function ListaDeNotas() {
    const [nota, setNota] = useState("");
    const [lista, setLista] = useState([]);

    const añadir = () => {
        setLista([...lista, nota]);
    }

    const borrar = (notaAEliminar) => {
        const nuevaLista = lista.filter(nota => nota !== notaAEliminar);
        setLista(nuevaLista);
    }

    return (

        <>
        <div class="contenedor">
            <h1>LISTA NOTAS</h1>
            <input value={nota} onChange={(e) => setNota(e.target.value)}></input>
            <button onClick={añadir}>Agregar nota</button>
            <ul class="lista">
                {lista.map((nota, index) => (
                    <li key={index}>
                        {nota}
                        <button onClick={() => borrar(nota)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
            
        </>
    )
}

export default ListaDeNotas;