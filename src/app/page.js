"use client";

import { useState } from "react";

export default function Home() {
  const [guestName, setGuestName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [bookings, setBookings] = useState([]);

  const addBooking = () => {
    if (!guestName || !roomNumber) return;

    const newBooking = {
      guestName,
      roomNumber,
    };

    setBookings([...bookings, newBooking]);

    setGuestName("");
    setRoomNumber("");
  };

  return (
  <main className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Mini Hotel PMS
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Manage bookings easily
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Guest Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Room Number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={addBooking}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Save Booking
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Current Bookings
        </h2>

        {bookings.length === 0 ? (
          <div className="border rounded-xl p-4 bg-gray-50">
            <p className="text-gray-500">No bookings yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 bg-gray-50 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {booking.guestName}
                  </p>

                  <p className="text-gray-500">
                    Room: {booking.roomNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </main>
);
}