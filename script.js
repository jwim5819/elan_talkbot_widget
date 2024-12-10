document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("quote_1");
    const authorElement = document.getElementById("quote_2");
    const imageElement = document.getElementById("image");
    const refreshButton = document.getElementById("refreshButton");
  
    // 배경 이미지 목록
    const backgroundImages = [
      "https://i.ibb.co/n668rcp/Kakao-Talk-20240616-213639398.jpg",
      "https://i.ibb.co/RHkQmC1/Kakao-Talk-20240616-213639398-03.jpg",
      "https://i.ibb.co/85TN3Cp/Kakao-Talk-20240616-213639398-04.jpg",
      "https://i.ibb.co/GQtpZLd/Kakao-Talk-20240616-213639398-05.jpg",
      "https://i.ibb.co/ChXB7BF/Kakao-Talk-20240616-213639398-06.jpg",
      "https://i.ibb.co/pwgWzPF/Kakao-Talk-20240616-213639398-01.jpg",
      "https://i.ibb.co/3MWYxqr/Kakao-Talk-20240616-213639398-02.jpg",
    ];
  
    // CSV 파일 경로
    const csvFilePath = "data/elan_talk_data.csv";
  
    // CSV 데이터를 읽어오기
    function loadCSVData(callback) {
      fetch(csvFilePath)
        .then((response) => response.text())
        .then((data) => {
          const rows = data.split("\n").map((row) => row.split(","));
          callback(rows);
        });
    }
  
    // 랜덤 선택
    function getRandomItem(items) {
      const randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex];
    }
  
    // 명언 및 배경 이미지 업데이트
    function updateContent() {
      // 배경 이미지 업데이트
      const randomImage = getRandomItem(backgroundImages);
      imageElement.src = randomImage;
  
      // 명언 업데이트
      loadCSVData((quotes) => {
        const randomQuote = getRandomItem(quotes);
        quoteElement.textContent = randomQuote[0]; // 명언
        authorElement.textContent = randomQuote[1]; // 저자
      });
    }
  
    // 새로고침 버튼 이벤트
    refreshButton.addEventListener("click", updateContent);
  
    // 초기 콘텐츠 로드
    updateContent();
  });
  