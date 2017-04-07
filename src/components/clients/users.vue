<template>
	<div class="clients">
		<button class="uk-button uk-button-default" uk-toggle="target: #inviteModal" type="button">Invite</button>
		<br />
		<table class="uk-table uk-table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>Email</th>
					<th>firstName</th>
					<th>lastName</th>
					<th>Role</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(client,index) in clients">
					<td>{{ (index+1) }}</td>
					<td>{{ client.email }}</td>
					<td>{{ client.firstName }}</td>
					<td>{{ client.lastName }}</td>
					<td>{{ client.admin ? 'Admin' : 'User' }}</td>
					<td>{{ client.status ? 'active' : 'deactive' }}</td>
					<td>
						<a v-on:click.prevent="changeStatus(client, index)" class="uk-button uk-button-default uk-button-small">Status</a>
					</td>
				</tr>
			</tbody>
		</table>	
		<modal-invite></modal-invite>	
	</div>
</template>

<script>


import modalInvite from './invite.vue';
var _ = require('underscore');

export default {
  name: 'clients',
  data () {
    return {
      clients : [],
      activeProduct : {},
    }
  },

  components : {
	modalInvite
  },

  methods : {
  	changeStatus : function(client, index){
  		var status;

  		switch(client.status){
  			case true:
  				status = false;
  			break;

  			case false:
  				status = true;
  			break;
  		}

  		this.$set(this.clients, index, _.extend(
  			client, 
  			{
  				status : status
  			}
  		));

  		$.ajax({
  			method : "PUT",
  			url : baseUrl+'admin/users/'+client._id+'/status',
  			data : {
  				status : status
  			},
  			dataType : 'json',
  			success : function(result){
				UIkit.notification({
				    message: 'Status updated',
				    status: 'success',
				    pos: 'bottom-center',
				    timeout: 5000
				});  				
  			}
  		})
  	}
  },

  created : function(){
	var self = this;
	this.$nextTick(function(){
		$.ajax({
			method : "GET",
			url : baseUrl+"admin/users",
			dataType : "json",
			success : function(result){
				console.log(result)
				self.clients = result;
			}
		});
	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
