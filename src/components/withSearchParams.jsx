import { useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export function withSearchParams(Component) {
  return (props) => {
    const [searchParams, setSearchParams] = useSearchParams({});
    const setSearchParamsRef = useRef(setSearchParams);
    setSearchParamsRef.current = setSearchParams;
    const refedSetSearchParams = useCallback((...args) => {
      console.log("args", args);
      return setSearchParamsRef.current(...args);
    }, []);
    return (
      <Component
        {...props}
        searchParams={searchParams}
        setSearchParams={refedSetSearchParams}
      />
    );
  };
}

export function getSearchParams(searchParams) {
  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}
