import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${process.env.HOME}/.config/article/storage.db`,
  logging: false
});

const syncDatabase = async () => {
  try {
      await sequelize.sync();
      console.log('Database synchronized successfully.');
  } catch (error) {
      console.error('Failed to sync database:', error);
  }
};
syncDatabase();

export default sequelize;
