import React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import fbg from '../images/home-bg.png'

// const HomeContent = styled(Box)`
//   background-image: {ffg.src};
//   color:white;
//   text-align: center;
//   margin: auto;
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// `
const HomePage = () => {
  return (
    // <div>
    //   <HomeContent>
    //     <div style={{ position: 'relative', width: '100%', height: '400px' }}>
    //       <div style={{ position: 'relative' }}>
    //         <Image src={ffg.src} alt="Your Image" height={500} width={500} />
    //       </div>
    //       <div style={{ position: 'relative' }}>
    //         <h2></h2>
    //         <Typography style={{ position: 'absolute', marginTop: 0 }}>
    //           The mosque is the place where we feel the presence of Allah, and
    //           where we find peace.
    //         </Typography>
    //       </div>
    //     </div>
    //   </HomeContent>
    // </div>

    <div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 128, 0, 0.5)',
        }}
      >
        <Image
          src={fbg.src}
          height={700}
          width={1500}
          alt="Your Image"
          style={{ opacity: '70%' }}
        />
        <Typography
          variant="h4"
          component="h4"
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
            fontSize: '40px',
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
            fontSize: '20px',
            lineHeight: '130%',
            textAlign: 'center',
          }}
        >
          The mosque is the place where we feel the presence of Allah, and where
          we find peace.
        </Typography>
      </div>
    </div>
  )
}

export default HomePage
