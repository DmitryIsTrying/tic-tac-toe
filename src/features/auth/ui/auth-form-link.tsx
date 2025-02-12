import Link from "next/link";

export function AuthFormLink({
  linkText,
  text,
  url,
}: {
  text: string;
  linkText: string;
  url: string;
}) {
  return (
    <p className="text-sm text-center text-primary/50">
      {text}{" "}
      <Link href={url} className="text-blue-500 hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
