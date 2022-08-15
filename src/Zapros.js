import { useEffect, useState } from "react";
import axios from 'axios';


function Zapros() {

    const [vali, seatVali] = useState(0);
    const [vali1, setVali1] = useState(0);
    const [vali2, setVali2] = useState(0);

    useEffect(() => {
        const a = axios.get('https://open.er-api.com/v6/latest/USD')
        a.then((data) => {
            seatVali(data.data.rates.KGS)
        })
        a.catch((e) => {
            console.log(e);
        })
    }, [])

    const kurs = () => {
        setVali2(e => !e)
    }
    return (
        <>
            {vali1 ? <h1>{vali2 ? (vali * vali1).toFixed(2) + "  Сом" : vali1 + "  $"}</h1> : null}
            <input type={'text'} onChange={(e) => setVali1(e.target.value)} />
            <button onClick={kurs}> {'KGS ⇆USD'}</button>
        </>
    );
}

export default Zapros;
