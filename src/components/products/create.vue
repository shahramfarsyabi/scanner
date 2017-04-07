<template>
	<!-- This is the modal -->
	<div id="createModal" uk-modal>
		<div class="uk-modal-dialog uk-modal-body">
			<form class="uk-grid-small" uk-grid method="POST" id="formCreateProduct" v-on:submit.prevent="submit" :action="'/admin/products'">
				<div class="uk-width-1-1">
					<label class="uk-form-label" for="form-stacked-text">Product Name</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" placeholder="" name="title">
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label" for="form-stacked-text">Barcode</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" placeholder="" name="barcode">
					</div>
				</div>
				<div class="uk-width-1-2@s">
					<label class="uk-form-label" for="form-stacked-text">Price</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" placeholder="" name="price">
					</div>
				</div>
				<div class="uk-width-1-2@s">
					<label class="uk-form-label" for="form-stacked-text">Discount</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" placeholder="" name="discount">
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label" for="form-stacked-text">Description</label>
					<div class="uk-form-controls">
						<textarea class="uk-textarea" rows="5" placeholder="" name="description"></textarea>
					</div>
				</div>
				<div class="uk-width-1-1">
					<div class="uk-form-label">Status</div>
					<div class="uk-form-controls">
						<label><input class="uk-radio" type="radio" checked name="status" value="1"> Publish</label><br>
						<label><input class="uk-radio" type="radio" name="status" value="0"> Unpublished</label>
					</div>
				</div>
				<button class="uk-button uk-button-default uk-modal-close" type="button">Close</button>
				<input type="submit" value="Submit" class="uk-button uk-button-default"  />
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

		computed : {

		}	
	}
</script>