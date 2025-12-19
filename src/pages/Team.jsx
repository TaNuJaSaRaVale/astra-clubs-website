const Team = () => {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-4xl font-bold text-slate-900">
          Our Team
        </h1>
        <p className="mt-2 text-slate-600">
          Meet the people behind ASTRA.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Team Member Card Placeholder */}
        <div className="rounded-xl bg-white p-5 text-center shadow-sm">
          <div className="h-24 w-24 mx-auto rounded-full bg-slate-200" />
          <h3 className="mt-4 font-semibold">Name</h3>
          <p className="text-sm text-slate-600">Role</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
