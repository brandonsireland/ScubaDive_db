import React from 'react';

const pageTitleCard = (props) => {
    return(
    <div className="PageTitleCard">
        {props.title ? <span className="PageTitleCard__heading">{props.title}</span> : <span className="PageTitleCard__heading">Scuba DB</span> }
        {props.count ? <span className="PageTitleCard__subheading">- We have <b>{props.count}</b> dive sites in our DataBase! Check them out!</span> :<span className="PageTitleCard__subheading">Discover dive sites in your area!</span> }
    </div>
    );
}

export default pageTitleCard;