import pool from '../config/connectPG'
import { Customer } from '../types/Customers'

export const getUsers = (limit:number, offset: number): Promise<Customer[]> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM customers ORDER BY id LIMIT $1 OFFSET $2',[limit, offset] ,(error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows)
            }
        })
    })
}

export const getUserById = (id: string): Promise<Customer> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows[0])
            }
        })
    })
}

export const getUserByEmail= (email: string): Promise<Customer> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM customers WHERE email = $1', [email], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows[0])
            }
        })
    })
}

export const aggUsers = (data: Customer): Promise<Customer> => {
    return new Promise((resolve, reject) => {
        pool.query(
            'INSERT INTO customers (id, name, email, password_hash, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',[data.id, data.name, data.email, data.password_hash, data.phone],
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

export const deleteUser = (id: string): Promise<Customer> => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM customers WHERE id = $1 RETURNING *', [id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows[0])
            }
        })
    })
}

export const editUser = (id: string, data: Partial<Customer>): Promise<Customer> => {
    return new Promise((resolve, reject) => {
        // Construir dinámicamente las columnas y valores
        // Verificar que el objeto data no esté vacío
        const keys = Object.keys(data);
        const values = Object.values(data);

        // Crear la parte de SET dinámicamente
        const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

        // Agregar el ID como último parámetro
        values.push(id);

        // Construir la consulta
        const query = `UPDATE customers SET ${setClause} WHERE id = $${keys.length + 1} RETURNING *`;

        pool.query(query, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows[0]);
            }
        });
    });
};
