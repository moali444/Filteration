import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IMAGES from "@assets/images/images";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section id="about_section">
      <Container className="" fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="flex flex-col items-start justify-center">
              <h3 className="font-black text-[#fff] text-[40px] mb-4">
                About Us
              </h3>

              <p className="about_text text-[#fff] text-[14px] mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an
              </p>

              <img className="w-[320px] mt-2" src={IMAGES.img_1} alt="pic" />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="flex flex-col items-end justify-center">
              <h3 className="font-black text-[#fff] text-[40px] mb-4">Where</h3>
              <p className="where_text text-[#fff] text-[14px] mb-4 text-end">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className="flex items-start justify-center">
        <button className="bg-[#EEC04B] text-[#515151] px-[50px] py-[12px] rounded-[50px] font-semibold">
          Help Me
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
