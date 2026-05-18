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
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Mini Hotel PMS
      </h1>

      <div className="border p-6 rounded-xl mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Add Booking
        </h2>

        <input
          type="text"
          placeholder="Guest Name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />

        <input
          type="number"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />

        <button
          onClick={addBooking}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save Booking
        </button>
      </div>

      <div className="border p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Current Bookings
        </h2>

        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul className="space-y-2">
            {bookings.map((booking, index) => (
              <li
                key={index}
                className="border p-3 rounded"
              >
                {booking.guestName} — Room {booking.roomNumber}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}