import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
//const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex `,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block italic `;

const VerticalWithAlternateImageAndText= () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
      subtitle: "A) ",
      title: "Prévention primaire ",
      description:
        "La prévention primaire, cherche à repérer le facteur de risque dans l’organisation pour l’éliminer et le supprimer. La prévention primaire se situe au niveau collectif, elle a pour objectif : - Agir sur les causes socio-organisationnelles du mal-être (enrichir les tâches, réorganiser l’activité, mobiliser les collectifs, faire évoluer le management, améliorer les conditions de travail, etc.) et supprimer les agents psychosociaux pathogènes.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      subtitle: "B) ",
      title: "Prévention secondaire ",
      description:
        "La prévention secondaire s’intéresse à l’individu, elle correspond à la gestion individuelle et collective des exigences du travail et à l’amélioration des stratégies d’adaptation individu-organisation. On outille l’individu pour lui apprendre à faire face aux RPS : techniques de gestion du stress, relaxation, formation au management, coaching, diffusion de bonnes pratiques, sensibilisation/information auprès des différents acteurs, identifier les problèmes récurrents. Elle tend vers un renforcement des ressources individuelles pour mieux faire face dans l’activité. Elle comporte donc beaucoup d’action de formations et de sensibilisation, telle que la gestion de l’incivilité des usagers (travail des techniques de communications).",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "C) ",
      title: "Prévention tertiaire ",
      description:
        "La prévention tertiaire n’est plus de la prévention mais de la réparation. C’est la plus utilisée pour la prévention des RPS mais c’est la moins efficace dans la durée. La prévention tertiaire est axée sur les conséquences, elle prend en charge les infirmiers (ères) fragilisés, avec la mise en place de soutien psychologique, de mesures de protection, éviter les rechutes. On tente d’obtenir une diminution des manifestations des RPS pour favoriser le retour au travail.",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle><HighlightedText> Prévention</HighlightedText> </HeadingTitle>
          {/* <HeadingDescription>
            Here are some of the most popular events in New York City curated by professionals.
          </HeadingDescription> */}
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              {/* <Image imageSrc={card.imageSrc} /> */}
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
               
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
export default VerticalWithAlternateImageAndText