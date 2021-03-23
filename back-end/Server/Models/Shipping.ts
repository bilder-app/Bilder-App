import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import Orden from "./Order";

@Table
export default class Shipping extends Model {
  @ForeignKey(() => Orden)
  @Column
  ordenId: number;

  @Column({ allowNull: false })
  state: string;
}
