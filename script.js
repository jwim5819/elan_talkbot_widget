// Load the CSV file and pick a random line
fetch('data/elan_talkbot_parsing.csv')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        const randomLine = lines[Math.floor(Math.random() * lines.length)].trim();
        document.querySelector('.quote').textContent = randomLine || "No quote available.";
    })
    .catch(error => {
        console.error("Error loading CSV:", error);
        document.querySelector('.quote').textContent = "Error loading quote.";
    });
