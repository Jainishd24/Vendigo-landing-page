const areas = [
  "Security",
  "Compliance",
  "Infrastructure",
  "Cost",
  "Operations",
  "Strategy",
];

export default function CriticalAreas() {
  return (
    <section className="py-16">
    <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          #6 Critical Areas We Examine
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {areas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="font-medium text-lg">{item}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Risk analysis & actionable insights
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
