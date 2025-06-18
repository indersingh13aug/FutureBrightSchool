import React from "react";
import { useTranslation } from "react-i18next";

export default function MiddleSchool() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        {t("middleSchool.title")}
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {t("middleSchool.intro")}
      </p>

      {/* Academic Subjects */}
      <div className="space-y-10">
        {/* English Language Arts */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("middleSchool.sections.ela.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("middleSchool.sections.ela.description")}
          </p>
        </div>

        {/* Mathematics */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("middleSchool.sections.math.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("middleSchool.sections.math.description")}
          </p>
        </div>

        {/* Science */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("middleSchool.sections.science.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("middleSchool.sections.science.description")}
          </p>
        </div>

        {/* Social Studies */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("middleSchool.sections.socialStudies.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("middleSchool.sections.socialStudies.description")}
          </p>
        </div>

        {/* World Languages */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("middleSchool.sections.languages.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("middleSchool.sections.languages.description")}
          </p>
        </div>

        {/* Technology & Media Literacy */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("middleSchool.sections.technology.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("middleSchool.sections.technology.description")}
          </p>
        </div>
      </div>

      {/* Leadership, Wellness & Life Skills */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          {t("middleSchool.sections.leadership.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("middleSchool.sections.leadership.description")}
        </p>
      </div>
    </div>
  );
}
