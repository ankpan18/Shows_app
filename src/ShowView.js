import {React,useRef,useEffect} from 'react';
import {Button,Col,Row,Container} from 'reactstrap';
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

    //   useEffect(() => {
    //     // Update the document title using the browser API
    //     if(!isObjectEmpty(props.show))
    //     {

        
        
    //     var el=nodeRef.current;
    //     console.log(el);
    //     // // console.log(props.card.show.image);
    //     if(props.card.show.image!=null)
    //       el.style.backgroundImage=`url('${props.card.show.image.medium}')`;
        
    //     // if(props.card.show.image!=null)
    //     //   card.style.backgroundImage=`url('${props.card.show.image.medium}')`;
    //     }
        
    //   },[props]);
    function setimage(){
        var el=nodeRef.current;
        console.log(el);
        console.log(props);
        if(props.show.show.image!=null)
            el.style.backgroundImage=`url('${props.show.show.image.original}')`;
    }
      

//   console.log(props.show)
    
    return (
        (isObjectEmpty(props.show))?
        <div className="ShowView" ref={nodeRef}></div>
        :
        <div className="ShowView" ref={nodeRef}>
            
            <img src={props.show.show.image.original} alt="show-img"></img>
            
            
            <div id="title-summary" >
                <h1>{props.show.show.name}</h1>
                <div id='summary' dangerouslySetInnerHTML={{__html: props.show.show['summary']}} ></div>
                
                <Button color="primary" onClick={changePage}>Booking</Button>
            
            </div>
            
            {/* {setimage()} */}
            
        </div>

    )
}