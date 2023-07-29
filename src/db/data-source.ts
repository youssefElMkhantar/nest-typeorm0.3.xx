import { NewMigration1690462844456 } from '../../dist/db/1690462844456-newMigration';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../users/entities/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  //   entities: ['dist/**/*.entities{.js,.ts}'],
  entities: [User],
  migrations: ['dist/db/migrations/*{.js,.ts}'],
  //   migrations: [NewMigration1690462844456],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
