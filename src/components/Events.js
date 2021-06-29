import React, {useEffect, useState} from 'react'
import './Events.css'
function Events() {
    const [Data, setData] = useState([])
    const Api = 'https://87197325.blob.core.windows.net/fed-technical-test/events.json'

    useEffect (() => {
        fetch(Api)
            .then ((res) => res.json())
            .then((Data) => setData(Data))
    }, [])
console.log(Data)

    return (
        <div className="Eventdiv">
            {Data?.map((item) =>
                <ul >
                    <li className="EventData">
                        <img src={item.imgUrlDesktop}/>
                        {item.title}<br/>
                        {item.description}
                    </li>
                </ul>
            )}
        </div>
        
    )
}

export default Events
