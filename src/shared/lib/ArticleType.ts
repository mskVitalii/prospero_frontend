/** Адрес */
export type Address = {
  coords: [number, number],
  country: string,
  city: string,
  additional?: string,
}

export type Article = {
  name: string,
  description: string,
  URL: string,
  image: string,
  address: Address,
  publisher: {
    name: string,
    address: Address,
  },
  categories: any[],
  // tags: any[],
  people: {
    // address: Address,
    type: string,
    fullName: string,
  }[],
  // companies?: [{
  //   name: string,
  //   country: string,
  // }],
  links: string[],
  emotionalDescription?: string,
  datePublished: string | Date,
}