import React from 'react'
import Image from 'next/image'
// import { Typography, Button, styled } from '@mui/material'
import { Typography } from '@mui/material'
import mosqueImg from '../images/mosque-icon.png'
import quranImg from '../images/quran-icon.png'
import moonImg from '../images/moonStar-icon.png'
import islamicImg from '../images/islamic_awareness.png'
import charityImg from '../images/charity-icon.png'

const ServicesPage = () => {
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
          variant="h3"
          component="h3"
          style={{
            paddingTop: '5%',
            paddingLeft: '6%',
            textAlign: 'left',
            color: 'white',
            fontFamily: 'Cinzel',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '40px',
            lineHeight: '129.5%',
            color: '#EFEFEF',
          }}
        >
          SERVICES WE OFFER
        </Typography>
        <Typography
          variant="p"
          component="p"
          style={{
            fontFamily: 'Lato',
            paddingTop: '3%',
            paddingLeft: '6%',
            paddingRight: '10%',
            textAlign: 'left',
            color: 'white',
            letterSpacing: '0.07em',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '24px',
            lineHeight: '130%',
            color: '#EFEFEF',
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
            fontFamily: 'Cinzel',
            paddingLeft: '10%',
            paddingRight: '10%',
            display: 'flex',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginTop: '5%',
              color: '#EFEFEF',
            }}
          >
            <Image
              src={mosqueImg.src}
              height={80}
              width={80}
              alt="Mosque Image"
            />

            <Typography
              style={{
                fontFamily: 'Cinzel',
                fontSize: '20px',
                marginTop: '5%',
                marginBottom: '5%',
                color: '#525252',
                letterSpacing: '0.1em',
                fontSize: '24px',
              }}
            >
              MOSQUE
              <br /> DEVELOPMENT
            </Typography>
            <Typography
              style={{
                letterSpacing: '0.07em',
                wordSpacing: '0.06em',
                fontSize: '14px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </Typography>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '5%',
              color: '#EFEFEF',
              paddingLeft: '10%',
            }}
          >
            <Image
              src={quranImg.src}
              height={80}
              width={80}
              alt="Quran Image"
            />

            <Typography
              style={{
                fontFamily: 'Cinzel',
                marginTop: '5%',
                marginBottom: '5%',
                color: '#525252',
                letterSpacing: '0.1em',
                fontSize: '24px',
              }}
            >
              QURAN <br />
              TEACHING
            </Typography>
            <Typography
              style={{
                letterSpacing: '0.07em',
                wordSpacing: '0.06em',
                fontSize: '14px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </Typography>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '5%',
              color: '#EFEFEF',
              paddingLeft: '10%',
            }}
          >
            <Image
              src={moonImg.src}
              height={80}
              width={80}
              alt="Moon-Star Image"
            />

            <Typography
              style={{
                fontFamily: 'Cinzel',
                fontSize: '20px',
                marginTop: '5%',
                marginBottom: '5%',
                color: '#525252',
                letterSpacing: '0.1em',
                fontSize: '24px',
              }}
            >
              ISLAMIC <br />
              CLASSES
            </Typography>
            <Typography
              style={{
                letterSpacing: '0.07em',
                wordSpacing: '0.06em',
                fontSize: '14px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </Typography>
          </div>
        </div>

        <div
          style={{
            paddingTop: '5%',
            fontFamily: 'Cinzel',
            paddingLeft: '20%',
            paddingRight: '20%',
            paddingBottom: '10%',
            display: 'flex',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginTop: '5%',
              color: '#EFEFEF',
              paddingLeft: '5%',
            }}
          >
            <Image
              src={islamicImg.src}
              height={80}
              width={80}
              alt="Mosque Image"
            />

            <Typography
              style={{
                fontFamily: 'Cinzel',
                fontSize: '20px',
                marginTop: '5%',
                marginBottom: '5%',
                color: '#525252',
                letterSpacing: '0.1em',
                fontSize: '24px',
              }}
            >
              ISAMIC
              <br /> AWARENESS
            </Typography>
            <Typography
              style={{
                letterSpacing: '0.07em',
                wordSpacing: '0.06em',
                fontSize: '14px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </Typography>
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '5%',
              color: '#EFEFEF',
              paddingLeft: '20%',
            }}
          >
            <Image
              src={charityImg.src}
              height={80}
              width={80}
              alt="Quran Image"
            />

            <Typography
              style={{
                fontFamily: 'Cinzel',
                fontSize: '20px',
                marginTop: '5%',
                marginBottom: '5%',
                color: '#525252',
                letterSpacing: '0.1em',
                fontSize: '24px',
              }}
            >
              CHARITY &<br />
              DONATION
            </Typography>
            <Typography
              style={{
                letterSpacing: '0.07em',
                wordSpacing: '0.06em',
                fontSize: '14px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
