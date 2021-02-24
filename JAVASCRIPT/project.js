var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName ("close")[0];
var counter = document.querySelector(".counter");
var article_holder = document.getElementById("articles")
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

function countArticles(){
    let articles = article_holder.childElementCount;

    counter.textContent = `You have ${articles} articles`;
}

countArticles();
