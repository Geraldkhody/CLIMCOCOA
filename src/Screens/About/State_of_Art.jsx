import React from "react";
import sectionImage1 from "@/assets/cocoa/image1.jpg";
import sectionImage2 from "@/assets/cocoa/image2.jpg";
import sectionImage3 from "@/assets/cocoa/image4.jpg";

const State_of_Art = () => {
  return (
    <div className="wrapper md:pt-10 pb-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 lg:gap-27 mt-10 sm:mt-15 md:mt-20 px-5 sm:px-10">
        <div className="w-full md:max-w-[55%] lg:w-[50%] text-justify">
          <p className=" ">
            Ghana and neighboring Côte d’Ivoire produces around 60% of the world
            production of cocoa (Theobroma cacao L.), one of the world’s major
            commodities. In 2010 cocoa accounted for 8.2% of Ghana’s GDP and 30%
            of total export earnings, creating employment for about 6 million
            people and a livelihood for 700.000 cocoa farming families (GAIN,
            2012, Asante-Poku & Angelucci, 2013),thus representing an important
            pillar in both rural and urban poverty alleviation and development
            of the economy of Ghana at large. An increasing global demand for
            cocoa and a production gap in the global market suggest a further
            growth potential for cocoa and thus a continued significant role for
            farmers and businesses in Ghana. Climate models predict temperature
            increases from 1-2.5 °C for Ghana by 2050. Although precipitation
            patterns are more uncertain, it seems that future climates will be
            highly variable and more prone to drought and temperature extremes.
            According to Läderach et al (2013), areas suitable for cocoa
            cultivation in Ghana will decrease due to a temperature mediated
            increase in evapotranspiration not compensated by increasing
            rainfall, i.e. a decrease in water availability rather than by the
            direct effect of increasing air temperature. This will increase the
            risk of drought to which cocoa is very susceptible. In their study,
            Läderach et al (2013) simulated impacts of CC limited to the
            definition of the suitable area for cocoa based on a generic model
            that does not take into account the effects of CC on cocoa yield, as
            it is not specific to cocoa ecophysiology and does not integrate the
            effects that CC will have on pests and diseases. Furthermore, these
            simulations 2 on potential cocoa growing areas do not take into
            account the adaptation strategies that farmers will be developing or
            adopting to cope with CC.
          </p>
        </div>
        <div className="w-[70%] sm:w-[50%]  md:w-[37%] lg:w-[30%]  ">
          <img src={sectionImage1} alt="" className="rounded-3xl" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-15 lg:gap-27 mt-20 px-5 sm:px-10  ">
        <div className="w-[70%] sm:w-[50%]  md:w-[37%] lg:w-[30%]  ">
          <img src={sectionImage2} alt="" className="rounded-3xl" />
        </div>
        <div className="w-full md:max-w-[55%] lg:w-[50%] text-justify">
          <p className=" ">
            Furthermore, literature reviews reveal a surprising lack of
            knowledge of the response of different cocoa systems to extreme
            climatic events making predictions uncertain (Zuidema et al., 2005).
            In addition there is little if any knowledge on adaptive measures in
            the light of climate change, especially among cocoa communities in
            Ghana. Against this background, there is an urgent need to develop
            climate smart cocoa systems, substantiated by improved knowledge on
            cocoa eco-physiology, analyses of field data, farmers’ strategies
            and the surrounding institutional set up. It is increasingly
            recognized that trees in cocoa systems improve crop production,
            provide timber and fuel wood, fruits and other products as well as
            valuable ecosystem services such as carbon sequestration, soil
            fertility enhancement, and biodiversity conservation (Vaast &
            Somarriba, 2014). Consequently they can contribute greatly to
            enhancing food, nutrition and income security of smallholders that
            produce over 80% of world cocoa. From recent studies in Central
            America and Indonesia, there is increasing evidence that trees,
            through microclimatic amelioration, also enhance the resilience of
            cocoa systems to climate change which is threatening the livelihood
            of rural cocoa communities globally. Nevertheless, the cocoa sector
            is mainly advocating an increase in cocoa production through the
            intensification of cocoa systems mainly via improved germplasm and
            use of agrochemicals in full sun monoculture, and hence removal of
            shade trees which decreases smallholders’ ability to cope with price
            volatility of cocoa, pests and diseases outbreaks and climate
            change.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 lg:gap-27 mt-20 px-5 sm:px-10 ">
        <div className="w-full md:max-w-[55%] lg:w-[50%] text-justify">
          <p className=" ">
            This is also the case in Ghana, where cocoa farms have primarily
            been managed under low shade or no shade (Gockowski & Sonwa, 2011),
            as agricultural extension services in Ghana have promoted intensive
            systems in full sun to maximize short-term yields (Asare, 2005).
            Today, cocoa yields are declining because of low soil fertility and
            pest and disease pressures, posing severe challenges to the cocoa
            sector, from farmers to processors (Ruf, 2011; Tscharntke et al.,
            2011). Farmers rarely have the financial means to purchase the
            substantial amounts of fertilizers, fungicides and pesticides needed
            for enhancing production (Ahenkorah et al. 1987, Ruf & Zadi, 1998),
            and the notion that full-sun and intensive cocoa systems is superior
            to other management systems has been questioned. Sun-grown cocoa
            trees age more rapidly than shaded trees, necessitating a more
            frequent renewal of the plantation (Jagoret et al., 2011; Gyau et
            al., 2014). Furthermore, recent research has demonstrated that
            on-farm yields are often larger in shaded than in non-shaded systems
            (Asare et al., forthcoming). It seems likely that the traditional
            agroforests are buffering environments, leading to closer-to-optimum
            conditions for cocoa, especially under conditions of climate stress,
            while simultaneously working to increase the carbon storage that can
            help counter climate change. Furthermore, the need for specific
            policies addressing CC adaptation in a local context depends on how
            important the impacts of CC are expected to be and whether farmers
            can adapt to induced changes in their environment (Burke & Emerick,
            2013). The bulk of the empirical research on CC impacts on
            agriculture has focused on field crop agriculture in developed
            economies with little or no studies on perennial crop such as cocoa
            in a developing country like Ghana.
          </p>
        </div>
        <div className="w-[70%] sm:w-[50%]  md:w-[37%] lg:w-[30%]   ">
          <img src={sectionImage3} alt="" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default State_of_Art;
