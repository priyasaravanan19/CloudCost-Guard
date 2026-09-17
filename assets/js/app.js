document.addEventListener("DOMContentLoaded", () => {

    /* MOBILE SIDEBAR */

    const menu =
        document.getElementById("mobileMenu");

    const sidebar =
        document.getElementById("sidebar");

    if (menu && sidebar) {

        menu.addEventListener("click", () => {

            sidebar.classList.toggle("open");

        });

    }


    /* SEARCH */

    const search =
        document.getElementById("globalSearch");

    if (search) {

        search.addEventListener("input", () => {

            const query =
                search.value
                    .trim()
                    .toLowerCase();

            document
                .querySelectorAll(".panel, .kpi-card")
                .forEach(card => {

                    if (
                        query &&
                        card.innerText
                            .toLowerCase()
                            .includes(query)
                    ) {

                        card.style.borderColor =
                            "#438bff";

                    } else {

                        card.style.borderColor =
                            "";

                    }

                });

        });

    }

});