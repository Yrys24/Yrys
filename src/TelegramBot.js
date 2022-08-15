import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


function Zapros() {

    const [vali, seatVali] = useState('');
    const [vali1, seatVali1] = useState('');

    const [gify, seatGify] = useState([]);


    const Sendtext = () => {
        const a = axios.get('https://api.telegram.org/bot5313266693:AAHUsfsEz4W9yrV9HeFdDbzqUr2jbg3s014/sendMessage', {
            params: {
                text: vali,
                chat_id: '5010589979',
            }
        })
        a.then((data) => {
            seatVali('')
            alert("ok")
        })
        a.catch((e) => {
            alert('error')
        })
    }




    const Sendfoto = () => {
        const a = axios.get('https://api.telegram.org/bot5313266693:AAHUsfsEz4W9yrV9HeFdDbzqUr2jbg3s014/sendPhoto', {
            params: {
                photo: vali1,
                chat_id: '5010589979',
            }
        })
        a.then((data) => {
            seatVali1('')
            alert("ok")
        })
        a.catch((e) => {
            alert('error')
            console.log(vali);
        })
    }
    useEffect(() => {
        const a = axios.get('https://api.giphy.com/v1/gifs/trending?api_key=PfFQ8roY49VWXS2NmHUxxzvEatmVtE4l')
        a.then((data) => {
            seatGify(data.data.data)
        })
    }, [])




    return (
        
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
                <div>
                    <h1>ТелеграмБот</h1>
                    <button onClick={() => Sendtext()}> Sendtext</button>
                    <input value={vali} onChange={(e) => seatVali(e.target.value)} />

                    <button onClick={() => Sendfoto()}> SendPhoto</button>
                    <input value={vali1} onChange={(e) => seatVali1(e.target.value)} />
                </div>

                <div>
                    {gify.map(el => {
                        return (

                            <Card style={{ width: '18rem' }}>
                                <Card.Img onClick={() => seatVali1(el.images.original.url)} variant="top" src={el.images.original.url} />
                                <Card.Body>
                                    <Card.Text>
                                        {el.title}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
    );
}

export default Zapros;
