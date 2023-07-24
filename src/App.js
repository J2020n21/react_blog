import {useState} from 'react';
import './App.css';

function App() {
  let [title,titleChange] = useState(['남자 코트 추천','플라스크 독학','대구 막창맛집']);
  let posts = '강남 우동 맛집';
  let [click,clickChange] = useState([1,0,0]);
  let [modal, setModal] = useState(0); //default 0 = false

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React blog</h4>
      </div>

      {/* <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        titleChange(copy);
      }} //change the first post title to '여자코트추천'
        >Change</button>

      <button onClick={()=>{
        let copy = [...title];
        titleChange(copy.sort());
      }}>ASC order</button>

      <div className="list">
        <h4>{title[0]} <span onClick={()=>{clickChange(click+1)}}>👍</span>{click}</h4>
        <p>Post: Feb.17</p>
      </div>
      <div className="list">
        <h4>{title[1]} <span onClick={()=>{clickChange(click+1)}}>👍</span>{click}</h4>
        <p>Post: Feb.17</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(modal += 1);}}>{title[2]} <span onClick={()=>{clickChange(click+1)}}>👍</span>{click}</h4>
        <p>Post: Feb.17</p>
        <p className='font-grey'>click title: enable modal</p>
      </div> */}

      {
        title.map(function(data, i){
          return ( 
            <div className="list" key={i}>
            <h4>
              {data}
               <span onClick={()=>{
                  let copy=[...click];
                  copy[i] = copy[i] +1;
                  clickChange(copy)
                }}>👍</span>{click[i]}
              </h4>
            <p>Post: Feb.17</p>
            <p>i: {i}</p>
          </div>
          )
        })
      }

      {
        // use ternary operator (if statement)
        modal % 2 == 1 ? <Modal/> : null
      }


    </div>
  )
}

// make a component
// let Modal = () => {}
function Modal(){
  return(
  <div className="modal">
    <h4>Title</h4>
    <p>Date</p>
    <p>Detail:</p>
  </div>
  )
}


export default App;
