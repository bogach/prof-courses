$.ajaxSetup({
    headers: {
        'Access-Control-Allow-Origin': 'https://github.com'
    }
});
$.getJSON('info.json', function (data) {
    var courses = [];
    $.each(data.courses, function (index, course) {
        var difficulty = '';
        for (i = 0; i < course.difficulty; i++) {
            difficulty += '<span class="glyphicon glyphicon-star"></span>';
        }
        for (i = 0; i < 5 - course.difficulty; i++) {
            difficulty += '<span class="glyphicon glyphicon-star-empty"></span>'
        }
        var html = '<div class="col-sm-6 col-lg-6 col-md-6">' +
            '<div class="thumbnail">' +
            '<div class="cover"><img src="' + course.logo_url + '" alt="Course logo"></div>' +
            '<div class="caption">' +
            '<h4 class="pull-right">' + course.category + '</h4>' +
            '<h4>' + course.title + '</h4>' +
            '<hr>' +
            '<p>' + course.description + '</p>' +
            '<p>' + difficulty + ' Difficulty: ' + course.difficulty + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        courses.push(html);
    });
    $(courses.join("")).appendTo(".row");
    $('<small>Last update: ' + data.update.substr(9) + '</small>').appendTo("#title")
});
