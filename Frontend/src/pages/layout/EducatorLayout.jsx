import React from 'react'
import Educator from '../educator/Educator'
import { Outlet } from 'react-router-dom'

const EducatorLayout = () => {
  return (
    <>
      <Educator />
      <Outlet/>
    </>
  )
}

export default EducatorLayout