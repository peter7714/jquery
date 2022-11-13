$(function (){
    $('#movie-form').on('submit', function(e){
        e.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        $('#movies').append(newMovieRow(title, rating));
        $('#movie-form').trigger('reset');
    })
    $('#movies').on('click', '.review-btn', function(e){
        $(e.target).closest("tr").remove();
    })

    function newMovieRow(title, rating){
        return `
            <tr>
                <td>${title} : </td>
                <td>${rating}</td>
                <td>
                    <button class="review-btn">Delete</button>
                </td>
            </tr>
    `;
    }
});