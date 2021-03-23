import { Table, Column, Model, ForeignKey} from 'sequelize-typescript'
import Orden from './Orden'
import Product from './Product'

@Table
export default class ProductInCart extends Model {

  @ForeignKey(() => Product)
  @Column
  productId : number

  @ForeignKey(() => Orden)
  @Column
  ordenId : number

  @Column({ allowNull: false })
  amount: number

  @Column({ allowNull: false })
  price: number

}