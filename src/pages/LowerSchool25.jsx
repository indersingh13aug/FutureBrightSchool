import React from "react";

export default function LowerSchool25() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Lower School (Grades 2–5)</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        The Lower School (Grades 2–5) continues to nurture a child’s natural curiosity, creativity, and
        love of learning. Our curriculum is designed to provide a strong academic foundation while promoting
        independence, collaboration, and personal growth.
      </p>

      {/* Core Subjects */}
      <div className="space-y-10">
        {/* Language Arts */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Language Arts</h2>
          <p className="text-gray-700 leading-relaxed">
            Students deepen their reading comprehension, vocabulary, and grammar skills through rich literature,
            guided reading groups, and writing workshops. Emphasis is placed on writing clearly and confidently
            for various purposes and audiences.
          </p>
        </div>

        {/* Mathematics */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Mathematics</h2>
          <p className="text-gray-700 leading-relaxed">
            A hands-on approach to math helps students understand concepts like multiplication, division,
            fractions, geometry, and word problems. We foster logical thinking, number sense, and problem-solving skills.
          </p>
        </div>

        {/* Science */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Science & Discovery</h2>
          <p className="text-gray-700 leading-relaxed">
            Science lessons are inquiry-based, encouraging observation, experimentation, and critical thinking.
            Topics include earth science, biology, weather, ecosystems, and physical science, often tied to real-world
            applications.
          </p>
        </div>

        {/* Social Studies */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Social Studies</h2>
          <p className="text-gray-700 leading-relaxed">
            Students explore communities, cultures, history, geography, and citizenship. They engage in
            project-based learning and develop a sense of responsibility as global citizens.
          </p>
        </div>

        {/* Arts & Enrichment */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Arts & Enrichment</h2>
          <p className="text-gray-700 leading-relaxed">
            Visual arts, music, and performing arts are integrated into the curriculum, allowing children
            to express themselves creatively. Students also participate in library, computer lab, and life skills sessions.
          </p>
        </div>
      </div>

      {/* Character Development */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Character & Life Skills</h3>
        <p className="text-gray-700 leading-relaxed">
          We emphasize respect, empathy, perseverance, and responsibility through daily interactions, classroom
          activities, and school-wide programs. Students learn to manage conflict, work in teams, and become confident
          leaders.
        </p>
      </div>
    </div>
  );
}
