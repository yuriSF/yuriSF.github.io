function getData() {
  var settings = {
    url: 'https://email-contact-form.herokuapp.com/contact',
    dataType: 'json',
    type: 'post',
    success: function displayData(data) {
      console.log('success')
    },
    error: function badData(err) {
      console.log(err);
    }
  };
  $.ajax(settings);
}


$('#contact').on('submit', function(e) {
  e.preventDefault();
  // var verb = $('#verb').val();
  getData();
})
