'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const [activeSection, setActiveSection] = useState('/')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: '/', offset: 0 },
        { id: 'how-to-use', offset: document.getElementById('how-to-use')?.offsetTop || 0 },
        { id: 'features', offset: document.getElementById('features')?.offsetTop || 0 },
        //{ id: 'guide', offset: document.getElementById('guide')?.offsetTop || 0 },
      ]

      const scrollY = window.scrollY + 150
      let current = '/'

      for (let i = 0; i < sections.length; i++) {
        if (scrollY >= sections[i].offset) current = sections[i].id
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    if (id === '/') {
      if (pathname !== '/') {
        router.push('/')
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  const navItems = [
    { id: '/', label: '홈' },
    { id: 'how-to-use', label: '사용 방법' },
    { id: 'features', label: '주요 기능' },
    { id: 'guide', label: '이용 가이드' },
  ]

  return (
    <header className="bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 로고 */}
          <div
            className="shrink-0 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <img src="picsel.png" alt="PicSel" className="h-8 w-auto" />
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-semibold transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  activeSection === item.id
                    ? 'text-[#5A4633]'
                    : 'text-[#A8A8A8] hover:text-[#4a3623]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 버튼 그룹 */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => router.push('/LoginForm')}
              className="cursor-pointer px-5 py-2 border border-gray-300 rounded-md text-[#424242] hover:bg-gray-50 transition-colors duration-200 font-semibold"
            >
              로그인
            </button>
            <button className="cursor-pointer px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200 font-semibold">
              가입하여 시작하기
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
