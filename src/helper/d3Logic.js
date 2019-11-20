import * as d3 from 'd3';

const placeholder = () => {
  if (d3.select(".piechart-container__piechart")['_groups'][0] !== null) {
    const svg = document.getElementsByClassName('piechart-container__piechart')[0];
    const piechart = svg.getElementsByTagName('g');

    //CHOSE TO DELETE ANY EXISTING PIECHART ON EACH NEW RENDER
    if (piechart.length) piechart[0].remove();
    d3test(data, ratingsData[ratingCategory]);
  }
}