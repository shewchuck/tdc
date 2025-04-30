


document.getElementById('copy-text-btn').onclick = function() {
  const _this = this
  navigator.clipboard.writeText(document.getElementById('copy-text').innerText)
  .then(function() {
//     _this.innerText = 'Copied'

//     setTimeout(function() {
//       _this.innerText = 'Copy'
//     }, 3000)
    
    let toast = document.querySelector('.toast')
    toast = new bootstrap.Toast(toast)
    toast.show()

  })
}
document.getElementById('copy-text-btn-top').onclick = function() {
  const _this = this
  navigator.clipboard.writeText(document.getElementById('copy-text-top').innerText)
  .then(function() {
//     _this.innerText = 'Copied'

//     setTimeout(function() {
//       _this.innerText = 'Copy'
//     }, 3000)
    
    let toast = document.querySelector('.toast')
    toast = new bootstrap.Toast(toast)
    toast.show()

  })
}