<template>
	<div class="login-page">
		<div class="card">
			<div class="card-header">
				Login
			</div>

			<div class="card-body">

				<form action="#" @submit.prevent="login">

					<div class="form-group">
						<input
							required
							type="email"
							v-model="form.email"
							class="form-control"
							placeholder="E-mail"
						>
					</div>

					<div class="form-group">
						<input
							required
							type="password"
							v-model="form.password"
							class="form-control"
							placeholder="Senha"
						>
					</div>

					<button type="submit" class="btn-submit">Entrar</button>
					<!-- <button class="btn btn-primary w-100">
						Entrar
					</button> -->

				</form>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				email: '',
				password: ''
			}
		}
	},

	methods: {
		login: function() {
			console.log("Login realizado com sucesso!");
			console.log(this.form);
		}
	}
}
</script>

<style>
/* usar html e css do login baseado em card da bulma */
.login-page {
	height: 100vh;
	max-width: 170vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.card {
	width: 30%;
}

</style>