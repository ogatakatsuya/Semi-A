<script lang="ts">
	import {
        collection,
        onSnapshot,
        query,
        QuerySnapshot
    } from "firebase/firestore";
    import { db } from "$lib/firebase";

	type Room = {
		id?: string;
		name: string;
		password: string;
		description: string;
		exist: boolean;
	}

	let roomList : Room[] = [];

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
				};
				return item;
			});
		}
	);
</script>

<svelte:head>
	<title>Join</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Let's join presentation room!</h1>
	{#each roomList as room}
		<div class="max-w-3xl rounded overflow-hidden shadow-lg w-3/4">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{room.name}</div>
				<p class="text-gray-700 text-base">
					{room.description}
				</p>
			</div>
			<button 
			type="submit" 
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Join
			</button>
		</div>	
	{/each}
</div>
