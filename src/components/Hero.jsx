import heroImage from "../assets/hero-image.png";
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-blue-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left">
          <h1 className="text-4xl font-semibold leading-tight mb-4">
            Know Exactly <br />
            Where Your IT Stands.
          </h1>

          <p className="text-gray-600 mb-6 max-w-md">
            Structured, non-disruptive IT assessments across
            security, compliance, infrastructure, and cost.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE (FIGMA STYLE) */}
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-200 rounded-3xl opacity-60"></div>

          <div className="relative bg-white rounded-2xl p-3 shadow-xl">
            <img
              src={heroImage}
              alt="IT Health Check"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
