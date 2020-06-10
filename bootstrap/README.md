# Bootstrap

#### Visit the docs and add the necessary cdn links

#### And the script tags at the end of the body:

```html
// in the head
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="style.css" />
```

```html
// at the end of the body
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
```

#### We want to add a navbar to the top of the page 

#### Go to the docs and copy the one ca  5th from top with the dropdown link - then change the names of the links

#### Now we add the heading - this has to be in a container fluid (taking up the whole width)

```html
  <div class="container-fluid bg-image">
    <h1>Bootstrap</h1>
  </div>
```

#### Let's add our own style sheet where we add the class bg-image to set the background image

```
// style.css
    .bg-image {
    background-image: url(https://images.unsplash.com/photo-1571752351232-b6d28980561c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
    background-position: center;
    background-size: cover;
    color: white;
    display: flex;

    justify-content: center;
    align-items: center;
    height: 60vh;
    margin-top: 56px;
    }
```

#### The link to our style sheet has to be positioned after the bootstrap links

#### Now let's add the three paragraphs - we use the bootstrap grid for that - all elements should always add up to 12 and placed in a container 

#### We also give it some margin for the y axis and center the text

```html
  <div class="container">
    <div class="row text-center my-5">
      <div class="col-md-4 col-sm-12">
        <h2>Projects</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus animi consequatur nisi tempore fugit amet adipisci eos
            aperiam distinctio! Ullam cupiditate, neque ex esse similique culpa
            illum vero soluta magni harum earum. Aspernatur libero, veniam neque
            repellendus velit quod culpa officia aut! Totam quae reiciendis
            earum beatae tenetur necessitatibus voluptatem, quasi perferendis
            debitis qui, sit repellat corrupti quis eaque iste. Iure nihil
            perspiciatis eum sit maxime iste fugiat sunt. Cum rem ratione rerum?
            A placeat omnis tempora quibusdam officiis recusandae.
          </p>
        </div>
        <div class="col-md-4 col-sm-12">
          <h2>Team</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            voluptates nesciunt culpa et impedit facilis dolorem natus dolor
            molestias nihil! Porro, ut voluptate sapiente quis deserunt officiis
            quos sint incidunt.
          </p>
        </div>
        <div class="col-md-4 col-sm-12">
          <h2>Vision</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus 
            excepturi ea ad earum, debitis rerum doloribus, pariatur exercitationem 
            laudantium sunt obcaecati id, autem beatae. Labore totam quas magnam. Nobis?
          </p>

      </div>
    </div>
  </div>
```

#### Then let's also add a carousel - we take the one with controls

#### And then just add the image sources

#### We also want to add form to the bottom of the site - go to the docs and pick the first one named 'exampleInputEmail1'

#### We anna add a margin top and bottom using 'mt-5 mb-5' and center the text using 'justify-content-center'

```
  <div class="container">
    <div class="row mt-5 mb-5 justify-content-center">
      <div class="col-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-light">Send</button>
        </form>
      </div>
    </div>
  </div>
```