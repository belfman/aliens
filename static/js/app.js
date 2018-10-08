var tbody = d3.select("tbody");

d3.selectAll("#filter-btn").on("click", submit);
    
function submit() {
    // prevent the page from auto refreshing
    d3.event.preventDefault();
    // set var date_search to pick up the value that user
    // enters in the search box
    var date_search = d3.select("#datetime").property("value");
    // set filtered data to equal the entire data table
    filteredData = data;
    // set filteredData to return the rows matching the date entered by user
    filteredData = filteredData.filter(alien => alien.datetime === date_search);
    // print the resulting objects to the console
    console.log(filteredData);
    // print out the results of the data search to the "ul" tag
    
}
    
// loop through the data with forEach
// append a table row element for each object
// add key and value to each object
// append a td element for each object
// update each cells text with each value
data.forEach((sighting) => {
    var table_row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var table_cell = table_row.append("td");
        table_cell.text(value);
    });
});

d3.select("table").append("tbody").text(filteredData);