import React from "react";
import { IHeaderProps } from "../interfaces/header";

export default function Header(headerProps: IHeaderProps) {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src={headerProps.headerLogoUrl} alt="logo"  className="logo-image"/>
        <h1 className="logo-text">{headerProps.headerTitle}</h1>
      </div>
      <p className="header-description">{headerProps.headerDescription}</p>
    </header>
  );
}
