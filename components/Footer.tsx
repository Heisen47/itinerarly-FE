import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        {/* Company Info */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white">Itinerarly</h3>
          <p className="text-xs">
            Making travel planning simple and enjoyable for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {['About', 'Features', 'Pricing', 'Blog'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase()}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-1">
            {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms'].map((item) => (
              <li key={item}>
                <Link 
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2">Connect</h3>
          <div className="flex space-x-3">
            {[
              { icon: Facebook, href: 'https://facebook.com' },
              { icon: Twitter, href: 'https://twitter.com' },
              { icon: Instagram, href: 'https://instagram.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:contact@itinerarly.com' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 pt-4 border-t border-gray-800">
        <p className="text-xs text-center text-gray-400">
          &copy; {new Date().getFullYear()} Itinerarly. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer