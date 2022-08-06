import React, {Component} from 'react'

import {Nav} from "../nav/Nav"

import './header.css'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="logo">
            CGLEVEL.COM
        </div>
        <div className="nav-wrapper">
          <Nav/>
        </div>

      </div>
    )
  }
}
