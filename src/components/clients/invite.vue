<template>
	<!-- This is the modal -->
	<div id="inviteModal" uk-modal>
		<div class="uk-modal-dialog uk-modal-body">
			<form class="uk-grid-small" uk-grid method="POST" id="formInvite" v-on:submit.prevent="submit" action="/admin/invite/">

				<div class="uk-width-1-1">
					<button class="uk-button" v-on:click.prevent="addBox" type="button">
						<span class="uk-margin-small-right" uk-icon="icon: plus"></span>
					</button>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label" for="form-stacked-text">Email</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" placeholder="" name="email[]">
					</div>
				</div>

				<div id="addBox" class="uk-width-1-1"></div>
				
				<div class="uk-width-1-1">
					<button class="uk-button uk-button-default uk-modal-close" type="button">Close</button>
					<input type="submit" value="Send Invitation" class="uk-button uk-button-default"  />
				</div>
			</form>			
		</div>
	</div>	
</template>

<script type="text/javascript">
	export default {
		mixins : [require('../../mixins.js')],
		data : function(){
			return {

			}
		},

		methods : {
			addBox : function(e){
				e.preventDefault();

				$('#addBox').append('<div class="uk-width-1-1 parentBox"><label class="uk-form-label" for="form-stacked-text">Email</label><div class="uk-form-controls"><input class="uk-input uk-width-2-3" id="form-stacked-text" type="text" placeholder="" name="email[]"><a class="uk-width-1-3 removeBox" uk-icon="icon: close; ratio: 1"></a></div></div>');

				$('.removeBox').on('click', function(){
					$(this).parents('.parentBox').detach();
				})
			},
		}	
	}
</script>