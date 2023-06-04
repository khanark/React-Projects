import { ReactComponent as call } from '../assets/call.svg';
import { ReactComponent as close } from '../assets/close.svg';
import dumbbell from '../assets/dumbbell.png';
import { ReactComponent as facebook } from '../assets/logo-facebook.svg';
import { ReactComponent as instagram } from '../assets/logo-instagram.svg';
import mainHeaderImage from '../assets/fitness-main.jpg';
import { ReactComponent as menu } from '../assets/menu.svg';
import minela from '../assets/minela.jpg';
import multipleUsers from '../assets/multiple-users-silhouette.png';
import ortiz from '../assets/ortiz.jpg';
import perkins from '../assets/perkins.jpg';
import { ReactComponent as pin } from '../assets/location.svg';
import thumbsUp from '../assets/thumbs-up-hand-symbol.png';
import { ReactComponent as twitter } from '../assets/logo-twitter.svg';
import { ReactComponent as youtube } from '../assets/logo-youtube.svg';

export const constants = {
  header: {
    backgroundImage: mainHeaderImage,
    topNav: {
      phoneNumber: {
        icon: call,
        text: '+1-543-123-4567',
      },
      address: {
        icon: pin,
        text: '3481 Melrose Place Beverly Hills, CA 90210',
      },
      contactIcons: [facebook, twitter, instagram, youtube],
    },
    mainNav: {
      menu: menu,
      close: close,
      links: [
        {
          id: 'home',
          name: 'Home',
        },
        {
          id: 'membership',
          name: 'Membership',
        },
        {
          id: 'faq',
          name: 'FAQ',
        },
        {
          id: 'schedule',
          name: 'Schedule',
        },
        {
          id: 'blog',
          name: 'Blog',
        },
        {
          id: 'contactUs',
          name: 'Contact Us',
        },
      ],
    },
  },
  hero: {
    title: 'no pain no gain',
    subtitle:
      'Nice-looking body and powerful organism are interconnected and we can help you with both.',
    button: 'get started',
  },
  welcomeSection: {
    title: 'Welcome',
    cards: [
      {
        logo: multipleUsers,
        title: 'Qualified Coaches',
        text: 'Our coaches have years of experience in various types of fitness and sports.',
      },
      {
        logo: thumbsUp,
        title: 'Individual Approach',
        text: 'Every client of GYM has a personalized program of training and nutrition.',
      },
      {
        logo: dumbbell,
        title: 'Fitness Equipment',
        text: 'We cooperate with leading fitness equipment suppliers to give you the superior results.',
      },
    ],
  },
  coachesSection: {
    title: 'Coaches',
    cards: [
      {
        logo: perkins,
        name: 'Pepa Perkins',
        sport: 'Fitness',
        text: 'Emily can teach you all peculiarities of fitness and aerobics in a group or individually.',
      },
      {
        logo: minela,
        name: 'Samantha Minela',
        sport: 'Yoga',
        text: 'Our leading yoga coach, Samantha will help you reach full harmony with your body.',
      },
      {
        logo: ortiz,
        name: 'Austin Ortiz',
        sport: 'Bodybuilding',
        text: 'Austin is not only our most called-for coach, but also a winner of many championships.',
      },
    ],
  },
  footer: {
    text: 'All rights reserved. In Partnership with SoftUni.',
  },
};
