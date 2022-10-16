<script>
	import '@specialdoom/proi-ui/variables.css';
	import { toaster, ToastProvider } from '@specialdoom/proi-ui';
	import { initializeApp } from 'firebase/app';
	import { getStorage, ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
	import { getPerformance } from "firebase/performance";
	import { v4 } from 'uuid';
	import Icon from '@iconify/svelte';
	import Header from '../components/header.svelte';
	import Image from '../components/image.svelte';
	const firebaseConfig = {
		apiKey: 'AIzaSyBCsm0fErlM01kq6w2DJqyQaPOH0T3xD2Q',
		authDomain: 'kooky-5b2df.firebaseapp.com',
		projectId: 'kooky-5b2df',
		storageBucket: 'kooky-5b2df.appspot.com',
		messagingSenderId: '213871871539',
		appId: '1:213871871539:web:03d336e326742965328546'
	};

	function enviado(){
		toaster.send({
      title: "Imagem enviada com sucesso",
			message: "Por favor, recarregue a página!",
      variant: "sucess"
  });
	}

	let urlImages = [];

	const app = initializeApp(firebaseConfig);
	const storage = getStorage(app);

	const perf = getPerformance(app);

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
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const refImage = ref(storage, `images/${file.name + v4()}`);
			uploadBytes(refImage, file).then(() => {
				enviado();
			});
		}
	}
</script>

<ToastProvider />
<Header
	title="Kooky, o coelho mais lindo"
	on:change={(e) => {
		upload(e);
	}}
/>
<main>
	{#each urlImages as url}
		<Image src={url} />
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
	main {
		max-width: 1400px;
		column-count: 3;
		column-gap: 1rem;
		margin: 0 auto;
		padding: 2rem;
	}
	@media screen and (max-width: 1000px) {
		main {
			column-count: 2;
		}
	}
	@media screen and (max-width: 600px) {
		main {
			column-count: 1;
			padding: 1rem;
		}
	}
</style>
