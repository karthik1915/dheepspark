import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { events, getUpcomingEvents, getPastEvents } from "@/lib/events";
import Link from "next/link";

export default function Events() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold spark-text-gradient mb-6">
            Our Events
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our inspiring events and programs designed to ignite your
            potential and connect with like-minded individuals
          </p>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            All Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <div className="bg-white rounded-lg spark-shadow overflow-hidden spark-hover group">
                  <div className="aspect-video bg-gradient-to-br from-orange-200 to-yellow-200 relative overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          event.status === "upcoming"
                            ? "bg-green-100 text-green-800"
                            : event.status === "ongoing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.status === "upcoming"
                          ? "Upcoming"
                          : event.status === "ongoing"
                          ? "Ongoing"
                          : "Past"}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-orange-600 font-semibold text-sm">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-orange-600 text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {event.shortDescription}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {event.location}
                      </div>
                    </div>
                    {event.attendees && (
                      <div className="mt-3 text-sm text-gray-500">
                        {event.attendees} attended
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Link key={event.id} href={`/events/${event.id}`}>
                  <div className="bg-white rounded-lg spark-shadow p-6 spark-hover group h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold text-sm">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm grow">
                      {event.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-600 font-semibold">
                        {event.price}
                      </span>
                      <span className="text-orange-600 hover:text-orange-700 font-medium">
                        Register →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Attend Our Events?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Networking Opportunities
              </h3>
              <p className="text-gray-600">
                Connect with like-minded individuals, industry experts, and
                potential collaborators who share your passion for growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Insights
              </h3>
              <p className="text-gray-600">
                Gain valuable insights from industry leaders and experienced
                professionals who share their knowledge and expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Actionable Learning
              </h3>
              <p className="text-gray-600">
                Take away practical strategies and actionable insights that you
                can immediately apply to your personal and professional life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Don't Miss Out on Our Events
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Stay updated with our latest events and be the first to know about
            new programs and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYneau6J4xoSYnXoY2umMxXMt7TA2G4LLfVCbX1SFARD-dfA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="spark-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity spark-hover inline-block"
            >
              Book Free Consultation
            </a>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors spark-hover border-2 border-orange-600">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
