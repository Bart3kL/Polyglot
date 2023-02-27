export const navigationList = [
  { name: "Słownik", href: "/slownik" },
  { name: "Ranking", href: "/ranking" },
  {
    name: "Nauka",
    href: "/nauka",
    subMenu: [
      {
        name: "Panel",
        href: "/nauka",
        description: "Śledź swoje postępy",
      },
      {
        name: "Lekcje",
        href: "/nauka/lekcje",
        description: "Słownictwo, gramatyka i ćwiczenia",
      },
      {
        name: "Powtórki",
        href: "/nauka/powtorki",
        description: "Powtarzaj efektywnie",
      },
      {
        name: "Fiszki",
        href: "/nauka/fiszki",
        description: "Ucz się metodą Leitnera",
      },
      {
        name: "Notatki",
        href: "/nauka/notatki",
        description: "Twórz własne notatki",
      },
      {
        name: "Słuchanie",
        href: "/nauka/sluchanie",
        description: "Ucz się słuchając wymowy słówek",
      },
      {
        name: "Wisielec",
        href: "/nauka/wisielec",
        description: "Pisz poprawnie",
      },
    ],
  },
];
