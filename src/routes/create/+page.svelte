<script lang="ts">
	import {
		addDoc,
		collection,
	} from "firebase/firestore";
	import { db } from "$lib/firebase";

	type Room = {
		id?: string;
		name: string;
		password: string;
		description: string;
		exist: boolean;
	}
	let roomName: string = "";
	let roomPassword: string = "";
	let roomDescription: string = "";
	let errorMessage: string = "";

	const validateForm = () => {
		//TODO: validation・passwordフィールドの工夫
		console.log(`form content posted: ${roomName} ${roomPassword} ${roomDescription}`)
		return true;
	}
	const addRoom = async () => {
		if(roomName == "") return;
		if( validateForm() ){
			const room: Room = {
				name: roomName,
				password: roomPassword,
				description: roomDescription,
				exist: true,
			};
			await addDoc(collection(db, "Rooms"), room);
			roomName = "";
			roomPassword = "";
			roomDescription = "";
		} else {
			console.log(errorMessage);
		}
	}
</script>

<svelte:head>
	<title>Create</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="mb-4">Let's make a presentation room!!</h1>

	<form on:submit|preventDefault = {addRoom}>
		<label for="name-input">Room Name:</label>
		<input bind:value={roomName} type="text" placeholder="Your room name" id="name-input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
		<label for="name-input">Password:</label>
		<input bind:value={roomPassword} type="password" placeholder="Your room password" id="password-input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">

		<label for="room-description">Room Description:</label>
		<textarea bind:value={roomDescription} id="room-description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your room description"></textarea>

		<button type="submit" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
	</form>
	
</div>
