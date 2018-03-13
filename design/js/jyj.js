$(function(){

$('.industry-img a').click(function(e){
  e.preventDefault();
  $('.popup').show();
})
$('.industry-text').click(function(){
  console.log('클릭')
  $('.popup').show();
})
$('.btnclose').click(function(){

  $('.popup').hide();
})

$('.home').click(function(e){
  e.preventDefault();
  $('.popup').show();
})

$('.btnclose').click(function(){

  $('.popup').hide();
})
// $('.content2 .industry #aaa').click(function(){
//   $('.popup').show();
// })
// $('.content2 .industry #aaa').click(function(){
//   $('.popup').hide();
// })
// $('.industry-img a').click(function(){
//   $('.popup').show();
// })
// $('.btnclose').click(function(){
//   $('.popup').hide();
// })

})
