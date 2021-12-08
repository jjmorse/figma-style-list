// Find all styles
const node = figma.root;
const pageNodes = node.findAll(node => node.type === 'PAGE');
let styleList;

pageNodes.forEach(page => {
  styleList += '<h2>' + page.name + '</h2>';
  const styleNodes = page.findAll(node => node.type === 'EFFECT' || node.type === 'PAINT' || node.type === 'TEXT');
  // const uniqueNodes = Array.from(new Set(styleNodes.map(node => node.name)));
  styleList += styleNodes.map(node => '<li>' + node + ' (' + node.type + ')</li>').join('');
});

const html = "<html><head><style>body {width: 80%; height: 80%}</style></head><body><h1>Styles by Page</h1><ul>" + styleList + "</ul></body></html>";

figma.showUI(html);
figma.ui.resize(800, 800);
