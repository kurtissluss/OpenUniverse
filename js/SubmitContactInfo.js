// JavaScript Document
var submit = new Vue({
	el: '#contactApp',
	
	data: {
		firstName: "",
		lastName: "",
		contactEmail: ""
	},
	
	console.log("Vue Entered");
	
	methods: {
		submitEmail: function () {
			if(this.contactEmail != ''){
				axios.post('ajaxfile.php', {
					request: 1,
					firstName: this.firstName,
					lastName: this.lastName,
					contactEmail: this.contactEmail;
					console.log("Posted")
				})
				.then(function (response) {
					submit.firstName = '';
					submit.lastName = '';
					submit.contactEmail = '';
					console.log("Cleared")
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