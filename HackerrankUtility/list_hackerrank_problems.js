// https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
$ar = []
$('.challengecard-title').each(function(){
   $title = $(this).children().remove().end().text().trim();
   $ar.push($title);
})
console.log($ar);
copy($ar);
