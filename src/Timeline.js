import React, { useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  // 현재 선택된 연도를 상태로 관리
  const [selectedYear, setSelectedYear] = useState('2011');

  // 연도별 내용 데이터
  const content = {
    2011: { title: '우리의 멋진 제목 (2011)', description: '이 해에는 정말 많은 일이 있었습니다.' },
    2012: { title: '새로운 도약 (2012)', description: '도전과 성취의 해였습니다.' },
    2013: { title: '특별한 해 (2013)', description: '여러 가지 독특한 일이 있었습니다.' },
    2014: { title: '성과의 해 (2014)', description: '큰 목표를 달성한 시기입니다.' },
    2015: { title: '미래로 향하는 길 (2015)', description: '희망이 가득한 한 해였습니다.' },
    2016: { title: '밝은 미래 (2016)', description: '앞으로 나아갈 기반을 닦았습니다.' },
  };

  // 연도 클릭 시 상태 업데이트
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="timeline-container">
      {/* 배경 */}
      <div className="background">
        <div className="content">
          <h1>{selectedYear}</h1>
          <h2>{content[selectedYear].title}</h2>
          <p>{content[selectedYear].description}</p>
        </div>
      </div>

      {/* 타임라인 */}
      <div className="timeline">
        <div className="line">
          <div
            className="circle"
            style={{ top: `${(Object.keys(content).indexOf(selectedYear) * 60)}px` }} // 동그라미 위치 계산
          ></div>
        </div>
        <ul>
          {Object.keys(content).map((year) => (
            <li
              key={year}
              className={selectedYear === year ? 'active' : ''}
              onClick={() => handleYearClick(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
