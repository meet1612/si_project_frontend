export class Product {
  constructor(
    public P_id: number,
    public P_name: string,
    public P_price: number,
    public P_img: string,
    public P_color: string,
    public P_mfg: string,
    public FK_Cat_id: number,
    public P_soh: number,
    public P_desc: string,
  ) {}
}
