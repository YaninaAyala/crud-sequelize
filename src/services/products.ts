import { where } from "sequelize";
import Product from "../models/product";
import { Op } from "sequelize";

class ProductsService {
  static async getAll(props: any) {
    try {
      const where: any = {};
      if (props.maxCost) {
        where.maxCost = { [Op.lt]: props.maxCost };
      }
      const products = await Product.findAll({ where: where });
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      const productById = await Product.findByPk(id);
      return productById;
    } catch (error) {
      throw error;
    }
  }

  static async create() {
    try {
      const product = await Product.create();
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async update(id: string, data: object) {
    try {
      const [product] = await Product.update(data, { where: { id } });
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id: string) {
    try {
      const product = await Product.destroy({ where: { id } });
      return product;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
