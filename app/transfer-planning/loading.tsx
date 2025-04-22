import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48 mt-2" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      <Skeleton className="h-10 w-full max-w-4xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Skeleton className="h-[600px] w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-[250px] w-full rounded-lg mt-6" />
        </div>
      </div>
    </div>
  )
}
