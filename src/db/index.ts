import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgresql://db-practicas_owner:1YEzy8bJHLfI@ep-flat-surf-a53cwj4m.us-east-2.aws.neon.tech/db-practicas?sslmode=require"
);

export default sequelize;
export { DataTypes };
