$(document).ready(function() {
  // renderAll();
});

// app.get("/", (req, res) => res.render("index"));
$("#getbutton").on("click", () => {
     const allarticles = $("#articleList").val();
  
    $.ajax({
      method: "POST",
      url: "/api",
      data: {
         allarticles: allarticles
      }
    }).then(res => {
      console.log(res);
      renderAll();
    });
  });
renderAll = () => {
    $.ajax({
      method: "GET",
      url: "/api"
    }).then(res => {
      $("new-container").empty();
      res.map(element => {
        $("new-container").append(
          `<div class="card mt-2">
            <div class="card-body pt-4">
              <div class="text-center">
                <p class="card-text">
                  ${element.allarticles}
                </p>
              </div>
            </div>
          </div>`
        );
      });
    });
  };
  






