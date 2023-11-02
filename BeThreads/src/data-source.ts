import "reflect-metadata"
import { DataSource } from "typeorm"
// import "dotenv/config"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "threads-be",
    // type: "postgres",
    // host: process.env.DB_HOST,
    // port: 5432,
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
})
