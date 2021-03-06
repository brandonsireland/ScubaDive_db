import React from 'react';

const pageTitleCard = (props) => {
    return(
    <div className="PageTitleCard">
        {props.title ? <span className="PageTitleCard__heading">{props.title}</span> : null }
        {props.count ? <span className="PageTitleCard__subheading">- We have <b>{props.count}</b> dive sites in our DataBase! Check them out!</span> : null }
    </div>
    );
}

export default pageTitleCard;