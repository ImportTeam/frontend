import React from 'react';
import { Mail, Shield, PenSquare, Monitor } from 'lucide-react';

interface UserProfile {
  name: string;
  initials: string;
  email: string;
  joinDate: string;
  loginStatus: string;
  lastPasswordChange: string;
  lastLoginDevice: string;
}

const mockUser: UserProfile = {
  name: "홍길동 님",
  initials: "홍",
  email: "gildong@example.com",
  joinDate: "2025.08.12",
  loginStatus: "없음",
  lastPasswordChange: "2025.10.01",
  lastLoginDevice: "Chrome / Windows / 2025.10.01 10:00",
};

const aiInsights = [
  "카드 결제를 선호하는 타입이에요.",
  "최근 간편 결제 사용을 시작했어요!",
  "온라인 쇼핑에서 많은 절약을 실천 하고 있어요.",
  "쇼핑몰에서 가전 제품을 많이 둘러보고 계세요.",
];

const ProfileInfoCard: React.FC<{ user: UserProfile }> = ({ user }) => (
  <div className="p-6 md:p-8 bg-white shadow-sm rounded-xl border border-gray-100 mb-6">
    {/* 프로필 제목 */}
    <h2 className="text-xl font-semibold text-gray-800 mb-6">내 프로필</h2>

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* 사용자 정보 */}
      <div className="flex items-center space-x-4">
        {/* 프로필 이미지 (이니셜) */}
        <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold border-4 border-blue-100">
          {user.initials}
        </div>

        {/* 텍스트 정보 */}
        <div className="space-y-1">
          <p className="text-xl md:text-2xl font-bold text-gray-900">{user.name}</p>
          <div className="text-sm text-gray-500 space-y-0.5">
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-2 text-gray-400" />
              <span>{user.email}</span>
            </div>
            <p>
              가입일: {user.joinDate}
              <span className="ml-4">|</span>
              <span className="ml-4">소셜 로그인: {user.loginStatus}</span>
            </p>
          </div>
        </div>
      </div>

      {/* 프로필 수정 버튼 */}
      <button className="cursor-pointer mt-4 md:mt-0 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition duration-150 flex items-center shadow-md">
        <PenSquare className="w-4 h-4 mr-2" />
        프로필 수정
      </button>
    </div>
  </div>
);

const AITendencyCard: React.FC<{ insights: string[] }> = ({ insights }) => (
  <div className="p-6 md:p-8 bg-purple-50 rounded-xl border border-purple-200 mb-6 shadow-sm">
    <div className="flex items-center mb-4">
      <h3 className="text-lg font-semibold text-purple-800">AI가 분석한 결제 성향</h3>
    </div>
    
    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
      {insights.map((insight, index) => (
        <li key={index} className="pl-1">
          {insight}
        </li>
      ))}
    </ul>
  </div>
);

const SecurityCard: React.FC<{ user: UserProfile }> = ({ user }) => (
  <div className="p-6 md:p-8 bg-white shadow-sm rounded-xl border border-gray-100">
    <div className="flex items-center mb-6">
      <Shield className="w-6 h-6 mr-3 text-gray-600" />
      <h3 className="text-lg font-semibold text-gray-800">보안 및 인증</h3>
    </div>

    {/* 비밀번호 변경 섹션 */}
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <div>
        <p className="text-base font-medium text-gray-900">비밀번호 변경</p>
        <p className="text-sm text-gray-500">마지막 변경: {user.lastPasswordChange}</p>
      </div>
      <button className="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition duration-150">
        변경
      </button>
    </div>

    {/* 로그인 기기 관리 섹션 */}
    <div className="flex justify-between items-center pt-4">
      <div>
        <p className="text-base font-medium text-gray-900">로그인 기기 관리</p>
        <p className="text-sm text-gray-500 flex items-center">
          <Monitor className="w-3.5 h-3.5 mr-1 text-gray-400" />
          최근 로그인: {user.lastLoginDevice}
        </p>
      </div>
      <button className="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition duration-150">
        관리
      </button>
    </div>
  </div>
);

const ProfilePage: React.FC = () => {
  const user = mockUser;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
      {/* 헤더를 제외한 본문 영역 타이틀 */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">내 프로필</h1>
        
        {/* 각 섹션 컴포넌트 */}
        <ProfileInfoCard user={user} />
        <AITendencyCard insights={aiInsights} />
        <SecurityCard user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;