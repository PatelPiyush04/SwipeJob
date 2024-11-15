import React, { useEffect } from "react";

const useQuery = <T>(path: string) => {
  const [data, setData] = React.useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  console.log("workerId", path);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_API_URL}${path}`,
        );
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    run();
  }, [path]);

  return { data, isLoading, error };
};

export default useQuery;
