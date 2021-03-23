import { Table, Column, Model, ForeignKey, DataType, BelongsToMany} from 'sequelize-typescript'
import User from './User';
import ProductInCart from './ProductInCart';
import Product from './Product';


@Table
export default class Orden extends Model {

  @ForeignKey(() => User)
  @Column
  userId : number

  @Column({ allowNull: false , type: DataType.ENUM("pending",'cancelled','completed')})
  state: string[]

  @BelongsToMany( () => Product ,() => ProductInCart)
  product : Product
}