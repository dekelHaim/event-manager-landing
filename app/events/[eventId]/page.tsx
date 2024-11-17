'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const eventData = {
  weddings: {
    title: "חתונות",
    tagline: "הפכו את החתונה שלכם לחלום שהתגשם",
    description: "חתונה היא אחד הימים החשובים בחיים שלכם. איתן, עם ניסיון של מעל עשור, מתמחה בהפקת חתונות בלתי נשכחות.",
    services: ["תכנון וליווי אישי", "שירות מותאם לכל תקציב", "קשרים עם ספקים מובילים"],
    image: "/images/wedding.jpg",
  },
  "private-events": {
    title: "אירועים פרטיים",
    tagline: "אירועים משפחתיים בלתי נשכחים",
    description: "ימי הולדת, בר/בת מצווה, ואירועים משפחתיים באווירה מיוחדת.",
    services: ["קונספט מותאם אישית", "עיצוב מותאם", "שירות מקצועי לכל אורך האירוע"],
    image: "/images/private-event.jpg",
  },
  "business-events": {
    title: "אירועים עסקיים",
    tagline: "אירועים עסקיים שמותאמים בדיוק לצרכי החברה",
    description: "כנסים, ערבי גאלה, והשקות מוצרים שמתוכננים לפרטים הקטנים ביותר.",
    services: ["תכנון לוגיסטי", "הפקה טכנית", "תיאום עם ספקים ומיקומים"],
    image: "/images/business-event.jpg",
  },
} as const

const eventKeys = Object.keys(eventData) as (keyof typeof eventData)[]

export default function EventPage() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const currentEventKey = eventKeys[currentEventIndex]
  const currentEvent = eventData[currentEventKey]

  const handleNext = () => {
    setCurrentEventIndex((prev) => (prev + 1) % eventKeys.length)
  }

  const handlePrev = () => {
    setCurrentEventIndex((prev) => (prev - 1 + eventKeys.length) % eventKeys.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">{currentEvent.title}</h1>
          <p className="text-lg text-gray-600">{currentEvent.tagline}</p>
        </div>
        <div className="relative flex items-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-4 bg-gray-300 hover:bg-gray-500 rounded-full shadow-md z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <Image
              src={currentEvent.image}
              alt={currentEvent.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-lg text-gray-700 mb-6">{currentEvent.description}</p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">מה תקבלו:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {currentEvent.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <div className="flex justify-center gap-4">
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  <button className="mt-6 w-48 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                    צור קשר
                  </button>
                </Link>
                <Link href="/#events" className="hover:text-primary transition-colors">
                  <button className="mt-6 w-48 px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700">
                    חזור
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 p-4 bg-gray-300 hover:bg-gray-500 rounded-full shadow-md z-10">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
