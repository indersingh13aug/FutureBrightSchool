import React from "react";
import { useTranslation } from "react-i18next";

export default function StudentLife() {
  const { t } = useTranslation();

  return (
    <div  className="max-w-7xl mx-auto px-4 pt-28 pb-10">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        {t("studentLife.heading")}
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {t("studentLife.intro")}
      </p>

      {/* Sections */}
      <div className="space-y-12">
        {/* Academics Beyond the Classroom */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("studentLife.academics.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("studentLife.academics.description")}
          </p>
        </div>

        {/* Arts and Culture */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("studentLife.arts.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("studentLife.arts.description")}
          </p>
        </div>

        {/* Sports and Wellness */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("studentLife.sports.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("studentLife.sports.description")}
          </p>
        </div>

        {/* Student Leadership and Clubs */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("studentLife.leadership.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("studentLife.leadership.description")}
          </p>
        </div>

        {/* Community Service and Values */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            {t("studentLife.community.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t("studentLife.community.description")}
          </p>
        </div>
      </div>

      {/* Final Note */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          {t("studentLife.dayInLife.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("studentLife.dayInLife.description")}
        </p>
      </div>
    </div>
  );
}
