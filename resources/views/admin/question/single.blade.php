@extends('admin')

@section('content')

<div class="container">
    <div class="col-md-12">
        <form class="form-horizontal" id="editQuestion" method="POST" action="question/update">
            <div class="form-group">
                <div class="col-md-6">
                    <input type="text" class="form-control" name="question" value="{{$question->question}}">
                </div>
                <div class="col-md-2 pull-right">
                    <button type="submit" class="ladda-button btn btn-block btn-success">
                        <span class="ladda-label">Opslaan</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
    <br>
    <div id="blockly" style="min-height: 500px;">
        
    </div>
    <div id="blocks" style="display: none;">
        {!!$question->block!!}
    </div>
    <xml id="toolbox" style="display: none">
        <block type="compare"></block>
        <block type="math"></block>
        <block type="goto_subquestions"></block>
        <block type="goto_next_question"></block>
    </xml>
</div>


@endsection
