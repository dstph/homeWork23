Vue.component('part',{
	props: ['color'],
	// computed: {
	// 	style(){
	// 		return `height: ${this.$el.children[1].value}`
	// 	}
	// },
	methods: {
		onChange(){
			console.log(this.$el.children[1].value)
		}
	},
	template: `<div class="example">
				<div  class="slider" :class="color"></div>
				<input @change="onChange" type="range" min="100" max="300">
			</div>`
})
let equlaizer = new Vue({
	el: '#app',
	data: {
	
	}


})
