import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { ArrowRight, ArrowUp, ArrowDown } from '../Icons/Arrows'
import Logo from '../Logo/Logo'

function UserInformationBox() {
  return (
    <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-400 dark:border-opacity-5 p-4">
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=Pw45RlF0AZ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600">
              Tom Cook
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}

function MenuItem({
  label,
  linkTo = false,
  children = false,
  notifications = 0
}) {

  const HasSubItems = children !== false
  const [subItemsVisible, setSubItemsVisible] = useState(false)

  return (
    <div className="menuItemContainer">
      <div 
        className="
          hover:bg-black
          dark:hover:bg-gray-700
          hover:bg-opacity-5
          group
          cursor-pointer
          flex
          flex-row
          items-center
        ">
        <Link
          onClick={() => children ? setSubItemsVisible(!subItemsVisible) : console.log("Link")}
          to={linkTo}
          className="
            px-8
            py-3 
            block
            w-full
            font-semibold
            text-sm
            tracking-tight
            text-gray-800
            dark:text-gray-300
            group-hover:text-blue-600
            transition-all
          ">
          {label}
        </Link>
        {notifications > 0 &&
          <div className={`notificationsContainer ${!children ? 'mr-5' : 'mr-8'}`}>
            <div className="w-6 h-6 text-sm rounded-full text-white font-bold flex justify-center items-center bg-red-500 dark:bg-red-700">
              <p>{+notifications}</p>
            </div>
          </div>
        }
        {children &&
          <div className="arrowContainer mr-6">
            {!subItemsVisible && <ArrowDown /> }
            {subItemsVisible && <ArrowUp /> }
          </div>
        }
      </div>
      {children && subItemsVisible &&
        <div className="subItemsContainer">
          {children}
        </div>
      }
    </div>
  )
}

function SubMenuItem({
  label,
  linkTo = false,
}) {
  return (
    <div 
      className="
        menuSubItemContainer 
        hover:bg-black
        dark:hover:bg-gray-700
        hover:bg-opacity-5
        group
        cursor-pointer
        flex
        flex-row
        items-center
      ">
      <a
        href="#"
        className="
          px-8
          py-3 
          block
          w-full
          font-normal
          tracking-tight
          text-gray-500
          dark:text-gray-400
          group-hover:text-blue-600
          transition-all
        ">
        {label}
      </a>
    </div>
  )
}

function Sidebar() {
  return (
    <div
      className="
        w-full 
        h-screen 
        pt-4
        text-left
        md:w-64 
        bg-white
        dark:bg-gray-800
        dark:bg-opacity-5
        border-r
        border-gray-100
        flex
        flex-col
      ">
      <div className="px-8 pt-6 pb-8">
        <Logo />
      </div>
      <div className="flex-1 flex flex-col space-y-3">
        <MenuItem label="Products" linkTo="/products" />
        <MenuItem label="Articles" linkTo="/articles" />
        <MenuItem label="Vendors" linkTo="/vendors" />

      </div>
      <UserInformationBox />
    </div>
  )
}

export default Sidebar