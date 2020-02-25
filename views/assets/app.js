$(document).ready(function() {
  // renderAll();
});

// app.get("/", (req, res) => res.render("index"));
$("#getbutton").on("click", (e) => {
  e.preventDefault();
    //  const allarticles = $("#articleList").val();
    $.ajax({
      method: "GET",
      url: "api/scrape",
      // data: {
      //    allarticles: allarticles
      // }
    }).then(data => {
      renderAll();
      console.log(data);
    });
  });
renderAll = () => {
    $.ajax({
      method: "GET",
      url: "api/articles"
    }).then(Articles => {
      $("new-container").empty();
      Articles.map(res => {
        $("new-container").append(
          `<div class="card mt-2">
            <div class="card-body pt-4">
              <div class="text-center">
                <p class="card-text">
                  ${res.title}
                </p>
              </div>
            </div>
          </div>`
        );
      });
    });
  };
  






