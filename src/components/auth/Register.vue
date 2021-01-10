<template>

	<!-- .prevent prevents refreshing the page when clicking the submit btn -->
	<form @submit.prevent="handleSubmit">

		<h3>Sign up</h3>

		<div class="form-group">

			<label>First Name</label>
			<input type="text" class="form-control" v-model="first_name" placeholder="First Name">

		</div>

		<div class="form-group">

			<label>Last Name</label>
			<input type="text" class="form-control" v-model="last_name" placeholder="Last Name">

		</div>

		<div class="form-group">

			<label>Email</label>
			<input type="email" class="form-control" v-model="email" placeholder="Email">

		</div>

		<div class="form-group">

			<label>Password</label>
			<input type="password" class="form-control" v-model="password" placeholder="Password">

		</div>

		<div class="form-group">

			<label>Confirm Password</label>
			<input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password">

		</div>

		<button class="btn btn-primary btn-block">Sign up</button>

	</form>

</template>

<script>

	import axios from 'axios'

	export default {
		name: 'Register',

		data() {
			return {
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				password_confirm: ''
			}
		},

		// "name": "caina",
		// "email": "cainajuca2@gmail.com",
		// "password": "123456",
		// "birthDate": "04/03/1997"

		methods: {
			handleSubmit: function() {
				// const data = {
				// 	first_name: this.first_name,
				// 	last_name: this.last_name,
				// 	email: this.email,
				// 	password: this.password,
				// 	password_confirm: this.password_confirm,
				// };
				const data = {
					name: this.first_name,
					email: this.email,
					password: this.password,
					birthDate: "04/03/1997"
				};
				
				console.log(data);
				// frontend na porta 8080
				// backend na porta 3000
				// vai dar erro no password confirm
				axios.post('http://localhost:3000/auth/register', data)
					.then(
						res => {
							console.log(res)
						}
					).catch(
						err => {
							console.log(err)
						}
					);
			}
		}
	}
</script>

<style>

</style>