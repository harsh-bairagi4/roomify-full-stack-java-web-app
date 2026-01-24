export default function GymsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">
        Gyms
      </h2>
      <p className="mt-1 text-slate-600">
        Fitness centers near your stay
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <h3 className="font-semibold text-slate-900">
              Gym {i}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Cardio • Weights • Trainer
            </p>
            <p className="mt-3 font-medium text-slate-900">
              ₹1,200 / month
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
