import React from "react";
import { ILabledInputProps } from "../interfaces/LabledInput";

export default function LabeledInput(props: ILabledInputProps) {

    return (
        <div className="labeled-input">
            <label className="labeled-input__label">
                {props.label}
            </label>
            <input
                className="labeled-input__input"
                placeholder={props.value}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
            />
        </div>)
}

