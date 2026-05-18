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
  <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-6">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          🏨 Mini Hotel PMS
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Manage bookings easily
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500 text-sm mb-2">Total Bookings</h3>
    <p className="text-4xl font-bold text-blue-600">
      {bookings.length}
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500 text-sm mb-2">Available Rooms</h3>
    <p className="text-4xl font-bold text-green-600">
      24
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-gray-500 text-sm mb-2">Checked In</h3>
    <p className="text-4xl font-bold text-indigo-600">
      {bookings.length}
    </p>
  </div>

</div>

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
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.01] hover:shadow-lg text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Save Booking
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
    Current Bookings
  </h2>


    </div>
       {bookings.length === 0 ? (
        <div className="border rounded-2xl p-6 text-gray-500">
          No bookings yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-2xl p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">
                  {booking.guestName}
                </h3>

                <p className="text-gray-500">
                  Room: {booking.roomNumber}
                </p>
              </div>

              <button
                onClick={() => {
                  const updatedBookings = bookings.filter(
                    (_, i) => i !== index
                  );
                  setBookings(updatedBookings);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>

  </main>
);
}