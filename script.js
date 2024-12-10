// CSV 파싱을 간단히 하기 위해 fetch 후 split 이용
// CSV 첫줄은 헤더, 이후는 인용구 행이라고 가정
// 실제 CSV 구조에 따라 파싱 로직을 조정할 필요가 있음

fetch('/elan_talkbot_parsing.csv')
  .then(response => response.text())
  .then(text => {
    const lines = text.trim().split('\n');
    // 첫 줄은 헤더, 나머지는 quote 데이터
    const quotes = lines.slice(1).map(line => {
      // line이 "quote" 형식으로 감싸져 있다면 제거
      // 예: "산다는 것은..."
      let cleaned = line.trim();
      if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
        cleaned = cleaned.substring(1, cleaned.length - 1);
      }
      return cleaned;
    });

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote || 'No quotes found.';
  })
  .catch(err => {
    console.error(err);
    document.getElementById('quote').textContent = 'Error loading quote';
  });
