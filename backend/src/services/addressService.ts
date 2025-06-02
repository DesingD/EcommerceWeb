import pool from '../config/connectPG'
import { Address } from '../types/Addresses'

export const getAdressByCustomerId = (customerId: string): Promise<Address[]> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM addresses WHERE customer_id = $1 AND alternative = true', [customerId], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows)
            }
        })
    })
}

export const addAddress = (address: Address): Promise<Address> => {
    return new Promise((resolve, reject) => {
        const { id, customer_id, street, city, state, zip_code, country, alternative } = address
        pool.query(
            'INSERT INTO addresses (id ,customer_id, street , city, state, zip_code, country, alternative) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [id ,customer_id, street , city, state, zip_code, country, alternative],
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

export const getAllAddresses = (): Promise<Address[]> => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM addresses', (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.rows)
            }
        })
    })
}