$(document).ready(function(){
  headerSlideOnLoad("header");
  sectionTransition("section");
});

function headerSlideOnLoad(elm){
    $(elm).hide();
    $(elm).slideDown(2000);
}
