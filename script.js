document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("quote_1");
  const authorElement = document.getElementById("quote_2");
  const imageElement = document.getElementById("image");
  const bgElement = document.getElementById("bg"); // 전체 배경 요소 선택

  let backgroundImages = [];
  const totalImages = 30; // 이미지 총 개수

  for (let i = 1; i <= totalImages; i++) {
    backgroundImages.push(`assets/background/bg (${i}).png`);
  }

  // CSV 파일 경로
  const csvFilePath = "assets/data/elan_talk_data.csv";

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
    fetch(csvFilePath)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n"); // 행 단위로 분리
        const randomRow = getRandomItem(rows); // 랜덤 행 선택
        quoteElement.textContent = randomRow.trim(); // 명언
      });
  }

  // 배경 요소 클릭 시 새로고침
  bgElement.addEventListener("click", updateContent);

  // 초기 콘텐츠 로드
  updateContent();
});