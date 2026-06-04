import Application from "../components/admissions/Application";
import Details from "../components/admissions/Details";
import GalleryAdmission from "../components/admissions/Gallery_Admission";
import HeroAdmission from "../components/admissions/Hero_admission";
import Services from "../components/admissions/Services";

const page = () => {
  return (
    <div>
      <HeroAdmission />
      <Details />
      <Services />
      <GalleryAdmission />
      <Application />
    </div>
  );
};

export default page;
