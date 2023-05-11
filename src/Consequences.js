import React from "react";
import TwoColumnWithImageAndProfilePictureReview from "./testimonials/TwoColumnWithImageAndProfilePictureReview";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage";
import SimpleWithSideImage from "./testimonials/SimpleWithSideImage";

const Consequences = () => {
  return (
    <>
      <AnimationRevealPage>
        <TwoColumnWithImageAndProfilePictureReview />
        <SimpleWithSideImage/>
      </AnimationRevealPage>
    </>
  );
};

export default Consequences;
