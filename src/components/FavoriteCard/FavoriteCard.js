import { useEffect, useState } from "react";

function FavoriteCard(props){
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        setCardData(props.data);
    }, [props.data])

    function removeFromFavorites(event){
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
            <button className="red" onClick={removeFromFavorites}>Remove</button>
        </div>
    )
}

export default FavoriteCard;