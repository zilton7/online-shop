let page = `
<header>
<nav class="navbar navbar-expand-lg navigation">
<div class="d-flex justify-content-center align-items-center">
  <div><i class="fas fa-book main_logo text_color_1 pr-3 py-2"></i></div>
  <div><a class="navbar-brand text-uppercase text-white font-weight-bold logo" href="#">Bookix</a></div>
</div>
<button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarToggler"
  aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarToggler">
  <ul class="navbar-nav nav_left">
    <li class="nav-item active">
      <a class="nav-link px-4 text-uppercase text-muted font-weight-bold font-bold" href=" #">Home<span
          class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link px-4 text-uppercase text-muted font-weight-bold font-bold" href=" #">Collections</a>
    </li>
    <li class="nav-item">
      <a class="nav-link px-4 text-uppercase text-muted font-weight-bold" href="#">Purchase List</a>
    </li>
    <li class="nav-item rounded text-uppercase text-white font-weight-bold special">
      <a class="nav-link px-4 text-white" href="#">Post an Ad</a>
    </li>
  </ul>
  <ul class="navbar-nav ml-auto nav_right">
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fas fa-envelope" style="color:grey"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link px-4 text-white font-weight-bold font-bold" href="#">JohnDoe</a>
    </li>
  </ul>
</div>
</nav>
<!-- SEARCH AREA -->
<section class="d-flex flex-column align-items-center py-4 search_area">
<div class="search_area_header d-flex flex-column align-items-center">
  <p class="h1 text-white font-weight-bold">BOOKIX</p>
  <p class="text-white">Buying & Selling Books was Never Easier</p>
</div>
<form action="/search-result.html">
  <div class="form-group d-flex flex-row justify-content-center align-items-center search_form">
    <div class="form-group">
      <select class="form-control form-control-lg" name="genre" id="cars">
        <option value="" disabled selected>Select genre</option>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="detective">Detective</option>
        <option value="mystery">Mystery</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci-Fi</option>
      </select>
    </div>
    <div class="form-group">
      <input type="text" class="form-control form-control-lg"
        placeholder="Enter Book Title, Author, ISPN or Keyword">
    </div>
    <button type="submit" class="btn btn-dark btn-lg mb-3 ml-3 px-4 text-muted rounded-0">Search</button>
  </div>
</form>
</section>
</header>
`;

document.write(page);
