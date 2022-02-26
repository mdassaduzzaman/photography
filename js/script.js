// animate smooth scrolling
$("#view-work").on("click", function () {
  const image = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: image,
    },
    900
  );
});
