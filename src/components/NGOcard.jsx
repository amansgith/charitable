'use client'
import { UsersRound } from 'lucide-react';
import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const NGOcard = ({ image, taxAvail, title, subtitle }) => {
    let value = 30;
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white group transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg group">
        <img
          src={image || ""}
          alt={title}
          className="w-full h-full object-cover"
        />

        {taxAvail && (
          <span className="absolute top-3 left-3 bg-yellow-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-md z-10">
            Tax Benefits Available
          </span>
        )}

        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white z-10">
          <p className="italic text-sm">Mission</p>
          <h2 className="text-2xl font-extrabold mt-1">{title}</h2>
        </div>
      </div>

      {/* <div className="p-4"> */}
      {/* <p className="text-gray-700 font-medium"> */}
      {/* Help feed those in need –{" "}
          <span className="text-rose-500 font-semibold">donate a meal</span>{" "}
          today! */}
      {/* {subtitle} */}
      {/* </p> */}
      {/* <CircularProgressbar
          value={30}
          text={`${30}%`}
          className="w-10 h-10 text-center"
          styles={buildStyles({
            textColor: "#000",
            pathColor: "red",
            trailColor: "#e5e7eb",
            textSize: "14px",
          })}
        />
      </div> */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-4 group-hover:hidden">
            <div className="w-10 h-10">
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                textSize: "28px",
                textPosition: "center",
                pathColor: "orange",
                textColor: "#111827",
                trailColor: "#e5e7eb",
                })}
            />
            </div>
            <div className="font-medium">
            <p className="text-gray-900">
                <span className="text-red-600 font-bold">₹30,00,000</span> raised,
                ₹70L left
            </p>
            <p className="text-gray-500 flex gap-2">
                <UsersRound className="w-5 h-5 text-gray-400" />
                1312 donations
            </p>
            </div>
        </div>
        <button className="p-3 w-full bg-orange-600 hover:bg-orange-500 rounded-lg font-bold text-white hidden group-hover:block">
          Pledge Monthly
        </button>
      </div>
    </div>
  );
};

export default NGOcard