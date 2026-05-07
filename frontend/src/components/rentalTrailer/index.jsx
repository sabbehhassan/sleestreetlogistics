import { Truck, ShieldCheck, Clock, DollarSign, ArrowRight } from "lucide-react";
import trailerImg from "../../assets/new/6.png";

export default function RentedTrailerProgram({ setOpenAgreement }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE + FLOATING STATS */}
          <div className="relative">

            <img
              src={trailerImg}
              alt="Trailer Rental"
              className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />

            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <Truck className="text-blue-600" />
              <div>
                <h4 className="font-bold text-sm">50+ Trailers</h4>
                <p className="text-xs text-gray-500">Available Fleet</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
              <DollarSign className="text-blue-600" />
              <div>
                <h4 className="font-bold text-sm">Affordable</h4>
                <p className="text-xs text-gray-500">Pricing Plans</p>
              </div>
            </div>

          </div>

          {/* RIGHT - CONTENT */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Rented Trailer Program
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Access a wide range of high-quality trailers without heavy
              investment. Our rental program is designed to help carriers
              scale quickly, reduce costs, and stay flexible.
            </p>

            {/* Feature List */}
            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <Truck className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Multiple Trailer Options</h4>
                  <p className="text-sm text-gray-600">
                    Flatbed, lowbed, and specialized trailers for all cargo types.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <DollarSign className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Cost Saving Model</h4>
                  <p className="text-sm text-gray-600">
                    Avoid upfront investment and pay only for what you use.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Flexible Duration</h4>
                  <p className="text-sm text-gray-600">
                    Daily, weekly, or long-term rental options available.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Maintained & Safe</h4>
                  <p className="text-sm text-gray-600">
                    Regularly inspected equipment for maximum reliability.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA BUTTON */}
            <div className="mt-10">
              <button
                onClick={() => setOpenAgreement(true)}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-200"
              >
                Apply For Trailer Agreement
                <ArrowRight size={20} />
              </button>

              <p className="text-sm text-gray-500 mt-3">
                Interested in renting a trailer? Fill out the agreement form to get started.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}