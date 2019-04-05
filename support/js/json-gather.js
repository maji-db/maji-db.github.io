(function(){

	function _createCard(id, name, type, cclass, rare, power, hp, atk, sp, def, spd){
		//Create Entries in the Table
		var model = '<tr class="clickable" data-toggle="modal" data-target="#newModal">'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/thumb/ch_icon_' + id + '.png" height="75px" width="75px" /><div style="display:none">' + id + '</td>'
					+'		<td class="text-left"><a href= "view/' + id + '" data-toggle="modal" data-target="#newModal"><strong>' + name + '</a></td>'
					+'		<td class="text-center"><img id="icon-table" src="../common/assets/type/' + type + '.png"height="50px" width="50px" /><div style="display:none">' + type + '</td>'
					+'		<td class="text-center">' + cclass + '</td>'
					+'		<td class="text-center">' + rare + '</td>'
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
		
		var units = []; // Character's Info
		var name = '';	// Charavter Name
		var type = '';	// Character Type
		var hp;			// Character HP
		var atk;		// Character ATK
		var def;		// Character DEF
		var sp;			// Character SP
		var spd;		// Character SPD
		var rare;		// Character Rarity
		var power;		// Character Power
		var id;			// Character ID
		var cclass;		// Character class		
		
		for(var i in window.support){
			//Current Character
			var unit = window.support[i];
			//Add Info
			id = unit['id'];
			name = unit['name'];
			rare = unit["rare"];
			type = unit["type"];
			cclass = unit['class'];
			power = unit['power'];
			hp = unit["hp"];
			atk = unit["atk"];
			sp = unit["sp"];			
			def = unit["def"];
			spd = unit["spd"];

			//Creates Entry
			if(units.indexOf(support[0]) == -1){ // Verifies Character ID
				units.push(unit[0]); // Adds Character in the array			
				content += _createCard(id, name, type, cclass, rare, power, hp, atk, sp, def, spd); // chama a função passando os dados do card
			}
		}
		
		$('.cards').html(content);
		
		// --------------------------------------------- CLICK
		
		// Creates Modal
		$('.clickable').click(function(e){
		   // Seleciono o e <a href> e extraio o ID do link
		   e = $(this).find('a[href*="view"]');
		   if(e != null){
				var id = parseInt(e.attr('href').split('view/').pop());
				var thumb = $(this).find('img').attr('src');
				var unit = [];
				var cid = 0;
				// Procura pelas informações da unidade
				for(i in window.support){
					i = window.support[i];
					// Verifica o ID da unidade
					if(i["cardId"]==id) {
						/*
							Se for o id que procuramos, salva o index 0 pra ser o 'five' e o index 1 para ser o 'six', para isso
							  ▼ ID do card                                                 Raridade, 0 para 'five' e um para 'six' ▼ 
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 0]
							[579, "Madara Uchiha, End of the World", "Body", "None", 6, 35, 14789, 17589, 14605, 163, 16, 16, 147, 1]
									  ▲ ------------------ O que cada dessas variaveis significam? ----------------------------▲
						*/
						unit[i[i.length-1]] = i;
					}
					cid = id;
				}
				// Crio um objeto com os dois tipos de cards
				var cards = {
					"five":{
					  	unit:support[0]
    				},
					"six":{
				 		unit:support[0]
					}
				}
				_buildCardModal(id, thumb, cards, cid);
		   }
		});
		
		
	});

	function _buildCardModal(id, thumb, cards, cid){
		console.log(cid);
		for(var i in window.support){
			if(id == window.support[i]['id']){
				$('#icon-unit').attr('src', '../common/assets/thumb/ch_icon_' + id + '.png'); 
				$('#name-unit').text(window.support[i]['name']);

				$('#card-art').attr('src', '../common/assets/full/ch_' + id + '.png');
				$('#skillname').text(window.support[i]['skillname']); 
				$('#skill').html(window.support[i]['skill']); 
				$('#skillimg').attr('src', '../common/assets/autoskill/' + window.support[i]['skillimg'] + '.png');
				
				$('#power').text(window.support[i]['power']); 
				$('#hp').text(window.support[i]['hp']);
				$('#atk').text(window.support[i]['atk']);
				$('#sp').text(window.support[i]['sp']);
				$('#def').text(window.support[i]['def']);
				$('#spd').text(window.support[i]['spd']);
				$('#maxpower').text(window.support[i]['maxpower']); 
				$('#maxhp').text(window.support[i]['maxhp']);
				$('#maxatk').text(window.support[i]['maxatk']);
				$('#maxsp').text(window.support[i]['maxsp']);
				$('#maxdef').text(window.support[i]['maxdef']);
				$('#maxspd').text(window.support[i]['maxspd']);
		 	}
		}
	}

	$('#card-modal').modal();

})();
