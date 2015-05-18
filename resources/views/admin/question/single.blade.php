@extends('admin')

@section('content')

  <div class="container">
    {{$question->question}}

    <div id="blockly" style="min-height: 500px;">

    </div>

    <xml id="toolbox" style="display: none">
      <block type="controls_if"></block>
      <block type="controls_whileUntil"></block>
    </xml>
  </div>

@endsection
