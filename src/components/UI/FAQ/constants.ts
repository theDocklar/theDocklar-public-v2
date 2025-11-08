type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What services does theBOAT offer?',
    answer:
      'theBOAT provides comprehensive web development solutions including custom websites, SEO marketing, branding & design, and digital marketing services all in one package.',
  },
  {
    question: 'How does theBOAT ensure quality in web development?',
    answer:
      'We use modern technologies, follow best practices, conduct thorough testing, and provide ongoing support to ensure your website performs optimally and meets your business goals.',
  },
  {
    question: 'What makes theBOAT different from other web agencies?',
    answer:
      'We offer a complete all-in-one solution combining web development, SEO, marketing, branding, and creative services, eliminating the need to work with multiple agencies.',
  },
  {
    question: 'How long does a typical web development project take?',
    answer:
      'Project timelines vary based on complexity, but we typically deliver custom websites within 4-8 weeks, including design, development, testing, and launch phases.',
  },
];
