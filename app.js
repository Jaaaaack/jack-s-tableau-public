console.log("Hello!");

let viz;

// To do list:
// 1. Grab URL of dashboard and store it in a variable

const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard?:language=en-GB&:display_count=y&:origin=viz_share_link";

// 2. Grab the container in the index page

const vizContainer = document.getElementById("vizContainer");

// 2.1 Create Viz options

const options = {
  device: "desktop",
  Category: ["Technology", "Office Supplies"],
  onFirstInteractive: function () {
    console.log("Viz is ready!");
    document.getElementById("minValue").disabled = false;
    document.getElementById("maxValue").disabled = false;
    document.getElementById("filterButton").disabled = false;
  },
};

// 3. Create a fuction to call the Tableau JS API

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, options);
}

// Grab the pdf button

const pdfButton = document.getElementById("pdfButton");
function generatePDF() {
  console.log("generating PDF...");
  viz.showExportPDFDialog();
}

pdfButton.addEventListener("click", generatePDF);

// Grab the PowerPoint button

const ppButton = document.getElementById("ppButton");

function generatePP() {
  console.log("generating PowerPoint...");
  viz.showExportPowerPointDialog();
}

ppButton.addEventListener("click", generatePP);

// grab swap viz button

const swapViz = document.getElementById("swapViz");

function switchViz() {
  console.log("Changing the dashboard...");

  const otherVizUrl =
    "public.tableau.com/views/BostonFemaleWheelchairChamps/BostonFemaleWheelchairChamps?:language=en-GB&:display_count=y&mobile=&:origin=viz_share_link";
}

// enable filter button

// fitler dashboard

function getRangeValues() {
  console.log("Filtering the dashboard...");
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);

  // get the workbook
  const workbook = viz.getWorkbook();
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  const sheetToFilter = sheets[1];
  sheetToFilter
    .applyRangeFilterAsync("Sales", {
      min: minValue,
      max: maxValue,
    })
    .then(console.log("Filter applied!"));
  console.log(sheets);
}

document
  .getElementById("filterButton")
  .addEventListener("click", getRangeValues);

// 4. Call that function

https: document.addEventListener("DOMContentLoaded", initViz());
