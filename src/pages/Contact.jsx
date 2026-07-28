import {
  MapPin,
  Mail,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import React from "react";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7f1fzc",
        "template_ime4ek1",
        form.current,
        "9XoT9jsI74iZAt2Eo"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message");
          console.log(error);
        }
      );
  };
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you. Send us your questions,
            feedback or partnership inquiries.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-8">
              Have a question about our product recommendations,
              affiliate partnerships, or website?
              Fill out the form and our team will respond as soon
              as possible.
            </p>

            <div className="space-y-8 mt-10">

              <div className="flex items-center gap-5">

                <div className="bg-blue-600 p-4 rounded-full text-white">
                  <MapPin />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Address
                  </h3>

                  <p className="text-gray-500">
                    Pune, Maharashtra, India
                  </p>

                </div>

              </div>

              {/* <div className="flex items-center gap-5">

                <div className="bg-green-600 p-4 rounded-full text-white">
                  <Phone />
                </div> */}

                {/* <div>

                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-500">
                    +91 98765 43210
                  </p>

                </div> */}

              {/* </div> */}

              <div className="flex items-center gap-5">

                <div className="bg-red-600 p-4 rounded-full text-white">
                  <Mail />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-500">
                    payalkale.kale@gmail.com
                  </p>

                </div>

              </div>

              {/* <div className="flex items-center gap-5">

                <div className="bg-yellow-500 p-4 rounded-full text-white">
                  <Clock />
                </div> */}

                {/* <div>

                  <h3 className="font-bold text-lg">
                    Working Hours
                  </h3>

                  <p className="text-gray-500">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-500">
                    9:00 AM - 6:00 PM
                  </p>

                </div> */}

              {/* </div> */}

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              {/* <input
                type="text" name="name"
                placeholder="Your Name"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              /> */}

              <input
                type="email" name='email'
                placeholder="Email Address"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* <input
                type="text" name="subject"
                placeholder="Subject"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              /> */}

              <textarea
                rows="6" name='message'
                placeholder="Write your message..."
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button type='submit'
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-4 rounded-xl flex justify-center items-center gap-3 transition"
              >

                <Send />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Pune,India&output=embed"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;