export default function SwipeRow({ children }) {
  return (
    <div className="relative">
      <div
        className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {children}
      </div>
    </div>
  );
}
