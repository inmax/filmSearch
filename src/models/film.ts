export interface Film {
  id?: string;
  title?: string;
  year?: string;
  director?: string;
  writer?: string;
  actors?: string;
  plot?: string;
  poster?: string;
  ratings?: {
    source: string;
    value: string;
  }[];
}
