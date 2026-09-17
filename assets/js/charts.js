document.addEventListener("DOMContentLoaded", () => {

    /* COST DONUT */

    const costChart = document.getElementById("costChart");

    if (costChart) {

        new Chart(costChart, {

            type: "doughnut",

            data: {

                labels: [
                    "Compute",
                    "Storage",
                    "Network"
                ],

                datasets: [
                    {
                        data: [
                            1420.30,
                            532.10,
                            890.10
                        ],

                        backgroundColor: [
                            "#3387ff",
                            "#684cff",
                            "#25d0bb"
                        ],

                        borderWidth: 0
                    }
                ]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                cutout: "72%",

                plugins: {

                    legend: {
                        display: false
                    }

                }

            }

        });

    }


    /* SPENDING TREND */

    const trendChart = document.getElementById("trendChart");

    if (trendChart) {

        new Chart(trendChart, {

            type: "line",

            data: {

                labels: [
                    "Apr 1",
                    "Apr 4",
                    "Apr 7",
                    "Apr 10",
                    "Apr 14",
                    "Apr 17",
                    "Apr 21",
                    "Apr 24",
                    "Apr 27",
                    "Apr 30"
                ],

                datasets: [

                    {
                        data: [
                            2200,
                            2650,
                            2350,
                            2500,
                            3300,
                            2450,
                            2600,
                            2500,
                            2700,
                            2842.5
                        ],

                        borderColor: "#654cff",

                        backgroundColor:
                            "rgba(101,76,255,.16)",

                        fill: true,

                        tension: 0.42,

                        pointRadius: 0,

                        borderWidth: 2
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {

                    x: {

                        grid: {
                            display: false
                        },

                        ticks: {
                            color: "#7185ad",
                            font: {
                                size: 9
                            }
                        }

                    },

                    y: {

                        beginAtZero: true,

                        max: 5000,

                        grid: {
                            color: "#172958"
                        },

                        ticks: {

                            color: "#7185ad",

                            font: {
                                size: 9
                            },

                            callback: value => {
                                return "$" +
                                    (value / 1000) +
                                    "K";
                            }

                        }

                    }

                }

            }

        });

    }

});