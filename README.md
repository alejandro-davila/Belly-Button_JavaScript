<img width="1440" alt="Screenshot 2023-01-11 at 8 20 45 AM" src=https://github.com/alejandro-davila/Belly-Button_JavaScript/assets/135288005/8808ac18-2226-4f2e-93a3-288b6701b012>

<h1 align="center">Deployment</h1>
Here is a link to the dashboard: https://alejandro-davila.github.io/Belly-Button_JavaScript/

<h1 align="center">Background</h1>
In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


<h1 align="center">Instructions</h1>
Complete the following steps:
 
 1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    * Use `sample_values` as the values for the bar chart.
    * Use `otu_ids` as the labels for the bar chart.
    * Use `otu_labels` as the hovertext for the chart.


JavaScript Code             |Output
:-------------------------:|:-------------------------:
<img width="600" height = "475" alt="ch" src=https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/dfdaee53-7750-465a-a9c8-e738a02b883d>|<img width="600" height = "500" alt="ch" src="https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/0c3ab0ff-7d22-4d4a-9896-79974ed07e37">



 3. Create a bubble chart that displays each sample.
    * Use `otu_ids` for the x values.
    * Use `sample_values` for the y values.
    * Use `sample_values` for the marker size.
    * Use `otu_ids` for the marker colors.
    * Use `otu_labels` for the text values.
    
JavaScript Code             |Output
:-------------------------:|:-------------------------:
<img width="600" height = "475" alt="ch" src=https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/eafb7d4a-1a03-426a-b7af-43f297cff949>|<img width="600" height = "400" alt="ch" src="https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/dfdd85b2-198d-4a3b-9e2f-3fd7bb557965">



  4. Display the sample metadata, i.e., an individual's demographic information.

  5. Display each key-value pair from the metadata JSON object somewhere on the page.
  
<p align="center">
<img width="100" height="300" alt="picture" src=https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/367ede51-9397-4384-9f46-09224097da69></a>&nbsp;&nbsp;&nbsp;&nbsp;<img width="100" height="300" alt="picture" src=https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/367ede51-9397-4384-9f46-09224097da69></a>&nbsp;&nbsp;&nbsp;&nbsp;<img width="100" height="300" alt="picture" src=https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/8585b509-2c26-45ca-9159-9237f1e8920e></a>&nbsp;&nbsp;&nbsp;&nbsp;<img width="100" height="300" alt="picture" src=https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/08df6bbf-5e7d-47d4-b7d4-47afc2cc4044>



  6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

  7. Deploy your app to a free static page hosting service, such as GitHub Pages.
  
<h1 align="center">Advanced Challenge Assignment</h1>

 * Adapt the Gauge Chart from https://plotly.com/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
 * You will need to modify the example gauge code to account for values ranging from 0 through 9.
 * Update the chart whenever a new sample is selected.
 
<p align="center">
<img width="321" alt="Guage" src=https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/fe1894e5-dcd2-4dee-8a5c-e8edab4423f7>
 

<h1 align="center">References</h1>

<a target="_blank" rel="noreferrer"> <img src="https://github.com/alejandro-davila/VBA/assets/135288005/9b7cc849-fd9c-4c79-afa6-190eb558a7c1" alt="HTML_CSS" width="60" height="40"/> </a><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer"> <img src="https://github.com/alejandro-davila/VBA/assets/135288005/107adcd7-7d29-439e-b420-1fbc8b814a33" alt="JS" width="40" height="40"/> </a><a href="https://code.visualstudio.com/brand" target="_blank" rel="noreferrer"> <img src="https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/64a19924-7b90-4198-b1e8-e31ee92dce3b" alt="VSC" width="40" height="40"/> </a><a href="https://www.json.org/json-en.html" target="_blank" rel="noreferrer"> <img src="https://github.com/alejandro-davila/Project2_ELT_T3/assets/135288005/f52a1f27-8747-41ce-b391-6441038a8003" alt="JSON" width="70" height="40"/> </a>



Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)
