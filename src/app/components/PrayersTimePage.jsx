import React from 'react'
// import Image from 'next/image'
// import { Typography, Button, styled } from '@mui/material'

import { Typography } from '@mui/material'
// import wpImg from '../images/p2-img.png'
// import bgStyle from '../images/Vector.png'

const PrayersTimePage = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(115.71deg, rgba(35, 134, 82, 0.7) 0.6%, rgba(122, 151, 59, 0.6) 140.67%)',
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          style={{
            paddingTop: '5%',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Cinzel',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '36px',
            lineHeight: '129.5%',
            color: '#EFEFEF',
          }}
        >
          PRAYERS TIME
        </Typography>
        <Typography
          variant="p"
          component="p"
          style={{
            fontFamily: 'Lato',
            paddingTop: '2%',
            paddingLeft: '10%',
            paddingRight: '10%',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '130%',
            color: '#EFEFEF',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </Typography>

        <div
          style={{
            fontFamily: 'Cinzel',
            display: 'flex',
            paddingLeft: '20%',
            flexDirection: 'column',
            flexWrap: 'wrap',
            paddingTop: '5%',
          }}
        >
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              height: '80px',
              width: '360px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '1%',
            }}
          >
            <Typography>FAJAR</Typography>
            <Typography>4:43 AM</Typography>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              marginTop: '2%',
              height: '80px',
              width: '360px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '1%',
            }}
          >
            <Typography>ZUHUR</Typography>
            <Typography>12:10 PM</Typography>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              marginTop: '2%',
              height: '80px',
              width: '360px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '1%',
            }}
          >
            <Typography>ASR</Typography>
            <Typography>4:31 PM</Typography>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              marginTop: '2%',
              height: '80px',
              width: '360px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '1%',
            }}
          >
            <Typography>MAGHRIB</Typography>
            <Typography>6:15 PM</Typography>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              marginTop: '2%',
              height: '80px',
              width: '360px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '1%',
              marginBottom: '10%',
            }}
          >
            <Typography>ISHA</Typography>
            <Typography>7:36 PM</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrayersTimePage
