d3.selectAll("#filter-btn").on("click", submit);

// set up function called submit
function submit() {
    // prevent the page from auto refreshing
    d3.event.preventDefault();
    // each time the function is run replace previous results with nothing
    d3.select("tbody").html("");
    // set date_search to pick up the value that user enters in the search box
    var date_search = d3.select("#datetime").property("value");
    // set filteredData to return the rows matching the date entered by the user
    filteredData = data.filter(alien => alien.datetime === date_search);
    // print the resulting objects to the console
    console.log(filteredData);

    // set up loop to append each row of filteredData to display in the tbody
    filteredData.forEach((sighting) => {
        var tbody = d3.select("tbody");
        var table_row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var table_cell = table_row.append("td");
            table_cell.text(value);
        })
    })
}