var _ = require('underscore');

var Mixin = {
  methods: {
    submit: function (e) {
    	var self = this;
    	var form = $(e.target);
		$.ajax({
			method : form.attr('method'),
			url : form.attr('action'),
			data : form.serialize(),
			success : function(result){
				if(_.isObject(result)){

					if(_.contains(_.keys(result), 'event') ){	
						switch(result.event){
							case  "create":
								self.$parent.$emit('onCreate', result.item);
								UIkit.notification({
								    message: 'Has been created',
								    status: 'primary',
								    pos: 'bottom-center',
								    timeout: 5000
								});								
							break;

							case "update":
								self.$parent.$emit('onUpdate', result.item);
								UIkit.notification({
								    message: 'Has been updated',
								    status: 'primary',
								    pos: 'bottom-center',
								    timeout: 5000
								});								
							break;

							case "send_invitation":
								UIkit.modal('#inviteModal').hide().then(function(){								
									UIkit.notification({
									    message: 'Invitation sent succuessfully',
									    status: 'primary',
									    pos: 'bottom-center',
									    timeout: 5000
									}); 					                
								});
							break;
						}
					}
				}
			},

			error : function(xhr){
				console.log(xhr)
			}
		})
    }
  }
}

module.exports = Mixin