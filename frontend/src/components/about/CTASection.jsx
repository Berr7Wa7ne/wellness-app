import React from 'react'

export const CTASection = () => {
  return (
    <div>
    <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('/assets/cta-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
          <p className="mb-6">Shop now to start aligning with your path.</p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Shop now →
          </button>
        </div>
      </section>
    </div>
  )
}
