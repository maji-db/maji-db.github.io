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

			var typeArr = [];
			var rareArr = [];
			var classArr = [];

			table
			.column(0)
		    .search(0, true, false)
		    .draw();

		    //Type
		    //Attribute
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
				 	.column(2)
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
				 	.column(2)
			     	.search(type, true, false)
			     	.draw();
		   	   }
			 });

		  	 $("#filter-rarity").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < rareArr.length; x++){
						if(rareArr[x] == remove){
							location = x;
						}
					}
					rareArr.splice(location, 1);
					
					var rare = "";
					//Create Tags
					for(var x = 0; x < rareArr.length; x++){
						if(!rare){
							rare += rareArr[x];
						}
						else{
							rare += "|";
							rare += rareArr[x];
						}
					}
					table
				 	.column(4)
			     	.search(rare, true, false)
			     	.draw();
				}

				else{
					$(this).attr('class', "list-group-item active");
					rareArr.push($(this).attr('id'));

					var rare = "";
					//Create Tags
					for(var x = 0; x < rareArr.length; x++){
						if(!rare){
							rare += rareArr[x];
						}
						else{
							rare += "|";
							rare += rareArr[x];
						}
					}
					table
				 	.column(4)
			     	.search(rare, true, false)
			     	.draw();
		   	   }
			 });

		  	$("#filter-class").on("click", ".list-group-item", function(e) {
				e.preventDefault();
				if($(this).attr('class') == 'list-group-item active'){
					$(this).attr('class', "list-group-item");

					//Remove Filter
					var remove = $(this).attr('id');

					var location;
					for(var x = 0; x < classArr.length; x++){
						if(classArr[x] == remove){
							location = x;
						}
					}
					classArr.splice(location, 1);
					
					var cclass = "";
					//Create Tags
					for(var x = 0; x < classArr.length; x++){
						if(!cclass){
							cclass += classArr[x];
						}
						else{
							cclass += "|";
							cclass += classArr[x];
						}
					}
					table
				 	.column(3)
			     	.search(cclass, true, false)
			     	.draw();
				}

				else{
					$(this).attr('class', "list-group-item active");
					classArr.push($(this).attr('id'));

					var cclass = "";
					//Create Tags
					for(var x = 0; x < classArr.length; x++){
						if(!cclass){
							cclass += classArr[x];
						}
						else{
							cclass += "|";
							cclass += classArr[x];
						}
					}
					table
				 	.column(3)
			     	.search(cclass, true, false)
			     	.draw();
		   	   }
			 });

		  	$("#reset-filter").on("click", function(e) {
				e.preventDefault();
				$("#1").attr('class', "list-group-item");
				$("#2").attr('class', "list-group-item");
				$("#3").attr('class', "list-group-item");
				$("#4").attr('class', "list-group-item");
				$("#5").attr('class', "list-group-item");
				$("#6").attr('class', "list-group-item");
				$("#heart").attr('class', "list-group-item");
				$("#dex").attr('class', "list-group-item");
				$("#body").attr('class', "list-group-item");
				$("#yang").attr('class', "list-group-item");
				$("#yin").attr('class', "list-group-item");
				$("#ATK").attr('class', "list-group-item");
				$("#SP").attr('class', "list-group-item");
				$("#DEF").attr('class', "list-group-item");
				
				for(var x = 0; x <= 10; x++){
					table
				 	.column(x)
			     	.search("", true, false)
			     	.draw();	
		     	}
			 });
	 });
				
