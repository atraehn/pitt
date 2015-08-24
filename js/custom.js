$(function() {
		// $.get('pages/home.html', function(data) {
		// 	$('#ajax .content').html(data);
		// })
		$('#home').click(function () {
			$.get('pages/home.html', function(data) {
				$('#ajax .content').html(data);
			})
		})
		$('#about').click(function () {
			$.get('pages/about.html', function(data) {
				$('#ajax .content').html(data);
			})
		})
		$('#projects').click(function () {
			$.get('pages/projects.html', function(data) {
				$('#ajax .content').html(data);
			})
		})
		$('#contact').click(function () {
			$.get('pages/contact.html', function(data) {
				$('#ajax .content').html(data);
			})
		})
	});