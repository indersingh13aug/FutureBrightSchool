import React from "react";

export default function StudentLife() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Student Life at FutureBright</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        At FutureBright, student life is vibrant, diverse, and rich in experiences. Our campus culture nurtures a sense
        of belonging, encourages leadership, and fosters lifelong friendships. From academics to arts and athletics,
        every student has the opportunity to thrive.
      </p>

      {/* Sections */}
      <div className="space-y-12">
        {/* Academics Beyond the Classroom */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Academics Beyond the Classroom</h2>
          <p className="text-gray-700 leading-relaxed">
            Our students engage in real-world problem solving through projects, field trips, and science fairs.
            Enrichment programs like debate clubs, coding workshops, and math olympiads help extend learning beyond
            textbooks.
          </p>
        </div>

        {/* Arts and Culture */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Arts and Culture</h2>
          <p className="text-gray-700 leading-relaxed">
            The creative spirit is alive at FutureBright! Students participate in music, dance, drama, and visual arts.
            Annual cultural fests, talent shows, and art exhibitions celebrate our diverse community and artistic talents.
          </p>
        </div>

        {/* Sports and Wellness */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Sports and Wellness</h2>
          <p className="text-gray-700 leading-relaxed">
            From team sports like basketball and football to individual pursuits like yoga and athletics, we emphasize
            physical fitness and well-being. Our campus includes playgrounds, courts, and wellness centers to support
            active lifestyles.
          </p>
        </div>

        {/* Student Leadership and Clubs */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Leadership and Student Clubs</h2>
          <p className="text-gray-700 leading-relaxed">
            FutureBright offers student council, eco clubs, coding clubs, and more. These platforms empower students to
            lead initiatives, organize events, and make a difference in their school and local community.
          </p>
        </div>

        {/* Community Service and Values */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Community Service and Values</h2>
          <p className="text-gray-700 leading-relaxed">
            We instill the values of empathy, service, and civic responsibility through community projects, donation
            drives, and awareness campaigns. Students develop a strong sense of purpose and connection to society.
          </p>
        </div>
      </div>

      {/* Final Note */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">A Day in the Life</h3>
        <p className="text-gray-700 leading-relaxed">
          A typical day at FutureBright is full of discovery, creativity, and joy. With a supportive environment,
          dedicated mentors, and plenty of opportunity, student life here prepares our learners not just for exams, but
          for life.
        </p>
      </div>
    </div>
  );
}
