const baseURL = "http://localhost:7000"; // use your own URL here or environment variable

class ApiError extends Error {
  constructor(public data: unknown) {
    super("Api Error");
  }
}
export const createInstance = async <T>({
  url,
  method,
  params,
  headers,
  data,
}: {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  params?: Record<string, string>;
  data?: BodyType<unknown>;
  headers?: HeadersInit;
  responseType?: string;
}): Promise<T> => {
  const response = await fetch(
    `${baseURL}${url}` + new URLSearchParams(params),
    {
      method: method.toUpperCase(),
      credentials: "include",
      headers,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  if (!response.status.toString().startsWith("2")) {
    throw new ApiError(response);
  }
  return response.json();
};

export type ErrorType<Error> = Error;
export type BodyType<BodyData> = BodyData;
