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
	<h1 class="mb-4">Dynamic routing with Room ID</h1>
	
</div>
