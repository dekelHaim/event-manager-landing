'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cake, GlassWater, Briefcase } from "lucide-react"
import Link from "next/link"

export default function Events() {
  const events = [
    { id: "weddings", title: "חתונות", description: "אירועי חתונה מושלמים מותאמים אישית לכל זוג", icon: GlassWater },
    { id: "private-events", title: "אירועים פרטיים", description: "ימי הולדת, בר/בת מצווה, ואירועים משפחתיים", icon: Cake },
    { id: "business-events", title: "אירועים עסקיים", description: "כנסים, ערבי גאלה, והשקות מוצרים", icon: Briefcase },
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">האירועים שלי</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Link href={`/events/${event.id}`} key={index}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <event.icon className="w-8 h-8 mr-2" />
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
