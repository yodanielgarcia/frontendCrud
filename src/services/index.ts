import axios from "axios";

export default {
  getRequest(url: string) {
    let config = {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNTY2MjQ4MTYwfQ.X5xYZpssydFjt3ZPsN41Q-RENfbtYBbqjPK0GW3mqQQ",
        auth: "ADMIN",
      },
    };
    return axios
      .get(url, config)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        // Capturamos los errores
      });
  },
};
