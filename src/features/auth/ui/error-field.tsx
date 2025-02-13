export function ErrorField({ error }: { error?: string }) {
  if (error) {
    return <p className="text-sm text-red-500">{error}</p>;
  }
  //Todo error handle
  // return error ? <p className="text-sm text-red-500">{error}</p> : null;
  return null;
}
