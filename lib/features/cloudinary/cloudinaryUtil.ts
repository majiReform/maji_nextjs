import axios from "axios";


async function uploadFile(file: any, fileType: string) {

    const formData = new FormData();

    formData.append("file", file);

    formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    formData.append('public_id', process.env.NEXT_PUBLIC_PUBLIC_ID);
    formData.append('api_key', process.env.NEXT_PUBLIC_API_KEY);

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/${fileType == "picture" ? "image" : "file"}/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return response;

}


async function uploadFileToCloudinary(files: File | File[], fileType="file") {


    if (files instanceof File) {

        return await uploadFile(files, fileType);

    } else if (Array.isArray(files) && files.every((file) => file instanceof File)) {
        const filesArray = Array.from(files);
        const promises = filesArray.map(file => {
            return uploadFile(file, fileType);
        });

        return Promise.all(promises)
        .then((results) => {
            return {
                isSuccessful: true,
                results
            }
        })
        .catch((error) => {
            console.log(error);
            return {
                isSuccesful: false,
                error
            }
        });
    }

    console.log("File", files);

}

function deleteFileFromCloudinary(path: string) {
    console.log("Delete file");
}

export {
    uploadFileToCloudinary,
    deleteFileFromCloudinary
}
