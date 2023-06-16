import React from 'react'
// import Image from 'next/image'
import { Typography, styled } from '@mui/material'
import ffg from '../images/home-bg.png'

const BackgCover = styled('img')`
    background-image: {ffg.src};
    width:100%;
    height:100%;
    color:white;
    text-align: center;
    margin: auto;
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
`
const HomePage = () => {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 128, 0, 0.5)',
        }}
      >
        <BackgCover
          src={ffg.src}
          height={700}
          width={1500}
          alt="Your Image"
          style={{ opacity: '70%' }}
        />
        <div style={{ width: '100%' }}>
          <Typography
            variant="h2"
            component="h2"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontFamily: 'Cinzel',
              letterSpacing: '0.07em',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '48px',
              lineHeight: '129.5%',
            }}
          >
            “Call upon Me, I will respond to you”
          </Typography>
          <Typography
            variant="p"
            component="p"
            style={{
              paddingTop: '10%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontFamily: 'Lato',
              letterSpacing: '0.07em',
              fontStyle: 'normal',
              fontSize: '28px',
              lineHeight: '130%',
              textAlign: 'center',
            }}
          >
            The mosque is the place where we feel the presence of Allah, and
            where we find peace.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default HomePage
