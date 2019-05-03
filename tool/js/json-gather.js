(function(){

	function _createCard(id, name, type, cclass, rare, power, hp, atk, sp, def, spd){
		//Create Entries in the Table
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/equip_thumb/weapon_icon_' + id + '.png" height="75px" width="75px" /><div style="display:none">' + id + '</td>'
					+'		<td class="text-left"><a href= "view/' + id + '" data-toggle="modal" data-target="#newModal"><strong>' + name + '</a></td>'
					+'		<td class="text-center">' + type + '</td>'
					+'		<td class="text-center">' + power + '</td>'
					+'		<td class="text-center">' + hp + '</td>'
					+'		<td class="text-center">' + atk + '</td>'
					+'		<td class="text-center">' + def + '</td>'
					+'		<td class="text-center">' + sp + '</td>'
					+'		<td class="text-center">' + spd + '</td>'																																											
					+'</tr>';
		return model;
	}
	
	$(document).ready(function(){
		
		// --------------------------------------------- CARDS
		
		var content = ''; 
		
		var tools = []; // Tool's Info
		var name = '';	// Tool Name
		var type = '';	// Tool Type
		var hp;		// Tool HP
		var atk;		// Tool ATK
		var def;		// Tool DEF
		var sp;		// Tool SP
		var spd;		// Tool SPD
		var power;	// Tool Power
		var id;		// Tool ID	
		
		for(var i in window.equip){
			//Current Character
			var tool = window.equip[i];
			//Add Info
			id = tool['id'];
			name = tool['name'];
			type = tool["type"];
			power = tool['power'];
			hp = tool["hp"];
			atk = tool["atk"];
			sp = tool["sp"];			
			def = tool["def"];
			spd = tool["spd"];

			//Creates Entry
			if(tools.indexOf(support[0]) == -1){ // Verifies Character ID
				tools.push(unit[0]); // Adds Tool in the array			
				content += _createCard(id, name, type, power, hp, atk, sp, def, spd); // Call the function adding the card order
			}
		}
		
		$('.cards').html(content);
		
		// --------------------------------------------- CLICK
		
		// Creates Modal
		$('.clickable').click(function(e){
		   // Select the <a href> and extract the link's ID
		   e = $(this).find('a[href*="view"]');
		   if(e != null){
				var id = parseInt(e.attr('href').split('view/').pop());
				var thumb = $(this).find('img').attr('src');
				var tool = [];
				var cid = 0;
				// Look for the unit's information
				for(i in window.equip){
					i = window.equip[i];
					// Verifies the unit's ID
					if(i["cardId"]==id) {
						/*
							Se for o id que procuramos, salva o index 0 pra ser o 'five' e o index 1 para ser o 'six', para isso
							  ▼ ID do card                                                 Raridade, 0 para 'five' e um para 'six' ▼ 
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 0]
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 1]
									  ▲ ------------------ O que cada dessas variaveis significam? ----------------------------▲
						*/
						tool[i[i.length-1]] = i;
					}
					cid = id;
				}
				// Crio um objeto com os dois tipos de cards
				var cards = {
					"five":{
					  	tool:equip[0]
    				},
					"six":{
				 		tool:support[0]
					}
				}
				_buildCardModal(id, thumb, cards, cid);
		   }
		});
		
		
	});

	function _buildCardModal(id, thumb, cards, cid){
		console.log(cid);
		for(var i in window.equip){
			if(id == window.equip[i]['id']){
				$('#icon-tool').attr('src', '../common/assets/equip_thumb/weapon_icon_' + id + '.png'); 
				$('#name-tool').text(window.equip[i]['name']);

				$('#card-art').attr('src', '../common/assets/equips/weapon_' + id + '.png');

				var seteffect = '';
				var setdesc = '';
				var setname = '';
				var setimg = '';
				var x;
				for (x > 1; x <= 5; x++){
				setdesc = 'setdesc' + x;
                    			setname = 'setname' + x;
                    			setimg = 'setimg' + x;
					if(window.equip[i][set] != ""){
							seteffect += '<div class="base-ability">' 
								  +  	'<div class="description">'
						                  +	'<div class="asimg"><img src="../common/assets/autoskill/' + window.equip[i][setimg] + '.png"></div>'
								  +			'<h3 id="ability' + x + '">' + window.equip[i][setname] + '</h3>'
								  +			'<h4 id="ability' + x + '">' + 'x' + ' item bonus' + '</h4>'
								  +			'<p id="ability' + x + '">' + window.equip[i][setdesc] + '</p>'
								  +		'</div>'
								  +	 '</div>';
					}
				}
document.getElementById("set-effect").innerHTML = seteffect;

				$('#cename').text(window.equip[i]['cename']); 
				$('#ce').html(window.equip[i]['ce']); 
				$('#ceimg').attr('src', '../common/assets/autoskill/' + window.equip[i]['ceimg'] + '.png');
				
				$('#power').text(window.equip[i]['power']); 
				$('#hp').text(window.equip[i]['hp']);
				$('#atk').text(window.equipt[i]['atk']);
				$('#sp').text(window.equip[i]['sp']);
				$('#def').text(window.equip[i]['def']);
				$('#spd').text(window.support[i]['spd']);
				$('#maxpower').text(window.equip[i]['maxpower']); 
				$('#maxhp').text(window.equip[i]['maxhp']);
				$('#maxatk').text(window.equip[i]['maxatk']);
				$('#maxsp').text(window.equip[i]['maxsp']);
				$('#maxdef').text(window.equip[i]['maxdef']);
				$('#maxspd').text(window.equip[i]['maxspd']);
		 	}
		}
	}

	$('#card-modal').modal();

})();
