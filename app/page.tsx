'use client';

import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaStar,
  FaTools,
  FaShieldAlt,
  FaTint,
  FaMapMarkerAlt,
  FaArrowUp,
  FaTimes,
  FaBars,
  FaWater,
  FaWrench,
  FaFire,
} from 'react-icons/fa';
import Image from 'next/image';

export default function PlumbingWebsite() {
  const [counters, setCounters] = useState({
    customers: 0,
    experience: 0,
  });
  const countersRef:any = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleCounterAnimation = () => {
      if (!countersRef.current) return;
      const rect = countersRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setCounters({ customers: 1000, experience: 15 });
      }
    };
    window.addEventListener('scroll', handleCounterAnimation);
    return () => window.removeEventListener('scroll', handleCounterAnimation);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const services = [
    {
      title: 'Leakage Repair',
      icon: FaWater,
      description: 'Expert detection and repair of water leaks in bathrooms, kitchens and pipelines.',
      image: './s1.jpg',
    },
    {
      title: 'Bathroom Fittings',
      icon: FaTint,
      description: 'Complete bathroom fixtures and install quality fittings with guaranteed workmanship.',
      image: './s2.jpg',
    },
    {
      title: 'Pipe Installation',
      icon: FaWrench,
      description: 'Professional pipe pipes replacement and installation for residential and commercial.',
      image: './s3.jpg',
    },
    {
      title: 'Water Tank Cleaning',
      icon: FaTint,
      description: 'Thorough cleaning and maintenance of water storage with sanitization services.',
      image: './s4.jpg',
    },
    {
      title: 'Tap & Faucet Repair',
      icon: FaWrench,
      description: 'Repair and installation of taps, faucets and all water fixtures with quality work.',
      image: './s5.jpg',
    },
    {
      title: 'Water Heater Services',
      icon: FaFire,
      description: 'Installation, maintenance and repair of water heaters and heating systems.',
      image: './s6.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar (Lajpat Nagar)',
      text: 'Excellent service! Fast response and affordable rates. The plumber was very professional and completed the work with quality materials.',
      rating: 5,
    },
    {
      name: 'Priya Gupta (Green Park)',
      text: 'Called at 10 minutes past midnight and they arrived in 20 minutes! Very impressed by their emergency service and honest charges.',
      rating: 5,
    },
    {
      name: 'Amit Sharma (Kalka G)',
      text: 'Best plumber in Delhi NCR! Transparent pricing with no hidden charges. Would definitely recommend to all my friends.',
      rating: 5,
    },
  ];

  const features = [
    { title: 'Quick Response', desc: 'Within 30 minutes', icon: '⚡' },
    { title: 'Available 7 Days', desc: 'Monday to Sunday', icon: '📅' },
    { title: 'Quick Response', desc: 'Within 30 minutes', icon: '⚡' },
  ];

  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className=" bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
              <Image src={'./logo.jpg'} width={1000} height={1000} quality={100} className='w-12 h-12 rounded-full' alt='logo'/>
            </div>
            <div>
              <p className="text-xs text-gray-600">Trusted Since 1990</p>
              <p className="font-bold text-gray-900 text-sm">Shiv Shankar Plumber</p>
            </div>
          </div>
          <a href="https://wa.me/919868013443" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold hover:bg-emerald-600 transition">
            Book Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-50 rounded-full">
              <p className="text-xs text-emerald-600 font-semibold">✓ Trusted Since 1990 | 1000+ Happy Customers</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Expert Plumbing Services in <span className="text-emerald-500">Delhi NCR</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Professional plumbing solutions for your home and business. Bathroom, kitchen, drain repair, installations and more with guaranteed workmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://wa.me/919868013443" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition shadow-lg hover:shadow-xl">
                <FaWhatsapp className="text-xl" /> Book on WhatsApp
              </a>
              <a href="tel:9868013443" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transition">
                <FaPhoneAlt className="text-xl" /> Get Free Quote
              </a>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-500 text-xl" />
                <div>
                  <p className="text-gray-600">Guaranteed Work</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-emerald-500 text-xl" />
                <div>
                  <p className="text-gray-600">9 AM – 10 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image src={'./hero.png'  } width={1000} height={1000} quality={100} alt="Professional Plumber" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-6 z-10">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-500">4.8</p>
                <p className="text-xs text-gray-600">Based on 100+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div data-aos="fade-up">
            <div className="text-4xl font-bold text-gray-900 mb-2">30 Min</div>
            <p className="text-gray-600 text-sm">Quick Response</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-emerald-500 font-semibold text-sm mb-2">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Plumbing Solutions</h2>
            <p className="text-gray-600">From bathroom installations to drain plumbing solutions we offer comprehensive and care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service?.image} width={1000} height={1000} quality={100} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl">
                    <service.icon className="text-2xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <a href="https://wa.me/919868013443" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-emerald-500 font-semibold text-sm hover:text-emerald-600">
                    Book Service →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <p className="text-emerald-500 font-semibold text-sm mb-2">READY TO SERVE</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need an Emergency Plumber?</h2>
          <p className="text-gray-600 mb-6">24 hours • 7 days a week • Only 30 min to your location.</p>
          <a href="https://wa.me/919868013443" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition shadow-lg hover:shadow-xl">
            <FaWhatsapp className="text-2xl" /> Get Plumbing Help Now
          </a>
        </div>
      </section>

      {/* Dark Section - Reliability */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-emerald-400 text-sm font-semibold mb-2">LAST CHECKED AT</p>
            <h2 className="text-4xl font-bold mb-4">Reliable Service, Every Time</h2>
            <p className="text-gray-400">We are committed to providing the best plumbing experience in Delhi NCR.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div data-aos="fade-up" className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2 flex justify-center">
                <FaClock className="text-emerald-400" />
              </div>
              <h3 className="font-bold mb-2">Quick Response</h3>
              <p className="text-gray-400 text-sm">Arrive within 30 minutes of your call</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2 flex justify-center">
                <FaTools className="text-emerald-400" />
              </div>
              <h3 className="font-bold mb-2">Experienced Professionals</h3>
              <p className="text-gray-400 text-sm">Highly skilled and trained technicians</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2 flex justify-center">
                <FaCheckCircle className="text-emerald-400" />
              </div>
              <h3 className="font-bold mb-2">Guaranteed Work</h3>
              <p className="text-gray-400 text-sm">Quality work with full satisfaction</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-800 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2 flex justify-center">
                <FaShieldAlt className="text-emerald-400" />
              </div>
              <h3 className="font-bold mb-2">Affordable Rates</h3>
              <p className="text-gray-400 text-sm">Transparent pricing with no hidden charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 font-bold text-lg">
              <FaClock className="text-2xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Available 7 Days</p>
              <p className="text-sm text-gray-600">Monday to Sunday</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 font-bold text-lg">
              <FaClock className="text-2xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">9 AM - 10 PM</p>
              <p className="text-sm text-gray-600">Operating Hours</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 font-bold text-lg">
              <FaCheckCircle className="text-2xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Quick Response</p>
              <p className="text-sm text-gray-600">Within 30 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-emerald-500 font-semibold text-sm mb-2">CUSTOMER REVIEWS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from satisfied customers across Delhi NCR.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-600 flex items-center gap-1"><FaCheckCircle className="text-xs text-emerald-500" /> Verified</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-emerald-500 text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-4xl font-bold mb-4">Affordable Plumbing at Your Doorstep</h2>
          <p className="text-lg opacity-90 mb-8">Get expert plumbing services without emptying your pocket. Reach out for your plumbing needs quickly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/919868013443" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-emerald-500 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
              <FaWhatsapp className="text-2xl" /> Book Service In 1 Minute
            </a>
            <a href="https://wa.me/919319702754" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition">
              <FaWhatsapp className="text-2xl" /> Chat with Manager
            </a>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <a href="https://wa.me/919868013443" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 transition hover:scale-110 border-4 border-white" title="WhatsApp: 9868013443">
          <FaWhatsapp className="text-2xl" />
        </a>
        <a href="tel:9868013443" className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition hover:scale-110 border-4 border-white" title="Call: 9868013443">
          <FaPhoneAlt className="text-2xl" />
        </a>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 left-6 bg-gray-900 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-gray-800 transition flex items-center justify-center z-40 font-bold hover:scale-110 border-4 border-white">
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className=" bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white">
                 <Image src={'./logo.jpg'} alt='logo' className='h-12 w-12  rounded-full' width={1000} height={1000} />
              </div>
              <p className="font-bold">Shiv Shankar Plumber</p>
            </div>
            <p className="text-gray-400 text-sm mb-4">Professional plumbing in Delhi NCR with 15+ years of experience. Trusted by 1000+ happy customers.</p>
          </div>


          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-bold mb-4">Contact Numbers</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2"><FaWhatsapp className="text-emerald-400" /> <a href="https://wa.me/919868013443" className="text-emerald-400 hover:text-emerald-300">9868013443</a></p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-emerald-400" /> <a href="tel:9868013443" className="text-emerald-400 hover:text-emerald-300">9868013443</a></p>
              <p className="flex items-center gap-2"><FaWhatsapp className="text-emerald-400" /> <a href="https://wa.me/919319702754" className="text-emerald-400 hover:text-emerald-300">9319702754</a></p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-bold mb-4">Service Hours</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Available 7 Days a Week</p>
              <p>9 AM - 10 PM Daily</p>
              <p>Emergency: 24/7 Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">&copy; 2026 Shiv Shankar Plumber. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
