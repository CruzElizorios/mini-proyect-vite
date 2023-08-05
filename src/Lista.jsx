import { useState } from "react"
import AgregarTarea from "./componentes/AgregarTarea"

const Items = ({ nombre, visto }) => {
    return (
        <li>{nombre} 
            {visto ? '✅' : '❌'}
        </li>
    )
}

const Lista = () => {
    let listadoSecciones = [
        { id: 1, nombre: "instalaciones", visto: true },
        { id: 2, nombre:"inst programada", visto: true },
        { id: 3, nombre:"uso de vite", visto: true },
        { id: 4, nombre:"componentes", visto: true },
        { id: 5, nombre:"variables", visto: true },
        { id: 6, nombre:"props", visto: true },
        { id: 7, nombre:"useState", visto: true },
        { id: 8, nombre:"Redux", visto: false },
        { id: 9, nombre:"custonHooks", visto: false },
    ] 
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onEmisionHijoAgregarTarea = (val) =>{
        if(val <1 ) return
        const envioTarea = {
            id: arreglo.length + 1,
            nombre: val,
            visto: false
        }
        setArreglo([...arreglo, envioTarea])

    }

       return (
        <>
            <h1>Listado de Temas</h1>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
            <AgregarTarea agregarTarea={onEmisionHijoAgregarTarea}></AgregarTarea>
        </>
    )
}

export default Lista

