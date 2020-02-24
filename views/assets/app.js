$(document).ready(function() {
  // renderAll();
});

// app.get("/", (req, res) => res.render("index"));
$("#getbutton").on("click", () => {
    //  const allarticles = $("#articleList").val();
    $.ajax({
      method: "GET",
      url: "/scrape",
      // data: {
      //    allarticles: allarticles
      // }
    }).then(data => {
      console.log(data);
      renderAll();
    });
  });
renderAll = () => {
    $.ajax({
      method: "GET",
      url: "/articles"
    }).then(articles => {
      $("new-container").empty();
      articles.map(res => {
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
  






