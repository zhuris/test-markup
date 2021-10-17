$(document).ready(function () {
    $(".grid-change").click(function () {
        // Reset them
        $(".grid-change").removeClass("active");
        // Add to the clicked one only
        $(this).addClass("active");
        if ($(this).is("#list")) {
            $(".content__wrapper").addClass('list');
        } else {
            $(".content__wrapper").removeClass('list');
        }
    });

    const start = datepicker('.header-form__input_start')
    const end = datepicker('.header-form__input_end')

});

