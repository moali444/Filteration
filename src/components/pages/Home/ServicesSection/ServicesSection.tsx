import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IMAGES from "@assets/images/images";
import "./ServicesSection.scss";

const ServicesSection = () => {
  return (
    <section
      id="services_section"
      className="flex flex-col items-center justify-center"
    >
      <div className="section_title">
        <h3 className="font-black text-[#6D91EE] text-[40px] mb-0">Services</h3>
      </div>

      <Container className="mt-12 mb-5" fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="cart_item rounded-[30px] bg-[#fff] shadow-lg mb-5">
              <div className="">
                <img
                  className="h-[260px] w-[100%] object-cover rounded-t-[30px]"
                  src={IMAGES.cart_1}
                  alt="pic"
                />
              </div>

              <div className="px-5 py-6">
                <h3 className="font-black text-[#324473] text-[18px] mb-3">
                  Lorem Ipsum
                </h3>
                <p className="text-[#324473] text-[14px] mb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <div className="cart_item rounded-[30px] bg-[#fff] shadow-lg mb-5">
              <div className="">
                <img
                  className="h-[260px] w-[100%] object-cover rounded-t-[30px]"
                  src={IMAGES.cart_2}
                  alt="pic"
                />
              </div>

              <div className="px-5 py-6">
                <h3 className="font-black text-[#324473] text-[18px] mb-3">
                  Lorem Ipsum
                </h3>
                <p className="text-[#324473] text-[14px] mb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <div className="cart_item rounded-[30px] bg-[#fff] shadow-lg mb-5">
              <div className="">
                <img
                  className="h-[260px] w-[100%] object-cover rounded-t-[30px]"
                  src={IMAGES.cart_3}
                  alt="pic"
                />
              </div>

              <div className="px-5 py-6">
                <h3 className="font-black text-[#324473] text-[18px] mb-3">
                  Lorem Ipsum
                </h3>
                <p className="text-[#324473] text-[14px] mb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className="">
        <button className="font-medium text-[#fff] text-[16px] bg-[#5180F6] px-[50px] py-[15px] rounded-[50px]">
          Help Me
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
