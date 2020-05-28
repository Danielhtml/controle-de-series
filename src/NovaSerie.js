import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState ()
    const [success, setSucces] = useState (false)
    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios
        .post('/api/series', {
            name
        })
        .then(res => {
            setSucces(true)
        })
    }
    if (success) {
       return <Redirect to='/series'/>
    }

    return (
        <div className='container'>
            <h1>Nova Serie {name}</h1>
            <form>
            <form>
            <div className='form-group'>
                <label Htmlfor="name">Nome</label>
                <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Serie'/>
            </div>
            <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>
            </form>
        </div>
    )
}

export default NovaSerie