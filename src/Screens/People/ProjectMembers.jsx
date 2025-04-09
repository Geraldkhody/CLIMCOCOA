import React from 'react'
import Banner from '../../Components/Banner/Banner';
import BannerImage from "@/assets/Hero/banner4.jpg"
import Members from '../../Components/Members/Members';

const ProjectMembers = () => {
  return (
    <div>
      <Banner bannerImage={BannerImage} text="Project Team" />
      <div className='wrapper py-10 pb-20'>
        <Members />
      </div>
    </div>
  )
}

export default ProjectMembers;