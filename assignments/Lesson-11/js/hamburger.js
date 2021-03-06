<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Preston-City Weather Bureau</title>
        <meta name="description"
            content="Continued the Town Page Build for Artem Karpikov Student || Where the 7-Day Weather Forecasts Comes First">
        <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
        <link rel="stylesheet" type="text/css" href="css/small.css">
        <link rel="stylesheet" type="text/css" href="css/middle.css">
        <link rel="stylesheet" type="text/css" href="css/large.css">    
		<script type="text/javascript" src="js/hamburger.js"></script>


        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="js/main.js"></script>
				    <script src="js/toggle-read-more.js" defer></script>

    </head>

    <body onload="UpdateDates()">
        <div class="top-banner">
            Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.
        </div>
        <header>
            <picture>
                <img src="images/weather.png" alt="Where the 7-Day Weather Forecasts Comes First">
            </picture>
            <h1>Preston-City Weather Bureau</h1>
            <h2>Where the 7-Day Weather Forecasts Comes First</h2>
        </header>
        <nav>
            <ul class="navigation">
                <li><a href="#menu" onclick="toggleMenu()">&#9776; Menu</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="preston-6.html" class="active">Preston</a></li>
                <li><a href="#sodasptrings">Soda Springs</a></li>
                <li><a href="#fishhaven">Fish Haven</a></li>
                <li><a href="#stormcenter">Storm Center</a></li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>
        </nav>
        <main>
            <section>
<h2>Preston Idaho</h2>
<div class="herodiv">
      <div class="hero-image">
        <img src="images/preston-large.jpg" 

             alt="grass and blue sky" 
             srcset="images/preston-small.jpg 559w,
                     images/preston-medium.jpg 927w,
                     images/preston-large.jpg 1080w"
             sizes="(max-width: 300px) 527px,
                    (max-width: 500px) 895px,
                    1080px">
      </div>
          <section class="weathersummary">
		                      <h3>Weather Summary</h3>

                    <div class="weatherdetails">
                        <p class="label">Currently:</p>
                        <p class="value"><span id="condition"></span></p>
                        <p class="label">Temperature:</p>
                        <p class="value"><span id="temp"></span> &deg;F</p>
                        <p class="label">Humidity:</p>
                        <p class="value"><span id="humidity"></span>%</p>
                        <p class="label">Wind Speed:</p>
                        <p class="value"><span id="windSpeed"></span> mph</p>
                        <p class="label">Wind Chill:</p>
                        <p class="value"><span id="windChill"></span> &deg;F</p>
                    </div> 
            </section>
            
                    <section class="forecast">
                <h3>5 Day Forecast</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Day</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Forecast</th>
                        <td><span id="day1"></span>&deg;F</td>
                        <td><span id="day2"></span>&deg;F</td>
                        <td><span id="day3"></span>&deg;F</td>
                        <td><span id="day4"></span>&deg;F</td>
                        <td><span id="day5"></span>&deg;F</td>
                    </tr>
                    </tbody>
                </table>
            <section>
			            
        <div class = "article">

                <img src="images/Trick-or-Treat.jpg" alt="TRICK OR TREAT picture" >
                    <p><h2>HALLOWEEN TRICK OR TREAT</h2>
        <p>Come join the community for a spooky-fun activity for the entire family!<br>
        Main Street Businesses will be providing treats, activities and photo opportunities! <br>
        Bring your entire family for a free and safe Halloween night! <br>
                    </p>  
					<div class="disp-full-artcile"><button onclick="toggleFullArticle()">read when...</button></div>
                <div class="full-article">
                    <p>
                     October 31, 2019<br>
					4:30-6:00<br>
Preston Main Street<br>
(From Stokes to Big J’s)
                    </p>
                </div>
       </div>
	         

</section>
            <section>
			
			
			<section class="contact-container">
          
            <div class="contact-content">
                <h2>Preston-City Weather Bureau</h2>
                <div class="contact-info">
                    <div class="contact-address-container">
                        <div class="contact-address-icons">
                            <a href="https://goo.gl/maps/2xDdvB4XUu2nvQbt9">
                                    </a>
                        </div>
                        <div class="contact-address">
                            <a href="https://goo.gl/maps/2xDdvB4XUu2nvQbt9">
                                <p>1 North First St<br>
                                Preston, ID 83263</p>
                            </a>
                        </div>
                    </div>
                    <div class="contact-phone comm-icons">
                        <a href="tel:+17778889999">
                        </a>
                        <a href="tel:+17778889999">
                            ☎️ 111-777-9991
                        </a>
                    </div>
                    <div class="contact-email comm-icons">
                        <a href="mailto:Weather@Bureau.com">
                        </a>
                        <a href="mailto:Weather@Bureaucom">
                            Weather@Bureau.com
                        </a>
						<br>
												<br>

						<br>

						  <div class="map-container"><iframe width="300" height="200" frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:EiExIE4gMXN0IEUsIFByZXN0b24sIElEIDgzMjYzLCBVU0EiMBIuChQKEgnH6-Fn6fdUhxFYly81YikWVRABKhQKEglN_XSI7vdUhxEaWu_fON9fCg&key=AIzaSyBZjWHsS4Dfd2OvfjrXG39ly_x5kcFvcWA"
                    allowfullscreen></iframe></div>
					
                    </div>
                </div>
						<br>
						<br>

                <div class="contact-icons">
                   						   <a href = "https://twitter.com/?lang=en" target="_blank"><img class = "social" src="images/twitter-icon.png" alt="twitter icon"></a>                    

						   <a href = "https://www.facebook.com" target="_blank"> <img class = "social" src="images/facebook-icon.png" alt="facebook icon"></a>
						   <a href = "https://www.youtube.com/" target="_blank"><img class = "social" src="images/youtube.png" alt="youtube icon"></a>
						   <a href = "https://www.whatsapp.com/" target="_blank"><img class = "social" src="images/WhatsApp-icon.png" alt="WhatsApp Icon"></a>
                           <a href = "https://www.pinterest.com/" target="_blank"><img class = "social" src="images/pinterest-icon.png" alt="Pinterest Icon"></a>
                   
                    </div>
                </div>
				        </section>

        </section>
			
        </main>
        <footer>
            <p>&copy; <span id="copyrightdate"></span> || Artem Karpikov || Location: Finland || ; <br> 
                    <a href="http://www.byui.edu/online">BYU-Idaho Online Learning</a>
                    <br><span id="currentDate"></span>
                </p>
        </footer>
        <p class="w3validator">
            <a href="https://jigsaw.w3.org/css-validator/check/referer">
                <img src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" />
            </a>
        </p>
        <script type="text/javascript" src="js/weather.js"></script>
        <script type="text/javascript" src="js/windchill.js"></script>
        <script type="text/javascript" src="js/eventlister.js"></script>
		<script type="text/javascript" src="js/preston.js"></script>

    </body>

    </html>