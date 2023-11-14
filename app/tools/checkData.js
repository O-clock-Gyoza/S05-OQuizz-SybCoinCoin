class CheckData
{

    static String(value) {

        if(typeof value !== 'string') {
            throw Error(" must be a string!");
            // on "lève" une erreur => ça arrête tout !
        }

        return value;

    }

    static Int(value)
	{
		if(!isNaN(parseInt(value, 10))) {
			throw Error(" must be an integer!");
		}
		return value;
	}
    

}

module.exports = CheckData;