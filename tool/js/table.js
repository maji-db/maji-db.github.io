$(document).ready( function () {
			var table = $('#myTable').DataTable({
				stateSave: false,
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
		            { title: "Power" },
		            { title: "HP" },
		            { title: "ATK" },
		            { title: "DEF" },
		            { title: "SP" },
		            { 
		            	title: "SPD",
		            	"visible": true,
		            	"searchable": true
		            }
		            
		        ],
      			 responsive: true
			});

			var set1Arr = [];
			var set2Arr = [];
			var typeArr = [];

			table
			.column(0)
		    .search(0, true, false)
		    .draw();

		    //Type
		    //Attribute
		  	 $("#filter-set1").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < set1Arr.length; x++){
						if(set1Arr[x] == remove){
							location = x;
						}
					}
					set1Arr.splice(location, 1);
					
					var set1 = "";
					//Create Tags
					for(var x = 0; x < set1Arr.length; x++){
						if(!set1){
							set1 += set1Arr[x];
						}
						else{
							set1 += "|";
							set1 += set1Arr[x];
						}
					}
					table
				 	.column(2)
			     	.search(set1, true, false)
			     	.draw();
				}

				else{
					$(this).attr('class', "list-group-item active");
					set1Arr.push($(this).attr('id'));

					var type = "";
					//Create Tags
					for(var x = 0; x < set1Arr.length; x++){
						if(!set1){
							set1 += set1Arr[x];
						}
						else{
							set1 += "|";
							set1 += set1Arr[x];
						}
					}
					table
				 	.column(2)
			     	.search(set1, true, false)
			     	.draw();
		   	   }
			 });

		  	 $("#filter-set2").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < set2Arr.length; x++){
						if(set2Arr[x] == remove){
							location = x;
						}
					}
					set2Arr.splice(location, 1);
					
					var set2 = "";
					//Create Tags
					for(var x = 0; x < set2Arr.length; x++){
						if(!set2){
							set2 += set2Arr[x];
						}
						else{
							set2 += "|";
							set2 += set2Arr[x];
						}
					}
					table
				 	.column(4)
			     	.search(set2, true, false)
			     	.draw();
				}

				else{
					$(this).attr('class', "list-group-item active");
					set2Arr.push($(this).attr('id'));

					var set2 = "";
					//Create Tags
					for(var x = 0; x < set2Arr.length; x++){
						if(!set2){
							set2 += set2Arr[x];
						}
						else{
							set2 += "|";
							set2 += set2Arr[x];
						}
					}
					table
				 	.column(4)
			     	.search(set2, true, false)
			     	.draw();
		   	   }
			 });

		  	$("#filter-type").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < typeArr.length; x++){
						if(typeArr[x] == remove){
							location = x;
						}
					}
					typeArr.splice(location, 1);
					
					var type = "";
					//Create Tags
					for(var x = 0; x < typeArr.length; x++){
						if(!type){
							type += typeArr[x];
						}
						else{
							type += "|";
							type += typeArr[x];
						}
					}
					table
				 	.column(3)
			     	.search(type, true, false)
			     	.draw();
				}

				else{
					$(this).attr('class', "list-group-item active");
					typeArr.push($(this).attr('id'));

					var type = "";
					//Create Tags
					for(var x = 0; x < typeArr.length; x++){
						if(!type){
							type += typeArr[x];
						}
						else{
							type += "|";
							type += typeArr[x];
						}
					}
					table
				 	.column(3)
			     	.search(type, true, false)
			     	.draw();
		   	   }
});

		  	$("#reset-filter").on("click", function(e) {
				e.preventDefault();
				$("#sd7t").attr('class', "list-group-item");
				$("#3aod").attr('class', "list-group-item");
				$("#gds").attr('class', "list-group-item");
				$("#3d").attr('class', "list-group-item");
				$("#bbc").attr('class', "list-group-item");
				$("#sb").attr('class', "list-group-item");
				$("#rokut").attr('class', "list-group-item");
				$("#drit").attr('class', "list-group-item");
				$("#mashout").attr('class', "list-group-item");
				$("#uraot").attr('class', "list-group-item");
				$("#togut").attr('class', "list-group-item");
				$("#uramt").attr('class', "list-group-item");
				$("#WPN").attr('class', "list-group-item");
				$("#ARM").attr('class', "list-group-item");
				$("#ACC").attr('class', "list-group-item");
				
				for(var x = 0; x <= 10; x++){
					table
				 	.column(x)
			     	.search("", true, false)
			     	.draw();	
		     	}
			 });
});
