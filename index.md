<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Web Implementation</title>
    <link rel="stylesheet" href="css\style.css">
    <link rel="stylesheet" href="css\homepage-style.css">
</head>

<body id="home-page">
    <div id="beginning_story">
        <button id="skip_button">Skip</button>

        <div class="story" id="story_page_1">
            <div class="left"></div>
            <div class="story-content">
                <p>Hi! I'm little fox! My dear friend, may I have your name?</p>
                <img src="images\Fox-Clipart-PNG.png">
                <form class="enter-name">
                    <fieldset>
                        <input name="Name" id="form-name" type="text" placeholder="Please enter your nickname"><br>
                        <button type="submit"> Next </button>
                    </fieldset>
                </form>
            </div>
            <div class="right"></div>
        </div>
        <div class="story" id="story_page_2">
            <div class="left"></div>
            <div class="story-content">
                <p>Hi <span class="name">Anonymous</span> ! Are you ready to start the journey?</p>
                <img src="images\Fox-Clipart-PNG.png">
                <button class="yes"> Yes!! </button>
                <button class="yes"> Definately Yes ;p </button>
            </div>
            <div class="right"></div>
        </div>
        <div class="story" id="story_page_3">
            <div class="left"></div>
            <div class="story-content">
                <p>Let me introduce you my friend: Little Prince!</p>
                <img id="fox_intro" src="images\Fox-Clipart-PNG.png">
                <img id="prince_intro" src="images\little princ.png">
            </div>
            <div class="right"></div>
        </div>
        <div class="story" id="story_page_4">
            <div class="left"></div>
            <div class="story-content">
                <p>Do you know that there is a place inside any one of you?</p>
                <p>It can control your emotions and mind.</p>
                <p>It affects how you think, feel and act.</p>
                <p>Let just think of it as a planet inside our body.</p>
                <p>Let's call it mental planet!</p>
                <img src="images\Fox-Clipart-PNG.png">
            </div>
            <div class="right"></div>
        </div>
        <div class="story" id="story_page_5">
            <div class="left"></div>
            <div class="story-content">
                <p>It is fragile and vulnerable.</p>
                <p>Many things could hurt it.</p>
                <p>This would give you a psychological wounds or injuries.</p>
                <div class="planet">
                    <div class="wrap">
                        <div class="background"></div>
                    </div>
                    <div class="mask"></div>
                </div>
            </div>
            <div class="right"></div>
        </div>
        <div class="story" id="story_page_6">
            <div class="left"></div>
            <div class="story-content">
                <p>Recently, I feel that little prince is not happy.</p>
                <p>Let's see what is happening to him together.</p>
                <p>I need your help to check his wounds on his mental planet.</p>
                <p>Let's help him together!</p>
                <img id="fox_intro" src="images\Fox-Clipart-PNG.png">
                <img id="sad_prince_intro" src="images\notsmileprince.png">
                <div class="planet">
                    <div class="wrap">
                        <div class="background"></div>
                    </div>
                    <div class="mask"></div>
                </div>
            </div>
            <div class="right"></div>
        </div>
    </div>

    <header>
        <img id="logo" src="images\logo.png">
        <h1 id="web-descripe">Do you notice your psychological wounds?</h1>
    </header>


    <nav id="main-menu">
        <ul>
            <li class="current-page" id="home">
                <a href="home.html"> <img src="images\Home-300-1.png" , alt="homepage icon"> </a>
            </li>
            <li>
                <a href="bebetter.html"> How to be better? </a>
            </li>
            <li>
                <a href="more.html"> More </a>
            </li>
            <li>
                <a href="aboutus.html"> About us </a>
            </li>
        </ul>
    </nav>

    <div id="content">
        <a id="start_button" href="feelingsad.html">Start</a>

        <aside>
            <nav id="secondary-nav">
                <ul>
                    <li>
                        <a href="Chapter.html"> Chapter 1</a>
                    </li>
                    <li>
                        <a href="Chapter.html"> Chapter 2 </a>
                    </li>
                    <li>
                        <a href="Chapter.html"> Chapter 3 </a>
                    </li>
                </ul>
            </nav>
        </aside>

        <main>
            <div id="stars">
                <div class="star" style="top: 0px;left: 100px;"></div>
            </div>
            <div class="starry"></div>
            <div class="twinkling"></div>

            <figure id="fox">
                <img src="images\Fox-Clipart-PNG.png">
            </figure>
            <figure id="prince">
                <img src="images\little prince.png">
            </figure>
        </main>
    </div>

    <footer>
        <nav id="footer-menu">
            <ul>
                <li>
                    <a href="">Contact Us</a>
                </li>
                <li>
                    <a href="">Privacy Policy</a>
                </li>
                <li>
                    <a href="">Copyright</a>
                </li>
            </ul>
        </nav>
    </footer>

    <script src="js\jquery-3.4.0.min.js"></script>
    <script src="js\star.js"></script>
    <script src="js\script.js"></script>

</body>

</html>