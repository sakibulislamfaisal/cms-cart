$(function(){
    if ($('textarea#ta').length) {
        CKEDITOR.replace('ta');
    }
    $('a.confirmDeletion').on('click', function () {
        if (!confirm('Are you want to sure to confirm delete'))
            return false;
    });
});