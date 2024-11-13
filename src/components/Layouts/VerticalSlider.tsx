'use client'

import React, { useState, useEffect, useRef } from 'react'



export function VerticalSlider(sections: any) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id)
  const observerRefs = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    sections.forEach((section: any) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id)
            }
          })
        },
        { threshold: 0.5 }
      )

      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
      observerRefs.current.push(observer)
    })

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [])

  const handleSliderClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex h-screen">
      {/* Vertical Slider */}
      <div className="fixed left-0 top-0 flex h-screen w-12 flex-col items-center justify-center bg-gray-100">
        {sections.map((section: any) => (
          <button
            key={section.id}
            className={`group relative my-2 h-16 w-2 cursor-pointer rounded-full transition-all duration-300 ${
              activeSection === section.id ? section.color : 'bg-gray-300'
            }`}
            onClick={() => handleSliderClick(section.id)}
          >
            <span className="absolute left-full ml-2 hidden -translate-x-2 rotate-90 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
              {section.title}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-12 flex-1 overflow-y-auto">
        {sections.map((section: any) => (
          <div
            key={section.id}
            id={section.id}
            className={`flex h-screen items-center justify-center text-4xl text-white ${section.color}`}
          >
            {section.title}
          </div>
        ))}
      </div>
    </div>
  )
}