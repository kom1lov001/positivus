type SectionKey = 1 | 2 | 3 | 4 | 5 | 6;

interface SectionContent {
  title: string;
  description: string;
}

export const desciption: Record<SectionKey, SectionContent> = {
  1: {
    title: "Services",
    description:
      "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  },
  2: {
    title: "Case Studies",
    description:
      "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
  },
  3: {
    title: "Our Working Process ",
    description: "Step-by-Step Guide to Achieving Your Business Goals",
  },
  4: {
    title: "Team",
    description:
      "Meet the skilled and experienced team behind our successful digital marketing strategies",
  },
  5: {
    title: "Testimonials",
    description:
      "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
  },
  6: {
    title: "Contact Us",
    description: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
  },
};
