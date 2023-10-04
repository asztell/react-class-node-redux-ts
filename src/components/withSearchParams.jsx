import { useSearchParams } from "react-router-dom";

export const withSearchParams = (Component) => {
  return (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
      <Component
        {...props}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    );
  };
};
