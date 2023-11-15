const Level = require("./app/models/levelz");


//Level.findAll();

Level.findAll(
	).then(
		(levels)=>{
			for( let level of levels)
			{
				console.log(level.name);
			}
		}
	);