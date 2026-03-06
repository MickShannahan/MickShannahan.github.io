import * as cheerio from 'cheerio'
let testDocUrl = 'https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub'
let realUrl = 'https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub'



async function fetchData(docUrl) {
  const res = await fetch(docUrl)
  const html = await res.text()
  const doc = cheerio.load(html)
  doc('script, style, meta').remove()
  const tableData = parseTable(doc)
  return tableData
}

/**
 * @param {cheerio.CheerioAPI} htmlDoc
 */
function parseTable(htmlDoc) {
  const instructions = []
  htmlDoc('table tbody tr').each((__, row) => {
    let rowCells = []
    let tableRow = htmlDoc(row).find('td').each((i, el) => rowCells.push(htmlDoc(el).text()))
    let rowData = { x: rowCells[0], y: rowCells[2], char: rowCells[1] }
    instructions.push(rowData)
  })
  console.log('💻', instructions.slice(1))
  return instructions.slice(1)
}

function createCanvas(coords) {
  let maxX = Math.max(...coords.map(c => parseInt(c.x)))
  let maxY = Math.max(...coords.map(c => parseInt(c.y)))
  return [maxX + 1, maxY + 1]
}


async function drawGrid(docId) {
  const coords = await fetchData(docId)
  const maxBounds = createCanvas(coords)
  let out = Array(maxBounds[1]).fill(' ').map(() => Array(maxBounds[0]).fill(' '))
  console.log('start', out)
  coords.forEach(cor => {
    console.log('🎯', cor)
    out[cor.y][cor.x] = cor.char
    console.log(out)
  })
  return out.map(row => row.join('')).join('\n')
}


// let secretImage = await drawGrid(testDocUrl)
let secretImage = await drawGrid(realUrl)
console.log(secretImage)