import React, {useState, useEffect} from 'react'
//import ListUser from '../listUser/listuser'
import axios from 'axios'

const ShowUsers = () =>{
//    const [user, setUser] = useState([])
//    const [search, setSearch] = useState('')
    const [iss, setIss] = useState({})

    // async function handleUser(){
    //     const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${search}`)
    //     setUser([...user, result.data])
    // }

    async function handleIss(){
        const result = await axios.get('http://api.open-notify.org/iss-now.json')
        const {iss_position} = result.data
        setIss(iss_position)
    }

    //src="https://www.openstreetmap.org/export/embed.html?bbox=79.84933018684386%2C6.90329331805479%2C79.85746264457703%2C6.908917042549519&marker=6.906105188659279%2C79.85339641571045&layers=ND">
    //latitude -22.4338052
    //longitude ,-46.8445005
    // 6.90329331805479 = latitude 
    // 79.84933018684386 = longitude

    useEffect(() =>{
        setTimeout(handleIss,5000)
    },[iss])

    // useEffect(() =>{
    //     setSearch('')
    // },[user])

    return (
        <>
            <h4>Latitude: {iss.latitude}</h4>
            <h4>Longitude: {iss.longitude}</h4>
            <p>Atualização de localização a cada 5 segundos</p>

            <iframe 
                width="100%" 
                height="500" 
                src={`https://www.openstreetmap.org/export/embed.html?bbox=0%2C0%2C${iss.longitude}%2C${iss.latitude}&marker=${iss.latitude}%2C${iss.longitude}`}>
            </iframe>

            {/* <input
                type='search'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button onClick={() => handleUser()}>Adicionar</button>

            <ul>
                {user.map(item =>(
                    <ListUser key={item.map(post => post.id)} user={item} user={item}/>
                ))}
            </ul> */}
        </>
    )
}



export default ShowUsers