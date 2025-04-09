import { useParams } from "react-router-dom";
import { useEffect } from "react";
import People1 from "@/assets/people/Picture1.png";
import People2 from "@/assets/people/Picture2.png";
import People3 from "@/assets/people/Picture3.png";
import People4 from "@/assets/people/Picture4.jpg";
import People5 from "@/assets/people/Picture5.png";
import People6 from "@/assets/people/Picture6.png";
import style from "./MemberDetails.module.css";

const members = [
  {
    id: "1",
    name: "Prof. Kwadwo Owusu",
    image: People1,
    description:
      "Kwadwo Owusu is a Professor and the Director of the Centre for Climate Change and Sustainability Studies at the University of Ghana. He is the Principal Investigator of the Climate Smart Cocoa Systems (CLIMCOCOA). He holds a BA in Geography and Resource Development from the University of Ghana and a MS and PhD in Geography from the University of Florida. His areas of teaching and research interest are climatology, climate variability and change water resources development and smallholder adaptation to climate change. He has extensive network and research collaboration both in Ghana and internationally and has participated in field research geared towards smallholder adaptation and sustainability.",
  },
  {
    id: "2",
    name: "Dr. Mette Fog Olwig",
    image: People2,
    description:
      "Dr. Mette Fog Olwig is an Associate Professor in International Development Studies at Roskilde University. She holds an MA in International Development Studies from Clark University and a PhD in Geography from the University of Copenhagen. Dr. Olwig’s expertise is in the areas of sustainability, climate change, natural resource management and natural disasters. She has done research on the challenges, barriers, possibilities and aspirations of populations facing not only new weather and climate change related phenomena, but also new external adaptation policies and programs. She does qualitative and quantitative research using for example fieldwork, in-depth interviews, participant observation, event ethnography, multi-sited ethnography, surveys and GIS. She has been part of several large interdisciplinary projects involving fieldwork in Tanzania, Ghana, and Vietnam and research collaboration with local and international partners. Dr. Olwig has published numerous single-authored and collaborative articles and chapters on topics such as climate change, trees, sustainability, resilience, adaptation and rural livelihoods in international publication outlets, including Science, International Journal of Remote Sensing and Geoforum and has guest edited special issues in World Development and Applied Geography.",
  },
  {
    id: "3",
    name: "Dr. Eric Opoku Mensah",
    image: People3,
    description: (
      <>
        <span className="font-bold block text-2xl">Area of Research</span> I and
        my research team worked on ecophysiology of cocoa under a changed
        climate. The work aimed at clearing the debate on whether shade could
        reduce stress effects on cocoa under drought or elevated temperature. We
        looked at the physiological point of view where stress was imposed on
        cocoa plants using plastic sheet panels (in the case of water stress)
        and infra-red lamps (in the case of heat stress) and shade a means of
        ameliorating the effects. Data were taken on rate of photosynthesis,
        stomatal conductance, chlorophyll fluorescence, leaf water potential,
        soil moisture content and plant yield. We also monitored above and below
        canopy weather conditions of the cocoa plants and their effects on the
        physiological functions of the plant. Results from the work indicated
        shade having limited impacts on drought and elevated temperature.
        However, plants kept under shade showed increased physiological
        performances and yield than plants kept under full sun conditions. The
        research indicates the need of agroforestry to ensure growth and
        survival of cocoa plants under the changed climate.
      </>
    ),
  },
  {
    id: "4",
    name: "Dr. Sylvester Afram Boadi",
    image: People4,
    description: (
      <>
        <span className="font-bold block text-2xl">Role on project</span>{" "}
        Sylvester Afram Boadi is a PhD researcher on the Danida-funded Climate
        Smart Cocoa Systems for Ghana (CLIMCOCOA) project. The objectives of the
        CLIMCOCOA project are to develop a comprehensive understanding of the
        impacts of climate change on the socio-biophysical basis of cocoa
        systems in Ghana and assess the role of cocoa agroforestry as a model
        for climate and carbon smart agriculture. Sylvester works as the main
        researcher on work package 5 (WP5), which is on the socioeconomic costs
        and benefits of cocoa agroforestry adoption. WP5 is led by Prof. Aske
        Skovmand Bosselmann. Sylvester also works closely with the researchers
        working on work package 4 (WP4) on the social challenges and
        opportunities in relation to introducing cocoa agroforestry, which is
        led by Prof. Mette Fog Olwig. <br />
        <br />
        <span className="font-bold block text-2xl">
          Contribution on the project
        </span>
        Sylvester has completed his PhD on the CLIMCOCOA project at University
        of Ghana and University of Copenhagen. The PhD was funded entirely by
        the CLIMCOCOA project. Sylvester’s PhD thesis was on the “Socio-economic
        potential of agroforestry as an alternative livelihood strategy for
        cocoa farmers in Ghana”. The PhD thesis was supervised by Prof. Kwadwo
        Owusu (University of Ghana), Prof. George Owusu (University of Ghana),
        Prof. Aske Skovmand Bosselmann (University of Copenhagen) and Prof.
        Henrik Meilby (University of Copenhagen). Dr. Richard Asare (a Cocoa
        Scientist at IITA) was an advisor on Sylvester’s PhD work. Sylvester’s
        work on the CLIMCOCOA project included conducting 400 household surveys
        and 24 focus group discussions and in-depth interviews in 12 cocoa
        communities across the Western, Western North, Ashanti, and Ahafo
        Regions of Ghana. Sylvester’s contribution on WP5 in terms of research
        outputs (articles and refereed book chapters) organized under published,
        chapter in review, and manuscripts and chapters at the draft stage are:{" "}
      </>
    ),
  },
  {
    id: "5",
    name: "Dr. Bismark Kwesi Asitoakor",
    image: People5,
    description:
      "Bismark Kwesi Asitoakor was a PhD candidate on the Climate Smart Cocoa Systems for Ghana (CLIMCOCOA) project. He was enrolled at the Department of Crop Science, University of Ghana (UG) and the Department of Geosciences and Natural Resources Management, University of Copenhagen (KU), Denmark. He worked on Work Package 2, “Agroforestry and climate effects on cocoa yield on-farm” of the project. Bismark assessed the influences of eight selected shade tree species and climate conditions (rainfall, temperature and relative humidity) on cocoa pests (mirids and shield bugs) and diseases (black pod disease) infestation, and yield in terms of the number of pods and dry beans produced.Bismark’s PhD Thesis titled, “Effects of Agroforestry and Climate on Cocoa Yield, Pests and Diseases” was supervised by a team of researchers from both academia and industry. They included Prof. Vincent Yao Eziah (UG), Prof. Hans Peter Ravn (KU), Dr. Richard Asare (International Institute of Tropical Agriculture, IITA) and Dr. Philippe Vaast (Centre de Coopération Internationale en Recherche, Agronomique Pour le Développement, CIRAD). Publications from Work Package 2 and other supporting work packages are below.",
  },
  {
    id: "6",
    name: "Dr. Aske Skovmand Bosselmann",
    image: People6,
    description:
      "Dr. Aske Skovmand Bosselmann is Associate Professor in agricultural value chains and natural resource management at the University of Copenhagen. He holds a MSc in Agricultural Development and a PhD in Natural Resource Policy and Economics, both from the University of Copenhagen. Dr. Bosselmann have worked extensively with various aspects of the Danish food and agricultural sector and with smallholder farmers farming systems, livelihood issues, sustainability and certification standards in a developing country context, specifically related to coffee and cocoa systems. He has an extensive network and collaborates with various international research institutions, civil society organizations and private companies across the globe. He has participated in several international and interdisciplinary research projects with extended field stays and qualitative and quantitative data collection in numerous countries across four continents.",
  },
];

const MemberDetails = () => {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return (
      <div className="text-center text-red-500 p-10">
        <h2 className="text-2xl font-bold">Member Not Found</h2>
      </div>
    );
  }

  return (
    <div className="wrapper w-[52rem] py-20">
      <div className={`${style.img} flex gap-6`}>
        <div className={`${style.image} p-9 bg-green-700 rounded-tr-[5rem] rounded-bl-[5rem]`}>
          <img
            src={member.image}
            alt={member.name}
            className="rounded-[3rem] min-w-[18rem]"
          />
        </div>
        <h2 className={`${style.name} text-xl md:text-3xl font-bold mt-8 text-green-800`}>
          {member.name}
        </h2>
      </div>
      <div className={`${style.description} mt-8`}>
        <p className="text-xl leading-9 text-justify">{member.description}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
