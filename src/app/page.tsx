'use client'
// import Image from 'next/image'
// import styles from './page.module.css'
import React from 'react'
import FirstComponent from './components/First'
import Navbar from './components/NavBar'

export default function Home() {
  return (
    <>
      <FirstComponent />
      <Navbar />
    </>
  )
}
