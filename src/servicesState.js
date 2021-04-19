// Import Images
import safety from "./img/safety-corona.jpg";
import dream from "./img/dream-party.jpg";
import free from "./img/free-party.jpg";
import organisation from "./img/organisation.jpg";
import empty from "./img/empty-festival.jpg";

export const ServicesState = () => {
  return [
    {
      title: "Preperation",
      mainImg: empty,
      secondaryImg: dream,
      url: "/services/preperation",
      information: [
        {
          title: "lorem",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "lorem",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Security",
      mainImg: free,
      url: "/services/security",
      secondaryImg: free,
      information: [
        {
          title: "Truly A masterpiece",
          description:
            "lorem",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem",
        },
        {
          title: "lorem",
          description:
            "“Lorem",
        },
      ],
    },
    {
      title: "Testing",
      mainImg: safety,
      url: "/services/safety",
      secondaryImg: safety,
      information: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "lorem ipsum",
          description:
            "lorem ipsum",
        },
        {
          title: "It’s okay lmao.",
          description:
            "lorem ipsum",
        },
      ],
    },
    {
      title: "Consultancy",
      mainImg: organisation,
      url: "/services/consultancy",
      secondaryImg: organisation,
      information: [
        {
          title: "lorem",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "lorem",
          description:
            "Lorem Ipsum",
        },
        {
          title: "It’s okay lmao.",
          description:
            "Lorem Ipsum",
        },
      ],
    },
  ];
};
