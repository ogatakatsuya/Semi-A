<script lang="ts">
	import {
        collection,
        onSnapshot,
        query,
        QuerySnapshot
    } from "firebase/firestore";
	import { db } from "$lib/firebase";
	import { page } from "$app/stores";

	type Comment = {
		id: string;
		text: string;
		room_id: string;
	}

	let commentList: Comment[] = [];
	let room_id : string = $page.params.room_id;

	onSnapshot(
		query(collection(db, `/Rooms/${room_id}/Comments`)),
		(snapshot: QuerySnapshot): any => {
			commentList = snapshot.docs.map((doc: any) => {
				const data = doc.data();
				const item: Comment = {
					id: doc.id,
					text: data.text,
					room_id: data.room_id,
				};
				return item;
			});
		}
	);
</script>

<svelte:head>
	<title>Organizer Room</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="mb-4">Dynamic routing with Room ID</h1>
	{#each commentList as comment}
		<div class="max-w-5xl rounded overflow-hidden shadow-lg w-3/4 my-4">
			<div class="px-6 py-4">
				<p class="font-bold text-xl mb-2">{comment.text}</p>
			</div>
		</div>
	{/each}
</div>
