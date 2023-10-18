import { DataSource } from "typeorm";
import { ParameterStore } from "../../utils/ParameterStore";
import { globSync } from "glob";
import { join } from "path";

const entities: String[] = globSync("./src/**/infrastructure/entity/*.entity.{ts, js}")
    .map((routes: string) => join(process.cwd(), routes));

export const appDataSource = new DataSource({
    type: ParameterStore.DB_DIALECT as any,
    host: ParameterStore.DB_HOST,
    port: Number(ParameterStore.DB_PORT),
    password: ParameterStore.DB_PASSWORD,
    username: ParameterStore.DB_USER,
    database: ParameterStore.DB_NAME,
    entities: entities as any,
    migrations: [
        join(process.cwd(), "src/migrations/**/*.ts")
    ],
    migrationsTableName: "migrations",
    synchronize: false,
});