import { Table, Column, Model, ForeignKey} from 'sequelize-typescript'
import Orden from './Orden';


@Table
export default class Shipping extends Model {
  @ForeignKey(() => Orden)
  @Column
  ordenId : number


  @Column({ allowNull: false })
  state: string


}