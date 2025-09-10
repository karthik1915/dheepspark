import { notFound } from "next/navigation";
import { getEventById } from "@/lib/events";
import Image from "next/image";
import Link from "next/link";

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {event.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold spark-text-gradient mb-6">
                {event.title}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-700">{event.date}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{event.time}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{event.location}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfYneau6J4xoSYnXoY2umMxXMt7TA2G4LLfVCbX1SFARD-dfA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spark-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity spark-hover inline-block"
                >
                  Register Now - {event.price}
                </a>
                <Link
                  href="/events"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors spark-hover border-2 border-orange-600 text-center"
                >
                  ← Back to Events
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-orange-200 to-yellow-200 rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {event.attendees && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-semibold text-gray-900">
                    {event.attendees} attended
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Event Features
              </h2>
              <div className="space-y-4 mb-12">
                {event.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              {event.content && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What You'll Learn
                  </h3>
                  <div className="space-y-4">
                    {event.content.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <span className="text-white text-sm font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You'll Achieve
              </h3>
              <div className="space-y-4">
                {event.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Event Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold">{event.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{event.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-orange-600">
                      {event.price}
                    </span>
                  </div>
                  {event.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{event.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              {event.quote && (
                <div className="bg-orange-50 rounded-lg p-6">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{event.quote}"
                  </blockquote>
                  {event.author && (
                    <cite className="text-orange-600 font-semibold">
                      — {event.author}
                    </cite>
                  )}
                </div>
              )}

              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ready to Join?
                </h3>
                <p className="text-gray-700 mb-6">
                  Don't miss this amazing opportunity!
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfYneau6J4xoSYnXoY2umMxXMt7TA2G4LLfVCbX1SFARD-dfA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full spark-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block text-center"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
