import React from "react";
import Banner from "../../Components/Banner/Banner";
import BannerImage from "@/assets/Hero/banner3.jpg";
import style from "./Partners.module.css"

const Partners = () => {
  const content = {
    first:
      "The partners have been chosen to form a multidisciplinary team with a strong record on cocoa, agroforestry and climate adaptation in Ghana. The project is led by the University of Ghana (UG) with Cocoa Research Institute of Ghana (CRIG) as the second southern partner. University of Copenhagen (UCPH) and University of Roskilde (RUC) are the northern (Danish) partners, and the World Agroforestry Centre (ICRAF) and the International Institute of Tropical Agriculture (IITA) are participating international institutions. As the premier and leading academic and research institute in Ghana, UG is managing numerous large-scale research projects involving north south collaboration, and the project will be managed by Dr. Kwadwo Owusu from Dept. of Geography and Resource Development, climatologist with managerial experience from several projects CRIG is the research leader and the Government of Ghana mandated institution for cocoa research,",

    second:
      "and will include a team of researchers with background in pest and disease control in cocoa farms, provide historical cocoa yield data and play the lead role in the capacity development. The UCPH will be the main northern partner with experience in project management. The team will consist of a resource economist, entomologist, agroforester and a biometrician. The representative from RUC has a human/social geography background. ICRAF and IITA are key participating international institutions due to their strong track record in cocoa and climate change research, and because of their on-going networks of on-farm studies in cocoa producing areas of Ghana. The ICRAF team will consist of an economist, a geographer and an ecophysiologist joined by a cocoa agroforester from IITA. The expected contribution of each scientist is shown in Table 4.",
  };

  return (
    <div className="">
      <Banner text="Project Partners" bannerImage={BannerImage} />
      <div className="wrapper my-10 mb-20 md:my-20">
        <div className="sm:mx-8 md:flex md:gap-12 lg:gap-20 leading-8  lg:leading-8.5 text-justify">
          <p className={`${style.left} inline md:block`}>{content.first}</p>
          <p className={`${style.right} inline md:block`}>{` `}{content.second}</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
 