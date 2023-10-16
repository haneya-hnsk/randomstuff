<nav class="navbar navbar-expand-lg  ps-4  text-white" style="background-color: #3f51b5; padding-right:60px;" >
  <div class="container-fluid text-white">
    <a class="navbar-brand text-white" href="#"><h3>APCB</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
        
      </ul>
      @auth
      <ul class="navbar-nav ms-auto" padd >
        <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Hey {{ Auth::user()->name }}!
          </a>
          <ul class="dropdown-menu me-4" style="margin-right: 0px;">
            <li  class="dropdown-item">
              <form action="{{ route('logout') }}" method="post">
                @csrf
              
              <button  class="btn btn-danger" type="submit">Logout</button>
            </li>
          </form>
            {{-- <li><i a class="dropdown-item" href="/logout">Logout</i></li> --}}
            {{-- <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> --}}
          </ul>
        </li>
      </ul>
     
      @endauth
      @guest
      <ul class="navbar-nav ms-auto"  >
        <li class="nav-item dropdown">
          <a href="/login" class="btn btn-primary">Login</a>

        </li>
      </ul>
     
     
      @endguest
    </div>
  </div>
</nav>
