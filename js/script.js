// Bootstrap Form Validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

// Optional: Dashboard active link toggle
document.querySelectorAll('.dashboard-nav a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.dashboard-nav a').forEach(a => a.classList.remove('active'))
    this.classList.add('active')
  })
})
