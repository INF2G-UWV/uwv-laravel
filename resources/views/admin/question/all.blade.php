@extends('admin') @section('content')
<div class="container">
    <div class="row">
        <div class="col-md-6">
            @if (!$questions)
            <p>Nog geen vragen.</p>
            @endif
            <form class="uk-form">
                <ul id="questions" class="uk-nestable" data-uk-nestable="{maxDepth: 2}">
                    @foreach ($questions as $question)
                    <li class="uk-nestable-list-item" data-question-id="{{$question->id}}" data-order="{{$question->order}}">
                        <div class="uk-nestable-item">
                            <div class="uk-nestable-handle"></div>
                            <span class="question">{{$question->question}}</span>
                                    <a href="/admin/question/{{$question->id}}/delete" class="uk-button uk-button-small uk-button-danger pull-right">Verwijderen</a>
                            <a href="/admin/question/{{$question->id}}" class="uk-button uk-button-small pull-right">Aanpassen</a>
                        </div>
                        <ul class="uk-nestable-list">
                            @foreach ($subQuestions as $subQuestion) @if($subQuestion->parent_id == $question->id)
                            <li class="uk-nestable-list-item" data-question-id="{{$subQuestion->id}}" data-order="{{$question->order}}">
                                <div class="uk-nestable-item">
                                    <div class="uk-nestable-handle"></div>
                                    <span class="question">{{$subQuestion->question}}</span>
                                    <a href="/admin/question/{{$subQuestion->id}}/delete" class="uk-button uk-button-small uk-button-danger pull-right">Verwijderen</a>
                                    <a href="/admin/question/{{$subQuestion->id}}" class="uk-button uk-button-small pull-right">Aanpassen</a>
                                </div>
                            </li>
                            @endif @endforeach
                        </ul>
                    </li>
                    @endforeach
                </ul>
            </form>
        </div>
        <div class="col-md-6">
            <form class="form-horizontal" id="addQuestion" method="POST" action="question/create">
                <div class="form-group">
                    <div class="col-md-9">
                        <input type="text" class="form-control" name="question" placeholder="Nieuwe vraag toevoegen">
                    </div>
                    <div class="col-md-3">
                        <button type="submit" class="ladda-button btn btn-block btn-success">
                            <span class="ladda-label">Toevoegen</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
@endsection
