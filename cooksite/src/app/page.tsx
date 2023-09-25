import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-2xl font-semibold">Chat with your Docs!</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            { isAuth && 
            <Button>Go to Chat History!  </Button>
            }
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-600">Join hundreds of businesses making the leap to quantum intellegence!</p>

          <div className="w-full mt-4">
            { isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
              <Button>Login to Start
                <LogIn className="w-4 h-4 ml-4"/>
              </Button>
              </Link>
            ) }
          </div>
        </div>
      </div>
    </div>
  )
}

