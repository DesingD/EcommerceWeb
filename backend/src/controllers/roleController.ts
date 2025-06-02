import { Request, Response } from "express";
import {v4 as uuidv4} from "uuid";
import {addRole, getRoleById} from "../services/roleService"; 

export const aggRole = async (req: Request, res: Response) => {
    const data = req.body;
    const decoded = (req as any).decoded
    data.id = uuidv4();

    // validate if you can add a role
    const validRoles = ["SuperAdmin", "Owner",];
    const role = await getRoleById(decoded._id);
    if (!role || !validRoles.includes(role.name)) {
        return res.status(403).json({
            message: "You do not have permission to add a role",
        });
    }

    try{
        const result = addRole(data);
        if (!result) {
            return res.status(400).json({
                message: "Role already exists",
            });
        }

        res.status(200).json({
            message: "Role created",
            data: data,
        });
    }catch (error) {
        return res.status(500).json({
            message: "Error creating role",
            error: error,
        });
    }
}

export const getRoleByUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "Role ID is required",
        });
    }

    try {
        const role = await getRoleById(id);
        if (!role) {
            return res.status(404).json({
                message: "Role not found",
            });
        }

        res.status(200).json({
            message: "Role found",
            data: role,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching role",
            error: error,
        });
    }
}