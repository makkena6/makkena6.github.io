(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
	
	    tableau.log('Getting ready to generate schema');
		var cols = [
		{id: "name", dataType : tableau.dataTypeEnum.string},
		{id: "email", dataType : tableau.dataTypeEnum.string}
		];
		
		var tableInfo = {
            id : "TableInfo",
            columns : cols
        };
		tableau.log('in get scehma callback');
		schemaCallback([tableInfo]);
    };

    myConnector.getData = function (table, doneCallback) {
		tableau.log('Getting ready to create table data');
		tableData = []; 
		dummyApiResponse = [ { name: "Roger Federer", email_id: "roger@federer.com"}, { name: "Nadal R", email_id : "nada@r.com"} ];
		tableau.log('Done with table data');
		
		for(var i=0;i<dummyApiResponse.length; i++){
			tableData.push({"name":dummyApiResponse[i].name,  "email": dummyApiResponse[i].email_id});
		}	
	    tableau.log('Pushed to table data array');
		table.appendRows(tableData);
		tableau.log('Added rows to table');
		doneCallback();
    };

    tableau.registerConnector(myConnector);
	
})();
$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Roger";
        tableau.submit();
    });
});