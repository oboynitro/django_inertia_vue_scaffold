<script setup>
defineProps({
	greetings: String,
});
</script>

<template>
	<div>
		<h1>Greetings: {{ greetings }}</h1>
	</div>
</template>
