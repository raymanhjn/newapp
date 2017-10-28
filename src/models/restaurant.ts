
export interface Order {
  uid:string,
  contact:Contact,
  order: Item[],
  count: number,
  status:string,
}

export interface Item {
  food: Food,
  number: number,
}

export interface Contact {
  contact_name:string,
  address: string,
  phone:string,
}

export interface Food {
  name: string,
  image:string,
  price: number,
  type:string,
  description:string,
}
