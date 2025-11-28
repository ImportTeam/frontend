// app/dashboard/page.tsx

import Sidebar from '@/src/components/Sidebar';

export default function DashboardPage() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* 사이드바 */}
      <Sidebar />

      {/* 대시보드 본문 영역 */}
      <div className="flex-1 px-8 py-6 bg-[#FFFCF9]">
        {/* 상단 배너 */}
        <section className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <p className="text-xl font-bold text-gray-900">
            👋 홍길동님, 이번 달 
            <span> 절약 금액</span>은{" "}
            <span className="text-green-500">7,800원</span>이에요!
          </p>
          <p className="text-sm text-gray-600 mt-2">
            오늘의 추천 결제수단: <span className="text-blue-600 font-semibold">KB 국민카드</span> (최대 13% 할인)
          </p>

          <div className="flex space-x-3 mt-4">
            <button className="cursor-pointer px-5 py-2.5 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800">
              내 리포트 보기
            </button>
            <button className="cursor-pointer px-5 py-2.5 bg-white border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50">
              결제수단 관리
            </button>
          </div>
        </section>

        {/* 카드 4개 */}
        <section className="grid grid-cols-4 gap-4 mt-6">
          <div className="p-5 bg-white border border-gray-200 rounded-xl">
            <p className="text-sm text-black font-bold mb-2">이번 달 절약 금액</p>
            <p className="text-green-500 text-2xl font-bold">7,800원</p>
            <p className="text-gray-400 text-xs mt-1">절약했어요!</p>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-xl">
            <p className="text-sm text-black font-bold mb-2">가장 많이 이용한 쇼핑 사이트</p>
            <p className="text-gray-900 font-bold text-2xl">쿠팡</p>
            <p className="text-gray-400 text-xs mt-1">10회 이용</p>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-xl">
            <p className="text-sm text-black font-bold mb-2">추천 결제수단</p>
            <p className="text-blue-600 font-bold text-2xl">KB 국민카드</p>
            <p className="text-gray-400 text-xs mt-1">(최대 13% 할인)</p>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-xl">
            <p className="text-sm text-black font-bold mb-2">이번 달 추천 결제수단</p>
            <p className="text-orange-500 font-bold text-2xl">신한카드</p>
            <p className="text-gray-400 text-xs mt-1">(최대 20% 할인)</p>
          </div>
        </section>

        {/* 최근 이용 결제수단 */}
        <section className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-5 text-base">최근 이용 사이트별 결제수단</h3>

          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">쿠팡</p>
                  <p className="text-sm text-gray-500 mt-0.5">KB 국민카드</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium mt-6">5회 이용</p>
            </div>
          ))}
        </section>

        {/* 절약 금액 추이 + 추천 TOP3 */}
        <section className="grid grid-cols-2 gap-6 mt-6">
          {/* 절약 추이 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-5 text-base">AI가 분석한 사용자의 절약 변화 추이</h3>

            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-700 font-medium">지난달</span>
                <span className="text-sm font-bold text-gray-900">6,200원</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-3 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-700 font-medium">이번달</span>
                <span className="text-sm font-bold text-green-500">7,800원</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '90%'}}></div>
              </div>
              <p className="text-sm text-gray-600 mt-3 flex items-center">
                💡 전월 대비 +25.8% 절약 증가
              </p>
            </div>
          </div>

          {/* 추천 TOP3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-5 text-base">
              AI가 추천하는 사용자의 TOP3 결제수단
            </h3>

            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-gray-900 text-sm">
                  1 KB 국민카드
                </span>
                <span className="text-gray-500 text-sm">평균 13% 할인</span>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-gray-900 text-sm">
                  2 KB 국민카드
                </span>
                <span className="text-gray-500 text-sm">평균 13% 할인</span>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg flex justify-between items-center">
                <span className="font-semibold text-gray-900 text-sm">
                  3 KB 국민카드
                </span>
                <span className="text-gray-500 text-sm">평균 13% 할인</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}