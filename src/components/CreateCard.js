import {React,useRef,useEffect} from 'react';
export default function CreateCard (props) {
  const nodeRef = useRef();
  

  useEffect(() => {
    // Update the document title using the browser API
    var card=nodeRef.current;
    
    if(card!==undefined && props.onfocus) card.click();
  },[props.onfocus]);
  
      
      
      return (

          <div ref={nodeRef} onClick={()=>props.childtoparent(props.card)} style={{height:"100%"}}>
          <div className='card1'>
            <img
              alt="Sample"
              src={(props.card.show.image!=null)?props.card.show.image.medium:" "}
            />
            <div className='Content'>
              <h5>
                {props.card.show.name}
              </h5>
              <h6>
                Genre: {props.card.show.genres.join(",")}
              </h6>
              <h6>
                rating: {props.card.show.rating["average"]}
              </h6>
              
            </div>
          </div>

          </div>
      )
    
}