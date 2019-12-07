// Main JS file

// Nav bar
var navBarCode = `    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand logo" href="index.html">Integrate Counseling Services</a>
        </div>
        <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav navbar-right">
                <li class="active highlight"><a href="about2.html">about<span class="sr-only">(current)</span></a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">services<span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a class="nav-list" href="newforms.html">new client forms</a></li>
                        <li><a class="nav-list" href="insurance.html">insurance</a></li>
                    </ul>
                </li>
                <li class="active"><a href="contacts.html">contact <span class="sr-only">(current)</span></a></li>
            </ul>
        </div>
    </div>`;
$(".navbar").append(navBarCode);

// Footer
var footerCode = `        <div class="row">
            <div class="col-md-5">
                <p class="ender-address">
                    <span class="bold"><b>Address:</b></span></br>
                    Connect Workplace <br>
                    8350 W Grandridge Blvd Suite #200, Kennewick, WA 99336
                </p>
            </div>
            <div class="col-md-2">
                <a class="external" target="_blank" href="https://www.facebook.com/janmichael.licsw/"><i class="fab fa-facebook fa-3x icon"></i></a>
                <a class="external" target="_blank" href="https://goo.gl/maps/ahwJ2oVvGSaYaXgi8"><i class="fab fa-google fa-3x icon"></i></a>
                <a href="mailto:janmichael.msw@gmail.com"><i class="fas fa-envelope fa-3x icon"></i></a>
            </div>
            <div class="col-md-5">
                <p class="ender-text">© 2019 Integrate Counseling Services. Designed by Maporn Lertsuridej.</p>
            </div>`;

$("#ender").append(footerCode);
