@extends('layouts.app')

@section('content')

<div class="container text-center">
  <div class="row">
    
    <div class="col">
      <div class="card mb-3 mt-3" >
        <img src="https://picsum.photos/3000/2000" style="height:20rem;" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ $posts[0]->title }}</h5>
          <p class="card-text">{{ $posts[0]->excerpt }}</p>
          <p class="card-text">Category : {{ $posts[0]->category->name }}</p>
          <p class="card-text"><small class="text-body-secondary">{{ $posts[0]->created_at->diffForHumans() }}</small></p>
        </div>
      </div>
    </div>
  
  </div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4">

@foreach ($posts->skip(1) as $post)
    
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200" class="card-img-top" alt="..." style="height:200px; ">
      <div class="card-body">
        <h5 class="card-title">{{ $post->title }}</h5>
        <p class="card-text">{{ $post->excerpt }}</p>
        <p class="card-text">Category : {{ $post->category->name }}</p>

        <p class="card-text"><small class="text-body-secondary">{{ $posts[0]->created_at->diffForHumans() }}</small></p>

      </div>
    </div>
  </div>
@endforeach
</div>
<div class="d-flex justify-content-center mt-4">
{!! $posts->links() !!}

</div>



@endsection
