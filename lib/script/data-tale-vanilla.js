async function queryCovidCounties() {
  NProgress.start();
  try {
    let res = await fetch("https://disease.sh/v3/covid-19/countries");
    let data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}

async function createTable() {
  let data = await queryCovidCounties();
  new DataTable("#myTable", {
    perPage: 10,
    perPageSelect: [5, 10, 15, 20, 1000],
    data: {
      headings: ["Country", "Cases", "Deaths"],
      // ({ country, cases, deaths }) => [country, cases, deaths] = function (obj) {return obj.country}  : destructuring
      data: data.map(({ country, cases, deaths }) => {
        return [country, toNumeric(cases), toNumeric(deaths)];
      }),
    },
  });
  NProgress.done();
}

function toNumeric(n) {
  return Number(n).toLocaleString()
}
createTable();
