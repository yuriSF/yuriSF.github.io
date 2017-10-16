function getData() {
  var settings = {
    url: 'https://email-contact-form.herokuapp.com/contact',
    dataType: 'json',
    type: 'get',
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
  console.log('fired');
  // var verb = $('#verb').val();
  getData();
})
