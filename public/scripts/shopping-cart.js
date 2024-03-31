var removeCartItemButtons = document.getElementsByClassName('remover-carrito');
for (var i = 0; i < removeCartItemButtons.length; i++) {
   var button = removeCartItemButtons[i]
   button.addEventListener('click', function() {
      console.log('clicked')
   })
}