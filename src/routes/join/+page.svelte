<script lang="ts">
	import {
        collection,
        onSnapshot,
        query,
        QuerySnapshot
    } from "firebase/firestore";
	import { goto } from "$app/navigation";
    import { db } from "$lib/firebase";
	import Modal from './_components/Modal.svelte';

	type Room = {
		id: string;
		name: string;
		password: string;
		description: string;
		exist: boolean;
		showModal: boolean;
	}

	let roomPassword = "";
	let roomList: Room[] = [];

	onSnapshot(
		query(collection(db, "Rooms")),
		(snapshot: QuerySnapshot): any => {
			roomList = snapshot.docs.map(doc => {
				const data = doc.data();
				const item: Room = {
					id: doc.id,
					name: data.name,
					password: data.password,
					description: data.description,
					exist: data.exist,
					showModal: false,
				};
				return item;
			});
		}
	);

	const authenticatePassword = (password: string, room_id: string) => {
		if (roomPassword === password) {
			goto(`/room/${room_id}`);
		} else { 
			console.log("passwordが間違っています");
			roomPassword = "";
		}
	}
</script>

<svelte:head>
	<title>Join</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Let's join presentation room!</h1>
	
	{#each roomList as room}
		<div class="max-w-5xl rounded overflow-hidden shadow-lg w-3/4 my-4">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{room.name}</div>
				<p class="text-gray-700 text-base">
					{room.description}
				</p>
			</div>
			<button 
				on:click={() => room.showModal = true}
				class="my-4 mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Join
			</button>
		</div>
		{#if room.showModal}
			<Modal bind:showModal={room.showModal}>
				<h2 slot="header" class="mb-6">
					Room Name : {room.name}
				</h2>
				<label for="inputPassword" class="mt-4">Input Room Password</label>
				<input bind:value={roomPassword} type="password" placeholder="Room password" id="password-input" class="my-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
				<button 
					on:click={() => authenticatePassword(room.password, room.id)}
					class="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</Modal>
		{/if}
	{/each}
</div>
