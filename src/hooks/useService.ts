import { useEffect, useRef, useState, useCallback } from "react";
import { isEqual } from "lodash";
// interface CallbackProps {
//   loading: boolean;
//   error: any;
//   response: any;
// }
const useService = (service: any, params: any) => {
  const prevParams = useRef(null);
  const { callback, loading, error, response } = useServiceCallback(service);
  useEffect(() => {
    if (!isEqual(prevParams.current, params)) {
      prevParams.current = params;
      callback(params);
    }
  });
  return { loading, error, response };
};
const useServiceCallback = (service: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const callback = useCallback(
    (params) => {
      setLoading(true);
      setError(null);
      service(params)
        .then((response: any) => {
          console.log(response);
          setLoading(false);
          setResponse(response);
        })
        .catch((error: any) => {
          setLoading(false);
          setError(error);
        });
    },
    [service]
  );
  return { callback, loading, error, response };
};
export default useService;
