import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

import UserImg from '../../../shared/assets/images/user-img.png'

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-image">
        <img src={UserImg} />
      </div>
      <div className="sidebar-menu">
        <Link to="/dashboard" className="menu-wrapper">
          <div className="icon">
            <Icon type="dashboard" />
          </div>
          <span>Dashboard</span>
        </Link>
        <Link to="/categories" className="menu-wrapper">
          <div className="icon">
            <Icon type="apartment" />
          </div>
          <span>Categories</span>
        </Link>
        <Link to="/expenses" className="menu-wrapper">
          <div className="icon">
            <Icon type="shopping-cart" />
          </div>
          <span>Expenses</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar