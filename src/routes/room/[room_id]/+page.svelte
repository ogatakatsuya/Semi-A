<script lang="ts">
	import {
		addDoc,
		collection,
	} from "firebase/firestore";
	import { db } from "$lib/firebase";
	import { page } from "$app/stores";
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	let text: string = "";
	let room_id: string = "";
	let errorMessage: string = "";

	$: room_id = $page.params.room_id;

	const validateForm = () => {
		return true
	}

	type Comment = {
		id?: string;
		text: string;
		room_id: string;
	}
	const addComment = async () => {
		if(text == "") return;
		if( validateForm() ){
			const comment: Comment = {
				text : text,
				room_id : room_id, 
			};
			try {
				const docRef = await addDoc(collection(db, `Rooms/${room_id}/Comments`), comment);
				text = ""
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		} else {
			console.log(errorMessage);
		}
	}
</script>

<svelte:head>
	<title>Audience Room</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="mb-4">Dynamic routing with Room ID</h1>
	<form on:submit|preventDefault = {addComment}>
		<div class="relative">
			<input bind:value={text} type="comment" id="comment" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Input comment" />
			<button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Submit</button>
		</div>
	</form>
</div>
