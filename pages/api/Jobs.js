import axios from "axios";
import {
  jobUrl,
  singleJobUrl,
  sendJobUrl,
} from "../../essentials/utils/apiEssentials";

export const fetchJobs = async () => {
  try {
    const res = await axios.get(jobUrl);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleJobs = async (jobSlug) => {
  try {
    const res = await axios.get(singleJobUrl(jobSlug));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendJobForm = async (data) => {
  try {
    const res = await axios.post(sendJobUrl, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
