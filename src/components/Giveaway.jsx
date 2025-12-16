import React from "react";

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
        image: "/images/product1.jpg",
        link: "https://amazon.in"
    },
    {
        id: 2,
        title: "Radha Krishna Crystal Ball Night Lamp",
        image: "/images/product2.jpg",
        link: "https://amazon.in"
    },
    {
        id: 3,
        title: "Radha Krishna Wall Frame",
        image: "/images/product3.jpg",
        link: "https://amazon.in"
    },
    {
        id: 4,
        title: "Radha Krishna Idol",
        image: "/images/product4.jpg",
        link: "https://amazon.in"
    },
    {
        id: 5,
        title: "Radha Krishna Photo Frame",
        image: "/images/product5.jpg",
        link: "https://amazon.in"
    },
    {
        id: 6,
        title: "Radha Krishna Decorative Gift",
        image: "/images/product6.jpg",
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
        </>
    );
};

export default GiveawayWinnerSection;
