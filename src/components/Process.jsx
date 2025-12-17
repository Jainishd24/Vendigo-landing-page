export default function Process() {
  return (
   <section className="bg-blue-50 py-16">
    <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-16">
          A Simple, Non-Disruptive 3-Week Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Week 1", "Week 2", "Week 3"].map((week, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <h3 className="font-semibold mb-3">{week}</h3>
              <p className="text-sm text-gray-600">
                Discovery, validation and documentation phase
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
