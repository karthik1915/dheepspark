import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Courses() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold spark-text-gradient mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive digital learning programs designed to transform your
            skills and career
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Course Categories
          </h2>
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="Digital Skills Training"
              description="Master essential digital skills for the modern workplace. Learn the latest tools and technologies that are in high demand across industries."
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
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="Career Development"
              description="Personalized career guidance and skill development programs. Discover your path and make informed decisions about your professional future."
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-green-700 font-semibold text-sm">
                        Most Popular
                      </span>
                    </div>
                  </div>
                </div>
              }
            />
            <BentoGridItem
              title="Leadership Training"
              description="Develop leadership skills and entrepreneurial mindset. Learn to inspire, motivate, and lead teams effectively in any environment."
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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

      {/* Detailed Course List */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Digital Marketing Mastery
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Learn the complete digital marketing ecosystem from SEO to
                social media advertising.
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold">8 Weeks</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">Online</span>
              </div>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Data Analytics & Visualization
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Master data analysis tools and create compelling visualizations
                for business insights.
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold">6 Weeks</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">Online</span>
              </div>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Project Management Excellence
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Learn agile methodologies and project management best practices
                for successful delivery.
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold">4 Weeks</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">Online</span>
              </div>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                UI/UX Design Fundamentals
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Create user-centered designs and prototypes using
                industry-standard tools and methodologies.
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold">10 Weeks</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">Online</span>
              </div>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Business Communication
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Enhance your professional communication skills for
                presentations, negotiations, and leadership.
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold">3 Weeks</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">Online</span>
              </div>
            </div>
            <div className="bg-white rounded-lg spark-shadow p-6 spark-hover">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Entrepreneurship Bootcamp
              </h3>
              <p className="text-gray-600 text-center mb-4">
                From idea to execution - learn everything needed to start and
                scale your business.
              </p>
              <div className="text-center">
                <span className="text-orange-600 font-semibold">12 Weeks</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-600">Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Learning Experience
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Interactive Learning
              </h3>
              <p className="text-gray-600">
                Engage with hands-on projects, real-world case studies, and
                interactive sessions that make learning practical and effective.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Mentorship
              </h3>
              <p className="text-gray-600">
                Learn from industry experts and experienced professionals who
                provide personalized guidance and mentorship throughout your
                journey.
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Certification
              </h3>
              <p className="text-gray-600">
                Earn industry-recognized certificates upon completion of
                courses, validating your skills and enhancing your professional
                profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Choose from our comprehensive range of courses and transform your
            career with industry-relevant skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="spark-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity spark-hover">
              Browse All Courses
            </button>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors spark-hover border-2 border-orange-600">
              Get Course Catalog
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
