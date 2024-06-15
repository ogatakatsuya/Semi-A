<script lang="ts">
	import {
		addDoc,
		collection,
	} from "firebase/firestore";
	import { db } from "$lib/firebase";
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

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

	const schema = yup.object({
		roomName: yup.string().required(),
		roomPassword: yup.string().min(6, "password must be 6 characters long"),
		roomDescription: yup.string().required(),
	});

	//felteフレームワークを使用した関係でvalidateForm関数ごと変えます
	const { form, errors, isValid } = createForm({
		extend: validator({ schema }),
	})

	const addRoom = async () => {
		if( $isValid ) {
			console.log(`form content posted: ${roomName} ${roomPassword} ${roomDescription}`);

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
