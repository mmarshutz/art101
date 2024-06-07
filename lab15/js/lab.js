const URL = "https://dog.ceo/api/breeds/image/random";

$("#my-button").click(function () {
  $.ajax(ajaxObj);
});

// Using the core $.ajax() method
const ajaxObj = {
  url: URL,
  // data: {},
  type: "GET",
  dataType: "json",
  success: function (data) {
    // console.log(data);
    const dogImage = data.message;
    $("#output").html("<img src='" + dogImage + "'/>");
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log("Error:", textStatus, errorThrown);
  },
};
