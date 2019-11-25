var fs = require('fs');

const i18nFolder = "./src/assets/i18n";
const i18nFr = i18nFolder + "/page_fr.json";
const i18nEn = i18nFolder + "/page_en.json";

var series = require('./src/assets/series/series.json');
var en = require(i18nEn);
var fr = require(i18nFr);

fr.blogs = {};
fr.blogs.series = {};
en.blogs = {};
en.blogs.series = {};

Object.entries(series).forEach(([id, serie]) => {
  fr.blogs.series[id] = require(`./src/assets/series/${id}/fr.json`);
  en.blogs.series[id] = require(`./src/assets/series/${id}/en.json`);
});

fs.writeFileSync(i18nFolder+"/fr.json",JSON.stringify(fr,null,2));
fs.writeFileSync(i18nFolder+"/en.json",JSON.stringify(en,null,2));
