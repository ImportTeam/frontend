export default function LoginMainPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF9]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="flex justify-center items-center text-5xl font-black">
                안녕하세요, <span className="text-[#545777]">홍길동</span>님!
            </p>
            <p className="flex justify-center items-center text-3xl text-[#959595] h-20">
                PicSel과 함께 더 스마트한 결제 생활을 시작하세요
            </p>
      </section>

  <section className="bg-[#FFFCF9]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center transition-transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#E8EBFF] flex items-center justify-center">
              <img
                src="dashboard.png"
                className="size-8"
              />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">대시보드</h3>
          <p className="text-[#A2A2A2] mb-4 text-sm">
            이번 달 절약 금액과 결제 분석을 확인해보세요
          </p>
          <p className="font-semibold text-[#000000]">바로가기 →</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center transition-transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#E7FFE8] flex items-center justify-center">
              <img
                src="buysudan.png"
                className="size-8"
              />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">결제수단 관리</h3>
          <p className="text-[#A2A2A2] mb-4 text-sm">
            내 카드와 결제수단을 등록하고 관리하세요
          </p>
          <p className="font-semibold text-[#000000]">바로가기 →</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center transition-transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#F2E9FF] flex items-center justify-center">
              <img
                src="report.png"
                className="size-8"
              />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">리포트</h3>
          <p className="text-[#A2A2A2] mb-4 text-sm">
            상세한 결제 분석과 절약 리포트를 확인하세요
          </p>
          <p className="font-semibold text-[#000000]">바로가기 →</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center transition-transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#FFF2E1] flex items-center justify-center">
              <img
                src="guide.png"
                className="size-8"
              />
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">이용 가이드 보기</h3>
          <p className="text-gray-500 mb-4 text-sm">
            서비스 이용 방법과 주요 기능을 확인해보세요
          </p>
          <p className="font-semibold text-[#000000]">바로가기 →</p>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-10">
        바로가기 버튼을 눌러서 지금 시작해보세요!
      </p>
    </div>
  </section>

      <section id="how-to-use" className="bg-[#FFFCF9] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">사용 방법</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#FFFCF9] rounded-lg p-6">

              <div className="bg-gray-200 rounded aspect-square mb-4"></div>
              <h3 className="font-bold text-center mb-2 text-[#272727]">설치하기</h3>
              <p className="text-sm text-[#4D4D4D] text-center">
                크롬 웹스토어에서 확장 프로그램을 추가하세요. 상품 페이지에 들어가면 자동으로 작동합니다.
              </p>
            </div>
            <div className="rounded-lg p-6">
              <div className="bg-gray-200 rounded aspect-square mb-4"></div>
              <h3 className="font-bold text-center mb-2 text-[#272727]">등록하기</h3>
              <p className="text-sm text-[#4D4D4D] text-center">
                자주 사용하는 카드와 간편결제 계정을 PicSel 계정에 안전하게 등록하세요.
              </p>
            </div>
            <div className="bg-[#FFFCF9] p-6">
              <div className="bg-gray-200 rounded aspect-square mb-4"></div>
              <h3 className="font-bold text-center mb-2 text-[#272727]">비교하기</h3>
              <p className="text-sm text-[#4D4D4D] text-center">
                결제 시 카드·페이별 혜택을 자동 분석해, 지금 가장 유리한 결제 수단을 <br/>
                실시간으로 알려드립니다.
              </p>
            </div>
            <div className="rounded-lg p-6">
              <div className="bg-gray-200 rounded aspect-square mb-4"></div>
              <h3 className="font-bold text-center mb-2 text-[#272727]">사용하기</h3>
              <p className="text-sm text-[#4D4D4D] text-center">
                클릭 한 번으로 혜택이 좋은 결제수단을 확인후, 또 다른 포인트·캐시백·혜택까지 놓치지 마세요!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">주요 기능 소개</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="text-[#BD6D1E] inline-block bg-[#FFAF69] text-xs px-3 py-1 rounded-full mb-4">
              무료 브라우저 확장 프로그램
            </div>
            <h3 className="text-4xl font-bold mb-4">
              온라인 결제 상황 결제 전,<br />
              <span className="text-[#FF851B]">PicSel이 더 스마트하게 비교합니다.</span>
            </h3>
            <p className="text-[#3C3C3C] leading-relaxed">
              이제 결제 페이지에서 고민하지 마세요.<br />
              PicSel이 카드·페이별 할인과 적립 혜택을 자동 분석해,<br />
              한눈에 가장 유리한 결제수단을 추천합니다. <br />
              결제 정보를 자동 입력하고, 더 많은 포인트와 캐시백까지 챙기세요.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg aspect-square order-1 md:order-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gray-200 rounded-lg aspect-square"></div>
          <div>
            <div className="text-[#1E68BD] inline-block bg-[#91B0FF] text-xs px-3 py-1 rounded-full mb-4">
              AI 기반 소비 분석 리포트
            </div>
            <h3 className="text-2xl font-bold mb-4">
              매일 가격 확인도, 계산도 이제 그만.<br />
              <span>PicSel이 당신의 결제 데이터를 <br />
                                  자동으로 분석합니다.</span>
            </h3>
            <p className="text-[#3C3C3C] leading-relaxed">
              PicSel은 카드와 간편결제 데이터를 실시간으로 분석해<br />
              놓친 혜택, 절약 가능한 금액, 더 효율적인 결제 조합을 한눈에 보여드립니다.<br />
              매주 업데이트되는 AI 리포트로 <br />
              당신의 소비 습관에 딱 맞는 절약 방법을 추천해드립니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="text-[#A81EBD] inline-block bg-[#FD69FF] text-xs px-3 py-1 rounded-full mb-4">
              혜택 자동 추적 및 알림 기능
            </div>
            <h3 className="text-4xl font-bold mb-4">
              놓치는 혜택 없이,<br />
              <span className="text-[#D146FF]">당신의 결제가 더 알뜰해집니다.</span>
            </h3>
            <p className="text-[#3C3C3C] leading-relaxed">
              매달 제공되는 구독 크레딧부터 한정 캐시백까지,<br />
              PicSel이 모든 카드·페이 혜택을 자동으로 추적합니다.<br />
              사용자님이 보지 않은 혜택은 알림으로 알려주고, <br />
              곧 만료될 할인은 미리 알려드립니다.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg aspect-square order-1 md:order-2 lg:pb-6 lg:mb-0"></div>
        </div>
      </section>
    </div>
  )
}