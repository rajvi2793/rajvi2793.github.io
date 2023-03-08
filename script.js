/* Testing jQuery Flip plugin: https://nnattawat.github.io/flip/
*/
 
/* Set Flip Parameters */
// $("#card").flip({
// 	axis: 'y',
// 	trigger: 'manual'   
// }); 
  
// $("#flip-link").click(function() {
// 	$("#card").flip(true);		
// 	$("#card-back").show();		
// });

// $("#contentContainer").click(function() {
// 	$("#card").flip(false);		
// });
//=---
// $(window).load(function(){
//     // $('#wrapper').addClass('loaded');
//   })
  
//   $('#flip-link').click(function(){
//     $("#card").toggleClass('flip');
//     // $('#arrow').remove();
//   });
//   $('#background').click(function(){
//     $('#card').removeClass('flip');
//   })
function flipCard() {
  const card = document.querySelector('.card');
  card.classList.toggle('flipped');
}

