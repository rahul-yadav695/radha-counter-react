import React from "react";
import Footer from "./Footer";

const winners = [
    { id: 1, name: "Rahul", email: "rahul************@gmail.com" },
    { id: 2, name: "vikas yadav", email: "vika************@gmail.com" },
    { id: 3, name: "Suresh Joshi", email: "sure************@gmail.com" },
    { id: 4, name: "Pooja yadav", email: "pooj************@gmail.com" },
    { id: 5, name: "Pooran ji", email: "poor************@gmail.com" },
];

const products = [
    {
        id: 1,
        title: "Hem Jewels 999 Pure Silver Radhe Krishna",
        image: "https://radhanaamjapcounter.com/assets/images/Hem%20Jewels%20999%20Pure%20Silver%20Radhe%20Krishna.jpg",
        link: "https://amazon.in"
    },
    {
        id: 2,
        title: "Radha Krishna Crystal Ball Night Lamp",
        image: "https://radhanaamjapcounter.com/assets/images/radha%20krish%20crystal%20ball%20night%20lamp.jpg",
        link: "https://amazon.in"
    },
    {
        id: 3,
        title: "Radha Krishna Wall Frame",
        image: "https://radhanaamjapcounter.com/assets/images/Premanand%20Ji%20Maharaj%20Wall%20Hanging%20for%20Living%20Room.jpg",
        link: "https://amazon.in"
    },
    {
        id: 4,
        title: "Radha Krishna Idol",
        image: "https://radhanaamjapcounter.com/assets/images/%20SAF%20Set%20of%203%20Religious%20Radhe.jpg",
        link: "https://amazon.in"
    },
    {
        id: 5,
        title: "Radha Krishna Photo Frame",
        image: "https://radhanaamjapcounter.com/assets/images/SAF%20paintings%20Religious%20Radha%20Krishna.jpg",
        link: "https://amazon.in"
    },
    {
        id: 6,
        title: "Radha Krishna Decorative Gift",
        image: "https://m.media-amazon.com/images/I/41-ZEGpLpFL._SX342_SY445_QL70_FMwebp_.jpg",
        link: "https://amazon.in"
    }
];


const GiveawayWinnerSection = () => {
    return (
        <>
            <div className="w-full bg-[#FFF7E7] py-12 sm:py-16 px-4 flex flex-col items-center">

                <div className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md flex items-center gap-2 text-sm sm:text-lg font-semibold">
                    🏆 WINNERS ANNOUNCED! 💐
                </div>

                <h2 className="text-xl sm:text-3xl font-bold text-pink-500 mt-6 text-center">
                    🌸 राधे राधे 🌸
                </h2>

                <h1 className="text-center text-3xl sm:text-5xl font-extrabold text-[#2A2A2A] mt-4 leading-tight">
                    🎁 Radha Naam Japa Counter <br />
                    <span className="text-green-600">Giveaway Winners</span>
                </h1>

                <p className="text-center text-gray-600 max-w-3xl mt-5 sm:mt-6 text-base sm:text-lg px-2">
                    The giveaway has concluded! We're excited to announce our{" "}
                    <span className="font-bold text-green-600">5 lucky winners</span>.
                    Congratulations to all winners!
                </p>

                <div className="w-full max-w-2xl mt-8 sm:mt-10">
                    {winners.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl shadow mb-4 gap-3"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                                    {index + 1}
                                </span>
                                <div>
                                    <h2 className="font-semibold text-base sm:text-lg">{item.name}</h2>
                                    <p className="text-xs sm:text-sm text-gray-500">{item.email}</p>
                                </div>
                            </div>
                            <span className="text-yellow-500 text-xl sm:text-2xl self-end sm:self-auto">🏆</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full text-center mb-16 sm:mb-20 mt-10 px-4">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1f2937]">
                    🙏 Thank You to All Participants!
                </h1>

                <p className="text-gray-600 max-w-3xl mx-auto mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed">
                    We are deeply grateful to all devotees who participated.
                    Every participant has already received the greatest gift –
                    <span className="font-semibold text-orange-500"> Radha’s divine blessings </span>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 sm:mt-14">
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-orange-200">
                        <div className="text-4xl mb-4">🙏</div>
                        <h2 className="text-lg sm:text-xl font-bold mb-2">Spiritual Growth</h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Every chant brings you closer to Radha’s divine love
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-yellow-200">
                        <div className="text-4xl mb-4">⭐</div>
                        <h2 className="text-lg sm:text-xl font-bold mb-2">Divine Connection</h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Strengthens your bond with Radha and Krishna
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-purple-200">
                        <div className="text-4xl mb-4">💖</div>
                        <h2 className="text-lg sm:text-xl font-bold mb-2">True Prize</h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Peace, joy, and spiritual fulfillment
                        </p>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">

                        <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />

                        <div className="p-5">
                            <h2 className="font-semibold text-lg text-gray-800 mb-3">
                                {item.title}
                            </h2>

                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-medium flex items-center gap-2 hover:underline">
                                View Product on Amazon ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
};

export default GiveawayWinnerSection;
