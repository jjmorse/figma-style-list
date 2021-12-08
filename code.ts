// This plugin finds all of the components and component instances in the current file and lists them, along with a note if they are from a remote library.

const node = figma.root
const componentNodes = node.findAll(node => node.type === "COMPONENT");
const instanceNodes = node.findAll(node => node.type === "INSTANCE");

const componentList = componentNodes.map(node => '<li>' + node.name + ((node as ComponentNode).remote ? ' (library)' : '') + '</li>').join('');
const instanceList = instanceNodes.map(node => '<li>' + (node as InstanceNode).mainComponent.name + (((node as InstanceNode).mainComponent as ComponentNode).remote ? ' <b><i>(library)</i></b>' : '') + '</li>').join('')

const html = "<html><head><style>body {width: 80%; height: 80%}</style></head><body><h2>Components</h2><ul>" + componentList + "</ul><h2>Instances</h2><ul>" + instanceList + "</ul></body></html>"

console.log("Components: " + componentList);
console.log("Instances: " + instanceList)

figma.showUI(html)
figma.ui.resize(800, 800)
