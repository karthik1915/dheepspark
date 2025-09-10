import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold spark-text-gradient mb-6">
            About Dheepspark
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the story behind our mission to ignite the hidden spark in
            every individual
          </p>
        </div>
      </section>

      {/* Who Are We? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who Are We?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a team of highly resourced-professionals who are
                passionate about igniting the light in the lives of the students
                or people who reach us through different mediums. We provide
                them the personalized training on their needs and transform
                them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With{" "}
                <span className="font-bold text-orange-600">
                  5+ years of experience
                </span>
                , we have provided several training and coaching sessions in
                developing skills and knowledge and made{" "}
                <span className="font-bold text-orange-600">1000+ people</span>{" "}
                adapt to any challenging environment in their career which
                helped them to achieve their milestones.
              </p>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  and a TEAM of Passionate Professionals
                </h3>
                <p className="text-gray-700">
                  Dedicated to your success and growth
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-8">
              <div className="w-full h-80 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    The Spark
                  </h3>
                  <p className="text-gray-700">Igniting potential within</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg spark-shadow p-8 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 text-center">
                To serve and provide a skill set that transforms an individual
                through rigorous coursework for them to achieve their milestone.
              </p>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-8 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 text-center">
                To be a leading digital coaching unit that provides a
                transformative skill set and education to create future leaders,
                innovators, and industrialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - From Actual Website */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg spark-shadow p-8 spark-hover mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Hyper Personalized Training & Coaching
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We prefer and provide hyper personalized training and coaching
                  where we spend quality time with an individual, will get to
                  know about them and guide them in the aspects of one's own
                  need and make them overcome their shortcomings and enlighten
                  them to acquire the skills. The sessions will be mostly one on
                  one and we make the candidates comfortable and provide the
                  training needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Us Different?
          </h2>
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="Personalized Learning"
              description="Every individual has unique needs and learning styles. We provide personalized coaching tailored to your specific goals and aspirations."
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="Digital Convenience"
              description="Why step out of your comfort zone when everything is available in your comfort zone? Learn from anywhere, anytime with our digital platform."
              span={2}
              header={
                <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-emerald-200/20"></div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
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
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-green-700 font-semibold text-sm">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="Expert Guidance"
              description="Our experienced coaches provide expert guidance and mentorship to help you navigate your career and personal development journey."
              span={2}
              header={
                <div className="flex flex-1 w-full h-full min-h-[14rem] rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20"></div>
                  <div className="absolute bottom-0 right-0 p-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
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
            <BentoGridItem
              title="Proven Results"
              description="Join thousands of individuals who have transformed their lives and careers through our comprehensive coaching programs and mentorship."
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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

      {/* What People Say About Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What People Say About Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Anita Sharma</h4>
                  <p className="text-sm text-gray-600">
                    Marketing Professional
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Dheepspark helped me discover my true potential. The
                personalized coaching approach made all the difference in my
                career growth."
              </p>
              <div className="flex text-orange-500 mt-4">★★★★★</div>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The one-on-one sessions were incredibly valuable. I learned
                skills that I never thought I could master. Highly recommended!"
              </p>
              <div className="flex text-orange-500 mt-4">★★★★★</div>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Priya Patel</h4>
                  <p className="text-sm text-gray-600">Student</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a student, the motivational programs helped me gain
                confidence and clarity about my future. The team truly cares
                about your success."
              </p>
              <div className="flex text-orange-500 mt-4">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">People Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Training Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Ignite Your Spark?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of individuals who have discovered their potential
            with Dheepspark
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
              Explore Our Programs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
