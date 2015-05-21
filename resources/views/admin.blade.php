<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>UWV Quickscan</title>

	<link href="{{ asset('/bower_components/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('/bower_components/uikit/css/uikit.min.css') }}" rel="stylesheet">
	<link href="{{ asset('/bower_components/uikit/css/components/nestable.min.css') }}" rel="stylesheet">

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>
	<nav class="navbar navbar-default">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
					<span class="sr-only">Toggle Navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">UWV</a>
			</div>

			<div class="collapse navbar-collapse" id="main-nav">
				<ul class="nav navbar-nav">
					<li><a href="{{ url('/admin') }}">Home</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Vragen <span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url('admin/question') }}">Overzicht</a></li>
							<li><a href="{{ url('admin/question/add') }}">Toevoegen</a></li>
						</ul>
					</li>
				</ul>

				<ul class="nav navbar-nav navbar-right">
					@if (Auth::guest())
						<li><a href="{{ url('/auth/login') }}">Login</a></li>
						<li><a href="{{ url('/auth/register') }}">Register</a></li>
					@else
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li><a href="{{ url('/auth/logout') }}">Logout</a></li>
							</ul>
						</li>
					@endif
				</ul>
			</div>
		</div>
	</nav>

	@yield('content')

	<!-- Scripts -->
	<script src="{{ asset('/bower_components/jquery/dist/jquery.min.js') }}"></script>
	<script src="{{ asset('/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('/bower_components/uikit/js/uikit.min.js') }}"></script>
	<script src="{{ asset('/bower_components/uikit/js/components/nestable.min.js') }}"></script>
	<script src="{{ asset('/3rdparty/blockly/blockly_compressed.js') }}"></script>
	<script src="{{ asset('/3rdparty/blockly/blocks_compressed.js') }}"></script>
	<script src="{{ asset('/3rdparty/blockly/msg/js/nl.js') }}"></script>
	<script src="{{ asset('/app/admin/app.js') }}"></script>
	<script src="{{ asset('/app/admin/uwv.questions.js') }}"></script>
</body>
</html>
