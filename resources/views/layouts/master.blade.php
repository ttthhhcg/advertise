<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<title>Advertisement</title>
	<link href='http://fonts.googleapis.com/css?family=Muli:300,300italic,400,400italic,700,700italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" media="all" href="{{asset('css/style.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{asset('css/styles2.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/media-queries.css')}}">
    <link href='http://fonts.googleapis.com/css?family=Muli:300,300italic,400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <style type="text/css">
	    a:hover,
	    #contactDetails a:hover,
	    .projectContent a:hover {
	        color: #004e92;
	    }
	    
	    .actionButton,
	    .pagination a:hover,
	    .pagination .btnNext:hover,
	    .pagination .btnPrev:hover,
	    .hasButtonsPost div,
	    #submit,
	    .hasButtons a,
	    #slideList a,
	    #playPause,
	    .button.light span,
	    .button.dark:hover span,
	    .button.light.arrow span,
	    .button.dark.arrow:hover span,
	    .jquery-msgbox-buttons button,
	    .Light #menu ul.main-menu > li.selected > p > a,
	    .nano > .pane > .slider,
	    .Dark #menu ul.sub-menu > li.selected p > a {
	        background-color: #004e92;
	    }
	    
	    .Light #menu ul.main-menu > li.selected > p > a,
	    .Light #menu ul.sub-menu > li.selected p > a {
	        border-color: #004e92;
	    }
	    
	    body,
	    #menu ul.sub-menu a,
	    .galleryContent .shortContent {
	        font-family: 'Muli', sans-serif;
	    }
	    
	    #tagline,
	    h1,
	    h2,
	    h3,
	    h4,
	    h5,
	    h6,
	    #menu a,
	    #comments-title,
	    #reply-title,
	    .commentAuthor,
	    .asterix,
	    #submit,
	    .sliderPagination,
	    .projectContent .category,
	    .projectContent em,
	    .projectContent a,
	    .galleryContent .category,
	    .button,
	    .widget.twitter,
	    .phoneNumber,
	    .jquery-msgbox-buttons button,
	    .sidewidget span {
	        font-family: 'Muli', sans-serif;
	    }
    </style>
	@yield('css')
</head>
<body id="body" class="home page page-id-2 page-template page-template-template-slideshow page-template-template-slideshow-php closedSidebars  Dark Autohide Center Fill aa Default">
	@section('nav')
		@include('nav.navbar')
	@show
	<div class="content">
		@yield('Noidung')
	</div>
	@section('footer')
		@include('footer.footer')
	@show
	<script src="{{asset('js/jquery/jquery-1.11.0.min.js')}}"></script>
	<script src="{{asset('js/jquery/jMenu.jquery.js')}}"></script>
	<script type="text/javascript">
		var j = jQuery.noConflict();
		j(document).ready(function(j) {
		    j("#menu-topnavigation").jMenu({
		        openClick: false,
		        ulWidth: '150',
		        effects: {
		            effectSpeedOpen: 200,
		            effectSpeedClose: 200,
		            effectTypeOpen: 'slide',
		            effectTypeClose: 'hide',
		            effectOpen: 'linear',
		            effectClose: 'linear'
		        },
		        TimeBeforeOpening: 100,
		        TimeBeforeClosing: 100,
		        animatedText: false,
		        paddingLeft: 1
		    });
		});
	</script>
	<script type='text/javascript' src='{{asset("js/jquery/jquery-migrate.min1576.js?ver=1.2.1")}}'></script>
    <script type='text/javascript' src='{{asset("wp-easy-gallery/js/jquery.prettyPhoto4235.js?ver=4.4.5")}}'></script>
	@yield('js')
</body>
</html>