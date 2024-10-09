"use client"

import { Button } from "@/components/ui/button"
import { useAuthActions } from "@convex-dev/auth/react"



export default function Home() {
  
  const { signOut } = useAuthActions();
  return (
    <div>
      logged in
      <Button onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  )
}
