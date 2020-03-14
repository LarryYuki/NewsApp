$(document).ready(function() {

const $ArticleBtn = $("#getbutton");
const $newsArticles = $('.new-container');

$ArticleBtn .on("click", (e) => {
  $newsArticles.empty()
    $.ajax({
      method: "GET",
      url: "api/scrape",
    }).then(result => {
      console.log(result);
      renderAll(result);
    })
    .catch( err => {
      console.log(err)
  });

let renderAll = (data) => {
  $newsArticles.empty();
  data.map( articles =>{
    $newsArticles.append(
      `<div class="card mt-2">
        <div class="card-body pt-4">
          <div class="text-center">
            <p class="card-text">
              ${articles.title}
            </p>
          </div>
        </div>
      </div>`
    )
    })
  };
  
});
})
