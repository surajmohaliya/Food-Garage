var registerRestaurentDetails = () => {
    var restaurentData = {};
    restaurentData.name = $("#name").val();
    restaurentData.themeLine = $("#themeLine").val();
    restaurentData.rating = $("#rating").val();
    restaurentData.code = $("#code").val();
    restaurentData.restaurentThemeImage = $("#restaurentThemeImage").val();

    console.log(restaurentData)
    $.ajax({
        url: '/add/newRestaurent',
        method: 'GET',
        dataType: 'JSON',
        data: restaurentData,
        success: (response) => {
            console.log(response);
        }
    })
}