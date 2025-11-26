'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function LoginHeader() {
  const [activeSection, setActiveSection] = useState('/')
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const normalizedPathname = pathname === '/' ? '/' : pathname.substring(1)
    setActiveSection(normalizedPathname)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropDownOpen(false)
    }
  }

  document.addEventListener('mousedown', handleClickOutside)

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
  }
}, [dropdownRef])

  const handleNavClick = (id: string) => {

      const routePages = ['dashboard', 'card-edit', 'guide']

      if (id === '/') {
        router.push('/')
        return
      }

      if (routePages.includes(id)) {
         router.push(`/${id}`)
    }
  }
  
  const handleLogout = () => {
    setIsLoggedIn(true)
    setIsDropDownOpen(false)
    router.push('/')
  }

  const navItems = [
    { id: '/', label: '홈' },
    { id: 'dashboard', label: '대시보드' },
    { id: 'card-edit', label: '결제수단 관리' },
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
          <div className='flex items-center space-x-3'>
            {isLoggedIn ? (
              <>
                {/* 알림 버튼 */}
                <button className='p-3 border-2 border-[#ECECEC] rounded-md horver:bg-gray-50 transition-colors duration-200 cursor-pointer'>
                  <img src="bell.png" alt="알림" className='w-5 h-5' />
                </button>

                {/* 사용자 드롭다운 */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                    className="flex items-center space-x-2 px-5 py-2 border-2 border-[#ECECEC] rounded-md hover:bg-gray-50 transition-colors duration-200"
                    >
                        <img src="user.png" alt="사용자" className='w-5 h-6' />
                        <span className='font-semibold text-[#545777]'>홍길동</span>님
                        <svg
                          className={`text-gray-600 w-5 h-5 transition-transform duration-200 ${isDropDownOpen ? 'rotate-180' : ''}`}
                          fill='none'
                          stroke="currentColor"
                          viewBox='0 0 24 24'
                          cursor="pointer"
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* 드롭다운 메뉴*/}
                      {isDropDownOpen && (
                        <div className='absolute right-0 mt-2 w-40 bg-white border-[#ECECEC] rounded-lg shadow-lg overflow-hidden z-50'>
                          <button
                              onClick={() => {
                                router.push('/profile')
                                setIsDropDownOpen(false)
                              }}
                              className='w-full flex items-center space-x-3 px-4 py-4 hover:bg-gray-50 transition-colors duration-200'
                          >
                            <img src="user.png" alt="프로필" className='w-5' />
                            <span className='cursor-pointer text-[#535353] font-bold'>내 프로필</span>
                          </button>

                          <button
                              onClick={() => {
                                router.push('/settings')
                                setIsDropDownOpen(false)
                              }}
                              className='w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200'
                            >
                              <img src='setting.png' alt="설정" className='w-5' />
                              <span className='cursor-pointer text-[#535353] font-bold'>설정</span>
                            </button>

                            <div className='border-t border-gray-200'></div>

                            <button
                              onClick={handleLogout}
                              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                            >
                              <img src="/exit.png" alt="로그아웃" className="w-5 h-5" />
                              <span className="cursor-pointer text-red-500 font-bold">로그아웃</span>
                            </button>
                          </div>
                      )}
                </div>
              </>
            ) : (
              <button
                  onClick={() => router.push('/LoginForm')}
                  className='cursor-pointer px-5 py-2 border-2 border-[#ECECEC] rounded-md text-[#424242] horver:bg-gray-50 transition-colors duration-200 font-semibold'
                >
                  로그인
                  </button>
  )
}
          </div>
        </div>
      </div>
    </header>
  )
}

