<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="enef23._Default" %>


<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>ENEF 23</title>
    <!-- Change White or black deppending on black or white theme -->

    <link id="favicon" href="../Enef23.ico" rel="shortcut icon" type="image/x-icon" />
    
    <!-- Css + Js's -->
    <link rel="stylesheet" type="text/css" href="../css/navbarStyle.css" />
    <link rel="stylesheet" type="text/css" href="../css/map.css" />
    <link rel="stylesheet" type="text/css" href="../css/variables.css" />
    <link rel="stylesheet" type="text/css" href="../css/logo.css" />
    <link rel="stylesheet" type="text/css" href="../css/clcok2.css" />
    <link rel="stylesheet" type="text/css" href="../css/description.css" />
    <link rel="stylesheet" type="text/css" href="../css/loading.css" />
    <link rel="stylesheet" type="text/css" href="../css/sponsors.css" />
    <link rel="stylesheet" type="text/css" href="../css/more.css" />
    <script src="../scripts/script.js"></script>
    <script src="../scripts/clock.js"></script>
    <script src="../scripts/Navbar.js"></script>
    <script src="../scripts/MobileSupport.js"></script>
    <script src="..//Dependencies/gasp/gsap.min.js"></script>

</head>

<body>

    <!-- Initial loading page -->
    <div class="loading-page" id="loading_page">
        <img src="img/Logo/enef23.png" style="width: 30%" />
    </div>

    <svg width="0" height="0">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
        </defs>
    </svg>

    <!-- CONTENT -->

    <div class="content">

        <!-- TITLE PAGE -->

        <div id="logo" class="logoPC snapTop-PC" onmouseover="darkenBack(true)" onmouseout="darkenBack(false)">
            <div class="logo-back-img" id="logo_back_img"></div>
            <div class='scrolldownPC' id="scrolldown-ico">
                <div class="chevrons">
                    <div class='chevrondown'></div>
                    <div class='chevrondown'></div>
                </div>
            </div>
            <div class="logo_holder" id="logo_holder">
                <div style="flex: 0 0 20vh" id="logo_top_margin"></div>
                <div id="bem-vindo-logo" class="logo_holder-rows" style="flex: 0 0 30vh; flex-direction: row;">
                    <h1 style="margin-right: 25px">Bem-vindo ao</h1>
                    <img id="logo_img" src="img/Logo/enef23_white_s.png" style="max-width: 30vw;" />
                </div>
                <div class="logo_holder-rows" style="flex: 0 0 40vh; flex-direction: column; position: relative; display: inline-flex; perspective: 1000px;">
                    <button class="btn_logoPC" onclick="Inscrever_click()">Inscrever</button>
                    <div class="countdown-clock">
                        <div class="_clockPC">
                            <div id="_clock">
                                <div class="clock-sec">
                                    <div class="clock_numbers" id="clockd"></div>
                                    <div class="clock_description">dia</div>
                                </div>
                                <div>:</div>
                                <div class="clock-sec">
                                    <div class="clock_numbers" id="clockh"></div>
                                    <div class="clock_description">hor</div>
                                </div>
                                <div>:</div>
                                <div class="clock-sec">
                                    <div class="clock_numbers" id="clockm"></div>
                                    <div class="clock_description">min</div>
                                </div>
                                <div>:</div>
                                <div class="clock-sec">
                                    <div class="clock_numbers" id="clocks"></div>
                                    <div class="clock_description">seg</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- Sponsors -->
        <div class="Sponsors snapMid-PC" id="sponsors_tab">
            <h1>Patrocinadores</h1>
            <div class="SponsorsContainer">
                <div class="SponsorHolder">Sponsor1</div>
                <div class="SponsorHolder">Sponsor2</div>
                <div class="SponsorHolder">Sponsor3</div>
                <div class="SponsorHolder">Sponsor4</div>
                <div class="SponsorHolder">Sponsor5</div>
            </div>
            <h1>Apoios</h1>
            <div class="SponsorsContainer">
                <div class="SponsorHolder">Supporter1</div>
                <div class="SponsorHolder">Supporter2</div>
                <div class="SponsorHolder">Supporter3</div>
                <div class="SponsorHolder">Supporter4</div>
                <div class="SponsorHolder">Supporter5</div>
            </div>
            <hr style="position: absolute; bottom: 0; width: 90%; margin: 0 5%;" />
            <hr style="position: absolute; top: 0; width: 90%; margin: 0 5%;" />
        </div>

        <!-- Descriptions -->
        <div class="description-holder-PC snapTop-PC" id="des_holder">
            <div id="arrow-l" class="des-arrow-PC can-hover" style="left: 5px;" onclick="changePage(false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                </svg>
            </div>
            <div id="arrow-r" class="des-arrow-PC can-hover" style="right: 25px;" onclick="changePage(true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                </svg>
            </div>
            <h1 class="des-title" id="des_title">Plano de atividades</h1>

            <div class="description-PC" id="description">
                <!-- Conteúdo em Navbar.js -->
            </div>
        </div>

        <!-- NAVBAR -->
        <div class="navbar-holder" id="navbar_holder">
            <div id="navbar">
                <div class="bubble-holder" style="left: 0">
                    <div id="bubble1" class="bubblePC">
                        <span class="iconPC">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                                <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                            </svg></span>
                    </div>
                </div>
                <div class="bubble-holder" style="left: 25vw">
                    <div id="bubble2" class="bubblePC">
                        <span class="iconPC">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                            </svg></span>
                    </div>
                </div>
                <div class="bubble-holder" style="left: 50vw">
                    <div id="bubble3" class="bubblePC">
                        <span class="iconPC">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                            </svg></span>
                    </div>
                </div>
                <div class="bubble-holder" style="left: 75vw">
                    <div id="bubble4" class="bubblePC">
                        <span class="iconPC">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                            </svg></span>
                    </div>
                </div>
                <div id="menu1" class="menuElementPC" onclick="navbar_bublleClick('1')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                    </svg>
                </div>
                <div id="menu2" class="menuElementPC" onclick="navbar_bublleClick('2')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                    </svg>
                </div>
                <div id="menu3" class="menuElementPC" onclick="navbar_bublleClick('3')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                        <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                    </svg>
                </div>
                <div id="menu4" class="menuElementPC" onclick="navbar_bublleClick('4')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                        <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                    </svg>
                </div>
            </div>
            <div id="bgWrapper">
                <div id="bg"></div>
                <div class="bgB-holder">
                    <div id="bgBubble" class="bgBPC"></div>
                </div>
                <div class="arrowDown-PC">
                </div>
            </div>
        </div>

        <!-- MORE -->
        <div class="more snapTop-PC">
            <div class="FAQ">
                FAQ:
            </div>

            <div class="social-holder">
                <div class="social">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style="fill: var(--white);">
                            <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style="fill: var(--white);">
                            <path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875"></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style="fill: var(--white);">
                            <path d="M 9 1 C 8.460938 1 7.949219 1.1875 7.578125 1.546875 C 7.210938 1.902344 7 2.421875 7 3 L 7 4.046875 C 5.503906 4.132813 4.148438 4.59375 3.101563 5.335938 C 2.792969 5.148438 2.449219 5.035156 2.101563 5.011719 C 1.515625 4.972656 0.902344 5.148438 0.484375 5.613281 L 0.476563 5.625 L 0.46875 5.632813 C 0.0820313 6.117188 -0.0742188 6.769531 0.03125 7.414063 C 0.121094 7.984375 0.453125 8.542969 1.007813 8.933594 C 1.003906 8.960938 1 8.984375 1 9.007813 C 1 10.425781 1.769531 11.699219 2.949219 12.589844 C 4.128906 13.476563 5.730469 14.011719 7.5 14.011719 C 9.269531 14.011719 10.871094 13.476563 12.050781 12.589844 C 13.230469 11.699219 14 10.425781 14 9.007813 C 14 8.984375 13.996094 8.960938 13.996094 8.933594 C 14.546875 8.542969 14.878906 7.984375 14.96875 7.417969 C 15.074219 6.769531 14.917969 6.117188 14.53125 5.632813 L 14.519531 5.625 L 14.515625 5.613281 C 14.101563 5.148438 13.488281 4.972656 12.90625 5.007813 C 12.554688 5.03125 12.207031 5.148438 11.902344 5.335938 C 10.851563 4.59375 9.496094 4.132813 8 4.046875 L 8 3 C 8 2.65625 8.109375 2.425781 8.277344 2.265625 C 8.445313 2.101563 8.683594 2 9 2 C 9.234375 2 9.582031 2.1875 10.121094 2.449219 C 10.660156 2.710938 11.390625 3 12.375 3 L 13 3 C 13.550781 3 14 2.550781 14 2 C 14 1.449219 13.550781 1 13 1 C 12.460938 1 12.019531 1.4375 12.003906 1.976563 C 11.410156 1.921875 10.964844 1.75 10.558594 1.550781 C 10.070313 1.3125 9.621094 1 9 1 Z M 7.5 5.007813 C 9.066406 5.007813 10.464844 5.488281 11.449219 6.230469 C 12.433594 6.972656 13 7.953125 13 9.007813 C 13 10.066406 12.433594 11.046875 11.449219 11.789063 C 10.464844 12.53125 9.066406 13.011719 7.5 13.011719 C 5.933594 13.011719 4.535156 12.53125 3.550781 11.789063 C 2.566406 11.046875 2 10.066406 2 9.007813 C 2 7.953125 2.566406 6.972656 3.550781 6.230469 C 4.535156 5.488281 5.933594 5.007813 7.5 5.007813 Z M 12.96875 6.007813 C 13.296875 5.988281 13.59375 6.101563 13.753906 6.273438 C 13.933594 6.503906 14.042969 6.890625 13.984375 7.257813 C 13.953125 7.4375 13.890625 7.609375 13.789063 7.765625 C 13.582031 7.140625 13.226563 6.566406 12.753906 6.0625 C 12.828125 6.046875 12.894531 6.011719 12.96875 6.007813 Z M 2.03125 6.007813 C 2.105469 6.015625 2.171875 6.046875 2.242188 6.066406 C 1.773438 6.566406 1.417969 7.140625 1.210938 7.765625 C 1.109375 7.609375 1.046875 7.4375 1.015625 7.257813 C 0.957031 6.886719 1.066406 6.503906 1.246094 6.273438 C 1.40625 6.101563 1.703125 5.988281 2.03125 6.007813 Z M 5 7 C 4.449219 7 4 7.449219 4 8 C 4 8.550781 4.449219 9 5 9 C 5.550781 9 6 8.550781 6 8 C 6 7.449219 5.550781 7 5 7 Z M 10 7 C 9.449219 7 9 7.449219 9 8 C 9 8.550781 9.449219 9 10 9 C 10.550781 9 11 8.550781 11 8 C 11 7.449219 10.550781 7 10 7 Z M 5 10 C 5.285156 10.929688 6.355469 12 7.5 12 C 8.644531 12 9.714844 11 10 10 C 9.484375 10.570313 8.472656 11 7.5 11 C 6.527344 11 5.515625 10.5 5 10 Z"></path></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style="fill: var(--white);">
                            <path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
