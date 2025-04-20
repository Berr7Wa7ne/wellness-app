import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-2">SoulScape</h4>
            <p>Opening Hours:<br />Mon – Sat, 10:30 a.m. to 7 p.m.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Videos</li>
              <li>Merchandise</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Social Media</h4>
            <ul className="space-y-1">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>WhatsApp</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <p>support@yourplatform.com<br />+123 456 7890</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
