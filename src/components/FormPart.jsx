import React, { useState } from 'react'

function FormPart({ todos, setTodos}) {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        setTodos([...todos, inputValue])
    }

    // console.log(todos);


  return (


    <div className='form-part-main-div'>
        <form action="" className='form'>
            <div className="input-button">
                <input 
                    type="text" 
                    className='form-input'
                    placeholder='Enter a todo...'
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <button className="form-button" onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                    setInputValue("")
                }}>
                <i className="fas fa-plus"></i>
                </button>
            </div>
        </form>
    </div>


  )
}

export default FormPart