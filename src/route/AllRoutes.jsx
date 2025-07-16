import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Blog, About, BlogSingle, Contact, ProductListing, ProductSingle, Services } from '../pages/index'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blogs/:blog' element={<BlogSingle/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<ProductListing/>} />
      <Route path='/product/:prod' element={<ProductSingle/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
  )
}
