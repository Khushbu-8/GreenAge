import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout
import { MainLayout } from './components/Layout'

// Pages
import Home from './Pages/Home'
import AboutUsPage from './Pages/AboutUs'
import Products from './Pages/Products'
import WhatWeDo from './Pages/WhatWeDo'
import GalleryPage from './Pages/Gallery'
import News from './Pages/News'
import FAQs from './Pages/FAQs'
import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="products" element={<Products />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="news" element={<News />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
