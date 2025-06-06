import { Request, response, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { UploadedFile } from "express-fileupload";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_NAME_KEY,
    api_secret: process.env.CLOUDINARY_NAME_SECRET
})

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id, type } = req.body


        const createProductService = new CreateProductService()

        if (type !== "retirada" && type !== "encomenda") {
            return res.status(400).json({ error: "Tipo de produto inválido" });
        }

        if (!req.files || !req.files['file']) {
            throw new Error("error upload file")
        } else {

            // const { originalname, filename: banner } = req.file
            const file: UploadedFile = req.files['file']

            const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, function (error, result) {
                    if (error) {
                        reject(error);
                        return
                    }

                    resolve(result)
                }).end(file.data)
            })

            console.log(resultFile)




            const product = await createProductService.execute({
                name,
                price,
                description,
                banner: resultFile.url,
                category_id,
                type: type === "encomenda" ? "encomenda" : "retirada",
            })

            return res.json(product)
        }

    }


}

export { CreateProductController }