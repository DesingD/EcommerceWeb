import pool from '../config/connectPG'
import { Product } from '../types/Products'

export const getProducts = (limit:number, offset: number): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2',[limit, offset] ,(error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows)
            }
        })
    })
}

export const getProductById = (id: string): Promise<Product> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows[0])
            }
        })
    })
}

export const addProduct = (data: Product): Promise<Product> => {
    return new Promise((resolve, reject) => {
        pool.query(
            'INSERT INTO products (id, name, description, price, stock, is_active, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',[data.id, data.name, data.description, data.price, data.stock, data.is_active, data.image_url],
            (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows[0])
            }
            }
        )
    })
}

export const deleteProduct = (id: string): Promise<Product> => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows[0])
            }
        })
    })
}

export const editProduct = (id: string, data: Partial<Product>): Promise<Product> => {
    return new Promise((resolve, reject) => {
        // Construir dinámicamente las columnas y valores
        // Verificar que el objeto data no esté vacío
        if (Object.keys(data).length === 0) {
            return reject(new Error("No fields provided to update."));
        }


        const keys = Object.keys(data);
        const values = Object.values(data);

        // Crear la parte de SET dinámicamente
        const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

        // Agregar el ID como último parámetro
        values.push(id);

        // Construir la consulta
        const query = `UPDATE products SET ${setClause} WHERE id = $${keys.length + 1} RETURNING *`;

        pool.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows[0]);
            }
        });
    });
};
