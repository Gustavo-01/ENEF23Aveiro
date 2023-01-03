<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="enef23._Default" %>

<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>ENEF 23</title>
    <!-- Change White or black deppending on black or white theme -->

    <link id="favicon" href="../Enef23.ico" rel="shortcut icon" type="image/x-icon" />

    <!-- Css + Js's -->
    <link rel="stylesheet" type="text/css" href="../css/MainPage/navbarStyle.css" />
    <link rel="stylesheet" type="text/css" href="../css/variables.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/logo.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/clcok2.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/Content/Content.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/Content/Activ_description.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/Content/FAQ.css" />
    <link rel="stylesheet" type="text/css" href="../css/loading.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/sponsors.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/more.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/more.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/Content/Local.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/Content/pacote.css" />
    <link rel="stylesheet" type="text/css" href="../css/MainPage/Content/Equipa.css" />
    <script src="../scripts/DescriptionContent/PagPac.js"></script>
    <script src="../scripts/DescriptionContent/PagEqu.js"></script>
    <script src="../scripts/DescriptionContent/PagAti.js"></script>
    <script src="../scripts/DescriptionContent/PagFAQ.js"></script>
    <script src="../scripts/DescriptionContent/PagLoc.js"></script>
    <script src="../scripts/script.js"></script>
    <script src="../scripts/clock.js"></script>
    <script src="../scripts/Navbar.js"></script>
    <script src="../scripts/MobileSupportDefault.js"></script>
    <script src="..//Dependencies/gasp/gsap.min.js"></script>

</head>

<body>

    <!-- Initial loading page -->
    <div class="loading-page" id="loading_page">
        <img src="img/Logo/enef23.png" style="width: 30%" />
    </div>



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
                    <h1 style="margin-right: 25px; font-weight: 800">Bem-vind@ ao</h1>
                    <img id="logo_img" src="img/Logo/enef23_white_s.png" style="max-width: 30vw;" />
                </div>
                <div class="logo_holder-rows" style="flex: 0 0 40vh; flex-direction: column; position: relative; display: inline-flex; perspective: 1000px;">
                    <button class="btn_logoPC" onclick="window.location = './Atividades.aspx'">Atividades</button>
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
                <!-- MORE -->
                <div class="morePC">
                    <div class="social-holderPC">
                        <div class="social" style="width: 200px">
                            <div style="cursor: pointer" onclick="window.location='https://www.instagram.com/enef2023/'">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 16 16" style="fill: var(--white);">
                                    <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path></svg>
                            </div>
                            <div style="cursor: pointer" onclick="window.location = 'https://www.facebook.com/profile.php?id=100087257791802'">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 16 16" style="fill: var(--white);">
                                    <path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z"></path></svg>
                            </div>
                            <div style="cursor: pointer" onclick="window.location = 'https://www.linkedin.com/company/enef-2023/'">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 32 32" style="fill: var(--white);">
                                    <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z" />
                                    <path d="M24.299 23.921v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.69 11.756c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V13.217H7.912v10.704h3.557z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <!-- Sponsors -->
        <div class="Sponsors snapTop-PC" id="sponsors_tab">
            <h1>Patrocinadores</h1>
            <div class="SponsorsContainerPC" id="sponsorContainer">
                <div class="SponsorHolderPC logo_cesam" id="logo_cesam">
                    <object data=".\img\Sponsors\cesam.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\ciceco.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\dfis.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\i3n.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\it.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\leica.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\spf.svg"></object>
                </div>
                <div class="SponsorHolderPC logo_cesam">
                    <object data=".\img\Sponsors\cesam.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\ciceco.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\dfis.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\i3n.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\it.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\leica.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Sponsors\spf.svg"></object>
                </div>
            </div>
            <h1>Apoios</h1>
            <div class="SponsorsContainerPC" id="supportContainer">
                <div class="SponsorHolderPC logo_cesam">
                    <object data=".\img\Apoios\cesam.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\ciceco.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\dfis.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\eps.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\fisua.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\i3n.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\it.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\neef.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\nemog.svg"></object>
                </div>
                <!-- Repeated for infinite scroll effect -->
                <div class="SponsorHolderPC logo_cesam">
                    <object data=".\img\Apoios\cesam.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\ciceco.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\dfis.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\eps.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\fisua.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\i3n.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\it.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\neef.svg"></object>
                </div>
                <div class="SponsorHolderPC">
                    <object data=".\img\Apoios\nemog.svg"></object>
                </div>
            </div>
        </div>

        <!-- Descriptions -->
        <div class="content-holder-PC snapTop-PC" id="des_holder">
            <h1 class="des-title" id="des_title">Plano de atividades</h1>

            <div class="content-PC" id="description">
                <!-- Conteúdo em Navbar.js -->
            </div>

            <!-- NAVBAR -->
            <div class="navbar-holderPC" id="navbar_holder">
                <div id="navbar">
                    <div class="bubble-holder" style="left: 0">
                        <div id="bubble1" class="bubblePC">
                            <span class="iconPC">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-compass" viewBox="0 0 16 16">
                                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                                </svg></span>
                        </div>
                    </div>
                    <div class="bubble-holder" style="left: 20vw">
                        <div id="bubble2" class="bubblePC">
                            <span class="iconPC">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-handbag" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                                </svg></span>
                        </div>
                    </div>
                    <div class="bubble-holder" style="left: 40vw">
                        <div id="bubble3" class="bubblePC">
                            <span class="iconPC">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-pin-map" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                                    <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                </svg></span>
                        </div>
                    </div>
                    <div class="bubble-holder" style="left: 60vw">
                        <div id="bubble4" class="bubblePC">
                            <span class="iconPC">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-person-badge" viewBox="0 0 16 16">
                                    <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                                </svg></span>
                        </div>
                    </div>
                    <div class="bubble-holder" style="left: 80vw">
                        <div id="bubble5" class="bubblePC">
                            <span class="iconPC">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-question-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                </svg></span>
                        </div>
                    </div>
                    <div id="menu1" class="menuElementPC" onclick="navbar_bublleClick('1')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-compass" viewBox="0 0 16 16">
                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                        </svg>
                    </div>
                    <div id="menu2" class="menuElementPC" onclick="navbar_bublleClick('2')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-handbag" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                        </svg>
                    </div>
                    <div id="menu3" class="menuElementPC" onclick="navbar_bublleClick('3')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-pin-map" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                        </svg>
                    </div>
                    <div id="menu4" class="menuElementPC" onclick="navbar_bublleClick('4')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-person-badge" viewBox="0 0 16 16">
                            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                        </svg>
                    </div>
                    <div id="menu5" class="menuElementPC" onclick="navbar_bublleClick('5')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="var(--black)" class="bi bi-question-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
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
            <svg width="0" height="0">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </div>

    </div>
</body>
</html>
