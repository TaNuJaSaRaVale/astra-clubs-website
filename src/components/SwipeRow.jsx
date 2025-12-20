export default function SwipeRow({ children }) {
  return (
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      {children}
    </div>
  );
}
