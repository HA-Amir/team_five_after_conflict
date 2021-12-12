import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <img src={props.src2} className="profile" />
                    <h3>{props.user}</h3>
                    <figure
                        className="cards__item__pic-wrap"
                        data-category={props.label + "  DT"}
                    >
                        <img
                            className="cards__item__img"
                            alt="game Image"
                            src={props.src}
                        />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
