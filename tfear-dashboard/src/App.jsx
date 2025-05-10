function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>T-Fear 시장 심리 대시보드</h1>
      <p>GPT 감정 분석 기반 실시간 공포/탐욕 트렌드</p>

      <iframe
        title="T-Fear Dashboard"
        src="https://lookerstudio.google.com/embed/reporting/8d5600dd-ce5b-4139-89f6-73dad4f30ec8/page/Rt1JF"
        width="100%"
        height="800"
        frameBorder="0"
        allowFullScreen
        style={{
          border: '1px solid #ccc',
          borderRadius: '12px',
        }}
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  );
}

export default App;

