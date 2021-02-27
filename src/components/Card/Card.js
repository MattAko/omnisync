import { useEffect, useState } from "react";

function Card(props){
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        setCardData(props.data);
    }, [props.data])

    function addToFavorites(event){
        props.onClick(cardData, props.id);
    }

    return(
        <div className='Card'>
            <h1>{cardData.solicitation_title}</h1>
            <br></br>
            <label>Agency: </label><a href={cardData.solicitation_agency_url}>{cardData.agency}</a>
            <br/>
            <p>Branch: {cardData.branch}</p>
            <p>Release Date: {cardData.release_date}</p>
            <button className="green" onClick={addToFavorites}>Favorite</button>
        </div>
    )
}

export default Card;