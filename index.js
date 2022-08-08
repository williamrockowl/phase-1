// Eventlistener if button was clicked
document
  .querySelector("#reset")
  .addEventListener("click", () => (document.body.style.color = "black"));

// Eventlistener to change Background color
const btn = document.getElementById("btn");
btn.addEventListener("mouseover", () => (document.body.style.color = "red"));

// Using Fetch to grab Data from API
fetch(
  "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (stocks) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let stock of stocks) {
      out += `
        <tr>
          <td> ${stock.representative}</td>
          <td> ${stock.amount}</td>
          <td> ${stock.asset_description}</td>
        </tr>
          `;
    }

    placeholder.innerHTML = out;
  })
  // Added a catch in case something goes wrong.
  .catch(function (err) {
    console.log("Somethings wrong here. " + err);
  });
