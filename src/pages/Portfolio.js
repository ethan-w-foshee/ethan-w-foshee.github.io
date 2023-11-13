import '../styles/portfolio-styles.css'

function Portfolio() {
    return (
        <body id="portbody">
            <main id="portmain">
                <div class="top-bar">
                    <h1>My Portfolio</h1>
                </div>
                <div class="pc-view">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <a href="https://ethan-w-foshee.github.io/NASAlanding/" target="_blank"><img
                                    class="d-block w-100" src="/Web101-Foshee/image/NASA Web Thumbnail.png" alt="NASA Website" /></a>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>My first website created</h5>
                                    <p>Created on August 28th, 2022</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="https://ethan-w-foshee.github.io/First-Responsive-Website/" target="_blank"><img
                                    class="d-block w-100" src="/Web101-Foshee/image/FRW Thumbnail.png" alt="Responsive Website" /></a>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>My first RESPONSIVE website created</h5>
                                    <p>Created on September 1st, 2022</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="https://ethan-w-foshee.github.io/calculator-app-101/" target="_blank"><img
                                    class="d-block w-100" src="/Web101-Foshee/image/Calc Thumbnail.png" alt="Calculator Website" /></a>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>A Calculator using Basic Javascript</h5>
                                    <p>Created on September 13th, 2022</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="https://ethan-w-foshee.github.io/evenOdd-lists/" target="_blank"><img
                                    class="d-block w-100" src="/Web101-Foshee/image/Even and Odd thumbnail.png"
                                    alt="Even or Odd Website" /></a>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>An Even and Odd List for inputting HTML</h5>
                                    <p>Created on September 20th, 2022</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="https://ethan-w-foshee.github.io/hair-salon/" target="_blank"><img
                                    class="d-block w-100" src="/Web101-Foshee/image/Hair Salon thumbnail.png" alt="Hair Salon" /></a>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>A Hair Salon Website</h5>
                                    <p>Started on September 15th, 2022, and finished on September 23rd, 2022</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="https://ethan-w-foshee.github.io/dummyDataToDoList/" target="_blank"><img
                                    class="d-block w-100" src="/Web101-Foshee/image/TODO thumbnail.png" alt="To Do List" /></a>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>A Dummy To-Do List, for testing fetches, and filters</h5>
                                    <p>Created on September 27th, 2022</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="https://ethan-w-foshee.github.io/TicTacToe-101/" target="_blank"><img
                                    class="d-block w-100" src="/Web101-Foshee/image/TTT thumbnail.png" alt="Tic Tac Toe" /></a>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>TIC-TAC-TOE using JavaScript</h5>
                                    <p>Started on September 8th, 2022, and finished on September 27th, 2022</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="mob-view">
                    <div id="nasa" class="websites">
                        <a href="https://ethan-w-foshee.github.io/NASAlanding/" target="_blank">
                            <h5>My first website created</h5>
                        </a>
                        <div class="context">
                            <p>Created on August 28th, 2022</p>
                        </div>
                    </div>
                    <div id="frw" class="websites">
                        <a href="https://ethan-w-foshee.github.io/First-Responsive-Website/" target="_blank">
                            <h5>My first RESPONSIVE website created</h5>
                        </a>
                        <div class="context">
                            <p>Created on September 1st, 2022</p>
                        </div>
                    </div>
                    <div id="calc" class="websites">
                        <a href="https://ethan-w-foshee.github.io/calculator-app-101/" target="_blank">
                            <h5>A Calculator using Basic Javascript</h5>
                        </a>
                        <div class="context">
                            <p>Created on September 13th, 2022</p>
                        </div>
                    </div>
                    <div id="even-odd" class="websites">
                        <a href="https://ethan-w-foshee.github.io/evenOdd-lists/" target="_blank">
                            <h5>An Even and Odd List for inputting HTML</h5>
                        </a>
                        <div class="context">
                            <p>Created on September 20th, 2022</p>
                        </div>
                    </div>
                    <div id="hair-salon" class="websites">
                        <a href="https://ethan-w-foshee.github.io/hair-salon/" target="_blank">
                            <h5>A Hair Salon Website</h5>
                        </a>
                        <div class="context">
                            <p>Started on September 15th, 2022, and finished on September 23rd, 2022</p>
                        </div>
                    </div>
                    <div id="dummy" class="websites">
                        <a href="https://ethan-w-foshee.github.io/dummyDataToDoList/" target="_blank">
                            <h5>A Dummy To-Do List, for testing fetches, and filters</h5>
                        </a>
                        <div class="context">
                            <p>Created on September 27th, 2022</p>
                        </div>
                    </div>
                    <div id="ttt" class="websites">
                        <a href="https://ethan-w-foshee.github.io/TicTacToe-101/" target="_blank">
                            <h5>TIC-TAC-TOE using JavaScript</h5>
                        </a>
                        <div class="context">
                            <p>Started on September 8th, 2022, and finished on September 27th, 2022</p>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    )
}

export default Portfolio