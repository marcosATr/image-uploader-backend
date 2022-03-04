async function uploadImage(req, res, next) {
  try {
    console.log(req.files);
    if (!req.files) {
      console.log("No file received");
      return res.send({
        success: false,
      });
    } else {
      console.log("file received");
      return res.status(201).send({
        success: true,
        filename: req.files[0].filename,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export { uploadImage };
