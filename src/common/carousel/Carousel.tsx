import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useStyles } from "./styles";

const Carousel = (props: any) => {
  const { images } = props;
  const classes = useStyles();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: "460px", width: "100%" }}>
        <Slider {...settings}>
          {images.map((image: any) => (
            <div>
              <img src={image.img} alt={image.alt} className={classes.image} />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Carousel;
