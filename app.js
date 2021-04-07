console.log("Hello!");

// To do list:
// 1. Grab URL of dashboard and store it in a variable

const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard?:language=en-GB&:display_count=y&:origin=viz_share_link";

// 2. Grab the container in the index page

const vizContainer = document.getElementById("vizContainer");

// 2.1 Create Viz options

const options = {
  device: "desktop",
};

// 3. Create a fuction to call the Tableau JS API

function initViz() {
  const viz = new tableau.Viz(vizContainer, vizUrl, options);
}

// 4. Call that function

document.addEventListener("DOMContentLoaded", initViz());
