export type Experience = {
  company: string;
  description: string;
  start: Date;
  end?: Date | undefined;
};

export const experience: Experience[] = [
  {
    company: "Network agency",
    description: "Веб-студия, занимающаяся заказной разработкой приложений различной сложности",
    start: new Date("2022-03-01"),
    end: new Date("2023-07-01"),
  },
  {
    company: "NeoFamily",
    description:
      "Продуктовая компания, имеющая собственную EdTech-платформу для подготовки школьников к ЕГЭ",
    start: new Date("2023-07-01"),
  },
];
