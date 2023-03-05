const sidebarData = [
  {title: "Kurs haqida", path: "about-course"},
  {title: "Tarkibiy tuzilish",path: "structure"},
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
        title: "testlar",
        path: "test",
      },
    ],
  },
];

export default sidebarData;

export const routeData = [
  { title: "Kurs haqida", path: "about-course" },
  { title: "Tarkibiy tuzilishi", path: "structure" },
  { title: "Baholash", path: "baxolash" },
  { title: "Test", path: "test" },
  { title: "Mustaqil ish", path: "mustaqil-ish" },
  { title: "Internet-resurslar", path: "internet-resusrlar" },
  { title: "Adabiyotlar", path: "adabiyotlar" },
  { title: "Video", path: "video" },
  { title: "Maruza", path: "maruza" },
];
