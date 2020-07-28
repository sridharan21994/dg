import React, {useState, useEffect} from 'react'
import * as localForage from "localforage";


const Dashboard = () => {

    const [Value, setValue] = useState('')
    const [User, setUser] = useState('')

    useEffect(() => {
        localForage.getItem('loginDetails').then(({name}) => {setUser(name)});
    }, [])


    const save = async () => {
        let save = await localForage.setItem(User, Value);
    }

    return (
        <div>
            dashboard {User} 
            <div>
                <input type="text" value={Value} onChange={e => setValue(e.target.value)}/>
                <button onClick={e => save()}>save</button>
            </div> 
        </div>
    )
}

export default Dashboard
