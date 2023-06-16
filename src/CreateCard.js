import {React,useRef,useEffect} from 'react';
// import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
export default function CreateCard (props) {
  const nodeRef = useRef();
  // console.log(props)

  useEffect(() => {
    // Update the document title using the browser API
    var card=nodeRef.current;
    // console.log(card);
    // // console.log(props.card.show.image);
    // if(props.card.show.image!=null)
    //   card.style.backgroundImage=`url('${props.card.show.image.medium}')`;
    
    if(card!==undefined && props.onfocus) card.click();
  },[props.onfocus]);
  
      
      
      return (
          // <div className="Card" ref={nodeRef} onClick={()=>props.childtoparent(props.card)}>
          //   <p>{props.card.show.name}</p>
          //   <div class="rating">rating:{props.card.show.rating["average"]}</div>
          // </div>

          <div ref={nodeRef} onClick={()=>props.childtoparent(props.card)} style={{height:"100%"}}>
            
          {/* <Card >
            <img
              alt="Sample"
              src={props.card.show.image.medium}
            />
            <CardBody>
              <CardTitle tag="h5">
                {props.card.show.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Genre: {props.card.show.genres.join(",")}
              </CardSubtitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                rating: {props.card.show.rating["average"]}
              </CardSubtitle>
              
            </CardBody>
          </Card> */}
          <div className='card1'>
            <img
              alt="Sample"
              src={(props.card.show.image!=null)?props.card.show.image.medium:{}}
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