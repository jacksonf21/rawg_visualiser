const d3 = require('d3');

const d3test = (data, text) => {
  const svg = d3.select(".piechart-container__piechart"),
      width = svg.attr("width"),
      height = svg.attr("height"),
      radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 1.65 + ")");

  //EXCEPTIONAL TO MEH
  const color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#cc0000','#e41a1c']);

  // Generate the pie
  const pie = d3.pie();

  // Generate the arcs
  const arc = d3.arc()
              .innerRadius(85)
              .outerRadius(radius);

  //Generate groups
  const arcs = g.selectAll("arc")
              .data(pie(data))
              .enter()
              .append("g")
              .attr("class", function(d, i) {
                  return `arc${i}`
              })

              g.append('text')
                .attr('text-anchor', 'middle')
                .attr('class', 'piechart-container__overlay')
                .text(`${text[0]}%`)

            g.append('text')
            .attr('text-anchor', 'middle')
            .attr('class', 'piechart-container__overlay--title')
            .text(`${text[1]}`)

  //Draw arc paths
  arcs.append("path")
      .attr("fill", function(d, i) {
          return color(i);
      })
      .attr("d", arc);
}; 

module.exports = { d3test };