$(document).ready( function () {
			var table = $('#myTable').DataTable({
				stateSave: true,
				responsive: true,
				 "columnDefs": [
			        {"className": "dt-left", "targets": [1]},
   			        {"className": "dt-center", "targets": "_all"}
			      ],
				columns: [
		            { 
		            	title: "Icon",
		            	responsivePriority: 1

		            },
		            { 
		            	title: "Name",
		            	responsivePriority: 2
		        	},
		            { title: "Type" },
		            { title: "Class" },
		            { 
		            	title: "Rarity",
		            	"visible": true,
		            	"searchable": true
		            },
		            { title: "Power" },
		            { title: "HP" },
		            { title: "ATK" },
		            { title: "SP" },
		            { title: "DEF" },
		            { 
		            	title: "SPD",
		            	"visible": true,
		            	"searchable": true
		            }
		            
		        ],
      			 responsive: true
			});

	 });
				
