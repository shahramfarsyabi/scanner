<template>
	<div class="products">
		<button class="uk-button uk-button-default" uk-toggle="target: #createModal" type="button">Add Product</button>
		<br />
		<table class="uk-table uk-table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Barcode</th>
					<th>Price</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(product,index) in products">
					<td>{{ (index+1) }}</td>
					<td>{{ product.title }}</td>
					<td>{{ product.barcode }}</td>
					<td>{{ product.price }}</td>
					<td>{{ product.status ? 'active' : 'deactive' }}</td>
					<td>
						<a v-on:click.prevent="edit(product, index)" class="uk-button uk-button-default uk-button-small" uk-toggle="target: #editModal">Edit</a>
						<a v-on:click.prevent="destroy(product, index)" class="uk-button uk-button-default uk-button-small">Delete</a>
					</td>
				</tr>
			</tbody>
		</table>	
		<modal-edit-product :product="activeProduct"></modal-edit-product>	
		<modal-create-product></modal-create-product>	
	</div>
</template>

<script>

import modalEditProduct from './edit.vue';
import modalCreateProduct from './create.vue';

export default {
  name: 'products',
  data () {
    return {
      products : [{
      	_id : 987654321,
      	title : "Test Product",
      	barcode : "01234567890",
      	price : 100,
      	discount : 1,
      	status : true,
      	description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores officiis modi, obcaecati earum vitae, molestiae necessitatibus optio sapiente, illo pariatur cumque odit. Pariatur vitae ex consectetur debitis id, cupiditate velit quod. Unde in cumque ad nihil excepturi, beatae at quis facere, fugiat non odio expedita, rerum placeat. Nostrum rem deserunt, repellendus ut dicta eligendi expedita, a facilis minus, aut quis esse eius est aliquid fugit temporibus. Facere recusandae cum magnam provident numquam officiis aspernatur eveniet iusto nesciunt, incidunt enim aut, error officia odit temporibus assumenda debitis doloribus libero veritatis. Esse ipsam provident ipsum recusandae consectetur unde, numquam fugit porro ullam."
      }],
      activeProduct : {},
    }
  },

  components : {
  	modalCreateProduct,
  	modalEditProduct
  },

  methods : {
  	edit : function(product, index){
  		product.index = index;
  		console.log(product);
  		this.activeProduct = product;
  	},
  	destroy : function(product, index){

  		var self = this;
  		var x = confirm("Are you sure ?")

  		if(x){
  			$.ajax({
  				method : 'DELETE',
  				url : baseUrl+"admin/products/"+product._id,
  				success : function(result){
  					self.products.splice(index, 1);
  				}
  			})
  		}
  	}
  },

  created : function(){
	var self = this;
	this.$nextTick(function(){
		$.ajax({
			method : "GET",
			url : baseUrl+"admin/products",
			dataType : "json",
			success : function(result){
				console.log(result)
				self.products = result;
			}
		});
	});

	this.$on('onCreate', function(product){
		this.products.push(product);
	})

	this.$on('onUpdate', function(product){
		this.$set(this.products, this.activeProduct.index, product);
	})	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
