import React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import first from '../images/1.png'
import second from '../images/2.png'
import third from '../images/3.png'
import forth from '../images/4.png'
import fifth from '../images/5.png'

const PillarsPage = () => {
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
          variant="h5"
          component="h5"
          style={{
            fontFamily: 'Cinzel',
            paddingTop: '5%',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Cinzel',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '30px',
            color: 'rgba(35, 134, 82, 1)',
          }}
        >
          Pillars of Islam
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          style={{
            fontFamily: 'Cinzel',
            paddingTop: '2%',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Cinzel',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '38px',
            color: 'rgba(82, 82, 82, 1)',
          }}
        >
          ISLAMIC FIVE PILLARS
        </Typography>
        <Typography
          variant="p"
          component="p"
          style={{
            fontFamily: 'Lato',
            paddingTop: '2%',
            paddingLeft: '8%',
            paddingRight: '8%',
            textAlign: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Lato',
            letterSpacing: '0.08em',
            wordSpacing: '0.12em',
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: '130%',
            textAlign: 'center',
            color: 'rgba(82, 82, 82, 1)',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Typography>

        <div
          style={{
            paddingTop: '8%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <Image src={first.src} height={380} width={300} alt="Your Image" />

          <Image
            src={second.src}
            height={380}
            width={300}
            alt="Your Image"
            style={{
              float: 'left',
              marginLeft: '6%',
            }}
          />

          <Image
            src={third.src}
            height={380}
            width={300}
            alt="Your Image"
            style={{
              marginLeft: '6%',
              marginTop: 'auto',
            }}
          />
        </div>
        <div
          style={{
            paddingTop: '2%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '5%',
          }}
        >
          <Image src={forth.src} height={380} width={300} alt="Your Image" />

          <Image
            src={fifth.src}
            height={380}
            width={300}
            alt="Your Image"
            style={{
              float: 'left',
              marginLeft: '6%',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PillarsPage
