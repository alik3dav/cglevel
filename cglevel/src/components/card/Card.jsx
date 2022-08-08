import React from 'react'

import {texturesData} from "../../../src/data/textures"

import './card.css'

export const Card = () => {
  return (
    <>
          {texturesData.map((data, key) => {
          return (
            <div className="card" key={key}>
             <div className="card-image"><img src="https://mediapool.bmwgroup.com/cache/P9/201603/P90211822/P90211822--black-badge-a-dark-edgy-lifestyle-statement-from-rolls-royce-motor-cars-600px.jpg" alt=""/></div>
             <div className="card-footer">
              <div className="card-title">{data.title}</div>
              <div className="card-subtitle">{data.autor}</div>
              <div className="card-information">
                <div className="left"></div>
                <div className="right"></div>
              </div>
             </div>
            </div>
          );
        })}
    </>
  )
}
