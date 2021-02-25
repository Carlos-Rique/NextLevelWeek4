import {Connection, createConnection, getConnectionOptions} from "typeorm";

export default async (): Promise<Connection> => {

  const defaultOptions = await getConnectionOptions();

  // createConnection method will automatically read connection options
  // from your ormconfig file or environment variables
  return createConnection(
    Object.assign(defaultOptions, {
      database: process.env.NODE_ENV === 'test' 
        ? "./src/database/database.test.sqlite" 
        : defaultOptions.database
    })
  );
}