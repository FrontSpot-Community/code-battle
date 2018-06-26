import axios from 'axios';

import {AMI_ENDPOINT} from '../endpoints/index';

export const postToAmi = (data) => {
  return axios.post(AMI_ENDPOINT, data);
};
