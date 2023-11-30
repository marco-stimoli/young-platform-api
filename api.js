var settings = {
    "url": "https://api.youngplatform.com/api/v3/markets",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
});

var settings = {
  "url": "https://api.youngplatform.com/api/v3/currencies",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});