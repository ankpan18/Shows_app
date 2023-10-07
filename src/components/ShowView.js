import {React,useRef} from 'react';
import {Button} from 'reactstrap';
import {useNavigate} from "react-router-dom";
// import Form from "./Form";

export default function ShowView(props){
    // const [showname,setShowname]=useState("");
    const navigate = useNavigate();
  
    const changePage = () => {
        navigate('/form');     
    }
    const nodeRef = useRef();
    const isObjectEmpty = (objectName) => {
        return Object.keys(objectName).length === 0
      }

//   console.log(props.show)
    
    return (
        (isObjectEmpty(props.show))?
        <div className="ShowView" ref={nodeRef}></div>
        :
        <div className="ShowView" ref={nodeRef}>
            
            
            <img src={props.show["show"]["image"]["original"]} alt="show-img"></img>
            
            
            <div id="title-summary" >
                <h1>{props.show.show.name}</h1>
                <div id='summary' dangerouslySetInnerHTML={{__html: props.show["show"]['summary']}} ></div>
                
                <Button color="primary" onClick={changePage}>Booking</Button>
            
            </div>
        </div>

    )
}