import React, { useState } from 'react'
import { Link, NavLink, useLocation, useRouteMatch } from 'react-router-dom';

import { ArrowRight, ArrowUp, ArrowDown } from '../Icons/Arrows'
import Logo from '../Logo/Logo'
import Symbol from '../Logo/Symbol'

function MenuTitleItem({title}) {
  return (
    <div className="menuTitleItem pb-2 mb-1 pt-4 px-8 border-b border-gray-300">
      <h5 className="text-xs font-semibold uppercase text-black opacity-50 tracking-tight">{title}</h5>
    </div>
  )
}

function UserInformationBox() {
  return (
    <div className="flex-shrink-0 flex border-t border-gray-300 dark:border-gray-400 dark:border-opacity-5 p-4">
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=Pw45RlF0AZ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-brandColor">
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
  notifications = 0,
  icon = false,
  exact = false
}) {

  const HasSubItems = children !== false
  const [subItemsVisible, setSubItemsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const match = useRouteMatch({
    path: linkTo,
    strict: true,
    sensitive: true,
    exact:true
  });

  return (
    <div className="menuItemContainer">
      <div 
        className={`
          hover:bg-black
          dark:hover:bg-gray-700
          hover:bg-opacity-5
          group
          cursor-pointer
          flex
          flex-row
          items-center
          ${match && 'bg-brandColor hover:bg-blue-600 hover:bg-opacity-100 group-hover:bg-blue-600'}
        `}>
        <NavLink
          onClick={() => children ? setSubItemsVisible(!subItemsVisible) : console.log("Link")}
          to={linkTo}
          exact={exact}
          className={`
            px-8
            py-3 
            w-full
            font-semibold
            text-sm
            tracking-tight
            dark:text-gray-300
            group-hover:text-brandColor
            items-center
            flex
            ${match && 'text-white group-hover:text-white group-hover:bg-blue-600'}
            ${!match && 'text-gray-900'}
          `}>
          {icon &&
            <div className={`menuItemIcon inline-block w-5 mr-2 group-hover:text-brandColor ${match && 'group-hover:text-white'}`}>
              {icon}
            </div>
          }
          {label}
        </NavLink>
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
        <div className={`subItemsContainer ${icon !== false && 'pl-7'}`}>
          {children}
        </div>
      }
    </div>
  )
}

function SubMenuItem({
  label,
  linkTo = false
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
        text-sm
        flex
        flex-row
        items-center
      ">
      <a
        href="#"
        className={`
          px-8
          py-3
          block
          w-full
          font-normal
          tracking-tight
          text-gray-500
          dark:text-gray-400
          group-hover:text-brandColor
          transition-all
        `}>
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
        dark:bg-gray-800
        dark:bg-opacity-5
        border-r
        border-gray-300
        flex
        flex-col
      ">
      <div className="px-8 pt-6 pb-8 border-b border-gray-300 mb-4">
        <div className="flex items-center">
          <Symbol />
          <Logo />
        </div>
      </div>
      <div className="flex-1 flex flex-col space-y-3">
        <MenuItem
          label="Insights"
          linkTo="/"
          exact
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
        <MenuItem
          label="Orders"
          linkTo="/orders"
          notifications={3}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>            
          }
        />
        <MenuItem 
          label="RMA"
          linkTo="/rma"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>            
          }
        />
        <MenuItem 
          label="Reviews"
          linkTo="/reviews"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          }
        />

        <MenuTitleItem title="Inventory" />

        <MenuItem 
          label="Products" 
          linkTo="/products"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>            
          }
        />
        <MenuItem 
          label="Articles" 
          linkTo="/articles"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>            
          }
        />
        <MenuItem 
          label="Vendors" 
          linkTo="/vendors"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>            
          }
        />
        <MenuItem 
          label="Campaigns"
          linkTo="/campaigns"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>            
          }
        />

        <MenuTitleItem title="Administration" />

        <MenuItem 
          label="Settings"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>            
          }
        >
          <SubMenuItem label="Categories" />
          <SubMenuItem label="Shipment" />
          <SubMenuItem label="Property Collections" />
          <SubMenuItem label="Currencies" />
          <SubMenuItem label="API Keys" />
        </MenuItem>
        <MenuItem 
          label="Logs"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>            
          }
        />

      </div>
      <UserInformationBox />
    </div>
  )
}

export default Sidebar