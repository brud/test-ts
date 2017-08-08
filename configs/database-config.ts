export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
}

export const databaseConfig: DatabaseConfig = {
  username: "docker",
  password: "docker",
  database: "test",
  host: "127.0.0.1",
  port: 5432,
  dialect: "postgres",
  logging: true,
  force: true,
  timezone: "+00:00"
};
