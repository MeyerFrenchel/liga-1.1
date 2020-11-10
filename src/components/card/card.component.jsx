import React from 'react'
import './card.styles.css';

const goalsString = 'goluri';
const goalString = 'gol';

export const Card = props => (
    <div className="card-container"> 
     <img className="flag" src={`../img/player-${props.player.id}.jpg`} alt="player"/>
     <h2 className="player-name">{props.player.fullName}</h2> 
     <p className="players-info"><span>{props.player.age} ani</span> <br/>
   # <span className="spanz">{props.player.jersey}</span> <br/>
   {props.player.position}   <br/>
   {props.player.nationality} <br/>
   <span className="spanz">{props.player.goals}</span> {function goluri() {
      if(props.player.goals!=1) {
         return goalsString;
         } else{ return goalString;}
       }()
      } 
</p>
    
    </div>
)