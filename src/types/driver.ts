export interface Driver {
  name: string;
  photo: string;
  experience: number;
  states: string[];
  specialty: string;
  languages: string[];
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  route?: string;
}
