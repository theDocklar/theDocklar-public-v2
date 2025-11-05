import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "theDocklar has transformed our online presence completely. Their web development expertise and SEO strategies have increased our website traffic by 300% and converted more visitors into customers. The team's attention to detail and creative approach is unmatched.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "I can't express how grateful I am to theDocklar. Their comprehensive digital marketing and branding services have been a game-changer for our startup. The expert guidance and personalized strategies have given us the competitive edge we needed in the market.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "theDocklar's web development and creative services have been a lifeline for my business. I always struggled with my online presence, but their team crafted a complete digital solution that addressed all my goals and concerns. It's been a game-changer in growing my business.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "I can't express how grateful I am to theDocklar. Their comprehensive digital marketing and branding services have been a game-changer for our startup. The expert guidance and personalized strategies have given us the competitive edge we needed in the market.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "theDocklar has transformed our online presence completely. Their web development expertise and SEO strategies have increased our website traffic by 300% and converted more visitors into customers. The team's attention to detail and creative approach is unmatched.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join over 500+', 'satisfied clients'];
