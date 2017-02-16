$.ajaxSetup({
    headers: {
        'Access-Control-Allow-Origin': 'https://github.com'
    }
});
$.getJSON('info.json', function (data) {
    var courses = [];
    const COL_NUM = 2;
    $.each(data.courses, function (index, course) {
        var difficulty = '';
        for (i = 0; i < course.difficulty; i++) {
            difficulty += '<span class="glyphicon glyphicon-star"></span>';
        }
        for (i = 0; i < 5 - course.difficulty; i++) {
            difficulty += '<span class="glyphicon glyphicon-star-empty"></span>'
        }
        var html = '';
        if (index % COL_NUM == 0) {
            html += '<div class="row row-eq-height">';
        }
        html += '<div class="col-sm-6 col-lg-6 col-md-6">' +
            '<div class="thumbnail">' +
            '<div class="cover"><img src="' + course.logo + '" alt="Course logo"></div>' +
            '<div class="caption">' +
            '<h4 class="pull-right"><span class="label label-default">' + course.category + '</span></h4>' +
            '<h4><span class="glyphicon glyphicon-education" aria-hidden="true"></span> ' + course.title + '</h4>' +
            '<hr>' +
            '<p>' + course.description + '</p>' +
            '<p>' + difficulty + ' Difficulty: ' + course.difficulty + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
        if (index % COL_NUM == COL_NUM - 1) {
            html += '</div>'
        }
        courses.push(html);
    });
    $(courses.join("")).appendTo("#courses");
    $('<small>Last update: ' + data.update.substr(9) + '</small>').appendTo("#title")
});
