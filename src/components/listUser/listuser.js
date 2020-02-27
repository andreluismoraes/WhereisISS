import React from 'react'

const ListUser = ({user}) =>{
    return(
        <li>
            {user.map(item => (
                <>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <hr/>
                </>
            ))}
        </li>

    )
}

export default ListUser