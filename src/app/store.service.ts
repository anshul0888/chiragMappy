import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  store = {
    projects: [
      { name: 'Project A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' },
      { name: 'Project B', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' }
    ],
    ourClients: [
      'http://digitalsamay.com/images/client1.png',
      'http://digitalsamay.com/images/client2.png',
      'http://digitalsamay.com/images/client3.png',
      'http://digitalsamay.com/images/client4.png',
      'http://digitalsamay.com/images/client5.png',
      'http://digitalsamay.com/images/client6.png',
      'http://digitalsamay.com/images/client7.png'
    ],
    whyChooseUs: [
      {
        heading: 'Mission',
        description: 'Our mission is to provide our clients with impressive solutions that both communicate their brand and motivate customers - that is to boost the bottom line. We strive to build long-lasting partnerships with our clients, helping them to meet and exceed their goals.'
      },
      {
        heading: 'Vision',
        description: 'GEOMS believes in redeﬁning the way to connect the customers based on the latest digital marketing trends, delivering customer-centric services and solutions they trust.'
      },
      {
        heading: 'Values',
        description: 'As individual, we value integrity, honesty, openness. personal excellence, continual selfimprovement and mutual respect'
      }
    ],
    termsCondition: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.'
    ],
    faq: [
      { question: 'Nibh sit amet commodo nulla facilisi nullam?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.'},
      { question: 'Nibh sit amet commodo nulla facilisi nullam?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' },
      { question: 'Nibh sit amet commodo nulla facilisi nullam?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' },
      { question: 'Nibh sit amet commodo nulla facilisi nullam?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' },
      { question: 'Nibh sit amet commodo nulla facilisi nullam?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' },
      { question: 'Nibh sit amet commodo nulla facilisi nullam?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' },
      { question: 'Nibh sit amet commodo nulla facilisi nullam?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris.' }
    ],
    benefits: [
      {
        image: 'http://digitalsamay.com/images/global.jpg',
        heading: 'GLOBAL REACH AND VISIBILITY',
        description: 'Uniquen reach in management and business at the crossroads of society. A global voice to promote responsible leadership.'
      },
      {
        image: 'http://digitalsamay.com/images/cost3.png',
        heading: 'LOWERCOST',
        description: 'We provide low price in order to enhance the demand for its product among clients'
      },
      {
        image: 'http://digitalsamay.com/images/track.png',
        heading: 'TRACKABLE, MEASURABLE RESULTS',
        description: 'A digital advertising agency that can help with all of your online marketing needs across desktop and mobile.'
      },
      {
        image: 'http://digitalsamay.com/images/brand.png',
        heading: 'BRAND DEVELOPMENT',
        description: 'Branding is the most important aspect to enhance your online presence and market visibility.'
      }
    ]
  };
  constructor() { }
}
