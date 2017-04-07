var helper = {

	sendMail : function(config, cb){

		// {
	 //        to: [{email: 'shahramfarsyabi@gmail.com', name: 'arta farsyabi test'}],
	 //        from_email: 'shahram@toiran.com',
	 //        subject: "Hey, what's up?",
	 //        text: "Hello, I sent this message using mandrill."
	 //    }
	    
		return mandrill('/messages/send', {
		    message: config
		}, function(error, response)
		{
		    //uh oh, there was an error
		    if (error) console.log( JSON.stringify(error) );

		    //everything's good, lets see what mandrill said
		    else console.log(response);

		    cb(error, response);
		});		
	}
}

module.exports = helper;