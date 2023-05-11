//import logo from "./logo.svg";
import "./App.css";
//import AppHeader from "./components/header/Header.js";
import AnimationRevealPage from "./components/helpers/AnimationRevealPage.js";
import TwoColumnWithVideo from "./hero/TwoColumnWithVideo";
import tw from "twin.macro";
import TwoColWithButton from "./components/features/TwoColWithButton";
import { SectionHeading } from "./components/misc/Headings";
import intro from "./images/intro.jpg"
import Risques from "./images/Risques.jpg"
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic `;
const imageCss = tw`rounded-4xl max-w-2xl`;
//const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText2 = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block font-serif text-[30px] `;
const Description = tw.span`inline-block mt-8 text-black`;
const Heading = tw(
  SectionHeading
)`ml-12 mt-4 font-black text-center text-2xl sm:text-4xl lg:text-4xl text-center md:text-left leading-tight`;
function App() {
  return (
    <>
    {/* 1) */}
      <AnimationRevealPage>
        <Heading>Les risqués psychosociaux chez les infirmiers (ères) travaillant dans</Heading> 
        <TwoColWithButton
          imageRounded
          subheading=""
          heading={
            <>
              métier infirmier
              <wbr />{" "}
              <HighlightedText2>
              Le métier d'infirmier est l'un des plus importants dans le domaine
              de la santé.
              </HighlightedText2>
            </>
          }
          imageDecoratorBlob={true}
          description={
            <Description>
              Les infirmiers sont responsables de la prestation de
              soins de santé à des patients de tous âges et de toutes conditions
              médicales. Ils travaillent en étroite collaboration avec les
              médecins et les autres professionnels de la santé pour offrir des
              soins de qualité aux patients. Les infirmiers sont souvent les
              premiers à entrer en contact avec les patients et les familles et
              sont en mesure de fournir une assistance et un soutien émotionnel
              essentiels en plus de leur rôle clinique. Ils jouent également un
              rôle clé dans la surveillance de l'état de santé du patient,
              l'administration de médicaments, la gestion des symptômes et la
              coordination des soins
              <br />
              <br />
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="read more"
          imageSrc={
            intro
          }
          imageCss={imageCss}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
          primaryButtonUrl="/profile"
        />
      </AnimationRevealPage>

      {/* 2) */}
      <AnimationRevealPage>
        <TwoColumnWithVideo
          heading={
            <>
              Définition des risques  <HighlightedText>psychosociaux.</HighlightedText>
            </>
          }
          description="On qualifie de RPS les éléments qui portent atteinte à l’intégrité physique et à la santé mentale des salariés au sein de leur environnement professionnel.
          Les risques psychosociaux correspondent donc à des situations de mal-être au travail (stress, harcèlement moral, violence, souffrance, suicide, dépression, brun-out, addictions,etc)
          "
          imageSrc={Risques}
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="see more"
          watchVideoButtonText="demo video"
        />
      </AnimationRevealPage>
      {/* 3)  */}

    </>
  );
}

export default App;
