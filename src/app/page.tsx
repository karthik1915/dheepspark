import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section id="home" className="relative  py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold spark-text-gradient mb-6">
            Dheepspark
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Your Personalized Digital Coach
          </h2>
          <div className="bg-white rounded-lg spark-shadow p-8 mb-12 max-w-4xl mx-auto spark-hover">
            <h3 className="text-3xl font-bold text-orange-600 mb-6">
              The Spark
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every human in this world has an inner spirit that may lead them
              to achieve their goals and create an identity of their own. There
              will always be a hidden spark burning in them. We address and
              guide the people who reach us to ignite the spark in them using
              the light and knowledge we provide according to one&apos;s need to
              acquire the skills required. Dheepspark is a place where we ignite
              the hidden burning spark of the people who come to us and lighten
              their way to reach their milestones.
            </p>
          </div>
          <div className="spark-gradient text-white rounded-lg p-8 mb-8 max-w-2xl mx-auto spark-shadow">
            <h3 className="text-2xl font-bold mb-4">
              Are you Looking for Guidance to Ignite the Burning
              &apos;SPARK&apos; in you?
            </h3>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYneau6J4xoSYnXoY2umMxXMt7TA2G4LLfVCbX1SFARD-dfA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors spark-hover inline-block"
            >
              Book a Free Consulting Call
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Your Needs Here
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Why step out of your comfort zone when everything is available
                in your comfort zone? This is the era of digital learning and
                the resources are available anywhere in this digital world.
                DheepSpark is a complete digital learning solution where you can
                address all your career needs, skills and acquire knowledge
                through personalized online training and coaching.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6">
                To serve and provide a skill set that transforms an individual
                through rigorous coursework for them to achieve their milestone.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be a leading digital coaching unit that provides a
                transformative skill set and education to create future leaders,
                innovators, and industrialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Events
          </h2>
          <p className="text-lg text-center  text-gray-700 leading-relaxed mb-6">
            Explore our events and join us in celebrating our achievements.
          </p>
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="Speak with Spark"
              description="Interactive sessions to ignite your inner potential and discover your hidden talents through personalized coaching."
              header={
                <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-yellow-200/20"></div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="Wonder Women Virtual Awards 2022!"
              description="Celebrating exceptional women achievers who have made remarkable contributions to their fields and communities. Join us in recognizing and honoring the incredible achievements of women leaders across various industries."
              span={2}
              header={
                <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-purple-200/20"></div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-pink-500/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-pink-700 font-semibold text-sm">
                        Special Event
                      </span>
                    </div>
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="What's Your Tomorrow - Career Guidance"
              description="Personalized career guidance sessions to help you discover your path and make informed decisions about your future."
              header={
                <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-cyan-200/20"></div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="Entrepreneurship Development Program"
              description="Build your entrepreneurial skills and mindset with comprehensive training programs designed for aspiring business leaders."
              header={
                <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-200/20"></div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="Student Motivation Program"
              description="Inspiring the next generation of leaders with motivational programs designed specifically for 10th and 12th standard students."
              header={
                <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 to-violet-200/20"></div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                  </div>
                </div>
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Courses Offered
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Digital Skills Training
              </h3>
              <p className="text-gray-600">
                Master essential digital skills for the modern workplace
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Career Development
              </h3>
              <p className="text-gray-600">
                Personalized career guidance and skill development
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Leadership Training
              </h3>
              <p className="text-gray-600">
                Develop leadership skills and entrepreneurial mindset
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>
          <div className="bg-white rounded-lg spark-shadow p-8 spark-hover">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Ignite Your Spark?
              </h3>
              <p className="text-gray-600">
                Get in touch with us for personalized coaching and guidance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Get Started Today
                </h4>
                <button className="w-full spark-gradient text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-4 spark-hover">
                  Book a Free Consulting Call
                </button>
                <p className="text-sm text-gray-600 text-center">
                  No commitment required. Let&apos;s discuss your goals and how
                  we can help you achieve them.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-600">📧 Email: info@dheepspark.in</p>
                  <p className="text-gray-600">🌐 Website: www.dheepspark.in</p>
                  <p className="text-gray-600">
                    📱 Follow us for updates and inspiration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
