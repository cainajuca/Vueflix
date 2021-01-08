<template>
  
	<div>

		<h1>{{user.name}}</h1>

	</div>

</template>

<script>

import Profile from './components/Profile'

export default {

    data() {
        return {
            profiles: []
        }
    },

    components: {
        Profile
    },

    props: {
        user: Object
    }


}
</script>

<style>

</style>