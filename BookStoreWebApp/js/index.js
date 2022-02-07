$(document).ready(function(){
	$.ajax({
		url: 'https://localhost:44380/api/books',
		success: function(data,status)
		{
		creattbodyByForLoop(data);
		},
		async:   true,
		dataType: 'json'
	}); 
});

function creattbodyByForLoop(data)
{
	for(var i=0; i<data.length;i++)
	{
		tbody += "<tr>";
		tbody += "<td>"+data[i]['id']+"</td>";
		tbody += "<td>"+data[i]['title']+"</td>";
		tbody += "<td>"+data[i]['description']+"</td>";
		tbody += "</tr>";
	}
	$('#tbody').html(tbody);
}