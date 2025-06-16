"use client"

import type React from "react"
import HomeIcon from '../public/logo.svg'; // adjust the path as needed
import Image from "next/image";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, Utensils, Play, CheckCircle, Users, Shield, Heart } from "lucide-react"

export default function SettleMateLanding() {
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [stickyEmail, setStickyEmail] = useState("")
  const [stickyCity, setStickyCity] = useState("")

  const handleSubmit = (e: React.FormEvent, isSticky = false) => {
    e.preventDefault()
    if (isSticky) {
      if (stickyEmail && stickyCity) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
      }
    } else {
      if (email) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              priority
              src={HomeIcon}
              alt="SettleMate Logo"
              width={40}
              height={40}
            />
            <span className="text-3xl font-bold text-gray-900">SettleMate</span>
          </div>
        </div>
      </header >

      {/* Hero Section */}
      < section className="container mx-auto px-4 py-12 md:py-20" >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your first friend in a <span className="text-[#8C52FF]">new city</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover PGs, Tiffin services, and local tips – all in one app. Making your relocation journey smooth
                and stress-free.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-lg"
                  required
                />
                <Button type="submit" className="bg-[#8C52FF] hover:bg-[#7A47E6] h-12 px-8 text-lg font-semibold">
                  Notify Me When It Launches
                </Button>
              </div>
              {isSubmitted && (
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thanks! We'll notify you when we launch.</span>
                </div>
              )}
            </form>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>500+ people waiting</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>100% verified listings</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#8C52FF] to-[#6B46C1] rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Welcome!</h3>
                    <p className="text-purple-200">Let's find you a perfect place</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <Home className="w-8 h-8 mb-2" />
                    <p className="text-sm font-medium">PG Rooms</p>
                    <p className="text-xs text-purple-200">₹8,000/m - ₹25,000/m</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Utensils className="w-8 h-8 mb-2" />
                    <p className="text-sm font-medium">Tiffin Service</p>
                    <p className="text-xs text-purple-200">₹3,000/m - ₹6,000/m</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <Play className="w-6 h-6" />
                    <div>
                      <p className="text-sm font-medium">Local Tips & Reels</p>
                      <p className="text-xs text-purple-200">Room tours, city hacks & more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* How It Works Section */}
      < section className="bg-white py-16 md:py-24" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How SettleMate Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to find your perfect accommodation and food service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#8C52FF] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Choose Your City</h3>
              <p className="text-gray-600">
                Select from major metro cities where we have verified listings and services
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#8C52FF] rounded-full flex items-center justify-center mx-auto">
                <div className="flex space-x-1">
                  <Home className="w-4 h-4 text-white" />
                  <Utensils className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Find PG or Food Service</h3>
              <p className="text-gray-600">
                Browse verified PG accommodations and affordable tiffin services with detailed info
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#8C52FF] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Contact & Move In</h3>
              <p className="text-gray-600">Connect directly with owners, visit places, and move in with confidence</p>
            </div>
          </div>
        </div>
      </section >

      {/* Feature Highlights */}
      < section className="py-16 md:py-24 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need in One App</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From finding accommodation to discovering local food and tips
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#8C52FF] rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Verified PG Listings</h3>
                <p className="text-gray-600 mb-6">
                  Browse through verified PG accommodations with photos, amenities, pricing, and direct contact with
                  owners.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Photo galleries & virtual tours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Advanced filters & search</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Direct owner contact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#8C52FF] rounded-lg flex items-center justify-center mb-6">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Affordable Tiffin Services</h3>
                <p className="text-gray-600 mb-6">
                  Discover home-style food providers with menus, pricing, and reviews from fellow students and
                  professionals.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Daily & monthly meal plans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Regional cuisine options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Customer reviews & ratings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#8C52FF] rounded-lg flex items-center justify-center mb-6">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore Tab (Reels)</h3>
                <p className="text-gray-600 mb-6">
                  Watch short videos featuring room tours, city hacks, local tips, and experiences from other
                  relocators.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Room & area tours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Local tips & hacks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Community experiences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Trust Section */}
      < section className="py-16 bg-white" >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-[#8C52FF]" />
            <span className="text-lg text-gray-600">Built with love for students & movers</span>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We understand the challenges of moving to a new city. SettleMate is designed by people who've been there,
            for people who are going through it now.
          </p>
        </div>
      </section >

      {/* Sticky Bottom CTA */}
      < div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50" >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-900">Join 500+ others waiting to try SettleMate</p>
              <p className="text-sm text-gray-600">Be the first to know when we launch</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e, true)} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Select value={stickyCity} onValueChange={setStickyCity}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="email"
                placeholder="Your email"
                value={stickyEmail}
                onChange={(e) => setStickyEmail(e.target.value)}
                className="w-full sm:w-48"
                required
              />
              <Button type="submit" className="bg-[#8C52FF] hover:bg-[#7A47E6] whitespace-nowrap">
                Notify Me
              </Button>
            </form>
          </div>
          {isSubmitted && (
            <div className="flex items-center justify-center space-x-2 text-green-600 mt-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Thanks! We'll notify you when we launch.</span>
            </div>
          )}
        </div>
      </div >

      {/* Add bottom padding to account for sticky CTA */}
      < div className="h-24" ></div >
    </div >
  )
}
