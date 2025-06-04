import { Loader } from "lucide-react";

export function LoaderSpinner() {
  return (
    <div className="flex-center h-screen w-full">
      <Loader className="animate-spin text-orange-500" size={30} />
    </div>
  )
}