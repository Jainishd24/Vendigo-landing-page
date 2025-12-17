export default function Documentation() {
  return (
    <section className="py-16">
    <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Clear Documentation You Can Act On
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mt-10 text-left">
          {[
            "Executive Summary",
            "Risk Register",
            "Remediation Roadmap",
            "Technical Recommendations",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
