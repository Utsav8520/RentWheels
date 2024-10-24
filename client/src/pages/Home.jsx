import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilterSidebar from '../components/FilterSidebar';
import CarsGrid from '../components/CarsGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Footer from '../components/Footer';

const cars = [
  {
    id: 1,
    name: 'Land Rover Defender Sports',
    image: '/images/defender.jpg',
    transmission: 'Automatic',
    capacity: 4,
    price: 390,
    features: ['4x4', 'GPS', 'Bluetooth', 'Leather Seats'],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Mercedes-Benz GLC Coupe',
    image: '/images/glc.jpg',
    transmission: 'Automatic',
    capacity: 4,
    price: 420,
    features: ['AWD', 'Panoramic Roof', 'Smart Display', 'Premium Audio'],
    rating: 4.9,
    reviews: 156
  },
  {
    id: 3,
    name: 'BMW X5',
    image: '/images/x5.jpg',
    transmission: 'Automatic',
    capacity: 5,
    price: 450,
    features: ['AWD', 'Sport Mode', 'Premium Sound', 'Heated Seats'],
    rating: 4.7,
    reviews: 198
  },
  {
    id: 4,
    name: 'Audi Q7',
    image: '/images/q7.jpg',
    transmission: 'Automatic',
    capacity: 7,
    price: 500,
    features: ['Quattro AWD', '3rd Row', 'Bang & Olufsen Audio', 'Air Suspension'],
    rating: 4.8,
    reviews: 167
  },
  {
    id: 5,
    name: 'Tesla Model X',
    image: '/images/modelx.jpg',
    transmission: 'Automatic',
    capacity: 5,
    price: 600,
    features: ['Autopilot', 'Falcon Doors', 'Ludicrous Mode', 'Premium Interior'],
    rating: 4.9,
    reviews: 215
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Overlay */}
      <section className="relative">
        <Hero />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 -mt-16 relative z-10">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="sticky top-24">
                <FilterSidebar />
              </div>
            </div>

            {/* Car Grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Available Vehicles</h2>
                <p className="text-gray-600">Find your perfect rental from our premium selection</p>
              </div>
              <CarsGrid cars={cars} />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience luxury and reliability with our premium vehicle rental service
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10" />
            <div className="relative">
              <WhyChooseUs />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
          <div className="px-4 lg:px-12">
            <TestimonialsCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold mb-2">Ready to Get Started?</h2>
              <p className="text-blue-100">Book your premium vehicle today and experience luxury</p>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Browse Vehicles
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;