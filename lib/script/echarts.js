let main = document.getElementById("mainChart");
let chart = echarts.init(main);

let option = {
  dataset: {
    source: [
      ["score", "amount", "product"],
      [89.3, 58212, "Matcha Latte"],
      [57.1, 78254, "Milk Tea"],
      [74.4, 41032, "Cheese Cocoa"],
      [50.1, 12755, "Cheese Brownie"],
      [89.7, 20145, "Matcha Cocoa"],
      [68.1, 79146, "Tea"],
      [19.6, 91852, "Orange Juice"],
      [10.6, 101852, "Lemon Juice"],
      [32.7, 20112, "Walnut Brownie"],
    ],
  },
  xAxis: {},
  yAxis: { type: "category" },
  series: [
    {
      type: "bar",
      encode: {
        // Map "amount" column to x-axis.
        x: "amount",
        // Map "product" row to y-axis.
        y: "product",
      },
    },
  ],
};
chart.setOption(option);

/**practices */
const { DateTime } = luxon;
let areaChart = document.getElementById("covidChart");
let covidChart =echarts.init(areaChart)

async function run() {
  try {
    let res = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    let json = await res.json();
    console.log(json);
    let casesMapped = _.mapKeys(json.cases, (amount, date) => {
      // lodash to mapkays to order keys after luxon format
      // console.log(new Date(date)); // Thu Mar 09 2023 00:00:00 GMT+0700 (Indochina Time) : prefer luxon
      let d = DateTime.fromFormat(date, "M/d/yy");
      return d.toFormat("yyyy-MM-dd");
    });

    let allCatMapped = _.map(json, (cat) => {
      console.log(cat);
      let sorted = _.mapKeys(cat, (amount, date) => {
        let d = DateTime.fromFormat(date, "M/d/yy");
        return d.toFormat("yyyy-MM-dd");
      })
      return sorted
    })

    console.log(allCatMapped);
    console.log(casesMapped);

    // console.log(Object.keys(casesMapped));

    let = options = {
      xAxis: {
        data: Object.keys(allCatMapped[2]),
        // data: date
      },
      yAxis: {},
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis',
      },
      series: [
        {
          name: 'cases',
          data: Object.values(allCatMapped[0]),
          type: "line",
          stack: "x",
        },
        {
          name: 'deaths',
          data: Object.values(allCatMapped[1]),
          type: "line",
          stack: "x",
        },
        {
          name: 'recovered',
          data: Object.values(allCatMapped[2]),
          type: "line",
          stack: "x",
        },
      ],
    };
    covidChart.setOption(options);
  } catch (error) {
    console.log(error);
  }
}
run();
