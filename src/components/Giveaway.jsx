import React from "react";

const winners = [
    { id: 1, name: "Rahul", email: "rahul************@gmail.com" },
    { id: 2, name: "vikas yadav", email: "vika************@gmail.com" },
    { id: 3, name: "Suresh Joshi", email: "sure************@gmail.com" },
    { id: 4, name: "Pooja yadav", email: "pooj************@gmail.com" },
    { id: 5, name: "Pooran ji", email: "poor************@gmail.com" },
    
];

const GiveawayWinnerSection = () => {
    return (
        <div className="w-full bg-[#FFF7E7] py-16 px-4 flex flex-col items-center">

            <div className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 text-lg font-semibold float-animation">
                <span>🏆</span>
                WINNERS ANNOUNCED!
                <span>💐</span>
            </div>

            <h2 className="text-3xl font-bold text-pink-500 mt-6 flex items-center gap-3"> 🌸 राधे राधे 🌸 </h2>

            <h1 className="text-center text-5xl font-extrabold text-[#2A2A2A] mt-4 leading-tight">
                <span className="text-4xl">🎁</span> Radha Naam Japa Counter <br />
                <span className="text-green-600">Giveaway Winners</span>
            </h1>

            <p className="text-center text-gray-600 max-w-3xl mt-6 text-lg">
                The giveaway has concluded! We're excited to announce our{" "}
                <span className="font-bold text-green-600">5 lucky winners</span> who will
                receive beautiful spiritual gifts. Congratulations to all winners!
            </p>

            <div className="w-full max-w-2xl mt-10">
                {winners.map((item, index) => (
                    <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-4">

                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                                {index + 1}
                            </span>
                            <div>
                                <h2 className="font-semibold text-lg">{item.name}</h2>
                                <p className="text-sm text-gray-500">{item.email}</p>
                            </div>
                        </div>
                        <span className="text-yellow-500 text-2xl">🏆</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GiveawayWinnerSection;
