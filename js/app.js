function Klik(){
    const tbody = $(".tablicaPredmeta > tbody")[0];
    const tr = $("<tr></tr>");

    var inp1 = $("#input1").val();
    var inp2 = $("#input2").val();
    var inp3 = $("#input3").val();
    
    console.log(inp1);

    $(tr).appendTo(tbody);
    $("<td></td>").appendTo(tr).text(inp1);
    $("<td></td>").appendTo(tr).text(inp2);
    $("<td></td>").appendTo(tr).text(inp3);

}

