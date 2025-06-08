import React from "react";

export default function MiddleSchool() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Middle School (Grades 6–8)</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Our Middle School program is designed to meet the academic, emotional, and social needs of students
        as they transition from childhood to adolescence. We encourage curiosity, independence, and leadership
        through a balanced, challenging, and supportive curriculum.
      </p>

      {/* Academic Subjects */}
      <div className="space-y-10">
        {/* English Language Arts */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">English Language Arts</h2>
          <p className="text-gray-700 leading-relaxed">
            Students develop analytical reading and structured writing skills through novels, essays, poetry,
            and research projects. Vocabulary and grammar are integrated into daily learning, with an emphasis
            on critical thinking and communication.
          </p>
        </div>

        {/* Mathematics */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Mathematics</h2>
          <p className="text-gray-700 leading-relaxed">
            Middle School math includes pre-algebra, algebra, and geometry concepts. Students engage in
            problem-solving, mathematical reasoning, and real-world application of math skills using
            interactive methods and technology tools.
          </p>
        </div>

        {/* Science */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Science</h2>
          <p className="text-gray-700 leading-relaxed">
            Our hands-on science program covers life science, earth science, chemistry, and physics. Students
            conduct experiments, analyze data, and participate in science fairs and field-based investigations.
          </p>
        </div>

        {/* Social Studies */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Social Studies</h2>
          <p className="text-gray-700 leading-relaxed">
            Students explore world history, geography, civics, and cultures. Lessons focus on cause-effect
            relationships, current events, historical significance, and developing a global perspective.
          </p>
        </div>

        {/* World Languages */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">World Languages</h2>
          <p className="text-gray-700 leading-relaxed">
            Students begin or continue study in languages such as Hindi, Sanskrit, or French. Emphasis is on
            speaking, listening, reading, and writing in the target language with cultural awareness.
          </p>
        </div>

        {/* Technology and Media Literacy */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Technology & Media Literacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Middle schoolers learn to use technology responsibly for research, presentations, digital creativity,
            and online safety. Coding and robotics are introduced as part of the STEM curriculum.
          </p>
        </div>
      </div>

      {/* Enrichment and Life Skills */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Leadership, Wellness & Life Skills</h3>
        <p className="text-gray-700 leading-relaxed">
          We nurture emotional intelligence, teamwork, and ethical decision-making. Students take on leadership roles
          through student council, clubs, and community projects. Life skills and physical education are embedded to
          build resilience, health, and responsibility.
        </p>
      </div>
    </div>
  );
}
