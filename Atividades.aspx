<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Atividades.aspx.cs" Inherits="enef23.Atividades" %>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>ENEF 23</title>
    <!-- Change White or black deppending on black or white theme -->

    <link id="favicon" href="../Enef23.ico" rel="shortcut icon" type="image/x-icon" />
    
    <!-- Css + Js's -->
    <link rel="stylesheet" type="text/css" href="../css/variables.css" />
    <link rel="stylesheet" type="text/css" href="../css/logo.css" />
    <link rel="stylesheet" type="text/css" href="../css/loading.css" />
    <link rel="stylesheet" type="text/css" href="../css/more.css" />
    <link rel="stylesheet" type="text/css" href="../css/Atividades.css" />
    <script src="../scripts/MobileSupportAtiv.js"></script>
    <script src="..//Dependencies/gasp/gsap.min.js"></script>
    <script src="../scripts/scriptAtiv.js"></script>

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

    <div class="content" style="scroll-snap-type: unset">

        <!-- Header -->

        <div style="text-align: center; margin: 0 10vw">

            <img src="img/Logo/enef23_white2.png" style="min-height: 200px; min-width: 200px; width: 30vw; margin:-5vw auto; display: block; cursor: pointer" onClick="window.location = '/';"/>

            <h1 style="width: 100%; margin-top: -50px">Informação de Atividades</h1>

            <h3 style="text-align:left; margin: 100px 0;">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nislex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
            </h3>

        </div>

        <!-- Content -->

        <div class="Ativ_section closed" id="section1" onclick="ExpandSection(1)">
            <div class="Ativ_head" id="section_head1">
                <h1>Workshops </h1>
                <div style="flex:1 1 100%"></div>
                <div class="Ativ_icon">
                    <h1>+</h1>
                </div>
            </div>
            <div class="Ativ_cont">
                <h4>iaushkdlasfuyiuasfnklmasfhin</h4>

                                <h4>iaushkdlasfuyiuasfnklmasfhin</h4>

                                <h4>iaushkdlasfuyiuasfnklmasfhin</h4>

                                <h4>iaushkdlasfuyiuasfnklmasfhin</h4>

                                <h4>iaushkdlasfuyiuasfnklmasfhin</h4>

                                <h4>iaushkdlasfuyiuasfnklmasfhin</h4>


            </div>
        </div>

        <div class="Ativ_section closed" id="section2" onclick="ExpandSection(2)">
            <div class="Ativ_head" id="section_head2">
                <h1>Inside Views</h1>
                <div style="flex:1 1 100%"></div>
                <div class="Ativ_icon">
                    <h1>+</h1>
                </div>
            </div>
            <div class="Ativ_cont">
                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>


            </div>
        </div>

        <div class="Ativ_section closed" id="section3" onclick="ExpandSection(3)">
            <div class="Ativ_head" id="section_head3">
                <h1>Palestras</h1>
                <div style="flex:1 1 100%"></div>
                <div class="Ativ_icon">
                    <h1>+</h1>
                </div>
            </div>
            <div class="Ativ_cont">
                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>


            </div>
        </div>

        <div class="Ativ_section closed" id="section4" onclick="ExpandSection(4)">
            <div class="Ativ_head" id="section_head4">
                <h1>Debate</h1>
                <div style="flex:1 1 100%"></div>
                <div class="Ativ_icon">
                    <h1>+</h1>
                </div>
            </div>
            <div class="Ativ_cont">
                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>

                                <h1>iaushkdlasfuyiuasfnklmasfhin</h1>


            </div>
        </div>

        <!-- MORE -->
        <div class="more" style="background-color: #222324">
            <div class="social-holder">
                <div class="social">
                     <div style="cursor: pointer" onclick="window.location = 'https://www.instagram.com/enef2023/'">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style="fill: var(--white);">
                            <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path></svg>
                    </div>
                    <div style="cursor: pointer" onclick="window.location = 'https://www.facebook.com/profile.php?id=100087257791802'">
                        <!--  https://www.facebook.com/profile.php?id=100087257791802 -->
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 16 16" style="fill: var(--white);">
                            <path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z"></path></svg>
                    </div>
                    <div style="cursor: pointer" onclick="window.location = 'https://www.linkedin.com/company/enef-2023/'">
                        <!-- https://www.linkedin.com/company/enef-2023/ -->
                        <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" style="fill: var(--white);">
                            <path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z"/><path d="M24.299 23.921v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.69 11.756c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V13.217H7.912v10.704h3.557z"/></svg>                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
