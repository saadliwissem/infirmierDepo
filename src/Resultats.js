import React from "react";
import ThreeColWithSideImage from "./testimonials/ThreeColWithSideImage";
import tw from "twin.macro";
import VerticalWithAlternateImageAndText from "./components/features/VerticalWithAlternateImageAndText";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage";

const Resultats = () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic `;
  return (
    <>
      <AnimationRevealPage>
        <ThreeColWithSideImage
          heading={
            <>
              <HighlightedText>Résultats</HighlightedText>
            </>
          }
        />
        <VerticalWithAlternateImageAndText />
      </AnimationRevealPage>
    </>
  );
};

export default Resultats;
