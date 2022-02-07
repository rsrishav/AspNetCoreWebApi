$(function(){
        $("#addbook_form").on("submit", function(event) {
            event.preventDefault();

            var formData = {
                title: $('input[id=title]').val(),
                description: $('input[id=description]').val()
            };
            console.log(JSON.stringify(formData));

            $.ajax({
                url: "https://localhost:44380/api/books",
                type: "post",
				dataType: 'json',
				contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function(d) {
                    alert("Data Saved.");
					$('input[id=title]').val("");
					$('input[id=description]').val("");
                }
            });
        });
    })