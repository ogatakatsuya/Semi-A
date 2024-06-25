<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/Logo_onlytext_mini.png';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="header-container">
		<div class="logo-container">
			<a href="/">
				<img src={logo} alt="SvelteKit" class="logo" />
			</a>
		</div>

		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/create' ? 'page' : undefined}>
					<a href="/create">Create</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/join') ? 'page' : undefined}>
					<a href="/join">Join</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	:root {
		--background-color: #1E1F23;
		--hover-color: #f0f0f0;
		--border-color: #e0e0e0;
		--text-color: #E5E1D3;
		--hover-text-color: #0070f3;
		--button-bg-color: #ff6600;
		--button-text-color: #ffffff;
		--button-hover-bg-color: #cc5200;
	}

	header {
		width: 100%;
		background-color: var(--background-color);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.header-container {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 1rem;
		position: relative;
	}

	.logo-container {
		position: absolute;
		left: 1rem;
	}

	.logo-container img {
		width: 14rem;
		height: auto;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin: 0 1.5rem;
	}

	li[aria-current='page'] a {
		border-bottom: 2px solid var(--hover-text-color);
	}

	nav a {
		color: var(--text-color);
		font-weight: 700;
		text-transform: uppercase;
		text-decoration: none;
		padding: 0.5rem 0;
		transition: color 0.3s ease, border-bottom 0.3s ease;
		font-size: 1.2rem;
	}

	nav a:hover {
		color: var(--hover-text-color);
	}
</style>