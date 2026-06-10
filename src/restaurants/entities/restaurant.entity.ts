import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('restaurants')
export class Restaurant {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    cuisine: string; //ปรเภทอาหาร

    @Column({ type: 'text', length: 255 })
    address: string;

    @Column({ type: 'decimal', precision: 2, scale: 1, default: 0.0 })
    rating: number; //คะแนนรีวิว

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}