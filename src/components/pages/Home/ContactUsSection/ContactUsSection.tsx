import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { IoMail, IoCall } from "react-icons/io5";
import "./ContactUsSection.scss";

const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://upskilling-egypt.com:3001/contact",
        data
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  return (
    <section
      id="contact_section"
      className="bg-[#fcfcfc] flex flex-col items-center justify-center"
    >
      <div className="section_title">
        <h3 className="font-black text-[#6D91EE] text-[40px] mb-0">
          Contact Us
        </h3>
      </div>

      <Container className="mt-10 pb-4" fixed>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12} md={4}>
            <div className="">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <Grid item xs={12} md={12}>
                  <FormControl className="form_item w-[100%]">
                    <TextField
                      //hiddenLabel
                      label="Name"
                      variant="filled"
                      className="btn_bg"
                      id="name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <Alert className="mt-3" severity="error">
                        {errors?.name?.message}
                      </Alert>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <FormControl className="form_item w-[100%]">
                    <TextField
                      //hiddenLabel
                      className="btn_bg"
                      variant="filled"
                      label="email"
                      id="email"
                      {...register("email", {
                        required: "email is required",
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "please inter invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <Alert className="mt-3" severity="error">
                        {errors?.email?.message}
                      </Alert>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <FormControl className="form_item w-[100%]">
                    <TextField
                      //hiddenLabel
                      className="btn_bg"
                      variant="filled"
                      label="Phone"
                      id="phone"
                      {...register("phone", {
                        required: "phone is required",
                        // pattern: {
                        //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        //   message: "please inter invalid email",
                        // },
                      })}
                    />
                    {errors.phone && (
                      <Alert className="mt-3" severity="error">
                        {errors?.phone?.message}
                      </Alert>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <div className="form_btns mt-2">
                    <button
                      className="
                        w-[100%] 
                        py-[15px] 
                        px-[50px] 
                        text-[#6D91EE] 
                        text-[18px] 
                        font-medium 
                        rounded-[50px]
                        border-solid border-2 border-[#6D91EE]
                      "
                    >
                      Send
                    </button>
                  </div>
                </Grid>
              </form>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <IoMail className="text-[#5180F6] text-[24px] " />
                <span className="text-[#333333]">upskilling.eg1@gmail.com</span>
              </div>

              <div className="flex gap-3">
                <IoCall className="text-[#5180F6] text-[24px] " />
                <span className="text-[#333333]">+20 115 493 2137</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUsSection;
