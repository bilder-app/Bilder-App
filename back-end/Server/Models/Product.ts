import { Table, Column, Model,ForeignKey, DataType, BelongsToMany} from 'sequelize-typescript'
import Business from './Business'
import Orden from './Orden'
import ProductInCart from './ProductInCart'

@Table
export default class Product extends Model {
  @ForeignKey(() => Business)
  @Column
  businessId : number

  @Column({ allowNull: false })
  name: string

  @Column({ allowNull: false })
  description: string

  @Column({ allowNull: false })
  price: number

  @Column({ allowNull: false })
  stock: number

  @Column({ allowNull: false , type: DataType.ARRAY(DataType.STRING)})
  images: []

  @BelongsToMany( () => Orden ,() => ProductInCart)
  orden : Orden

}