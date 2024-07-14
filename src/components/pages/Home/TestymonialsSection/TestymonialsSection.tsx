import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { BiSolidStar } from "react-icons/bi";
import IMAGES from "@assets/images/images";
import "./TestymonialsSection.scss";

const TestymonialsSection = () => {
  return (
    <section
      id="testymonials_section"
      className="flex flex-col items-center justify-center"
    >
      <div className="section_title">
        <h3 className="font-black text-[#6D91EE] text-[40px] mb-0">
          Testymonials
        </h3>
      </div>

      <div className="">
        <Container className="mt-12 mb-5" fixed>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="cart_item px-5 py-6 rounded-[40px] bg-[#fff] border-solid border-2 border-[#6D91EE] mb-1 flex items-start justify-center gap-4">
                <div className="min-w-[50px]">
                  <img className="" src={IMAGES.user_1} alt="pic" />
                </div>

                <div className="">
                  <h3 className="font-bold text-[#6D91EE] text-[18px] mb-2">
                    Courtney Henry
                  </h3>
                  <div className="text-[#324473] text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </div>

                  <div className="flex gap-1 mt-3 text-[#6D91EE]">
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="cart_item px-5 py-6 rounded-[40px] bg-[#fff] border-solid border-2 border-[#6D91EE] mb-1 flex items-start justify-center gap-4">
                <div className="min-w-[50px]">
                  <img className="" src={IMAGES.user_1} alt="pic" />
                </div>

                <div className="">
                  <h3 className="font-bold text-[#6D91EE] text-[18px] mb-2">
                    Courtney Henry
                  </h3>
                  <div className="text-[#324473] text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </div>

                  <div className="flex gap-1 mt-3 text-[#6D91EE]">
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="cart_item px-5 py-6 rounded-[40px] bg-[#fff] border-solid border-2 border-[#6D91EE] mb-1 flex items-start justify-center gap-4">
                <div className="min-w-[50px]">
                  <img className="" src={IMAGES.user_1} alt="pic" />
                </div>

                <div className="">
                  <h3 className="font-bold text-[#6D91EE] text-[18px] mb-2">
                    Courtney Henry
                  </h3>
                  <div className="text-[#324473] text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </div>

                  <div className="flex gap-1 mt-3 text-[#6D91EE]">
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="cart_item px-5 py-6 rounded-[40px] bg-[#fff] border-solid border-2 border-[#6D91EE] mb-1 flex items-start justify-center gap-4">
                <div className="min-w-[50px]">
                  <img className="" src={IMAGES.user_1} alt="pic" />
                </div>

                <div className="">
                  <h3 className="font-bold text-[#6D91EE] text-[18px] mb-2">
                    Courtney Henry
                  </h3>
                  <div className="text-[#324473] text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </div>

                  <div className="flex gap-1 mt-3 text-[#6D91EE]">
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                  </div>
                </div>
              </div>
            </Grid>

          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default TestymonialsSection;
