import pool from '../config/connectPG';
import { Role } from '../types/Roles';

export const addRole = (role: Role): Promise<Role> => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO rols (id,name, description) VALUES ($1, $2, $3) RETURNING *';
    const values = [role.id, role.name, role.description];

    pool.query(query, values)
      .then(result => {
        if (result.rows.length > 0) {
          resolve(result.rows[0]);
        } else {
          reject(new Error('Role not created'));
        }
      })
      .catch(err => {
        console.error('Error executing query', err);
        reject(err);
      });
  });
};

export const getRoleById = (id: string): Promise<Role | null> => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT customers.id AS customer_id, rols.id AS id, rols.name AS name FROM public.customers JOIN rols ON customers.rol = rols.id WHERE customers.id = $1';
    const values = [id];

    pool.query(query, values)
      .then(result => {
        if (result.rows.length > 0) {
          resolve(result.rows[0]);
        } else {
          resolve(null);
        }
      })
      .catch(err => {
        console.error('Error executing query', err);
        reject(err);
      });
  });
};

export const getAllRoles = (): Promise<Role[]> => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM rols';

    pool.query(query)
      .then(result => {
        resolve(result.rows);
      })
      .catch(err => {
        console.error('Error executing query', err);
        reject(err);
      });
  });
};

export const updateRole = (role: Role): Promise<Role> => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE rols SET name = $1, description = $2 WHERE id = $3 RETURNING *';
    const values = [role.name, role.description, role.id];

    pool.query(query, values)
      .then(result => {
        if (result.rows.length > 0) {
          resolve(result.rows[0]);
        } else {
          reject(new Error('Role not updated'));
        }
      })
      .catch(err => {
        console.error('Error executing query', err);
        reject(err);
      });
  });
};

export const deleteRole = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM rols WHERE id = $1';
    const values = [id];

    pool.query(query, values)
      .then(result => {
        if ((result.rowCount ?? 0) > 0) {
          resolve();
        } else {
          reject(new Error('Role not found'));
        }
      })
      .catch(err => {
        console.error('Error executing query', err);
        reject(err);
      });
  });
};