const { meetups } = require("./data.json");

export default (req, res) => {
  const mtp = meetups.filter((mt) => mt.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(mtp);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
