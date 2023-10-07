import { useEffect, useState } from 'react'
import React from 'react'
import CreateCard from './CreateCard'
import DefaultImage from '../assets/SampleImage.png';


export default function AllCards(props){

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

    function handle_no_image(data){

      if (data.show.image == null){
        data.show.image={"medium":DefaultImage,"original":DefaultImage};
      } 
      return data;
    }
    
      const renderCards=()=>{
        return cards.map((card,idx) => {
            // console.log(card);
            // <p key={card}></p>
            // handle no image url to set default image
            card=handle_no_image(card);
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
