import React from "react";
import styled from "styled-components";

import AnimationRevealPage from "./components/helpers/AnimationRevealPage";
import TwoColWithButton from "./components/features/TwoColWithButton";
import tw from "twin.macro";
import facteur from "./images/facteurs.jpg";
import { SectionHeading, Subheading } from "./components/misc/Headings";
//const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic `;
const imageCss = tw`rounded-4xl max-w-2xl`;
//const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText2 = tw.span`text-primary-500 px-4 transform -skew-x-12 inline-block font-serif text-[30px] `;
const HighlightedText = tw.span` bg-primary-500 text-black px-4 transform -skew-x-12 inline-block font-serif text-[30px] `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12  md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const Description = tw.span`inline-block mt-8 text-black mr-12 ml-12`;
const Heading = tw(
  SectionHeading
)`ml-12 mt-4 font-black text-center text-2xl sm:text-4xl lg:text-4xl text-center md:text-left leading-tight`;
const FacteurRisque = () => {
  return (
    <>
      <AnimationRevealPage>
        <Heading>les facteurs de risques .</Heading>
        <TwoColWithButton
          imageRounded
          subheading=""
          heading={
            <>
              <wbr />{" "}
              <HighlightedText2>
                Les facteurs RPS au travail mis en évidence
                par la littérature scientifique peuvent être regroupés autour de
                six axes:
              </HighlightedText2>
            </>
          }
          imageDecoratorBlob={true}
          description={
            <Description>
              <br />
              <br />
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="read more"
          imageSrc={facteur}
          imageCss={imageCss}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
          primaryButtonUrl="/profile"
        />
        <HighlightedText></HighlightedText>
        <Description></Description>
        <TwoColumn>
          <TextColumn textOnLeft={true}>
            <TextContent>
              <Subheading></Subheading>
              <Heading>1) Intensité du travail:</Heading>
              <Description>
                représente le premier axe et  décrite ainsi :Le caractère
                exigeant du travail peut provenir du temps qu’il occupe ou de
                son intensité. Les exigences temporelles sont liées à la durée
                du travail et à l’organisation du temps de travail. L’intensité
                du travail se traduit en termes de facteurs psychosociaux de
                risque à travers des concepts tels que « demande psychologique
                ». L’intensification du travail est notable dans le secteur de
                l’oncologie
              </Description>
            </TextContent>
          </TextColumn>

          <TextColumn textOnLeft={false}>
            <TextContent>
              <Subheading></Subheading>
              <Heading>2) Exigences émotionnelles: </Heading>
              <Description>
                Le travail de soignants en oncologie et en soins palliatifs est
                reconnu comme un secteur comportant des exigences émotionnelles.
                Les exigences émotionnelles sont liées à la nécessité de
                maîtriser et façonner ses propres émotions, afin notamment de
                maîtriser et façonner celles ressenties par les personnes avec
                qui on interagit lors du travail. Devoir cacher ses émotions est
                également exigeant. L’exposition à la détresse et à la
                souffrance des personnes atteintes de cancer et de leurs proches
                constitue un premier exemple, La détresse aussi est fréquemment
                observée et le soignant doit composer avec ce phénomène
              </Description>
            </TextContent>
          </TextColumn>
        </TwoColumn>
        <TwoColumn>
          <TextColumn textOnLeft={true}>
            <TextContent>
              <Subheading></Subheading>
              <Heading>
                3) Problèmes d’autonomie ou manque de latitude décisionnel:
              </Heading>
              <Description>
                L’autonomie au travail désigne la possibilité pour le
                travailleur d’être acteur dans son travail, dans sa
                participation à la production de richesses et dans la conduite
                de sa vie professionnelle. Comme la « latitude décisionnelle »
                du questionnaire de Karasek, elle inclut non seulement les
                marges de manœuvre, mais aussi la participation aux décisions
                ainsi que l’utilisation et le développement des compétences.
              </Description>
            </TextContent>
          </TextColumn>

          <TextColumn textOnLeft={false}>
            <TextContent>
              <Subheading></Subheading>
              <Heading>
                4) Mauvaise qualité des rapports sociaux au travail:{" "}
              </Heading>
              <Description>
                Le travail est un lien de socialisation très important et les
                rapports sociaux au travail sont des éléments déterminants qui
                peuvent favoriser la santé au travail, ou le contraire. Ces
                rapports peuvent prendre plusieurs formes :la coopération et le
                soutient social de la part des collègues ou de la hiérarchie, le
                sentiment d’être aidé par les autres dans la réalisation et
                l’exécution de son travail, la violence au travail, qu’elle soit
                d’ordre physique ou moral.
              </Description>
            </TextContent>
          </TextColumn>
        </TwoColumn>
        <TwoColumn>
          <TextColumn textOnLeft={true}>
            <TextContent>
              <Subheading></Subheading>
              <Heading>5) Insécurité:</Heading>
              <Description>
                L’insécurité de la situation de travail comprend l’insécurité
                socio-économique et le risque de changement non maîtrisé de la
                tâche et des conditions de travail. L’insécurité
                socio-économique peut provenir du risque de perdre son emploi,
                du risque de voir baisser le revenu qu’on en tire ou du risque
                de ne pas bénéficier d’un déroulement « normal » de sa carrière.
              </Description>
            </TextContent>
          </TextColumn>

          <TextColumn textOnLeft={false}>
            <TextContent>
              <Subheading></Subheading>
              <Heading>6) Conflits de valeurs: </Heading>
              <Description>
                Une souffrance éthique est ressentie par une personne à qui on
                demande d’agir en opposition avec ses valeurs professionnelles,
                sociales ou personnelles. Le conflit de valeurs peut venir de ce
                que le but du travail où ses effets secondaires heurtent les
                convictions du travailleur, ou bien du fait qu’il doit
                travailler d’une façon non conforme à sa conscience
                professionnelle.
              </Description>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </AnimationRevealPage>
    </>
  );
};

export default FacteurRisque;
