// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
  
  // Initialize the dashboard at start up 
  function init() {
      // Use D3 to select the dropdown menu
      let dropdownMenu = d3.select("#selDataset");
      // Use D3 to get sample names and populate the drop-down selector
      d3.json(url).then((data) => {
          // Set a variable for the sample names
          let names = data.names;
          // Add  samples to dropdown menu
          names.forEach((id) => {
          // Log the value of id for each iteration of the loop
              console.log(id);
              dropdownMenu.append("option")
              .text(id)
              .property("value",id);
          });
          // Set the first sample from the list
          let sample_one = names[0];
          // Log the value of sample_one
          console.log(sample_one);
          // Build the initial plots
          buildGaugeChart(sample_one);
      });
  };
// Function that builds the gauge chart with a needle in the middle
function buildGaugeChart(sample) {
    // Use D3 to retrieve all of the data
    d3.json(url).then((data) => {
        // Retrieve all metadata
        let metadata = data.metadata;
        // Filter based on the value of the sample
        let value = metadata.filter(result => result.id == sample);
        // Log the array of metadata objects after they have been filtered
        console.log(value);
        // Get the first index from the array
        let valueData = value[0];
        // Use Object.entries to get the key/value pairs and put into the demographics box on the page
        let washFrequency = Object.values(valueData)[6];

        // Create a gauge chart with a needle in the middle
        let gaugeData = [
            {
                type: "scatter",
                x: [0],
                y: [0],
                marker: { size: 40, color: "purple" },
                showlegend: false,
                name: "scrubs per week",
                text: washFrequency,
                hoverinfo: "text+name"
            },
        // ----------------- Guage Layout & Color5 -----------------            
            {
                values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
                rotation: 90,
                text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
                textinfo: 'text',
                textposition: 'inside',
                marker: {
                    colors: ['rgba(15, 128, 0, .5)', 'rgba(15, 128, 0, .45)', 'rgba(15, 128, 0, .4)',
                    'rgba(110, 154, 22, .5)', 'rgba(110, 154, 22, .4)','rgba(110, 154, 22, .3)',
                    'rgba(210, 206, 145, .5)','rgba(210, 206, 145, .4)','rgba(210, 206, 145, .3)',
                    'rgba(255, 255, 255, 0)']
                },
                labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
                hoverinfo: 'label',
                hole: 0.5,
                type: 'pie',
                showlegend: false
            }
        ];
        // ----------------- Needle Layout -----------------
        let gaugeLayout = {
            shapes: [{
                type: 'path',
                path: getPath(washFrequency),
                fillcolor: 'purple',
                line: {color: 'purple'
                }
            }],
            title: 'Belly Button Washing Frequency<br>Scrubs per Week',
            height: 450,
            width: 400,
            xaxis: {zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1, 1]
            },
            yaxis: {zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1, 1]
            }
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    });
}

// Calculate the path for the needle based on washFrequency
function getPath(washFrequency) {
    const degrees = 180 - (washFrequency * 20);
    const radians = (degrees * Math.PI) / 180;
    const radius = 0.5;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    const mainPath = 'M -.0 -0.025 L .0 0.025 L ';
    const pathX = String(x);
    const space = ' ';
    const pathY = String(y);
    const pathEnd = ' Z';

    return mainPath.concat(pathX + space + pathY + pathEnd);
}

// Call the initialize function
init();