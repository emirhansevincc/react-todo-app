import React from 'react'

function ListPart({ todos, deleteTodo }) {

  return (
    <div>

        {
            todos.map((todo, index) => (
                <div key={index} className='todo'>
                    <p>{todo}</p>
                    <div className='i-tags'>
                        <i className='fas fa-times-circle' onClick={() => {
                            deleteTodo(index)
                        }}></i>
                    </div>
                </div>  
            ))
        }

    </div>
  )
}

export default ListPart