import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

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
    <div className="relative w-96 h-64 overflow-hidden rounded-lg shadow-lg">
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
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
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
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [popupImages, setPopupImages] = useState([]);

  const handleImageClick = (index, images) => {
    setPopupIndex(index);
    setPopupImages(images);
    setPopupOpen(true);
  };

  const renderSection = (title, description, images) => (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      <ImageCarousel images={images} onImageClick={(i) => handleImageClick(i, images)} />
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Lower School (TK–1)</h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Our Transitional Kindergarten (TK) to Grade 1 program lays the foundation for a child’s lifelong learning
        journey. With a nurturing environment, experienced educators, and engaging activities, we help our young
        learners build essential academic and social-emotional skills.
      </p>

      <div className="space-y-12">
        {renderSection(
          "Foundational Literacy",
          "Through phonics, storytelling, and guided reading sessions, children are introduced to the joy of language. We focus on vocabulary development, letter recognition, and early writing to build communication skills.",
          literacyImages
        )}
        {renderSection(
          "Early Numeracy",
          "Children explore numbers, patterns, and problem-solving through hands-on activities and play-based learning. Math becomes exciting with the use of manipulatives, visual aids, and interactive games.",
          numeracyImages
        )}
        {renderSection(
          "Social & Emotional Development",
          "We help children understand their emotions, build relationships, and develop a sense of self-confidence. Classroom routines and group activities foster empathy, responsibility, and cooperation.",
          socialEmotionalImages
        )}
        {renderSection(
          "Creative Expression",
          "Music, art, and movement are integral to our TK–1 curriculum. Children express themselves creatively through drawing, dance, storytelling, and imaginative play.",
          creativeImages
        )}
        {renderSection(
          "Outdoor & Exploratory Learning",
          "Outdoor classrooms and nature walks are used to develop motor skills, awareness of the environment, and observation abilities. We encourage curiosity through science and nature exploration.",
          outdoorImages
        )}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Family & Community Partnership</h3>
        <p className="text-gray-700 leading-relaxed">
          We believe learning is most effective when it is a shared experience. Our program includes regular
          parent-teacher communication, student showcases, and collaborative learning opportunities to involve families
          in the early education journey.
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
