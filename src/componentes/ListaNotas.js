import React, { useState } from "react";
import "./listaNotas.css";

function ListaDeNotas() {
    const [nota, setNota] = useState({
        mensaje: "",
        descripcion: ""
    });
    const [lista, setLista] = useState([]);

    const añadir = () => {
        setLista([...lista, nota]);
    }

    const borrar = (notaAEliminar) => {
        let repeatIndex = -1;
        lista.forEach((nota, index) => {
            if (nota.mensaje == notaAEliminar.mensaje)
            {
                repeatIndex = index;
            }
        });
        
        const nuevaLista = lista.filter((nota, index) => index != repeatIndex);
        setLista(nuevaLista);
    }

    return (

        <>
        <div class="contenedor">
            <h1>LISTA NOTAS</h1>
            <input value={nota.mensaje} onChange={(e) => setNota(e.target.value)}></input>
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