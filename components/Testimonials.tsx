'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    { name: 'משפחת כהן', date: '08/2023', text: 'איתן הפך את החתונה שלנו לחוויה בלתי נשכחת. כל פרט, מהתחלה ועד הסוף, היה מתואם בדיוק לרצוננו. התוצאה הייתה מושלמת.' },
    { name: 'אורן ויעל', date: '10/2023', text: 'האירוע שלנו בגן הפקאן היה לא פחות ממושלם. איתן דאג לכל פרט, החל מהתכנון ועד לביצוע. כל הצוות היה מקצועי וקשוב, וכל האורחים היו מרוצים.' },
    { name: 'דני ומאיה', date: '05/2023', text: 'החתונה שלנו הייתה יוצאת דופן בזכות איתן. הוא היה קשוב לכל בקשה שלנו ודאג שהכל יקרה בצורה מושלמת. אנחנו מודים לו על האירוע המהמם.' },
    { name: 'גיא ושרון', date: '07/2023', text: 'לא היינו יכולים לבקש יותר מזה. איתן ניהל את האירוע שלנו בצורה מדויקת ומקצועית, ונתן לנו להרגיש שמישהו דואג לכל פרט.' },
    { name: 'רועי ונועה', date: '03/2024', text: 'החתונה שלנו בגן הפקאן הייתה חלום שהתגשם. איתן היה שם כל הזמן, עזר לנו לבחור ספקים, וליווה אותנו לאורך כל הדרך עד לרגע הגדול.' },
    { name: 'אלי ודניאל', date: '12/2023', text: 'האירוע שלנו היה מאורגן בצורה מקצועית ומסודרת בזכות איתן. כל דבר קרה בזמן ובצורה מרשימה, והאורחים לא הפסיקו להתלהב.' },
    { name: 'שחר ומאיה', date: '01/2024', text: 'איתן דאג לכל פרט בחתונה שלנו, החל מהמוזיקה ועד לעיצוב. הוא היה קשוב לכל בקשה ושיפר את האירוע בכל שלב.' },
    { name: 'יוסי ורונית', date: '06/2023', text: 'לא ידענו איך הוא עושה את זה, אבל איתן הפך את החתונה שלנו לכזו שכולם זוכרים. כל פרט היה במקום והאירוע היה פשוט מושלם.' },
    { name: 'מיכל ויונתן', date: '09/2023', text: 'האירוע שלנו בגן הפקאן היה לא רק חתונה, אלא חוויה. איתן ידע איך לקחת את החזון שלנו ולממש אותו בצורה יוצאת דופן.' },
    { name: 'תמר ויוסי', date: '11/2023', text: 'היו לנו הרבה דרישות והיו רגעים של מתח, אבל איתן ידע להתמודד עם כל אתגר ולגרום לנו להרגיש בטוחים ומרוצים בכל שלב.' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">ממליצים</h2>
        <div className="relative">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <Button variant="outline" size="icon" onClick={prevTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}