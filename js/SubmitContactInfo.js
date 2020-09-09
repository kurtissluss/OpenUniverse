// JavaScript Document
console.log("Vue Entered");

var submit = new Vue({
	el: '#contactApp',
	
	data: {
		firstName: "",
		lastName: "",
		contactEmail: ""
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
					submit.firstName = 'Test';
					submit.lastName = '';
					submit.contactEmail = '';
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