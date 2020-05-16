export class Order_Product{
  constructor(public O_id:number,
    public O_amount:number,
    public FK_P_id:number,
    public FK_Email_id:string,
    public O_status:string,
    public P_id: number,
    public P_name: string,
    public P_price: number,
    public P_img: string,
    public P_color: string,
    public P_mfg: string,
    public FK_Cat_id: number,
    public P_soh: number,
    public P_desc: string,
  ){}
}
