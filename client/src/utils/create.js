import axios from "axios";

export default async function create(args, param, setState) {
  try {
    args = args || {};
    const data = args;
    const response = await axios.post(
      `http://localhost:3001/api/${param}`,
      data
    );
    return setState(response.data);
  } catch (err) {
    console.log(err);
  }
}
