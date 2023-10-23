import AboutUs from '@/Sections/Home/AboutUs/AboutUs'
import Choose from '@/Sections/Home/Choose/Choose'
import HappyClients from '@/Sections/Home/HappyClients/HappyClients'
import HomeHero from '@/Sections/Home/Home-Hero/HomeHero'
import OurProjects from '@/Sections/Home/OurProjects/OurProjects'
import Form from '@/components/Form/Form'
import IconBox from '@/components/IconBox/IconBox'
import Header from '@/layout/Header/Header'
import Box from '@mui/material/Box'
import Image from 'next/image'

export default function Home() {
  return (
   <Box>
    <Header/>
    {/* <Form/> */}
    {/* <HomeHero/>
    <Choose/>
    <AboutUs/> */}
    {/* <OurProjects/> */}
     {/* <HappyClients/> */}
     <IconBox/>
   </Box>
  )
}
