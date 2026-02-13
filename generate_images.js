
const fs = require('fs');
const path = require('path');

const images = [
    { name: 'rose-day.svg', color: '#FF1744', text: 'Rose Day', icon: '🌹' },
    { name: 'propose-day.svg', color: '#E91E63', text: 'Propose Day', icon: '💍' },
    { name: 'chocolate-day.svg', color: '#6D4C41', text: 'Chocolate Day', icon: '🍫' },
    { name: 'teddy-day.svg', color: '#8D6E63', text: 'Teddy Day', icon: '🧸' },
    { name: 'promise-day.svg', color: '#9C27B0', text: 'Promise Day', icon: '🤝' },
    { name: 'hug-day.svg', color: '#E91E63', text: 'Hug Day', icon: '🤗' },
    { name: 'kiss-day.svg', color: '#F50057', text: 'Kiss Day', icon: '💋' },
    { name: 'valentine-day.svg', color: '#D32F2F', text: 'Valentine Day', icon: '❤️' }
];

const outputDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

images.forEach(img => {
    const svgContent = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${img.color}"/>
  <text x="50%" y="40%" font-family="Arial" font-size="60" fill="white" text-anchor="middle" dy=".3em">${img.icon}</text>
  <text x="50%" y="60%" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">${img.text}</text>
</svg>`;

    fs.writeFileSync(path.join(outputDir, img.name), svgContent.trim());
    console.log(`Generated ${img.name}`);
});
