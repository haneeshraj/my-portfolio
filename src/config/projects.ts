// Type of projects

export type Project = {
  id: string;
  name: string;
  type: "Web" | "ML/AI" | "Motion Design" | "Graphic Design" | "VFX" | "Music";
  images: string[];
  live: string;
  source: string;
};

export const projects: Project[] = [
  {
    id: "project_1",
    name: "Project 1",
    type: "Web",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },
  {
    id: "project_2",
    name: "Project 2",
    type: "Web",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_3",
    name: "Project 3",
    type: "Web",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },
  {
    id: "project_5",
    name: "Project 5",
    type: "ML/AI",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_9",
    name: "Project 9",
    type: "ML/AI",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_11",
    name: "Project 11",
    type: "ML/AI",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_1",
    name: "Project 1",
    type: "Motion Design",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },
  {
    id: "project_2",
    name: "Project 2",
    type: "Motion Design",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_3",
    name: "Project 3",
    type: "Motion Design",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },
  {
    id: "project_5",
    name: "Project 5",
    type: "Graphic Design",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_9",
    name: "Project 9",
    type: "Graphic Design",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_11",
    name: "Project 11",
    type: "Graphic Design",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_1",
    name: "Project 1",
    type: "VFX",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },
  {
    id: "project_2",
    name: "Project 2",
    type: "VFX",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_3",
    name: "Project 3",
    type: "VFX",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },
  {
    id: "project_5",
    name: "Project 5",
    type: "Music",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_9",
    name: "Project 9",
    type: "Music",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },

  {
    id: "project_11",
    name: "Project 11",
    type: "Music",
    images: [
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
      "https://via.placeholder.com/1920x1080/3b3b3b?text=16:9",
    ],
    live: "/",
    source: "https://github.com",
  },
];
