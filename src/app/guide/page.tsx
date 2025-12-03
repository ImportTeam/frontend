'use client'

import React, { useState } from 'react';

type GuideSection = {
  title: string;
  description: string;
  steps: string[];
};

type GuideContent = {
  [key: string]: GuideSection[];
};

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState('시작하기');

  const tabs = ['시작하기', '기능 소개', '사용 팁'];

  const guideContent: GuideContent = {
    '시작하기': [
      {
        title: '회원가입 및 로그인',
        description: 'PicSel을 사용하기 위해 먼저 계정을 만들어보세요.',
        steps: [
          '우측 상단의 "회원가입" 버튼을 클릭하세요',
          '이메일과 비밀번호를 입력하여 계정을 생성하세요',
          '이메일 인증을 완료하면 서비스를 이용할 수 있습니다'
        ]
      },
      {
        title: '대시보드 살펴보기',
        description: '메인 대시보드에서 모든 기능에 접근할 수 있습니다.',
        steps: [
          '좌측 메뉴에서 원하는 기능을 선택하세요',
          '상단 검색바를 통해 빠르게 검색할 수 있습니다',
          '알림 아이콘을 클릭하여 최신 소식을 확인하세요'
        ]
      }
    ],
    '기능 소개': [
      {
        title: '이미지 업로드',
        description: '다양한 방법으로 이미지를 업로드할 수 있습니다.',
        steps: [
          '드래그 앤 드롭으로 간편하게 업로드하세요',
          '여러 장의 이미지를 한 번에 업로드할 수 있습니다',
          '지원 형식: JPG, PNG, GIF, WebP'
        ]
      },
      {
        title: '이미지 편집',
        description: '업로드한 이미지를 쉽게 편집할 수 있습니다.',
        steps: [
          '크롭, 리사이즈, 필터 등 다양한 편집 도구를 제공합니다',
          '편집 내역은 자동으로 저장됩니다',
          '원본 이미지는 항상 보관됩니다'
        ]
      },
      {
        title: '결제 및 구독',
        description: '프리미엄 기능을 사용하려면 구독이 필요합니다.',
        steps: [
          '무료 플랜으로 기본 기능을 체험해보세요',
          '프로 플랜으로 업그레이드하여 무제한 기능을 이용하세요',
          '언제든지 구독을 취소할 수 있습니다'
        ]
      }
    ],
    '사용 팁': [
      {
        title: '효율적인 작업을 위한 팁',
        description: 'PicSel을 더욱 효과적으로 사용하는 방법입니다.',
        steps: [
          '단축키를 활용하여 작업 속도를 높이세요 (Ctrl/Cmd + S로 저장)',
          '자주 사용하는 설정은 프리셋으로 저장하세요',
          '일괄 처리 기능으로 여러 이미지를 한 번에 편집하세요'
        ]
      },
      {
        title: '품질 최적화',
        description: '최상의 이미지 품질을 유지하는 방법입니다.',
        steps: [
          '원본 해상도를 유지하며 편집하세요',
          '내보내기 시 적절한 압축률을 선택하세요',
          'WebP 형식으로 저장하면 용량을 줄일 수 있습니다'
        ]
      },
      {
        title: '문제 해결',
        description: '자주 발생하는 문제와 해결 방법입니다.',
        steps: [
          '이미지가 업로드되지 않으면 파일 크기와 형식을 확인하세요',
          '편집 내용이 저장되지 않으면 브라우저 캐시를 삭제해보세요',
          '로그아웃 후 다시 로그인하면 대부분의 문제가 해결됩니다'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* 페이지 제목 */}
        <h1 className="text-4xl font-bold text-gray-900 mb-12">이용 가이드</h1>

        {/* 탭 메뉴 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex gap-3 mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-6 py-3 font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
                )}
              </button>
            ))}
          </div>

          {/* 가이드 콘텐츠 */}
          <div className="space-y-8">
            {guideContent[activeTab].map((section, index) => (
              <div key={index} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                
                <div className="space-y-3">
                  {section.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex gap-3 items-start">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <p className="text-gray-700 flex-1 pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}