<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="header-container">
		<div class="logo-container">
			<a>
				<img src={logo} alt="SvelteKit" class="logo" />
			</a>
		</div>

		<div class="size_test">
			Presen+
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
		--background-color: #ffffff;
		--hover-color: #f0f0f0;
		--border-color: #e0e0e0;
		--text-color: #333;
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

	.size_test {
		font-size: 2vw;     /* 文字サイズ指定 */
		font-weight: bold;  /* 太字指定 */
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
	}

	.logo-container {
		display: flex;
		align-items: center;
	}

	.logo-container img {
		width: 2rem; /* ロゴのサイズをLoginボタンに合わせて小さく */
		height: auto;
	}

	nav {
		flex: 1;
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
		margin: 0 1rem;
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
	}

	nav a:hover {
		color: var(--hover-text-color);
	}

	.action-buttons {
		display: flex;
		align-items: center;
	}

	.btn {
		background-color: var(--button-bg-color);
		color: var(--button-text-color);
		padding: 0.5rem 1rem;
		text-decoration: none;
		border-radius: 4px;
		margin-left: 1rem;
		transition: background-color 0.3s ease;
	}

	.btn:hover {
		background-color: var(--button-hover-bg-color);
	}

	.btn.login {
		background-color: var(--hover-color);
		color: var(--text-color);
	}

	.btn.login:hover {
		background-color: var(--hover-text-color);
		color: var(--button-text-color);
	}
</style>
