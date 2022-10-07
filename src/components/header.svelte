<script>
	import Icon from '@iconify/svelte';
	export let title;
</script>

<header>
	<h1>{title}</h1>
	<input id="file" type="file" multiple on:change />
	<label for="file"
		><Icon icon="ic:round-add-photo-alternate" width="1.5rem" /> Adicionar fotos!</label
	>
</header>

<style>
	input {
		display: none;
	}
	label {
		display: flex;
		align-items: center;
		padding: 1rem;
		background-color: #ddd;
		border-radius: 1rem;
		font-size: 1.1rem;
		transition: scale 200ms, background-color 200ms;
	}
	label:hover {
		scale: 1.1;
		background-color: #bbb;
	}
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		margin: 2rem 0;
		font-size: clamp(1.5rem, 4vw, 3rem);
	}
</style>
