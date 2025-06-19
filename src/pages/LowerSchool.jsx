import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Image Arrays for Each Section
const literacyImages = ["/images/literacy1.jpg", "/images/literacy2.jpg"];
const numeracyImages = ["/images/numeracy1.jpg", "/images/numeracy2.jpg"];
const socialEmotionalImages = ["/images/social1.jpg", "/images/social2.jpg"];
const creativeImages = ["/images/creative1.jpg", "/images/creative2.jpg"];
const outdoorImages = ["/images/outdoor1.jpg", "/images/outdoor2.jpg"];

// Image Carousel Component
function ImageCarousel({ images, onImageClick }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div   className="max-w-7xl mx-auto px-4 pt-28 pb-10">
      <img
        src={images[index]}
        alt="Slide"
        className="object-cover w-full h-full cursor-pointer"
        onClick={() => onImageClick(index)}
      />
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1"
        onClick={prev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1"
        onClick={next}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

// Zoom Popup Component
function ImagePopup({ images, currentIndex, onClose }) {
  const [index, setIndex] = useState(currentIndex);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div   className="max-w-7xl mx-auto px-4 pt-28 pb-10">
      <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose}>
        <FaTimes />
      </button>
      <button className="absolute left-4 text-white text-3xl" onClick={prev}>
        <FaChevronLeft />
      </button>
      <img
        src={images[index]}
        alt="Zoomed"
        className="max-w-4xl max-h-[80vh] rounded shadow-lg"
      />
      <button className="absolute right-4 text-white text-3xl" onClick={next}>
        <FaChevronRight />
      </button>
    </div>
  );
}

// Main Page
export default function LowerSchoolTK1() {
  const { t } = useTranslation();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [popupImages, setPopupImages] = useState([]);

  const handleImageClick = (index, images) => {
    setPopupIndex(index);
    setPopupImages(images);
    setPopupOpen(true);
  };

  const renderSection = (sectionKey, images) => (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          {t(`lowerSchool.sections.${sectionKey}.title`)}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {t(`lowerSchool.sections.${sectionKey}.description`)}
        </p>
      </div>
      <ImageCarousel images={images} onImageClick={(i) => handleImageClick(i, images)} />
    </div>
  );

  return (
    <div   className="max-w-7xl mx-auto px-4 pt-28 pb-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        {t("lowerSchool.title")}
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {t("lowerSchool.intro")}
      </p>

      <div className="space-y-12">
        {renderSection("literacy", literacyImages)}
        {renderSection("numeracy", numeracyImages)}
        {renderSection("socialEmotional", socialEmotionalImages)}
        {renderSection("creative", creativeImages)}
        {renderSection("outdoor", outdoorImages)}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          {t("lowerSchool.sections.family.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {t("lowerSchool.sections.family.description")}
        </p>
      </div>

      {popupOpen && (
        <ImagePopup
          images={popupImages}
          currentIndex={popupIndex}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
}
