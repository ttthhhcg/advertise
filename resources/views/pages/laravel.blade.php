@extends('layouts.master')
@section('Noidung')
	<div id="content" class="clearfix">
	    <div>
	        <section id="projectSlides" class="clearfix fullscreenGallery">
	            <img src="{{asset('media/slide/encapsulated-baptist-health-bg.jpg')}}" />
	            <img src="{{asset('media/slide/homepage_bckgrnd_img_slrmc.jpg')}}" />
	            <img src="{{asset('media/slide/homepage_img_winnie-palmer.jpg')}}" />
	            <img src="{{asset('media/slide/homepage_img_auto-owners.jpg')}}" />
	        </section>
	        <section class="galleryContent" style="left: 0px; opacity: 1; display: block;">
	            <header class="clearfix" style="width: 100%;">
	                <h4>Welcome to Bluworld!</h4>
	                <a class="actionButton close" href="#">Close</a>
	                <a class="actionButton minimize" data-content=".galleryContent" data-speed="300" href="#" id="min_page">Minimize</a>
	            </header>
	            <div class="shortContent clearfix">
	                <p>Bluworld of Water is the most trusted name in water feature design and fabrication.  Since our inception in 1998, we have been dedicated to providing quality water feature products and services.  Bluworld water features are not only beautiful, but they are built to stand the test of time.</p>
	                <p>We offer a wide range of decorative waterfall products.  Our “Hom Elements” division offers several different styles of decorative waterfalls such as table top fountains, wall hanging fountains, and floor fountains.  HŌMelements offers decorative waterfalls that are pre-designed and manufactured and are ready to ship.
	                	<a href="http://shop.bluworldusa.com/">http://shop.bluworldusa.com</a>
	                </p>
	                <p>Bluworld of Water specializes in the design and fabrication of custom waterfalls.  We have pioneered the development of custom waterfall systems to service the architectural products industry.  We build our custom waterfalls at our state of the art 30,000 sqft fabrication facility.</p>
	            </div>
	        </section>
	        <ul id="slideList">
	            <li id="playPause">
	                <a href="#" class="hoverBack">Play/Pause</a>
	                <div id="progressBar"></div>
	            </li>
	        </ul>
	    </div>
	</div>
@endsection

@section('js')
	<script type='text/javascript' src='wp-content/themes/wowway/js/plugins.min.js'></script>
    <script type='text/javascript' src='wp-content/themes/wowway/js/scripts.js'></script>
    <link rel="stylesheet" type="text/css" href="wp-content/themes/wowway/responsive-support.css">
    <link rel="stylesheet" type="text/css" href="wp-content/themes/wowway/css/basic.css">
    <link rel="stylesheet" type="text/css" href="wp-content/themes/wowway/css/basic_ie.css">
    <script>
        jQuery(document).ready(function() {

            jQuery('#min_page').click(function() {
                if (jQuery('.galleryContent').height() == 353) {
                    var position = 'up';
                }
                if (position == 'up') {
                    jQuery('.galleryContent').css({
                        'height': '53px'
                    });
                    var position = 'down';
                } else {
                    jQuery('.galleryContent').css({
                        'height': 'Auto'
                    });
                    var position = 'up';
                }
            });

        });
    </script>
@endsection
