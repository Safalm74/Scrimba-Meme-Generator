import React from "react";
import { IGradientButtonProps } from "../interfaces/GradientButton";

export default function GradientButton(props: IGradientButtonProps) {
    return (
        <button
            className="gradient-button"
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}
