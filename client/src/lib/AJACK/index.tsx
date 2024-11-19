const apiUrl = "http://localhost:4000";

function ajack(endpoint?, method?, config?) {
  var requestInfo = new Request(apiUrl, {
    method,
  });
  return fetch(requestInfo);
}

export default {
  get: (endpoint?: string, config?) => {
    var method = "GET";
    ajack(endpoint, method, config);
  },

  post: (endpoint?: string, config?) => {
    var method = "POST";
    ajack(endpoint, method, config);
  },
};
