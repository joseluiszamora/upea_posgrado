export type Course = {
  heading: string;
  imgSrc: string;
  name: string;
  slug: string;
  dateStart: string;
  classes: number;
  price: number;
  modality: string;
  duration: string;
  dates: string;
  desc: string;
  requirements: Array<string>;
  modules: Array<string>;
};

export function findItemBySlug(
  items: Course[],
  slug: string
): Course | undefined {
  return items.find((item) => item.slug === slug);
}
