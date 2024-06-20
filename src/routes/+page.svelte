<script lang="ts">
	import ResultsFeature from './ResultFeature.svelte';
	import CommentFeature from './CommentFeature.svelte';
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png'
	import './styles.css';

	//TODO: lpの作成
</script>

<svelte:head>
	<title>Real-Time Voting App</title>
	<meta name="description" content="Engage your audience in real-time with our interactive voting app. Create voting rooms, restrict access with passwords, and visualize results with ease." />
</svelte:head>

<section class = "LP">
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		Engage Your Audience in Real-Time
	</h1>

	<p>Interact with your audience through real-time voting, comments, and live feedback.</p>


<section class="features">
	<h2>アプリのサービス機能</h2>
	<ResultsFeature />
	<CommentFeature />
</section>

<style>
	.LP {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	h2 {
		font-size: 2.0rem;
		color: rgb(185, 24, 24);
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	
</style>
