import pool from '../config/connectPG'
import { Customer } from '../types/Customers'

export const getUsers = (): Promise<Customer[]> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM customers', (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows)
            }
        })
    })
}