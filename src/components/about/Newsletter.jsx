import React from 'react'

export const Newsletter = () => {
  return (
    <div>
    <section className="bg-green-100 py-10 px-4 text-center">
        <h3 className="text-xl font-medium mb-4">Subscribe to get 10% off your first order</h3>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Drop your email here"
            className="px-4 py-2 rounded w-full"
          />
          <button className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Subscribe →
          </button>
        </form>
      </section>
    </div>
  )
}
