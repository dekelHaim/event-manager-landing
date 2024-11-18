'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Settings, ZoomIn, PanelTop, Type } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Switch } from './ui/switch'
import { Slider } from './ui/slider'

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [lineSpacing, setLineSpacing] = useState(1.5)

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.body.classList.toggle('high-contrast')
  }

  const changeFontSize = (newSize: number) => {
    setFontSize(newSize)
    document.documentElement.style.setProperty('--base-font-size', `${newSize}%`)
  }

  const changeLineSpacing = (newSpacing: number) => {
    setLineSpacing(newSpacing)
    document.body.style.lineHeight = `${newSpacing}`
  }

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
            <Settings className="h-4 w-4" />
            <span className="sr-only">פתח תפריט נגישות</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" side="right">
          <div className="grid gap-4">
            <h2 className="font-semibold">הגדרות נגישות</h2>
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="flex items-center gap-2">
                <PanelTop className="h-4 w-4" />
                ניגודיות גבוהה
              </label>
              <Switch
                id="high-contrast"
                checked={highContrast}
                onCheckedChange={toggleHighContrast}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="font-size" className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                גודל טקסט
              </label>
              <Slider
                id="font-size"
                min={75}
                max={200}
                step={25}
                value={[fontSize]}
                onValueChange={(value: number[]) => changeFontSize(value[0])}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="line-spacing" className="flex items-center gap-2">
                <ZoomIn className="h-4 w-4" />
                מרווח בין שורות
              </label>
              <Slider
                id="line-spacing"
                min={1}
                max={2}
                step={0.1}
                value={[lineSpacing]}
                onValueChange={(value: number[]) => changeLineSpacing(value[0])}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}