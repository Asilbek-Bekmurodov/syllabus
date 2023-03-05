import Video from "./contents/video";

const sidebarData = [
  { title: "Kurs haqida", path: "about-course" },
  { title: "Tarkibiy tuzilish", path: "structure" },
  { title: "Baxolash", path: "baxolash" },
  {
    title: "Resurslar",
    childrens: [
      {
        title: "Maruza",
        path: "maruza",
      },
      {
        title: "Video",
        path: "video",
      },
      {
        title: "Adabiyotlar",
        path: "adabiyotlar",
      },
      {
        title: "Internet resurslari",
        path: "internet-resusrlar",
      },
    ],
  },
  {
    title: "Kurs topshiriqlari",
    childrens: [
      {
        title: "Mustaqil ish mavzulari",
        path: "mustaqil-ish",
      },
      {
        title: "Testlar",
        path: "test",
      },
    ],
  },
];

export default sidebarData;

export const routeData = [
  { content: "Kurs haqida", path: "about-course" },
  { content: "Tarkibiy tuzilishi", path: "structure" },
  { content: "Baholash", path: "baxolash" },
  { content: "Test", path: "test" },
  { content: "Mustaqil ish", path: "mustaqil-ish" },
  { content: "Internet-resurslar", path: "internet-resusrlar" },
  { content: "Adabiyotlar", path: "adabiyotlar" },
  { content: <Video />, path: "video" },
  { content: "Maruza", path: "maruza" },
];
