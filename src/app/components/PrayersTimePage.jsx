import React from 'react'
import Image from 'next/image'
// import { Typography, Button, styled } from '@mui/material'
import { Typography } from '@mui/material'
import fImg from '../images/f.png'
import zImg from '../images/z.png'
import aImg from '../images/a.png'
import mImg from '../images/m.png'
import iImg from '../images/i.png'

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
            fontSize: '58px',
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
            fontSize: '32px',
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
            paddingTop: '4%',
          }}
        >
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              height: '120px',
              width: '500px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '0.5%',
            }}
          >
            <Image
              src={fImg.src}
              height={70}
              width={80}
              alt="Fajar Image"
              style={{
                position: 'absolute',
                display: 'block',
                margin: 'auto',
                marginLeft: '6%',
                marginTop: '1%',
              }}
            />
            <div style={{ paddingLeft: '20%' }}>
              <Typography style={{ fontSize: '36px' }}>FAJAR</Typography>
              <Typography style={{ fontSize: '32px' }}>4:43 AM</Typography>
            </div>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              height: '120px',
              width: '500px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              marginTop: '2%',
              paddingTop: '0.5%',
            }}
          >
            <Image
              src={zImg.src}
              height={70}
              width={80}
              alt="Zuhur Image"
              style={{
                position: 'absolute',
                display: 'block',
                margin: 'auto',
                marginLeft: '6%',
                marginTop: '1%',
              }}
            />
            <div style={{ paddingLeft: '20%' }}>
              <Typography style={{ fontSize: '36px' }}>ZUHUR</Typography>
              <Typography style={{ fontSize: '32px' }}>12:10 PM</Typography>
            </div>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              height: '120px',
              width: '500px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '0.5%',
              marginTop: '2%',
            }}
          >
            <Image
              src={aImg.src}
              height={70}
              width={80}
              alt="Asr Image"
              style={{
                position: 'absolute',
                display: 'block',
                margin: 'auto',
                marginLeft: '6%',
                marginTop: '1%',
              }}
            />
            <div style={{ paddingLeft: '20%' }}>
              <Typography style={{ fontSize: '36px' }}>ASR</Typography>
              <Typography style={{ fontSize: '32px' }}>4:31 PM</Typography>
            </div>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              height: '120px',
              width: '500px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '0.5%',
              marginTop: '2%',
            }}
          >
            <Image
              src={mImg.src}
              height={70}
              width={80}
              alt="Magrib Image"
              style={{
                position: 'absolute',
                display: 'block',
                margin: 'auto',
                marginLeft: '6%',
                marginTop: '1%',
              }}
            />
            <div style={{ paddingLeft: '20%' }}>
              <Typography style={{ fontSize: '36px' }}>MAGHRIB</Typography>
              <Typography style={{ fontSize: '32px' }}>6:15 PM</Typography>
            </div>
          </div>
          <div
            style={{
              color: '#525252',
              textAlign: 'center',
              flexDirection: 'row',
              margin: 'auto',
              height: '120px',
              width: '500px',
              background:
                'linear-gradient(102.37deg, #EFEFEF 41.01%, rgba(253, 250, 250, 0.65) 129.4%)',
              paddingTop: '1%',
              marginBottom: '10%',
              marginTop: '2%',
              paddingTop: '0.5%',
            }}
          >
            <Image
              src={iImg.src}
              height={70}
              width={80}
              alt="Isha Image"
              style={{
                position: 'absolute',
                display: 'block',
                margin: 'auto',
                marginLeft: '6%',
                marginTop: '1%',
              }}
            />
            <div style={{ paddingLeft: '20%' }}>
              <Typography style={{ fontSize: '36px' }}>ISHA</Typography>
              <Typography style={{ fontSize: '32px' }}>7:36 PM</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrayersTimePage
