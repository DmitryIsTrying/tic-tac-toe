import { useEffect, useState } from "react";

export function useEventsSource<T>(url: string) {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const gameEvents = new EventSource(url);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMessage = (message: MessageEvent<any>) => {
      try {
        setIsPending(false);
        setError(null);
        setData(JSON.parse(message.data));
      } catch {
        console.error("event parse error");
      }
    };
    const handleError = (error: Event) => {
      setError(error);
    };
    gameEvents.addEventListener("message", handleMessage);
    gameEvents.addEventListener("error", handleError);

    return () => {
      gameEvents.close();
      gameEvents.removeEventListener("message", handleMessage);
      gameEvents.removeEventListener("error", handleError);
    };
  }, [url]);

  return { dataStream: data, error, isPending };
}
