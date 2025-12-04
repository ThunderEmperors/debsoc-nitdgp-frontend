import ENDPOINTS, { BASE_URL } from "../../api/endpoints";

export default async function handler(req, res) {
  const year = req.query.year;

  const upstream = await fetch(ENDPOINTS.ALUMNI + year);
  const data = await upstream.json();

  res.status(200).json(data);
}