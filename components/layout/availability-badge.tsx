export default function AvailabilityBadge() {
  return (
    <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300 lg:flex">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      Available
    </div>
  );
}