// app/diary/page.js

'use client';

import { useState } from 'react';

export default function DiaryPage() {
  const [emotion, setEmotion] = useState('😊 행복'); // 감정 결과 예시
  const [diaryText, setDiaryText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiaryText(e.target.value);
  };
  
  const handleSubmit = () => {
    // 여기서 서버에 저장하거나 로컬 저장 처리 가능
    alert('일기가 저장되었어요!');
    setDiaryText('');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">오늘 감정 분석 결과는</h1>
        <p className="text-2xl text-blue-600">{emotion}</p>
      </div>

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">오늘의 일기를 써보세요 ✍️</h2>
        <textarea
          className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring"
          placeholder="오늘 있었던 일이나 느낀 감정을 자유롭게 적어보세요."
          value={diaryText}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          일기 저장하기
        </button>
      </div>
    </main>
  );
}
