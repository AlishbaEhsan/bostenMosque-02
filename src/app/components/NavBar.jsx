import { AppBar, Box, Toolbar, Typography, styled, Button } from '@mui/material'

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(97.17deg, #f6eddf 40.29%, #ecf4f4 199.87%);
`
const NavLeftWrap = styled(Box)`
  padding-left: 3%;
`
const NavLeft = styled(Box)`
  padding-right: 40%;
  color: #368a4d;
  padding-left: 3%;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.03em;
  font-family: Cinzel;
`
const NavRight = styled(Box)`
  display: flex;
  margin-left: auto;
  flex-direction: row;
  align-items: flex-start;
  gap: auto;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #484848;
  padding-right: 3%;
`
const HomeB = styled(Button)`
  background: #7a973b99;
  color: white;
`
const OtherB = styled(Button)`
  color: black;
`
const DonateB = styled(Button)`
  background: linear-gradient(95.32deg, #3f8b4b 45.74%, #ecf4f4 179.28%);
  color: white;
  font-style: normal;
`

const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <NavLeftWrap>
          <NavLeft>
            <Typography>SOUTH BOSTON VA MASJID AND ISLAMIC CENTER</Typography>
          </NavLeft>
        </NavLeftWrap>
        <NavRight>
          <HomeB variant="contained">Home</HomeB>
          <OtherB variant="text">Prayers Time</OtherB>
          <OtherB variant="text">About Us</OtherB>
          <OtherB variant="text">Services</OtherB>
          <OtherB variant="text">Contact Us</OtherB>
          <DonateB variant="contained">Donate Us</DonateB>
        </NavRight>
      </Toolbar>
    </StyledAppBar>
  )
}

export default NavBar
