import { process } from "@/app/constants";

const Application = () => {
  return (
    <div className="bg-white text-black min-[1260px]:px-60 min-[1260px]:py-40">
      <h1 className="text-4xl font-bold mb-15">The Application Process</h1>
      <div className="grid md:grid-cols-3 gap-20">
        {process.map((item, index) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex gap-3">
              <h1 className="text-5xl font-bold text-[#64BEE6]">{item.id}</h1>
              <p className="font-bold text-[#E33C3A] text-xl">{item.title}</p>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="px-1 py-0.5 bg-[#e33c3a] mt-10" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl font-bold pt-10">Things To Know First</h2>
          <p>
            The Common Application is required for students applying to any or
            all of KU’s three degree. You’ll be able to choose your campus and
            program s that you are interested.
          </p>
          <p>You will need :</p>
          <div className="flex items-start gap-3">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#dc3c3a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dc3c3a]"></span>
            </span>
            <p>
              Contact information for the counselor or other school
              representative who will complete your Common Application School
              Report and submit your official high school transcript.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#dc3c3a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dc3c3a]"></span>
            </span>
            <p>
              Contact information for one teacher (or two, maximum) who will
              complete the Teacher Evaluation form.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#dc3c3a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dc3c3a]"></span>
            </span>
            <p>
              Nonrefundable $50 application fee. Students who are unable to pay
              the application fee can request a fee waiver.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-6 bg-[#64BEE6] hover:bg-black text-white hover:cursor-pointer"
            >
              Request a campus tour
            </button>
            <button
              type="submit"
              className="px-4 py-6 bg-[#DC3C3A] hover:bg-black text-white hover:cursor-pointer"
            >
              Request information
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-7 mt-10">
          <h2 className="text-2xl font-bold">When To Apply?</h2>
          <table className="table-auto border w-auto min-[1284px]:w-150 min-[1284px]:h-60">
            <thead className="border bg-[#64BEE6] text-white">
              <tr className="border h-15">
                <th></th>
                <th className="border">Application Deadline</th>
                <th className="border">Decision</th>
              </tr>
            </thead>
            <tbody className="bg-[#F3F3F3] text-[#949494]">
              <tr className="border border-white text-center">
                <td className="border border-white">Early Decision 1</td>
                <td className="border border-white">November 1</td>
                <td className="border border-white">December 15</td>
              </tr>
              <tr className="border border-white text-center">
                <td className="border border-white">Early Decision 2</td>
                <td className="border border-white">January 1</td>
                <td className="border border-white">February 15</td>
              </tr>
              <tr className="border text-center">
                <td className="border border-white">Regular Decision</td>
                <td className="border border-white">January 1</td>
                <td className="border border-white">April 1</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-2xl font-bold">
            Where to submit necessary documents?
          </h2>
          <p className="text-[#6B708C]">
            Documents not submitted through the online method can be mailed to:
          </p>
          <div className="text-[#9193AA]">
            <p>Box 35300</p>
            <p>1810 Campus Way NE</p>
            <p>Bothell, WA 98011-8246 USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
