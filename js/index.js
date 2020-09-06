Vue.component('part',{
	data(){
		return{
			height: '100'
		}
	},
	props: ['color'],
	computed: {
 				computedHeight: function () {
      				return this.height;
   				}
	},
	methods: {
		onChange(){
			console.log(this.$el.children[1].value);
			this.height = this.$el.children[1].value;
			computedHeight();
		}
	},
	template: `<div class="example">
				<div  v-bind:style="{ height: computedHeight + 'px'}" class="slider" :class="color"></div>
				<input @change="onChange" type="range" min="100" max="300">
			</div>`
})
let equlaizer = new Vue({
	el: '#app',
})
