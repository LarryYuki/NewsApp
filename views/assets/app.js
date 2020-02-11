$(document).ready(function() {
  renderAll();
});

// app.get("/", (req, res) => res.render("index"));
$("#getbutton").on("click", () => {
     const allarticles = $("#").val();
  
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
  
// app.get("/api/all", (req, res) => {
//db.Article.find({}).then(data => console.log("?", data))
// axios.get("https://www.sfchronicle.com/local/todayspaper/").then(urlResponse => {
//     let $ = cheerio.load(urlResponse.data)

//     // let inserted = 0
//     $("li.hc_more_item").each((i, element) => {
//         const Url = $(element) 
//             .find("a")
//             .attr("href")
            
//         const title = $(element) 
//             .find("a")
//             .text()
//         console.log(title, "\n");
//         console.log(Url);
    
//         console.log("---------------\n".rainbow);
        
//          inserted++
//          db.Article.create({
//        title:title,
        //  summary: summary,
    //      Url:Url
    //             }).then(success => console.log(success))
    //              .catch(err => console.error(err))
    // })
    //  console.log(inserted, " records inserted")
// })
// res.render("#articleList");
// })





