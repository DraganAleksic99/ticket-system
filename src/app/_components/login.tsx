"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../supabase-utils/browser-client";

export const Login = ({ isPasswordLogin }: { isPasswordLogin: boolean }) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/tickets");
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      action={isPasswordLogin ? "/auth/pw-login" : "/auth/magic-link"}
      method="POST"
      onSubmit={(event) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isPasswordLogin && event.preventDefault();

        if (isPasswordLogin) {
          supabase.auth
            .signInWithPassword({
              email: emailInputRef.current!.value,
              password: passwordInputRef.current!.value,
            })
            .then((result) => {
              if (result.data?.user) {
                router.push("/tickets");
              } else {
                alert("Could not sign in");
              }
            });
        }
      }}
    >
      <article style={{ maxWidth: "480px", margin: "auto" }}>
        <header>Login</header>
        <fieldset>
          <label htmlFor="email">
            Email
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              name="email"
              required
            />
          </label>
          {isPasswordLogin && (
            <label htmlFor="password">
              Password
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                name="password"
              />
            </label>
          )}
        </fieldset>
        <p>
          {isPasswordLogin ? (
            <Link href={{ pathname: "/", query: { magicLink: "yes" } }}>
              Go to Magic Link Login
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
        </p>
        <button type="submit">
          Sign in with
          {isPasswordLogin ? " Password" : " Magic Link"}
        </button>
      </article>
    </form>
  );
};
