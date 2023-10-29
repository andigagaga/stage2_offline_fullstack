import * as multer from "multer";

const storage: multer.StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/Upload")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload: multer.Multer = multer({
    storage: storage
})

export default upload;

