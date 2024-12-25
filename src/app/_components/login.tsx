"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "../supabase-utils/browser-client";
import { urlPath } from "../utils/url-helpers";

export enum FormType {
  passwordRecovery = "recovery",
  passwordLogin = "pw-login",
  magicLink = "magic-link",
}

export const Login = ({
  formType,
  tenant,
  tenantName
}: {
  formType: FormType;
  tenant: string;
  tenantName: string;
}) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  const isPasswordRecovery = formType === "recovery";
  const isPasswordLogin = formType === "pw-login";
  const isMagicLinkLogin = formType === "magic-link";

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push(`/${tenant}/tickets`);
      }
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form
      action={
        isPasswordLogin
          ? urlPath("/auth/pw-login", tenant)
          : urlPath("/auth/magic-link", tenant)
      }
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
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              !result.data?.user && alert("Could not sign in");
            });
        }
      }}
    >
      {isPasswordRecovery && (
        <input type="hidden" name="type" value="recovery" />
      )}
      <article style={{ maxWidth: "480px", margin: "auto" }}>
        <header>
          {isPasswordRecovery && <strong>Request new password</strong>}
          {!isPasswordRecovery && <strong>Login</strong>}
          <div style={{ display: "block", fontSize: "0.7em" }}>{tenantName}</div>
        </header>
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

        <button type="submit">
          {isPasswordLogin && "Sign in with Password"}
          {isPasswordRecovery && "Request new password"}
          {isMagicLinkLogin && "Sign in with Magic Link"}
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          {!isPasswordLogin && (
            <Link
              role="button"
              className="contrast"
              href={{
                pathname: `/${tenant}/`,
                query: { magicLink: "no" },
              }}
            >
              Go to Password Login
            </Link>
          )}
          {!isMagicLinkLogin && (
            <Link
              role="button"
              className="contrast"
              href={{
                pathname: `/${tenant}/`,
                query: { magicLink: "yes" },
              }}
            >
              Go to Magic Link Login
            </Link>
          )}
        </div>
        {!isPasswordRecovery && (
          <Link
            href={{
              pathname: `/${tenant}/`,
              query: { passwordRecovery: "yes" },
            }}
            style={{
              textAlign: "center",
              display: "block",
            }}
          >
            Go to Password Recovery
          </Link>
        )}
      </article>
    </form>
  );
};
