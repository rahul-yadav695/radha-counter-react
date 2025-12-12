import React, { useEffect, useState, useRef } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Footer from "./Footer";

const RadhaCounter = () => {
  const [time, setTime] = useState(0);
  const [menu, setMenu] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [play, setPlay] = useState(false);
  const [count, setCount] = useState(1);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const audio = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setTime(v => v + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const format = () =>
    `${String(Math.floor(time / 3600)).padStart(2, "0")}:` +
    `${String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:` +
    `${String(time % 60).padStart(2, "0")}`;

  const toggleAudio = () => {
    play ? audio.current.pause() : audio.current.play();
    setPlay(!play);
  };

  const handleClick = e => {
    setCount(c => (c >= 108 ? 1 : c + 1));
    setPos({ x: e.clientX, y: e.clientY });
    setShow(true);
    setTimeout(() => setShow(false), 1000);
  };


  return (
    <>
      <div className="p-10 relative min-h-screen select-none customFont" onClick={handleClick}>

        {show && <p className="absolute text-blue-600 text-2xl font-bold animate-radha pointer-events-none" style={{ left: pos.x - 20, top: pos.y - 20 }}>राधा</p>}

        <div className="flex justify-between items-center px-5">
          <button
            onClick={e => { e.stopPropagation(); toggleAudio(); }}
            className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm"
          >
            {play ? <><FaVolumeUp className="text-green-600" />On</>
              : <><FaVolumeMute className="text-red-600" />Off</>}
          </button>

          <h1 className="text-orange-500 font-bold text-4xl">राधा नाम जप</h1>

          <HiOutlineDotsVertical className="text-3xl cursor-pointer" onClick={e => { e.stopPropagation(); setMenu(!menu); }} />
        </div>

        {menu && <div className="absolute right-10 bg-white shadow-md border p-3 w-36 rounded-md z-20" onClick={e => e.stopPropagation()}>

          <p className="cursor-pointer" onClick={() => { setShowImg(!showImg); setMenu(false); }}>
            {showImg ? "Hide Image" : "Show Image"}
          </p>
        </div>
        }

        {showImg && <div className="flex justify-center mt-6" onClick={e => e.stopPropagation()}>
          <img src="https://radhanaamjapcounter.com/assets/images/Premanand%20Ji%20Maharaj%20image.jpg"
            className="w-60 rounded-lg shadow-lg" alt="Radha" />
        </div>
        }

        <div className="flex justify-center mt-4">
          <p className="bg-gray-100 px-5 py-2 rounded-full text-lg">⏱ {format()}</p>
        </div>

        <div className="flex justify-center mt-10">
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-orange-400 border-dashed animate-spin-slow absolute"></div>
            <div className="w-52 h-52 bg-white shadow-md rounded-full flex items-center justify-center">
              <span className="text-5xl font-bold">{count}</span>
            </div>
          </div>
        </div>

        <audio autoPlay muted ref={audio} src="https://dl.sndup.net/7g2b/Radhe_Radhe_Loop_Loud.mp3"></audio>
        <div className="flex items-center justify-center gap-4 mt-6">

          <div className="w-40 h-40 from-pink-100 to-yellow-100 rounded-2xl shadow-md flex flex-col items-center justify-center p-3 border border-yellow-200">
            <img src="https://cdn-icons-png.flaticon.com/512/11143/11143097.png" className="w-10 mb-1" />
            <p className="text-lg font-semibold text-gray-700">Malas</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">
              {Math.floor(count / 108)}
            </p>
          </div>

          <div className="w-40 h-40 from-pink-100 to-yellow-100 rounded-2xl shadow-md flex flex-col items-center justify-center p-3 border border-yellow-200">
            <img src="https://cdn-icons-png.flaticon.com/512/4151/4151095.png" className="w-10 mb-1" />
            <p className="text-lg font-semibold text-gray-700">Total Japa</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{count}</p>
          </div>

          <div className="w-40 h-40 from-pink-100 to-yellow-100 rounded-2xl shadow-md flex flex-col items-center justify-center p-3 border border-yellow-200">
            <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" className="w-10 mb-1" />
            <p className="text-lg font-semibold text-gray-700">Today's Japa</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{count}</p>
          </div>

        </div>
      </div>

      <div className="min-h-screen w-full bg-[#415168] from-slate-600 to-slate-700 flex flex-col items-center text-white px-4 py-10">

        <div className="bg-white text-gray-700 font-semibold px-6 py-2 rounded-full shadow flex items-center gap-2 mb-6">
          <span>🏆</span>
          <p>GIVEAWAY CONCLUDED!</p>
          <span>🏆</span>
        </div>

        <h1 className="text-5xl font-bold text-center flex items-center gap-3">
          🎉 Winners Announced! 🎉
        </h1>

        <p className="text-center max-w-3xl mt-4 text-lg">
          Our <span className="font-bold text-yellow-300">EXCLUSIVE GIVEAWAY</span> has concluded!
          Congratulations to our 5 lucky winners who have been notified via email from
          <span className="font-bold"> info@radhanaamjapcounter.com</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 text-center">
            <div className="text-green-400 text-4xl">✔</div>
            <p className="text-2xl font-semibold mt-2">Giveaway Closed</p>
            <p className="text-sm mt-1 text-gray-200">22nd October 2025</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 text-center">
            <div className="text-yellow-400 text-4xl">🏅</div>
            <p className="text-2xl font-semibold mt-2">5 Winners Selected</p>
            <p className="text-sm mt-1 text-gray-200">Randomly Chosen</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 text-center">
            <div className="text-blue-300 text-4xl">📧</div>
            <p className="text-2xl font-semibold mt-2">Winners Notified</p>
            <p className="text-sm mt-1 text-gray-200">23rd October 2025</p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-10">

          <button className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-xl flex items-center gap-2">
            🏆 View Winners
          </button>

          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow flex items-center gap-2">
            ▶ Continue Japa Practice
          </button>

        </div>

        <p className="text-gray-200 mt-6 flex items-center gap-2 text-sm">
          ✔ Thank you to all participants!
        </p>
      </div>
        <Footer/>
    </>
  );
};

export default RadhaCounter;
