// Liczby pod hero na stronie głównej.

export interface HomeStat {
  value: string;
  label: string;
}

export const homeStats: HomeStat[] = [
  { value: "10", label: "lat doświadczenia" },
  { value: "Setki", label: "prowadzonych projektów" },
  { value: "Tysiące", label: "fraz w TOP 10" },
];
