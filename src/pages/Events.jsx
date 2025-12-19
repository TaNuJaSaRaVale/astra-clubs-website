const Events = () => {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-slate-900">
          Events
        </h1>
        <p className="mt-2 text-slate-600">
          Workshops, hackathons, talks, and activities conducted by ASTRA.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Event Card Placeholder */}
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-lg">Event Title</h3>
          <p className="text-sm text-slate-600 mt-2">
            Short description of the event.
          </p>
          <span className="text-xs text-purple-600 mt-3 inline-block">
            Date · Mode
          </span>
        </div>
      </div>
    </section>
  );
};

export default Events;
