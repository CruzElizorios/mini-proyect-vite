import { useState } from "react"

const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (event) =>{
        setInputValue (event.target.value)
    }

    const envio = (event)=>{
        
        agregarTarea( inputValue)
        event.preventDefault()
    }
    return (
        <form onSubmit={envio}>

            <input type="text" placeholder="agregar una tarea" value={inputValue} onChange={ onInputChange}/>
             {/* forma larga cuando hay mas de un parametro onChange={ (event)=> onInputChange(event)} */}
        </form>
    )
}

export default AgregarTarea