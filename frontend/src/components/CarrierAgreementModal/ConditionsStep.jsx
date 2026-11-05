export default function ConditionsStep({ setStep, agreementData }) {
  const isNewCarrier = agreementData.carrierType === "new";

  const sectionTitle = "text-xl sm:text-2xl font-bold text-[#02053D] mb-5";

  const subTitle = "text-lg sm:text-xl font-bold text-[#02053D] mb-3";

  const paragraph = "text-[#183B64] text-sm sm:text-base leading-8 mb-5";

  const list =
    "list-disc pl-6 space-y-3 text-[#183B64] text-sm sm:text-base leading-7 mb-6";

  return (
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="w-full max-w-5xl bg-white rounded-[30px] shadow-2xl overflow-hidden">
        <div className="max-h-[88vh] overflow-y-auto px-6 sm:px-10 py-8">
          {/* Back Button */}
          <button
            onClick={() => setStep(3)}
            className="text-blue-600 text-sm sm:text-base font-medium mb-6 hover:underline"
          >
            ← Back
          </button>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02053D] uppercase">
              Trucking Service Agreement
            </h1>

            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Step 3: Conditions
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-10">
            <div className="w-[70%] h-full bg-emerald-500 rounded-full"></div>
          </div>

          {/* Terms and Conditions */}
          <div>
            <h2 className={sectionTitle}>Terms and Conditions</h2>

            {/* Shipper Responsibilities */}
            <section className="mb-10">
              <h3 className={subTitle}>Shipper Responsibilities:</h3>

              <p className={paragraph}>
                The Shipper agrees to compensate{" "}
                <strong>Slee Street Logistics LLC</strong> for services performed,
                based on the rates and charges detailed in any applicable Load
                Confirmation(s), which amend this CARRIER SETUP / AGREEMENT if
                their terms differ. These documents also govern any additional
                services rendered. The Carrier may not invoice for extra charges
                unless explicitly approved in this CARRIER SETUP / AGREEMENT or
                the Load Confirmation(s). Any changes to rates can be discussed
                verbally but must be confirmed in writing within five business
                days to be enforceable by both parties.
              </p>

              <p className={paragraph}>
                As a prerequisite for payment, the Carrier must provide proof of
                delivery alongside its invoices, which must show that the
                freight was delivered to its intended destination.
              </p>

              <p className={paragraph}>
                <strong>a.</strong> The Shipper agrees to coordinate the
                transportation of their freight with{" "}
                <strong>Slee Street Logistics LLC</strong> in accordance with this
                CARRIER SETUP / AGREEMENT, and to comply with all applicable
                local, state, and federal transportation laws and regulations.
              </p>

              <p className={paragraph}>
                Both parties agree that the Shipper's duties under this CARRIER
                SETUP / AGREEMENT are solely limited to arranging the freight's
                transport through the Carrier. The Shipper is not responsible
                for physically transporting the freight, taking possession of
                it, or controlling how it is moved.
              </p>
            </section>

            {/* Security Deposit - New Carrier Only */}
            {isNewCarrier && (
              <section className="mb-10">
                <h3 className={subTitle}>Security Deposit (Refundable)</h3>

                <p className={paragraph}>
                  The Carrier is required to submit a security deposit of{" "}
                  <strong>$490</strong> via direct or instant payment to{" "}
                  <strong>Slee Street Logistics LLC</strong>. This deposit is
                  refundable after the Carrier completes their first delivery
                  and receives payment for the corresponding load. Upon payment
                  of the $490, the Carrier must obtain a receipt for the deposit
                  from a company representative.
                </p>

                <p className={paragraph}>
                  The deposit will also be refundable at the time of contract
                  termination, provided there are no pending obligations or
                  damages caused by the Carrier. The Carrier may terminate this
                  CARRIER SETUP / AGREEMENT by giving a written notice at least
                  one week in advance. Detention charges, if applicable, will be
                  the responsibility of the Shipper.
                </p>
              </section>
            )}

            {/* Payment Terms */}
            <section className="mb-10">
              <h3 className={subTitle}>Payment Terms</h3>

              <p className={paragraph}>
                To receive payment, the Carrier must submit a signed copy of the
                rate confirmation along with their company invoice to the
                Shipper.
              </p>

              <ul className={list}>
                <li>
                  <strong>Quick Pay:</strong> 2% fee for same-day deposit.
                </li>

                <li>
                  <strong>Standard Pay:</strong> No fee for deposit within 24
                  hours.
                </li>

                <li>
                  <strong>Cash On Delivery</strong> is also accepted.
                </li>
              </ul>
            </section>

            {/* Carrier Obligations */}
            <section className="mb-10">
              <h3 className={subTitle}>Carrier Obligations</h3>

              <p className={paragraph}>
                To qualify for accessorial or incidental charges, the Carrier
                must meet the following requirements:
              </p>

              <ul className={list}>
                <li>
                  Be checked in at the shipper or receiver by the scheduled
                  appointment time.
                </li>

                <li>
                  Submit all documentation for detention, accessorials, and
                  incidentals within 24-48 hours of delivery.
                </li>

                <li>Notify the Shipper after 60 minutes of waiting.</li>

                <li>
                  Detention begins 2 hours after appointment time at the
                  shipper/receiver.
                </li>

                <li>
                  Provide a time-stamped Bill of Lading (BOL) within 48 hours of
                  delivery.
                </li>
              </ul>

              {/* Detention Compensation */}
              <h4 className="text-base sm:text-lg font-bold text-[#02053D] mb-3">
                Detention Compensation:
              </h4>

              <ul className={list}>
                <li>$40/hour after 2 hours</li>
                <li>Maximum of $200 per stop</li>
              </ul>

              {/* Other Fees */}
              <h4 className="text-base sm:text-lg font-bold text-[#02053D] mb-3">
                Other Fees:
              </h4>

              <ul className={list}>
                <li>
                  <strong>Layover:</strong> $200 for Dry Van, $250 for Running
                  Reefer
                </li>

                <li>
                  <strong>TONU (Truck Order Not Used):</strong> $200
                </li>
              </ul>

              <p className={paragraph}>
                All delays or cancellations must be approved and confirmed by
                the Shipper.
              </p>
            </section>

            {/* Terms */}
            <section className="mb-10">
              <h3 className={subTitle}>Terms</h3>

              <p className={paragraph}>
                This CARRIER SETUP / AGREEMENT shall remain in effect for a
                period of <strong>90 days</strong>, starting from the date
                stated above. Unless either party chooses to cancel, the CARRIER
                SETUP / AGREEMENT will automatically renew for successive
                one-year terms. Either party may terminate the CARRIER SETUP /
                AGREEMENT at any time by providing{" "}
                <strong>thirty (30) days'</strong> written or electronic notice,
                provided that all outstanding balances have been settled.
              </p>

              <p className={paragraph}>
                This CARRIER SETUP / AGREEMENT does not exempt the
                Carrier/Shipper from any legal or regulatory penalties if
                discrepancies are found during a cargo inspection or in the
                review of customs-related documents.
              </p>

              <p className={paragraph}>
                All responsibilities under applicable{" "}
                <strong>Canadian and U.S. laws</strong>, including Customs
                Regulations, remain in full force for the Carrier/Shipper.
              </p>
            </section>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() => setStep(3)}
              className="w-1/2 bg-gray-200 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-300 transition"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                if (agreementData.carrierType === "new") {
                  setStep(5);
                } else {
                  setStep(6);
                }
              }}
              className="w-1/2 bg-emerald-500 text-white py-4 rounded-2xl font-semibold hover:bg-emerald-600 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
