import { Button } from "@/components/ui/button";

interface FeaturesProps {
  globeImageUrl?: string;
}

export default function AboutPayfrica({ globeImageUrl = "" }: FeaturesProps) {
  return (
    <div className="bg-[#FCF5D7] h-[1079px] w-full overflow-x-hidden">
      <header className="flex flex-col gap-[24px] items-center justify-center mt-24">
        <h2 className="tracking-tight md:text-[57.22px] text-[28px] md:font-[700] text-center font-[500] text-[#3C53A4]">
          The Future of Finance is Here
        </h2>
        <p className="md:text-[25px] text-[16px] font-[500] text-center text-[#3C53A4]">
          Crypto or cash, <span className="text-[#C43E26]">Payfrica</span> makes
          financial transactions effortless across Africa.
        </p>
      </header>
      <div className="md:flex-row flex-col flex justify-center items-center max-w-7xl mx-auto p-3 md:h-[539px] md:mt-[10rem] mt-[5rem]">
        <div className="w-[498px] h-[378.96px] flex flex-col justify-between">
          <div className="bg-[#FBE19A] text-[#3C53A4] gap-[10px] rounded-[8px] p-[8px] w-fit">
            Payfrica Pay
          </div>
          <h2 className="font-[500] text-[45.78px]">
            Transactions Beyond Barriers
          </h2>
          <p className="font-[400] text-[18.75px]">
            make fast, secure transactions in your local currency, even with
            limited connectivity.{" "}
            <span className="text-[#C63B25] font-[700] text-[18.78px]">
              Payfrica Pay
            </span>{" "}
            is your gateway to seamless financial interactions
          </p>
          <Button className="bg-[#C63B25] w-[105.95574951171875px] h-[58.955753326416016px] rounded-[9.24px] p-[18.48px]">
            Explore
          </Button>
        </div>
        <div className="w-[609px] h-[525px]">
          <img src={globeImageUrl} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
