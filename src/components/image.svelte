<script>
	export let src;
	function downloadURI() {
		fetch(src)
			.then((response) => response.blob())
			.then((blob) => {
				const link = document.createElement('a');
				link.href = URL.createObjectURL(blob);
				link.download = 'KookyImage.jpg';
				link.click();
			})
			.catch(console.error);
	}
</script>

<article>
	<img {src} alt="Kooky" />
	<footer>
		<div on:click={downloadURI} class="dowload">Baixar</div>
	</footer>
</article>

<style>
	img {
		max-width: 100%;
	}
	article {
		margin: 0.5rem 0;
		border-radius: 1rem;
		overflow: hidden;
		background-color: #282828;
	}
	footer {
		padding: 0.5rem;
		color: #fff;
		text-align: center;
	}
</style>
