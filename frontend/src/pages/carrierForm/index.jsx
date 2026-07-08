import axios from "axios";
import { useState } from "react";
import {
  FaBuilding,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";

const CarrierApplicationForm = () => {
  const [formData, setFormData] = useState({
    businessLegalName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    carrierMobile: "",
    otherCarrier: "",
    equipmentType: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/carrier-form/submit-carrier-form`,
        formData,
      );

      if (response.data.success) {
        alert("Carrier Application Submitted Successfully!");

        setFormData({
          businessLegalName: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          carrierMobile: "",
          otherCarrier: "",
          equipmentType: "",
          zipCode: "",
        });
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50 py-16 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-600">
            Slee Street Logistics LLC
          </span>

          <h1 className="mt-5 text-3xl font-bold text-[#1a1a4d] md:text-5xl">
            Carrier Information Form
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Please complete the information below to begin your carrier
            application. Our team will review your submission and contact you
            shortly.
          </p>
        </div>

        {/* Form Card */}

        <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-10">
          <div className="mb-8 border-b pb-6">
            <h2 className="text-2xl font-bold text-[#1a1a4d]">
              Carrier Information
            </h2>

            <p className="mt-2 text-gray-500">
              Enter your business and contact information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Legal Name */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                Business Legal Name <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="businessLegalName"
                  value={formData.businessLegalName}
                  onChange={handleChange}
                  placeholder="Enter Business Legal Name"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                  required
                />
              </div>
            </div>

            {/* First Name & Last Name */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Phone & Email */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Carrier Mobile & Equipment */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Carrier Mobile Provider{" "}
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    name="carrierMobile"
                    value={formData.carrierMobile}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-3 pl-4 pr-12 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                    required
                  >
                    <option value="">Select Mobile Provider</option>
                    <option>AT&T</option>
                    <option>T-Mobile</option>
                    <option>Verizon</option>
                    <option>Spectrum</option>
                    <option>Xfinity Comcast</option>
                    <option>Cox Mobile</option>
                    <option>Other</option>
                  </select>

                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {formData.carrierMobile === "Other" && (
                  <input
                    type="text"
                    name="otherCarrier"
                    value={formData.otherCarrier}
                    onChange={handleChange}
                    placeholder="Enter Mobile Provider"
                    className="mt-4 w-full rounded-xl border border-gray-300 py-3 px-4 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                    required
                  />
                )}
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Equipment Type <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <FaTruck className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <select
                    name="equipmentType"
                    value={formData.equipmentType}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                    required
                  >
                    <option value="">Select Equipment</option>
                    <option>Box Truck</option>
                    <option>Cargo Van</option>
                    <option>Sprinter Van</option>
                    <option>Dry Van</option>
                    <option>Semi</option>
                    <option>Hot Shot</option>
                    <option>Flatbed</option>
                    <option>Reefer</option>
                  </select>

                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* ZIP Code */}

            <div>
              <label className="mb-2 block font-semibold text-gray-700">
                ZIP Code <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-[#ff1493] focus:ring-4 focus:ring-pink-100"
                  required
                />
              </div>
            </div>
            {/* Submit Button */}

            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#1a1a4d] to-[#ff1493] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-200"
              >
                Submit Carrier Information
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By submitting this form, you agree that Slee Street Logistics LLC
            may contact you regarding your carrier application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarrierApplicationForm;
