import IMAGES from "@assets/images/images";
import "./BannerSection.scss";

const BannerSection = () => {
  return (
    <section id="banner_section">
      <div className="logo_bx">
        <img src={IMAGES.Logo} alt="pic" />
      </div>

      <div className="text flex flex-col items-center justify-center">
        <div className="mb-3 bg-[#6D91EE] text-white px-[30px] py-[7px] rounded-[20px]">
          Experts
        </div>
        <div className="font-thin text-[#4F4F4F] text-[60px] leading-none">
          Lorem
        </div>
        <div className="font-black text-[#4F4F4F] text-[50px] leading-none mb-4">
          Lorem lorem
        </div>
        <p className="w-[380px] text-[#4F4F4F] text-[14px] text-center mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <button className="bg-[#5180F6] text-white px-[50px] py-[12px] rounded-[50px] font-medium">
          Help Me
        </button>
      </div>
    </section>
  );
};

export default BannerSection;
