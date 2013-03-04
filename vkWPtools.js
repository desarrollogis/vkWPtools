
var ajaxurl = ajaxurl || "";

jQuery(document).ready(function($) {
    $("#backup_theme").click(function() {
        var theme = $("#theme_to_backup").val();

        $(this).attr("disabled", "disabled");
        $.post(ajaxurl, { "action": "vkWPtools_backup_theme", "theme": theme }, function(response) {
            alert(response);
            $("#backup_theme").removeAttr("disabled");
        });
    });
    $("#clean_backups").click(function() {
        $(this).attr("disabled", "disabled");
        $.post(ajaxurl, { "action": "vkWPtools_clean_backups" }, function(response) {
            alert(response);
            $("#clean_backups").removeAttr("disabled");
        });
    });
});