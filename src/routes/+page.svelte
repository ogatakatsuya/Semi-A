<script lang="ts">
	import ResultsFeature from './ResultFeature.svelte';
	import CommentFeature from './CommentFeature.svelte';
	import PresenroomFeature from './sverdle/PresenroomFeature.svelte';
	import './styles.css';
	


</script>

<svelte:head>
	<title>Real-Time Voting App</title>
	<meta name="description" content="Engage your audience in real-time with our interactive voting app. Create voting rooms, restrict access with passwords, and visualize results with ease." />
</svelte:head>

<div class=" pb-6 sm:pb-8 lg:pb-12">
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8 gap -6 sm:gap-10 md:gap-16">
		<section class="flex flex-col  lg:flex-row lg:items-center " style=" margin-bottom: 0;">
			<!-- image - start -->
			<div class="overflow-hidden rounded-lg lg:h-auto xl:w-full flex justify-center" >
				<img src="https://tyoudoii-illust.com/download/2057/?tmstv=1718888865" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center"/>
			  </div>
			<!-- image - end -->

			<!-- content - start -->
			<div class="flex flex-col justify-center items-center sm:text-center lg:py-12 lg:text-left xl:w-full  xl:py-24">
			  
			  <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl text-left break-words lg:w-full">プレゼン<br>支援ツール<br>"Presen+"</h1>

			  <p class="mb-8 leading-relaxed text-gray-800 md:mb-12  xl:text-lg text-left break-words lg:w-full ">
				Presen+は、パスワード制のプレゼンルーム作成、<br>
				リアルタイム質問・結果表示、<br>
				コメントの投稿・消去・強調表示機能を提供。<br>
				参加者の声をダイナミックに反映した<br>次世代プレゼン体験を実現します。
			</p>
	
			</div>
			<!-- content - end -->
		</section>

		<!--この下はボタン,,ボタンの上の余白消したいなあ-->
		<section class="flex justify-center items-start  text-4xl" >
		<div class="flex flex-col  sm:flex-row sm:justify-center lg:flex-row" >
			<a href="/create" class="inline-block rounded-lg bg-indigo-500 px-20 py-10 text-center font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"style="font-size: 30px;">今すぐ体験</a>
			</div>
		</section>

	</div>
  

	<!--この下は機能紹介-->
	<div class="py-6 sm:py-8 lg:py-12">
		<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		  <div class="mb-6 flex items-end justify-between gap-4">
			<h2 class="text-4xl font-bold text-gray-800 lg:text-4xl">~魅力的な３つの機能~</h2>
		  </div>
	  
		  <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6  lg:flex justify-center">
			
	  
			<!-- product - start -->
			<div >
			  <a href="#PresenroomFeature" class="group mb-2 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
				<img src="https://illustration-free.net/thumb/png/ifn1208.png" loading="lazy" alt="Photo by engin akyurt" class="h-80 w-80 object-cover rounded-lg object-center transition duration-200 group-hover:scale-110" />
			  </a>
	  
			  <div class="flex flex-col">
				<span class="text-lg text-gray-500 text-center">その１</span>
				<a href="#PresenroomFeature" class="text-lg font-bold text-gray-800 text-center transition duration-100 hover:text-gray-500 lg:text-2xl break-words">パスワード制の<br>プレゼンルーム作成</a>
			  </div>
			</div>
			<!-- product - end -->
	  
			<!-- product - start -->
			<div >
				<a href="#ResultsFeature" class="group mb-2 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
				  <img src="https://iconbox.fun/wp/wp-content/uploads/1108_sy_m.png" loading="lazy" alt="Photo by engin akyurt" class="h-80 w-80 object-cover rounded-lg object-center transition duration-200 group-hover:scale-110" />
				</a>
		
				<div class="flex flex-col">
					<span class="text-lg text-gray-500 text-center">その２</span>
					<a href="#ResultsFeature" class="text-lg font-bold text-gray-800 text-center transition duration-100 hover:text-gray-500 lg:text-2xl break-words">リアルタイム<br>質問・結果表示</a>
				  </div>
			  </div>
			  <!-- product - end -->
	  
			<!-- product - start -->
			<div >
				<a href="#CommentFeature" class="group mb-2 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
				  <img src="https://iconbox.fun/wp/wp-content/uploads/1111_sy_m.png" loading="lazy" alt="Photo by engin akyurt" class="h-80 w-80 object-cover rounded-lg object-center transition duration-200 group-hover:scale-110" />
				</a>
		
				<div class="flex flex-col">
				  <span class="text-lg text-gray-500 text-center">その３</span>
				  <a href="#CommentFeature" class="text-lg font-bold text-gray-800 text-center transition duration-100 hover:text-gray-500 lg:text-2xl break-words">リアルタイム<br>コメント投稿・表示</a>
				</div>
			  </div>
			  <!-- product - end -->
		  </div>
		</div>
	  </div>


<section class="py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<div class="mb-6 flex items-end justify-between gap-4">
			<h2 class="text-4xl font-bold text-gray-800 lg:text-4xl">~機能詳細~</h2>
		</div>

		<section id="PresenroomFeature">
			<PresenroomFeature/>
		</section>

		<section id="ResultsFeature">
			<ResultsFeature/> 
		</section>

		<section id="CommentFeature">
			<CommentFeature />
		</section>

	</div>
</section>

</div>
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
