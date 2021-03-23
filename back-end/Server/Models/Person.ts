import { Table, Column, Model, ForeignKey} from 'sequelize-typescript'
import User from './User';


@Table
export default class Business extends Model {
  @ForeignKey(() => User)
  @Column
  userId : number

  @Column({ allowNull: false })
  name: string

  @Column({ allowNull: false })
  lastname: string

  @Column({ allowNull: true })
  dni: number

  @Column({ allowNull: true })
  address: string

}