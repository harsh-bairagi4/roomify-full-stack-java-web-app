export default function RoomsSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">
        Rooms
      </h2>
      <p className="mt-1 text-slate-600">
        Private rooms available near your location
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <h3 className="font-semibold text-slate-900">
              Sample Room {i}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              WiFi • RO • Furnished
            </p>
            <p className="mt-3 font-medium text-slate-900">
              ₹6,000 / month
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
