@extends('admin')

@section('content')

  <div class="container">
      <form class="uk-form">
        <ul id="questions" class="uk-nestable" data-uk-nestable>
          <li class="uk-nestable-list-item" data-question-id="1">
            <div class="uk-nestable-item">
              <div class="uk-nestable-handle"></div>
              <span class="question">Vraag</span>
              <button class="uk-button uk-button-small uk-button-danger pull-right" type="button">Remove</button>
              <button class="uk-button uk-button-small pull-right" type="button">Edit</button>
            </div>
          </li>

          <li class="uk-nestable-list-item" data-question-id="2">
            <div class="uk-nestable-item">
              <div class="uk-nestable-handle"></div>
              <span class="question">Vraag</span>
              <button class="uk-button uk-button-small uk-button-danger pull-right" type="button">Remove</button>
              <button class="uk-button uk-button-small pull-right" type="button">Edit</button>
            </div>
          </li>

          <li class="uk-nestable-list-item" data-question-id="3">
            <div class="uk-nestable-item">
              <div class="uk-nestable-handle"></div>              <span class="question">Vraag</span>
              <button class="uk-button uk-button-small uk-button-danger pull-right" type="button">Remove</button>
              <button class="uk-button uk-button-small pull-right" type="button">Edit</button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>

@endsection
