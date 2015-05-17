<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>UWV Quickscan</title>

	<link href="{{ asset('/bower_components/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/font-awesome.min.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/style.css') }}" rel="stylesheet">

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>
  <div class="container-fluid topbar shadow">
    <div class="container">
     <div class="row">
       <div class="col-sm-12">
         <a href="" class="logo"></a>
         <div class="title">
           <h1>Quickscan</h1>
           <span>Werken in Duitsland? Check eenvoudig wat je kunt verwachten</span>
         </div>
       </div>
     </div>
   </div>
 </div>

 <div class="container content shadow">
   <div class="row">
     <div class="col-sm-12 top">
       <span class="step">Stap 2/5</span>
       <ul>
         <li><i class="fa fa-check-circle"></i><span></span></li><li>
           <i class="fa fa-circle active"></i><span></span>
         </li><li>
           <i class="fa fa-circle"></i><span></span>
         </li><li>
           <i class="fa fa-circle"></i><span></span>
         </li><li>
           <i class="fa fa-circle"></i></li>
       </ul>
     </div>
   </div>
   <div class="row">
     <div class="col-sm-8">
       <h1>Algemene informatie</h1>
       <p>Paragraaf met algemene informatie.</p>
       <hr>

       <!-- questions -->

       <div class="row">
         <div class="form-group question">
           <label class="col-sm-7 control-label" for="formGroupInputLarge">Large label</label>
           <div class="col-sm-5">
             <input class="form-control" type="text" id="formGroupInputLarge" placeholder="Large input">
           </div>
         </div>
       </div>

       <!-- buttons -->
       <div class="buttons">
         <a class="btn btn-uwv" href="#">Vorige</a>
         <a class="btn btn-uwv pull-right" href="#">Volgende</a>
       </div>

     </div>
     <div class="col-sm-4 hidden-xs contrast">
       <h3>Informatie</h3>
     </div>
   </div>
 </div>

	<!-- Scripts -->
	<script src="{{ asset('/bower_components/jquery/dist/jquery.min.js') }}"></script>
	<script src="{{ asset('/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
</html>
