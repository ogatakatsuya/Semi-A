<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import "../app.css";
	//TODO　layout.svelteをオリジナルのものに
</script>

<svelte:head>
	<title>Real-Time Voting App</title>
	<meta name="description" content="Engage your audience in real-time with our interactive voting app. Create voting rooms, restrict access with passwords, and visualize results with ease." />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: calc(100vh + 100px); /* ここを変更 */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>