<script>
	import { initializeApp } from 'firebase/app';
	import { getStorage, ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
	import { v4 } from 'uuid';
	import Icon from '@iconify/svelte';
	const firebaseConfig = {
		apiKey: 'AIzaSyBCsm0fErlM01kq6w2DJqyQaPOH0T3xD2Q',
		authDomain: 'kooky-5b2df.firebaseapp.com',
		projectId: 'kooky-5b2df',
		storageBucket: 'kooky-5b2df.appspot.com',
		messagingSenderId: '213871871539',
		appId: '1:213871871539:web:03d336e326742965328546'
	};

	let urlImages = [];

	const app = initializeApp(firebaseConfig);
	const storage = getStorage(app);
	const storageImagesRef = ref(storage, 'images');
	listAll(storageImagesRef).then((res) => {
		res.items.forEach((item) => {
			getDownloadURL(item).then((url) => {
				urlImages = [...urlImages, url];
			});
		});
	});

	function upload(e) {
		const files = e.target.files;
		for(let i = 0; i < files.length; i++){
			const file = files[i]
			console.log(file.name + v4());
			const refImage = ref(storage, `images/${file.name + v4()}`);
			uploadBytes(refImage, file).then(() => {
				console.log('upload');
			});
		}
	}
</script>

<header>
	<h1>Kooky, o coelho mais lindo</h1>
	<input
		id="file"
		type="file"
		multiple
		on:change={(e) => {
			upload(e);
		}}
	/>
	<label for="file"
		><Icon icon="ic:round-add-photo-alternate" width="1.5rem" /> Adicionar fotos!</label
	>
</header>

<main>
	{#each urlImages as url}
		<img src={url} alt="kooky" />
	{/each}
</main>

<a id="back" href="#top">
	<Icon icon="akar-icons:arrow-up" color="black" width="40" height="40" />
</a>

<style>
	#back {
		position: fixed;
		background-color: white;
		padding: 1rem;
		bottom: 3rem;
		right: 3rem;
		display: grid;
		place-items: center;
		border-radius: 50%;
		border: 10px double #282828;
	}

	input {
		display: none;
	}
	label {
		margin-top: 1rem;
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
		padding-top: 1rem;
	}

	main {
		overflow-x: hidden;
		column-count: 3;
		column-gap: 2rem;
		margin: 2rem;
	}
	img {
		max-width: 100%;
		margin: 1rem 0;
		border-radius: 1rem;
	}
	@media screen and (max-width: 1000px) {
		main {
			column-count: 2;
		}
	}
	@media screen and (max-width: 600px) {
		h1{
			font-size: 1.5rem;
		}
		main {
			column-count: 1;
			margin: 1rem;
			column-gap: 0;
		}
	}
</style>
