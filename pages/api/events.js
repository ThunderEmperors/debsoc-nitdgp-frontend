import ENDPOINTS, { BASE_URL } from "../../api/endpoints";


export default async function handler(req, res) {
  const payload = await req.body;
  const event = payload['event'];
  
  let upstream = null;

  if(event == 'past'){
    upstream = await fetch(ENDPOINTS.ALL_EVENTS);
  } else if (event == 'upcoming'){
    upstream = await fetch(ENDPOINTS.UPCOMING_EVENTS);
  }

  if(upstream){
    const data = await upstream.json();
    res.status(200).json(data);
  } else {
    res.status(400);
  }
  }