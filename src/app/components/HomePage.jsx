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
            variant="h1"
            component="h1"
            style={{
              position: 'absolute',
              width: '100%',
              textAlign: 'center',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontFamily: 'Cinzel',
              letterSpacing: '0.07em',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '42px',
              lineHeight: '129.5%',
            }}
          >
            “CALL UPON ME, I WILL RESPOND TO YOU”
          </Typography>
        </div>
        <div>
          <Typography
            variant="p"
            component="p"
            style={{
              paddingTop: '6%',
              position: 'absolute',
              width: '100%',
              top: '50%',
              left: '50%',
              paddingLeft: '18%',
              paddingRight: '18%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontFamily: 'Lato',
              letterSpacing: '0.07em',
              fontStyle: 'normal',
              fontSize: '24px',
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
