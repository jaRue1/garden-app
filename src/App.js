import "./App.css"
import "materialize-css"
import { Button, Card, Row, Col } from "react-materialize"
function App() {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className = "container">
      <h1>Hello World</h1>
      <Button>Materialize</Button>
      </main>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </>
  )
}

export default App
