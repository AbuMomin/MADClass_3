import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  readonly id: number;

  @Column({ type: 'varchar', length: 100, name: 'username', nullable: false })
  readonly username: string;

  @Column({ type: 'varchar', length: 100, name: 'email', nullable: false })
  readonly email: string;

  @Column({ type: 'varchar', length: 20, name: 'phone', nullable: true })
  readonly phone: string;
}
