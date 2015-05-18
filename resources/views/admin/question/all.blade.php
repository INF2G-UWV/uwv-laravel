@extends('admin')

@section('content')



  <div class="container">
      <form class="uk-form">
        <ul id="questions" class="uk-nestable" data-uk-nestable="{maxDepth: 2}">

          @foreach ($questions as $question)

            <li class="uk-nestable-list-item" data-question-id="{{$question->id}}">
              <div class="uk-nestable-item">
                <div class="uk-nestable-handle"></div>
                <span class="question">{{$question->question}}</span>
                <button class="uk-button uk-button-small uk-button-danger pull-right" type="button">Verwijderen</button>
                <a href="/admin/question/{{$question->id}}" class="uk-button uk-button-small pull-right">Aanpassen</a>
              </div>

              <ul class="uk-nestable-list">
                @foreach ($subQuestions as $subQuestion)

                  @if($subQuestion->parent_id == $question->id)

                  <li class="uk-nestable-list-item" data-question-id="{{$subQuestion->id}}">
                    <div class="uk-nestable-item">
                      <div class="uk-nestable-handle"></div>
                      <span class="question">{{$subQuestion->question}}</span>
                      <button class="uk-button uk-button-small uk-button-danger pull-right" type="button">Verwijderen</button>
                      <a href="/admin/question/{{$subQuestion->id}}" class="uk-button uk-button-small pull-right">Aanpassen</a>
                    </div>
                  </li>

                  @endif

                @endforeach
              </ul>

            </li>

          @endforeach
        </ul>
      </form>
    </div>
  </div>

@endsection
