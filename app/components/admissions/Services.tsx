import { service } from "@/app/constants";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-between min-[1260px]:flex-row p-25 bg-[#DC3C3A] md:px-60 gap-8">
      {service.map((item, index) => (
        <div key={item.title} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
