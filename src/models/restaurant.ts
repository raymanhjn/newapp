
export interface Order {
  uid:string,
  contact:Contact,
  order: Item[],
  count: number,
  status:string,
}

export interface Item {
  food: {},
  number: number,
}

export interface Contact {
  contact_name:string,
  address: string,
  phone:string,
}
