
function Klik(){
    const tbody = $(".tablicaPredmeta > tbody")[0];
    const tr = $("<tr></tr>");
    
    var inp1 = $("#input1").val();
    var inp2 = $("#input2").val();
    var inp3 = $("#input3").val();
    
    $(tr).appendTo(tbody);
    $("<td></td>").appendTo(tr).text(inp1);
    $("<td></td>").appendTo(tr).text(inp2);
    $("<td></td>").appendTo(tr).text(inp3);
    $("<td class='middle'><button class='btnObrisi' onclick='Obrisi()'>Obriši</button></td>").appendTo(tr);
    $("<td class='middle'><input type='checkbox' id='predmet' onclick='PolozenP()'></td>").appendTo(tr);
}

function Obrisi(){
	var td = event.target.parentNode;
	var tr = td.parentNode;
	tr.parentNode.removeChild(tr);
	
}

function PolozenP()
{
    var check = event.target;
	var td = event.target.parentNode;
	if (check.checked == true)
	{
		td.parentNode.setAttribute("style","background-color:rgb(221, 163, 208);");
	}
}