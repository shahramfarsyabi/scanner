<template>
	<!-- This is the modal -->
	<div id="editModal" uk-modal>
		<div class="uk-modal-dialog uk-modal-body">
			<form class="uk-grid-small" uk-grid method="PUT" id="formEditProduct" v-on:submit.prevent="submit" :action="'/admin/products/'+product._id">
				<div class="uk-width-1-1">
					<label class="uk-form-label" for="form-stacked-text">Product Name</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" :value="product.title" placeholder="" name="title">
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label" for="form-stacked-text">Barcode</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" :value="product.barcode" placeholder="" name="barcode">
					</div>
				</div>
				<div class="uk-width-1-2@s">
					<label class="uk-form-label" for="form-stacked-text">Price</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" :value="product.price" placeholder="" name="price">
					</div>
				</div>
				<div class="uk-width-1-2@s">
					<label class="uk-form-label" for="form-stacked-text">Discount</label>
					<div class="uk-form-controls">
						<input class="uk-input" id="form-stacked-text" type="text" :value="product.discount" placeholder="" name="discount">
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label" for="form-stacked-text">Description</label>
					<div class="uk-form-controls">
						<textarea class="uk-textarea" rows="5" placeholder="" name="description">{{ product.description }}</textarea>
					</div>
				</div>
				<div class="uk-width-1-1">
					<div class="uk-form-label">Status</div>
					<div class="uk-form-controls">
						<label><input class="uk-radio" type="radio" :checked="product.status ? true : false" name="status" value="1"> Publish</label><br>
						<label><input class="uk-radio" type="radio" :checked="product.status ? false : true" name="status" value="0"> Unpublished</label>
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
		props : ['product'],
		data : function(){
			return {

			}
		},

		computed : {

		}	
	}
</script>