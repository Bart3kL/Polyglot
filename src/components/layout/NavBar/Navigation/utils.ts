export const navigationList = [
  { name: "Słownik", href: "/slownik" },
  { name: "Ranking", href: "/ranking" },
  {
    name: "Nauka",
    href: "/science",
    subMenu: [
      {
        name: "Lekcje",
        href: "/lessons",
        description: "Słownictwo, gramatyka i ćwiczenia ",
      },
      {
        name: "Powtórki",
        href: "/repetitions",
        description: "Powtarzaj efektywnie",
      },
      {
        name: "Fiszki",
        href: "/flashcards",
        description: "Ucz się metodą Leitnera",
      },
      {
        name: "Notatki",
        href: "/notes",
        description: "Twórz własne notatki",
      },
      {
        name: "Słuchanie",
        href: "/listening",
        description: "Ucz się słuchając wymowy słówek",
      },
      {
        name: "Wisielec",
        href: "/hangman",
        description: "Pisz poprawnie",
      },
    ],
  },
];
