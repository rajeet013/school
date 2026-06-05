
import Event from "../components/schoolLife/Event";
import Experience from "../components/schoolLife/Experience";
import Goal from "../components/schoolLife/Goal";
import HeroSchool from "../components/schoolLife/Hero_school";
import Services from "../components/schoolLife/Services";

const page = () => {
  return (
    <div>
      <HeroSchool />
      <Event />
      <Experience />
      <Services />
      <Goal />
    </div>
  );
};

export default page;
