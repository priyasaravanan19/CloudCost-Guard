document.addEventListener("DOMContentLoaded", () => {

    /* CLOUD PROVIDER BUTTONS */

    const providers =
        document.querySelectorAll(".provider");

    providers.forEach(button => {

        button.addEventListener("click", () => {

            providers.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

        });

    });


    /* DATE PICKER DEMO */

    const datePicker =
        document.querySelector(".date-picker");

    if (datePicker) {

        datePicker.addEventListener("click", () => {

            alert(
                "Date range picker demo.\n\n" +
                "This is a frontend-only project."
            );

        });

    }

});