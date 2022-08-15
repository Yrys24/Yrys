import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [Todo, setTodo] = useState('')
  const [Add, setAdd] = useState([])
  const Add11 = () => {
    const pr = prompt('Name')
    const pr1 = +prompt('Score')
    setAdd(prev => [...prev, { name: pr, score: pr1 }])
    setTodo('')
  }
  const Plus = (i) => {
    const pr2 = +prompt('Score')
    setAdd(q => {
      const copy = [...q]
      if (pr2 <= 5) {
        copy[i].score += pr2
      } else {
        copy[i].score += 5

      }

      return copy
    })
  }
  const data = [...Add]
  return (
    <>
      <h1>Students ({Add.length})</h1>
      <button onClick={() => Add11()}>Add todo</button>
      <div >
        <table class="table caption-top">
          <caption></caption>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col"> Name</th>
              <th scope="col">Score</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((e, index) => {
                return (
                  <>

                    <tr>
                      < th>{index + 1}</th>
                      <td>{e.name}</td>
                      <td>{e.score}</td>
                      <td> <button onClick={() => Plus(index)}> Add score</button> </td>
                    </tr>

                  </>
                )
              }
              )
            }


          </tbody>
        </table>


      </div>




    </>
  );
}

export default App;
