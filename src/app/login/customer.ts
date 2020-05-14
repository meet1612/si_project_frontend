export class Customer {
  constructor(
    public Email_Id: string,
    public Password: string,
    public Username?: string,
    public Gender?: string,
    public Age?: number,
    public Mobile?: string,
    public City?: string,
    public Address?: string
  ) { }
}
