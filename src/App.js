import {useState} from 'react';
import './App.css';

function App() {
  let [title,titleChange] = useState(['남자 코트 추천','플라스크 독학','대구 막창맛집']);
  let posts = '강남 우동 맛집';
  let [title2,titleChange2] = useState(0);
  let [click,clickChange] = useState([0,0,0]);
  let [modal, setModal] = useState(0); //default 0 = false
  let [userText,setUserText] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React blog</h4>
      </div>

      {
        title.map(function(data, i){
          return ( 
            <div className="list" key={i}>
            <h4 onClick={()=>{
              setModal(modal+1); //show
              titleChange2(title2 = i);
            }}>
              {data}
               <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy=[...click];
                  copy[i] = copy[i] +1;
                  clickChange(copy)
                }}>👍</span>{click[i]}
              </h4>
            <p>Post: Feb.17</p> 
            </div>
          )
        })
      }

      <input type="text" onChange={(e)=>{setUserText(userText=e.target.value);
        console.log({userText});
      }} /> 
      <button onClick={(e)=>{
          titleChange( title =>[...title, userText]);
          clickChange(click =[...click, 0]);
        }}>submit</button>
      {/* 숙제2: 글마다 삭제버튼+기능: 버튼을 만든다>해당 버튼의 글을 삭제/안보이게 한다.*/ }

      {
        modal % 2 == 1? <Modal title={title}></Modal>:null
      }

    </div>
    )


    function Modal(props){
      return(
      <div className="modal">
        <h4>{ props.title[title2]}</h4>
        <p>Date</p>
        <p>Detail:</p>
        <button onClick={()=>{
          let copy =[...props.title]
          copy[0] = "여자 코트 추천";
          titleChange(copy)
        }}>Edit</button>
      </div>
      )
    }

  }





export default App;
