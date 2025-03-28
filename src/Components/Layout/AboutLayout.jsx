import React, { useEffect, useMemo, useState } from 'react'
import Banner from '../Banner/Banner';
import bannerImage from "@/assets/Hero/banner1.jpg";
import { Outlet, useLocation } from 'react-router-dom';


const AboutLayout = () => {
    const { pathname } = useLocation();

    const bannerTextMap = {
        "/about/summary" : "About Us",
        "/about/state_of_art" : "State of Art and Rationale"
    }
    
    const bannerText = useMemo(() => bannerTextMap[pathname] , [pathname])

  return (
    <div>
        <Banner text={bannerText} bannerImage={bannerImage} />
        <Outlet />
    </div>
  )
}

export default AboutLayout;