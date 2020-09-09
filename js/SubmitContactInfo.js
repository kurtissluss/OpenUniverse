// JavaScript Document
var submit = new Vue({
	el: '#contactApp',
	
	data: {
		firstName: '',
		lastName: '',
		contactEmail: ''
	},
	
	mounted: function () {
		console.log('hello from vue')
		this.submitEmail()
	},
		
	methods: {
		submitEmail: function () {
			if(this.contactEmail != ''){
				axios.post('ajaxfile.php', {
					request: 1,
					firstName: this.firstName,
					lastName: this.lastName,
					contactEmail: this.contactEmail,
				})
				.then(function (response) {
					submit.firstName = '';
					submit.lastName = '';
					submit.contactEmail = '';
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
			}else{
				alert('Please add your email.')
			}
		}
	}
})