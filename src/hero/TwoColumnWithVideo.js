import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";



import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/dot-pattern.svg";
import DesignIllustration from "../images/design-illustration.svg";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-lg font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

//const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

const Img = tw.img`mr-8 mb-8`
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;



const TwoColumnWithVideo= ({
  heading = "",
 description="",
 
  imageSrc=DesignIllustration,
  imageCss=null,
  imageDecoratorBlob = true,
}) => {


  return (
    <>
      
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <Img
                style={{maxWidth:"700px",maxHeight:"470px"}}
                css={imageCss}
                src={imageSrc}
                alt="Hero"
              />
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
       
      </Container>
    </>
  );
};
export default TwoColumnWithVideo