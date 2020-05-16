export class Order {
  constructor(
    public O_id:number,
    public O_amount:number,
    public FK_P_id:number,
    public FK_Email_id:string,
    public O_status:string
  ) {}
}
