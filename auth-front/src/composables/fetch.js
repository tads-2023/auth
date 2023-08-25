
export function useFetch(url, method, headers, body, callback) {
  fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body)
  }).then((res) => res.json())
    .then((json) => (callback(json, null)))
    .catch((err) => (callback(null, err)))
}