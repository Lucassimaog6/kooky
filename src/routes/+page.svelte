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
	const storageRef = ref(storage);
	const storageImagesRef = ref(storage, 'images');
	listAll(storageImagesRef).then((res) => {
		res.items.forEach((item) => {
			getDownloadURL(item).then((url) => {
				urlImages = [...urlImages, url];
			});
		});
	});

	function upload(e) {
		const file = e.target.files[0];
		console.log(file.name + v4());
		const refImage = ref(storage, `images/${file.name + v4()}`);
		uploadBytes(refImage, file).then(() => {
			console.log('upload');
		});
	}
</script>

<header>
	<h1>Kooky, o coelho mais lindo</h1>
	<input
		type="file"
		on:change={(e) => {
			upload(e);
		}}
	/>
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
		margin-bottom: 2rem;
		border-radius: 1rem;
	}
	@media screen and (max-width: 1000px) {
		main {
			column-count: 2;
		}
	}
	@media screen and (max-width: 600px) {
		main {
			column-count: 1;
		}
	}
</style>
