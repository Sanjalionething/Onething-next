import axios from "axios";
import { contactUrl } from "../../essentials/utils/apiEssentials";

export const SendForm = (data) => {
  const res = axios.post(contactUrl, data);
  return res;
};
