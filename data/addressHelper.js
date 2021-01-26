/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const csvParse = require('csv-parse/lib/sync');
const fs = require('fs/promises');
const _ = require('lodash');

const comuniProv = [];
const province = [];
const provUniq = new Set();
let provUniqArr;
const createProvince = async () => {
  const comuni = await fs.readFile('./comuni.csv');
  const data = csvParse(comuni, { relaxColumnCount: true });
  for (const row of data) {
    comuniProv.push({ comune: row[6], provincia: row[14] });
    province.push({ provincia: row[14], regione: row[10] });
    provUniq.add(row[14]);
    provUniqArr = Array.from(provUniq).sort();
  }
  const provComUniqJSON = JSON.stringify(_.uniqBy(province, 'provincia'));
  const comuniProvJSON = JSON.stringify(comuniProv);
  const singleProvJSON = JSON.stringify(provUniqArr);
  try {
    await fs.writeFile('./comuni.json', comuniProvJSON);
    await fs.writeFile('./province.json', provComUniqJSON);
    await fs.writeFile('./provUniq.json', singleProvJSON);
  } catch (e) {
    console.log(e);
  }
};

void createProvince();
