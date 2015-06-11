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
</head>

<body ng-app="uwv">
    <div class="container-fluid topbar shadow">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <a ui-sref="home" class="logo"></a>
                    <div class="title">
                        <h1>Quickscan</h1>
                        <span>Werken in Duitsland? Check eenvoudig wat je kunt verwachten</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container content shadow" ui-view>

    </div>
    <script src="{{ asset('/dist/frontend.js') }}"></script>

</html>
