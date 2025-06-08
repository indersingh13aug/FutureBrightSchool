import React from "react";
import { Link } from "react-router-dom";

export default function AcademicPrograms() {
  return (
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Heading */}

          <h1 className="text-4xl font-bold text-blue-700 mb-6">Academic Programs</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        At FutureBright, our academic programs are thoughtfully designed to nurture critical thinking, creativity,
        and a love of learning from the earliest years through to graduation. We believe in a balanced, holistic
        approach to education that prepares students not just for exams, but for life.
      </p>
      
      

      {/* Program Sections */}
      <div className="space-y-12">
        {/* Lower School (TK-1) */}
        <div>
        <Link to="/lower-school" className="block hover:bg-blue-50 p-4 rounded-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2 cursor-pointer">Lower School (TK-1)</h2>
        </Link>
          <p className="text-gray-700 leading-relaxed">
            Our early education program focuses on foundational skills through interactive play, storytelling,
            and hands-on activities. Students are encouraged to explore, ask questions, and develop confidence in a
            nurturing environment.
          </p>
        
        </div>

        {/* Lower School (2-5) */}
        <div>
            <Link to="/lower-school-25" className="block hover:bg-blue-50 p-4 rounded-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Lower School (Grades 2-5)</h2>
          </Link>
          <p className="text-gray-700 leading-relaxed">
            Building upon early learning, this stage focuses on literacy, numeracy, and developing inquiry-based
            learning habits. Emphasis is placed on teamwork, respect, and establishing core academic values.
          </p>
        </div>

        {/* Middle School (6-8) */}
        <div>
            <Link to="/middle-school" className="block hover:bg-blue-50 p-4 rounded-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Middle School (Grades 6-8)</h2></Link>
          <p className="text-gray-700 leading-relaxed">
            The middle school years focus on critical thinking, digital literacy, and preparing students for high
            school rigor. We introduce project-based learning, leadership activities, and exploratory subjects such as
            coding, art, and public speaking.
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Support Services</h3>
        <p className="text-gray-700 leading-relaxed">
          Our academic programs are complemented by support services such as student wellbeing initiatives,
          career counseling, co-curricular activities, and academic remediation where needed.
        </p>
      </div>
    </div>
  );
}
