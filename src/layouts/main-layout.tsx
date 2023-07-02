import "regenerator-runtime/runtime";
import React from "react";

import { Button } from "@/components/ui/button";
import { marketingConfig } from "~/config/marketing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

import { signIn, signOut, useSession } from "next-auth/react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const session = useSession();
  // const { wallet, isSignedIn } = useContext(WalletContext)!;

  const handleLogin = async () => {
    // signIn()
  };

  const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />

          <nav>
            <Button
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
              disabled={session.status === "loading"}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={
                session.status === "authenticated" ? handleLogout : handleLogin
              }
            >
              {session.status === "authenticated" ? `Logout` : "Login"}
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
};

export default MainLayout;
