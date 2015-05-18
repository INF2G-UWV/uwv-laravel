@extends('admin')

@section('content')



  <div class="container">
      <form class="uk-form">
        <ul id="questions" class="uk-nestable" data-uk-nestable>

          @foreach ($questions as $question)
            <li class="uk-nestable-list-item" data-question-id="{{$question->id}}">
              <div class="uk-nestable-item">
                <div class="uk-nestable-handle"></div>
                <span class="question">{{$question->question}}</span>
                <button class="uk-button uk-button-small uk-button-danger pull-right" type="button">Remove</button>
                <a href="/admin/question/{{$question->id}}" class="uk-button uk-button-small pull-right">Edit</a>
              </div>
            </li>

          @endforeach
        </ul>
      </form>
    </div>
  </div>

@endsection