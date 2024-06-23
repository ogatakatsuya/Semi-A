<script lang="ts">
	import {
        collection,
        onSnapshot,
        query,
        QuerySnapshot
    } from "firebase/firestore";
	import { db } from "$lib/firebase";
	import { page } from "$app/stores";
	import FlowingComment from './_components/FlowingComment.svelte';

	type Comment = {
		id: string;
		text: string;
		room_id: string;
		time: number;
		past: boolean;
	}

	let commentList: Comment[] = [];
	let room_id : string = $page.params.room_id;
	const now: number = Date.now();

	onSnapshot(
		query(collection(db, `/Rooms/${room_id}/Comments`)),
		(snapshot: QuerySnapshot): any => {
			commentList = snapshot.docs.map((doc: any) => {
				const data = doc.data();
				const past = (data.time.seconds*1000 - now < 0) ? false : true;
				const item: Comment = {
					id: doc.id,
					text: data.text,
					room_id: data.room_id,
					time: data.time.seconds,
					past: past,
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


<div class="w-full absolute overflow-x-hidden inset-y-20 inset-x-0">
{#each commentList as comment (comment.id)}
	{#if comment.past}
		<FlowingComment text={comment.text}/>
	{/if}
{/each}
</div>