import React from 'react';
import Sidebar from '@/src/components/Sidebar';

export default function ReportPage() {
  function Row({ label, value, valueClass = "" }: any) {
  return (
    <div className="flex justify-between text-sm border-b border-gray-200 w-full">
      <span className="text-black-500 text-lg">{label}</span>
      <span className={`font-medium text-lg ${valueClass}`}>{value}</span>
    </div>
  );
}

function CardItem({ name, amount, percent }: any) {
  return (
    <div className="flex justify-between items-center border rounded-lg p-4 mb-3" style={{ border: '1px solid #9D9D9D' }}>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">총 8회 사용</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{amount}</p>
        <p className="text-[#00CD30] text-sm">{percent}</p>
      </div>
    </div>
  );
}

function InsightBox({ color, title, titleColor, textColor, children }: any) {
  return (
    <div className={`${color} p-4 rounded-lg mb-3`}>
      <p className="font-semibold mb-1" style={{ color: titleColor }}>{title}</p>
      <p className="text-sm" style={{ color: textColor }}>{children}</p>
    </div>
  );
}

  return (
    <div className="flex min-h-screen bg-[#FFFCF9]">
      
            {/* 사이드바 */}
            <Sidebar />

        {/* 본문 */}
        <main className="flex-1 px-10 py-8 overflow-y-auto">

          {/* 제목 */}
          <section>
            <h1 className="text-3xl font-black">월간 리포트</h1>
            <h1 className="text-[#9A9A9A] mt-3 text-2xl font-semibold">
              2025년 11월 결제 분석 리포트
            </h1>
          </section>

          <div className="mt-8 flex flex-col gap-8">
            
            {/* 월간 사용 금액 카드 */}
            <section className="bg-white rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold mb-4">일간 사용 금액</h3>
                  <p className="text-[#A8A8A8] text-sm">총 사용 금액</p>
                  <h2 className="text-2xl font-bold mt-1">120,000원</h2>
                </div>

                <input 
                  type="date" 
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="border rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div className="h-64 flex items-center justify-center text-gray-400">
                (그래프 영역)
              </div>
            </section>

            {/* 월간 결제 요약 */}
            <section className="bg-white rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
              <h3 className="text-lg font-bold mb-10">월간 절약 요약</h3>

              <div className="flex flex-col gap-6">
                <Row label="총 결제 금액" value="450,000원" />
                <Row label="총 적립 금액" value="7,800원" valueClass="text-[#00D90B]" />
                <Row label="절약률" value="1.78%" valueClass="text-[#324DFF]" />
              </div>
            </section>

            {/* 결제 수단별 사용 현황 */}
            <section className="bg-white rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
              <h3 className="text-lg font-semibold mb-4">결제 수단별 사용 현황</h3>

              <CardItem name="KB 국민카드" amount="100,000원" percent="18% 할인 받음" />
              <CardItem name="KB 국민카드" amount="100,000원" percent="18% 할인 받음" />
              <CardItem name="KB 국민카드" amount="100,000원" percent="18% 할인 받음" />
            </section>

            {/* AI 추천 인사이트 */}
            <section className="bg-white rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <h3 className="text-lg font-semibold mb-4">AI 추천 인사이트</h3>

            <InsightBox
                color="bg-blue-100"
                title="쿠팡 결제 시 KB 국민카드 사용 추천"
                titleColor="#0027A7"
                textColor="#3051FF"
            >
                쿠팡에서 KB 국민카드로 결제하면 평균 2.8% 추가 할인이 가능합니다.
            </InsightBox>

            <InsightBox
                color="bg-green-100"
                title="이번 달 절약률 상승"
                titleColor="#006320"
                textColor="#00862B"
            >
                지난달 대비 25.8% 더 많은 금액을 절약했습니다. 계속 유지하세요!
            </InsightBox>

            <InsightBox
                color="bg-amber-100"
                title="놓친 혜택 알림"
                titleColor="#6D3700"
                textColor="#FF8000"
            >
                11번가에서 KB 국민카드를 사용하면 1,200원을 더 절약할 수 있었습니다.
            </InsightBox>
            </section>
          </div>
        </main>
      </div>
  );
}

