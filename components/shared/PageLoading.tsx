import { Skeleton } from '../ui/skeleton';

export function PageLoading() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-8 w-[250px]" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={`skeleton-${i}`} className="h-[200px] rounded-lg" />
        ))}
      </div>
    </div>
  );
}
