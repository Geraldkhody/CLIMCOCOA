import React, { useMemo } from 'react'
import Banner from '../Banner/Banner';
import { Outlet, useLocation } from 'react-router-dom';
import BannerImage from "@/assets/Research Banner.jpg";


const ProjectLayout = () => {
    const { pathname } = useLocation();

    const bannerTextMap = {
        "/project/research" : "Research",
        "/project/field-works" : "Field Works"
    }
    
    const bannerText = useMemo(() => bannerTextMap[pathname] , [pathname])

  return (
    <div>
        <Banner text={bannerText} bannerImage={BannerImage} />
        <div className='wrapper'>
            <Outlet />
        </div>
    </div>
  )
}

export default ProjectLayout;