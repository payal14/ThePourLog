import { Mail, Gift, Bell } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="p-12 flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit mb-6">

                <Gift size={20} />

                Exclusive Offers

              </div>

              <h2 className="text-4xl font-bold leading-tight">

                Join Our Newsletter &
                <span className="text-blue-600">
                  {" "}Save More!
                </span>

              </h2>

              <p className="text-gray-600 mt-6 leading-8">

                Subscribe to receive the latest product reviews,
                buying guides, exclusive discounts,
                and special affiliate deals directly
                in your inbox.

              </p>

              {/* Benefits */}

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <Bell className="text-blue-600" />

                  <span>Weekly Product Reviews</span>

                </div>

                <div className="flex items-center gap-3">

                  <Bell className="text-blue-600" />

                  <span>Exclusive Discount Coupons</span>

                </div>

                <div className="flex items-center gap-3">

                  <Bell className="text-blue-600" />

                  <span>Latest Tech News & Buying Guides</span>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-slate-100 p-12 flex items-center">

              <div className="w-full">

                <div className="bg-white p-10 rounded-3xl shadow-lg">

                  <div className="flex justify-center mb-6">

                    <div className="bg-blue-600 p-5 rounded-full text-white">

                      <Mail size={35} />

                    </div>

                  </div>

                  <h3 className="text-3xl font-bold text-center">

                    Subscribe Now

                  </h3>

                  <p className="text-center text-gray-500 mt-3">

                    Get notified about our latest offers.

                  </p>

                  <form className="mt-8 space-y-5">

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold"
                    >
                      Subscribe Now
                    </button>

                  </form>

                  <p className="text-center text-sm text-gray-500 mt-6">

                    No spam. Unsubscribe anytime.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;