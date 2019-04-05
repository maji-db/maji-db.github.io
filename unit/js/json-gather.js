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
		
		for(var i in window.chara){
			//Current Character
			var unit = window.chara[i];
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
			if(units.indexOf(chara[0]) == -1){ // Verifies Character ID
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
				for(i in window.chara){
					i = window.chara[i];
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
					  	unit:chara[0]
    				},
					"six":{
				 		unit:chara[0]
					}
				}
				_buildCardModal(id, thumb, cards, cid);
		   }
		});
		
		
	});

	function _buildCardModal(id, thumb, cards, cid){
		console.log(cid);
		for(var i in window.chara){
			if(id == window.chara[i]['id']){
				$('#icon-unit').attr('src', '../common/assets/thumb/ch_icon_' + id + '.png'); 
				$('#name-unit').text(window.chara[i]['name']);

				$('#card-art').attr('src', '../common/assets/full/ch_' + id + '.png');
				$('#skill1img-five').attr('src', '../common/assets/skill/trick_' + window.chara[i]['skill1img'] + '.png');
				$('#skill1name-five').text(window.chara[i]['skill1name']); 
				$('#skill1-five').text(window.chara[i]['skill1']); 
				$('#skill1cost-five').text(window.chara[i]['skill1cd']);
				$('#skill2img-five').attr('src', '../common/assets/skill/trick_' + window.chara[i]['skill2img'] + '.png');
				$('#skill2name-five').text(window.chara[i]['skill2name']); 
				$('#skill2-five').text(window.chara[i]['skill2']); 
				$('#skill2cost-five').text(window.chara[i]['skill2cd']); 
				$('#leadname-five').text(window.chara[i]['lead']); 

				var autoskill = '';
				var auto = '';
				var autoname = '';
				var autoimg = '';
				var x;
				for (x = 1; x <= 5; x++){
					 auto = 'auto' + x;
                    			autoname = 'autoname' + x;
                    			autoimg = 'autoimg' + x;
					if(window.chara[i][auto] != ""){
							autoskill += '<div class="base-ability">' 
								  +  	'<div class="description">'
						                  +	'<div class="asimg"><img src="../common/assets/autoskill/' + window.chara[i][autoimg] + '.png"></div>'
								  +			'<h3 id="ability' + x + '">' + window.chara[i][autoname] + '</h3>'
								  +			'<p id="ability' + x + '">' + window.chara[i][auto] + '</p>'
								  +		'</div>'
								  +	 '</div>';
					}
				}
				document.getElementById("auto-skill").innerHTML = autoskill;

				$('#power').text(window.chara[i]['power']); 
				$('#hp').text(window.chara[i]['hp']);
				$('#atk').text(window.chara[i]['atk']);
				$('#sp').text(window.chara[i]['sp']);
				$('#def').text(window.chara[i]['def']);
				$('#spd').text(window.chara[i]['spd']);
				$('#maxpower').text(window.chara[i]['maxpower']); 
				$('#maxhp').text(window.chara[i]['maxhp']);
				$('#maxatk').text(window.chara[i]['maxatk']);
				$('#maxsp').text(window.chara[i]['maxsp']);
				$('#maxdef').text(window.chara[i]['maxdef']);
				$('#maxspd').text(window.chara[i]['maxspd']);
		 	}
		}
	}

	$('#card-modal').modal();

})();
