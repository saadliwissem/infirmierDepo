import React from "react";
import ThreeColWithSideImage from "./testimonials/ThreeColWithSideImage";
import tw from "twin.macro"

const Resultats = () => {
    const HighlightedText = tw.span`text-primary-500`;
    return (
    
    <>
      <ThreeColWithSideImage
        heading={
          <>
             <HighlightedText>Résultats</HighlightedText>
          </>
        }
      />
    </>
  );
};

export default Resultats;
