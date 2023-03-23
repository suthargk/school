import Achievement from "assets/Icons/Achievement";
import Rocket from "assets/Icons/Rocket";

export const navigationCategory = [
  {
    name: "About Us",
    icon: <Rocket />,
    subCategories: [
      {
        name: "About Us",
        path: "/about",
        description:
          "Discover our commitment to comprehensive education and student success.",
      },
      {
        name: "Principal's Message",
        path: "/principal-message",
        description:
          "Message from our Principal: Inspiring a passion for learning and a commitment to excellence.",
      },
      {
        name: "Facilities",
        path: "/facilities",
        description:
          "Discover our state-of-the-art facilities that provide a comfortable and engaging learning environment.",
      },

      {
        name: "Route Plan of School Buses",
        path: "bus-route-plan",
        description:
          "Explore our school bus routes and transportation options for safe and convenient travel to and from school.",
      },
      {
        name: "Faculty",
        path: "/faculty",
        description:
          "Meet our highly qualified and dedicated faculty who inspire and guide our students.",
      },
    ],
  },

  {
    name: "Gallery",
    subCategories: [],
    path: "/gallery",
  },
  {
    name: "Achievements",
    icon: <Achievement />,
    subCategories: [
      {
        name: "Achievements",
        path: "/achievements",
        description:
          "We are thrilled to share some exciting news about our school's recent achievement!",
      },
      {
        name: "Toppers",
        path: "/toppers",
        description:
          "We are proud to announce the school toppers for this academic year!",
      },
    ],
  },
  {
    name: "Homework",
    path: "/homework",
    subCategories: [],
  },
];
