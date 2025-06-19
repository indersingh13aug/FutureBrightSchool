import React from "react";
import { useTranslation } from "react-i18next";

export default function LowerSchool25() {
  const { t } = useTranslation();

  return (
    <div   className="max-w-7xl mx-auto px-4 pt-28 pb-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        {t("lowerSchool25.title")}
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {t("lowerSchool25.intro")}
      </p>

      {/* Core Subjects */}
      <div className="space-y-10">
        {/* Language Arts */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("lowerSchool25.sections.languageArts.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("lowerSchool25.sections.languageArts.description")}
          </p>
        </div>

        {/* Mathematics */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("lowerSchool25.sections.math.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("lowerSchool25.sections.math.description")}
          </p>
        </div>

        {/* Science */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("lowerSchool25.sections.science.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("lowerSchool25.sections.science.description")}
          </p>
        </div>

        {/* Social Studies */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("lowerSchool25.sections.socialStudies.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("lowerSchool25.sections.socialStudies.description")}
          </p>
        </div>

        {/* Arts & Enrichment */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("lowerSchool25.sections.arts.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("lowerSchool25.sections.arts.description")}
          </p>
        </div>
      </div>

      {/* Character Development */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          {t("lowerSchool25.sections.character.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("lowerSchool25.sections.character.description")}
        </p>
      </div>
    </div>
  );
}
