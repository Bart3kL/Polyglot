import { authOptions } from "./api/auth/[...nextauth]";

import { useSession } from "next-auth/react";
export default function handler() {
  const { data } = useSession();
  if (data) {
    return (
      <p>
        "This is protected content. You can access this content because you are
        signed in.",
      </p>
    );
  } else {
    return (
      <p>
        "You must be signed in to view the protected content on this page.",
      </p>
    );
  }
}
