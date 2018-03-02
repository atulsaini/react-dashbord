import React from 'react';

class Cards extends React.Component{
  render() {
    return(
      <div className="card-type">
        <div className="">
          <div className="bg-primary">
            <h3 className="mb-3 text-white p-3">Card Type</h3>
          </div>
          <div className="row">

            <div className="col-sm-4 mb-4">
              <div className="card border-primary">
                <img className="card-img-top" src="http://placehold.it/286x180" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card border-success">
                <img className="card-img-top" src="http://placehold.it/286x180" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card border-warning">
                <img className="card-img-top" src="http://placehold.it/286x180" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="bg-success">
          <h3 className="mb-3 text-white p-3">Titles, text, and links</h3>
        </div>
        <div className="row">

          <div className="col-sm-4 mb-4">
            <div className="card border-primary">
             
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card border-success">
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card border-warning">
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-danger">
          <h3 className="mb-3 text-white p-3">List groups</h3>
        </div>
        <div className="row">

          <div className="col-sm-6 mb-6 mb-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 mb-6 mb-4">
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="bg-warning mt-4">
          <h3 className="mb-3 text-white p-3">Header and footer</h3>
        </div>
        <div className="row">

          <div className="col-sm-4 mb-4">
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                Quote
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-info mt-4">
          <h3 className="mb-3 text-white p-3">Navigation</h3>
        </div>
        <div className="row">

          <div className="col-sm-6 mb-6 mb-4">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-6 mb-4">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-dark mt-4">
          <h3 className="mb-3 text-white p-3">Image overlays</h3>
        </div>
        <div className="row">

          <div className="col-sm-6 mb-6 mb-4">
            <div className="card bg-dark text-white">
              <img className="card-img" src="http://placehold.it/286x180" alt="Card image" />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-6 mb-4">
            <div className="card border-success bg-dark text-white">
              <img className="card-img" src="http://placehold.it/286x180" alt="Card image" />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-primary mt-4">
          <h3 className="mb-3 text-white p-3">Card styles</h3>
        </div>
        <div className="row">

          <div className="col-sm-4 mb-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Secondary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card text-white bg-danger mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Danger card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Warning card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card text-white bg-info mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Info card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card bg-light mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-4">
            <div className="card text-white bg-dark mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}
export default Cards;