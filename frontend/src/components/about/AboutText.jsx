import React from 'react'

export const AboutText = () => {
  return (
    <div>
    <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg mb-8">
          We are a sanctuary for seekers, healers, and those ready to reclaim their inner light.
        </p>
        <p className="max-w-3xl mx-auto text-gray-600">
          Our offerings are rooted in ancient wisdom and modern soul work —
          from educational material and healing tools to sacred mentorship
          and expansive rituals.
        </p>

        <div className="mt-10">
          <img
            src="/assets/plant-illustration.png"
            alt="Illustration"
            className="mx-auto max-w-xs"
          />
        </div>
      </section>
    </div>
  )
}
