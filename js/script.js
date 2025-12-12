$(document).ready(function() {
    'use strict';

    const $header = $('.header');
    const $menuToggle = $('.menu-toggle');
    const $nav = $('.nav');
    const $dropdownToggle = $('.dropdown-toggle');

    /*menú hamburguesa*/
    $menuToggle.on('click', function() {
        $(this).toggleClass('active');
        $nav.toggleClass('active');
        
        const isExpanded = $(this).hasClass('active');
        $(this).attr('aria-expanded', isExpanded);
        
        $('body').toggleClass('menu-open');
    });
    
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });

    /*scroll*/

    $('a[href^="#"]').on('click', function(e) {
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            e.preventDefault();
        
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
        }
    });

   /*tarjeta*/
    $('.visit-card').on('mouseenter', function() {
        $(this).find('.visit-tag').css('transform', 'scale(1.1)');
    }).on('mouseleave', function() {
        $(this).find('.visit-tag').css('transform', 'scale(1)');
    });


    /*gráficos*/
    if ($('#temperatureChart').length) {
        initCharts();
    }

    function initCharts() {
        const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        
        const colorPrimary = '#c41e3a';
        const colorSecondary = '#1a365d';
        const colorAccent = '#d4a574';

        const ctxTemp = document.getElementById('temperatureChart').getContext('2d');
        new Chart(ctxTemp, {
            type: 'line',
            data: {
                labels: meses,
                datasets: [
                    {
                        label: 'Máxima',
                        data: [10, 12, 16, 18, 22, 28, 33, 32, 27, 20, 14, 10],
                        borderColor: colorPrimary,
                        backgroundColor: 'rgba(196, 30, 58, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: colorPrimary,
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    },
                    {
                        label: 'Mínima',
                        data: [2, 3, 5, 7, 11, 16, 19, 19, 15, 10, 6, 3],
                        borderColor: colorSecondary,
                        backgroundColor: 'rgba(26, 54, 93, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: colorSecondary,
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Temperatura (°C)',
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });


        const ctxPrecip = document.getElementById('precipitationChart').getContext('2d');
        new Chart(ctxPrecip, {
            type: 'bar',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Precipitación (mm)',
                    data: [37, 35, 26, 47, 52, 25, 15, 10, 28, 49, 56, 56],
                    backgroundColor: colorSecondary,
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'mm',
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });


        const ctxSun = document.getElementById('sunshineChart').getContext('2d');
        new Chart(ctxSun, {
            type: 'line',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Horas de sol',
                    data: [5, 6, 7, 8, 9, 11, 12, 11, 9, 7, 5, 4],
                    borderColor: colorAccent,
                    backgroundColor: 'rgba(212, 165, 116, 0.2)',
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: colorAccent,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,

                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 14,
                        title: {
                            display: true,
                            text: 'Horas',

                        },
                        grid: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
});