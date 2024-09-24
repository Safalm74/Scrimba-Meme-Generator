import React from "react";
import { IImageCardProps } from "../interfaces/imageCard";

export default function ImageCard(props: IImageCardProps) {
    return (
        <div className="image-card">
            <img
                className="image-card__image" 
                src={props.imageUrl} 
                alt={props.topText} />
            <p className="image-card__text--top">{props.topText}</p>
            <p className="image-card__text--bottom">{props.bottomText}</p>
        </div>
    );
}