<script lang="ts">
    import { onMount } from 'svelte';
    import password from '$lib/images/password.jpg';
    import graph from '$lib/images/graph.jpg';
    import comment from '$lib/images/comment.jpg';
    import ResultsFeature from '../ResultFeature.svelte';
	import CommentFeature from '../CommentFeature.svelte';
	import PresenroomFeature from '../sverdle/PresenroomFeature.svelte';
    import ResultFeature from '../ResultFeature.svelte';

    let elements = [];

    onMount(() => {
        elements.forEach(el => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(el);
        });
    });

    function registerElement(el) {
        if (el) {
            elements.push(el);
        }
    }
</script>

<svelte:head>
  <title>About Presen+</title>
  <meta name="description" content="Learn  more about Presen+, the interactive presentation tool that enhances audience engagement with real-time voting, comments, and results visualization." />
</svelte:head>

<section class="text-center py-16 bg-blue-100">
    <h1 class="text-4xl font-bold mb-8 animate-slideIn">About Presen+</h1>
    <p class="text-lg mb-16 animate-fadeIn">Presen+ is an interactive presentation tool designed to enhance audience engagement through real-time voting, comments, and results visualization.</p>

    <h2 class="text-3xl font-bold mb-8 animate-slideIn">アプリのサービス機能</h2>

    <div class="flex flex-wrap justify-around">
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4" id = "PresenroomFeature" use:registerElement>
            <img src={password} alt="Secure Feature" class="mb-4 animate-fadeIn" />
            <PresenroomFeature/>
        </div>
    
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4" id = "ResultFeature" use:registerElement>
            <img src={graph} alt="Results Feature" class="mb-4 animate-fadeIn" />
            <ResultFeature/>
        </div>
    
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4" id = "CommentFeature" use:registerElement>
            <img src={comment} alt="Comment Feature" class="mb-4 animate-fadeIn" />
            <CommentFeature/>
        </div>
    </div>
    <div class="flex justify-center items-center mt-12">
        <a href="../create" class="inline-block rounded-lg bg-indigo-500 px-6 py-4 sm:px-12 sm:py-6 lg:px-20 lg:py-10 text-center font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 text-xl sm:text-2xl lg:text-3xl">今すぐ体験</a>
    </div>
</section>

<style>
  .animate-fadeIn {
    @apply opacity-0;
    animation: fadeIn 1s ease-in forwards;
  }
  .animate-slideIn {
    @apply opacity-0;
    animation: slideIn 1s ease-out forwards;
  }
</style>

