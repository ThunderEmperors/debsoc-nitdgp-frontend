import ENDPOINTS, { BASE_URL } from "../../api/endpoints";

export default async function handler(req, res) {
  const year = req.query.year;
  console.log(year);
  let upstream = null;
  if(year == 0){ 
    upstream = await fetch(ENDPOINTS.SOPHOMORES);
  } else if (year == 1) {
    upstream = await fetch(ENDPOINTS.PRE_FINAL_YEAR);
  } else if (year == 2) {
    upstream = await fetch(ENDPOINTS.FINAL_YEAR);
  }

  if(upstream){
    const data = await upstream.json();
    res.status(200).json(data);
  }
  else {
    res.status(400);
  }

}