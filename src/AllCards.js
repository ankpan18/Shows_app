import { useEffect, useState } from 'react'
import React from 'react'
import CreateCard from './CreateCard'



export default function AllCards(props){
// export default class AllCards extends React.Component{
//     state = {
//         cards: []
//     }
    const [cards,setCards]=useState([]);
useEffect(() => {

  
        // this.setState({cards:['1','2','3','4']})
        // fetch("https://api.tvmaze.com/search/shows?q=mission")
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(resp => resp.json())
        .then(cards => {
          setCards(cards);
          console.log("api called!");
          console.log(cards);
        })



  },[] );

    
      const renderCards=()=>{
        return cards.map((card,idx) => {
            // console.log(card);
            <p key={card}></p>
            if(idx===0)
              return <CreateCard onfocus={true} childtoparent={props.childtoparent} key={card.show.id} card={card}/>
            return <CreateCard childtoparent={props.childtoparent} key={card.show.id} card={card}/>

         
        })
      }
    

    


        return (
          <div className="main-container">
            {renderCards()}
          </div>
        )
  }
