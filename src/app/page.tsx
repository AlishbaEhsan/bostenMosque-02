'use client'
// import Image from 'next/image'
// import styles from './page.module.css'
import React from 'react'
import Navbar from './components/NavBar'
import HomePage from './components/HomePage'
import WelcomePage from './components/WelcomePage'
import PrayersTimePage from './components/PrayersTimePage'
import PillarsPage from './components/PillarsPage'
import ServicesPage from './components/ServicesPage'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <WelcomePage />
      <PrayersTimePage />
      <PillarsPage />
      <ServicesPage />
    </>
  )
}
