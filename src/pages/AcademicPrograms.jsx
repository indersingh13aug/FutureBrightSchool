import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AcademicPrograms() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        {t("academics.title")}
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {t("academics.intro")}
      </p>

      {/* Program Sections */}
      <div className="space-y-12">
        {/* Lower School (TK-1) */}
        <div>
          <Link to="/lower-school" className="block hover:bg-blue-50 p-4 rounded-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              {t("academics.sections.toddler.title")}
            </h2>
          </Link>
          <p className="text-gray-700 leading-relaxed">
            {t("academics.sections.toddler.description")}
          </p>
        </div>

        {/* Lower School (2-5) */}
        <div>
          <Link to="/lower-school-25" className="block hover:bg-blue-50 p-4 rounded-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              {t("academics.sections.lower25.title")}
            </h2>
          </Link>
          <p className="text-gray-700 leading-relaxed">
            {t("academics.sections.lower25.description")}
          </p>
        </div>

        {/* Middle School (6-8) */}
        <div>
          <Link to="/middle-school" className="block hover:bg-blue-50 p-4 rounded-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              {t("academics.sections.middle.title")}
            </h2>
          </Link>
          <p className="text-gray-700 leading-relaxed">
            {t("academics.sections.middle.description")}
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          {t("academics.support.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("academics.support.description")}
        </p>
      </div>
    </div>
  );
}
