export type Experience = {
  company: string;
  description: string;
  start: Date;
  end?: Date | undefined;
};

export const experience: Experience[] = [
  {
    company: "Network agency",
    description:
      "Network Agency - студия, занимающая заказной разработкой приложений различной сложности",
    start: new Date("2022-06-01"),
    end: new Date("2023-10-01"),
  },
  {
    company: "NeoFamily",
    description:
      "NeoFamily — продуктовая компания, имеющая собственную EdTech-платформу для подготовки школьников к ЕГЭ",
    start: new Date("2023-10-01"),
  },
];
