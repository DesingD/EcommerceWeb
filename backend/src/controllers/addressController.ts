import { Request, Response } from "express";
import { getAdressByCustomerId, addAddress, getAllAddresses } from "../services/addressService";
import {v4 as uuidv4} from "uuid";

export const getAddressByUserId = (req: Request, res: Response ) => {
    const decoded = (req as any).decoded;

    // Ensure id is a string and exists
    if (typeof decoded._id !== "string") {
        return res.status(400).json({ error: "User ID header is required and must be a string" });
    }
    // Assuming you have a function to get address by user ID
    getAdressByCustomerId(decoded._id)
        .then((addresses) => {
            res.status(200).json(addresses);
        })
        .catch((error) => {
            res.status(500).json({ error: "Error fetching addresses" });
        });
}


export const aggAddress = async (req: Request, res: Response) => {
    const data = req.body;
    const decoded = (req as any).decoded

    if(!data) {
        return res.status(400).json({
            message: "No data provided",
        })
    }

    if(data.customer_id && decoded.data.rol !== 'SuperAdmin'){
       return res.status(403).json({
            message: "You do not have permission to add an address",
        })
    }

    if(!data.customer_id){
        console.log("esto esta actualizado por usuario normales")
        data.customer_id = decoded._id
    }else{
        console.log("esto esta actualizado por admin")
    }

    // agg id address
    data.id = uuidv4();

    try{
        const address = await addAddress(data);
        res.status(200).json({
            message: "Address created",
            data: address,
        })

    }catch (error) {
        return res.status(500).json({
            message: "Error creating address",
            error: error,
        })
    }
}

export const getAllAddreses = (req: Request, res: Response) => {
    try{
        getAllAddresses()
        .then((addresses) => {
            res.status(200).json(addresses);
        })
        .catch((error) => {
            res.status(500).json({ error: "Error fetching addresses" });
        });
    }catch (error) {
        return res.status(500).json({
            message: "Error fetching addresses",
            error: error,
    })}
}


