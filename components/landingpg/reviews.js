import React from 'react'

const reviews = [
  {
    name: "Ayesha",
    years: "3 years on Airbnb",
    date: "2 days ago",
    text: "Lovely, tidy apartment—felt just like home. Host replied fast!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ali",
    years: "1 year on Airbnb",
    date: "5 days ago",
    text: "Perfect stay. Clean place and good location for families.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sana",
    years: "5 years on Airbnb",
    date: "1 week ago",
    text: "Great experience! Very easy check-in and super helpful caretaker.",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    name: "Bilal",
    years: "2 years on Airbnb",
    date: "3 weeks ago",
    text: "Everything was as shown in photos. Safe and comfy for kids.",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function Reviews() {
  return (
    <div className=" max-w-5xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {reviews.map((review, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-5 flex">
          <img
            src={review.img}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <div className="font-semibold">{review.name}</div>
            <div className="text-xs text-gray-400 mb-1">{review.years}</div>
            <div className="flex items-center mb-1">
              <span className="text-yellow-400 text-lg mr-1">★</span>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="text-gray-700 text-[15px]">{review.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

