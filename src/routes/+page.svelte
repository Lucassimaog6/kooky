<script>
	import { initializeApp } from 'firebase/app';
	import { getStorage, ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
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
	listAll(storageRef).then((res) => {
		res.items.forEach((item) => {
			getDownloadURL(item).then((url) => {
				urlImages = [...urlImages, url];
			});
		});
	});

	function upload(e) {
		const files = e.target.files;
		for (let i = 0; i < files.length; i++) {
			console.log(files.item(i));
			// uploadBytes(storageRef, files.item(i)).then((snapshot) => {
			// 	console.log(snapshot);
			// });
		}
	}
</script>

<svelte:head>
	<title>Kooky🐰</title>
</svelte:head>

<main>
	{#each urlImages as url}
		<img src={url} alt="kooky" />
	{/each}
</main>
<!-- <input
	on:change={(e) => upload(e)}
	type="file"
	placeholder="Add"
	multiple
	class="custom-file-input"
/> -->

<style>
	/* .custom-file-input {
		position: fixed;
		right: 2rem;
		bottom: 2rem;
		width: 14ch;
		border: 1px solid black;
		border-radius: 4px;
		background-color: white;
	}
	.custom-file-input::-webkit-file-upload-button {
		visibility: hidden;
	}
	.custom-file-input::before {
		content: 'Adicionar fotos';
		display: inline-block;
		padding: 5px 8px;
		outline: none;
		cursor: pointer;
	}
	.custom-file-input:hover::before {
		border-color: black;
	}
	.custom-file-input:active::before {
		background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
	} */

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
