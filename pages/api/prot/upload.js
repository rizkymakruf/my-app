import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import fetchJson, { FetchError } from "lib/fetchJson";
const { cloudinaryUpload } = require('lib/cloudinary');

export default withIronSessionApiRoute(async (req, res) => {

  const user = req.session.user;
  if (!user || user.isLoggedIn === false) {
    return res.status(401).end();
  }

  if (!req.body.image) {
    return res.status(500).json({
      message: 'Image is not presented!'
    })
  }

  try {
    const uploadResult = await cloudinaryUpload(req.body.image);
    res.status(200).json(uploadResult)
  } catch (e) {
    res.status(500).json({ message: "error, please retry..!!" });
  }

}, sessionOptions);
