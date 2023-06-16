import React from 'react'
import Image from 'next/image'
import { Typography, Button, styled } from '@mui/material'
import wpImg from '../images/p2-img.png'
// import bgStyle from '../images/Vector.png'

// const HomeContent = styled(Box)`
//   background-image: {fbg.src};
//   color:white;
//   text-align: center;
//   margin: auto;
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// `

const ReadMoreB = styled(Button)`
  background: linear-gradient(95.32deg, #3f8b4b 45.74%, #ecf4f4 179.28%);
  color: white;
  font-style: normal;
  font-size: 18px;
`

const WelcomePage = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(97.17deg, #F6EDDF 40.29%, #ECF4F4 199.87%)',
          backgroundImage: '{bgStyle.src}',
          paddingBottom: '10%',
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          style={{
            fontFamily: 'Cinzel',
            paddingTop: '5%',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Cinzel',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '58px',
            lineHeight: '129.5%',
            color: '#525252;',
          }}
        >
          “Welcome to Our Islamic Centre”
        </Typography>
        <Typography
          variant="p"
          component="p"
          style={{
            fontFamily: 'Lato',
            paddingTop: '2%',
            paddingLeft: '18%',
            paddingRight: '18%',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Lato',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '32px',
            lineHeight: '130%',
            textAlign: 'center',
            color: '#525252;',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </Typography>

        <ReadMoreB
          variant="contained"
          style={{
            display: 'block',
            margin: 'auto',
            marginTop: '3%',
          }}
        >
          Read More
        </ReadMoreB>
        <Image
          src={wpImg.src}
          height={424}
          width={756}
          alt="Your Image"
          style={{
            display: 'block',
            margin: 'auto',
            marginTop: '3%',
          }}
        />
      </div>
    </div>
  )
}

export default WelcomePage
