<script lang="ts">
    import {
        addDoc,
        collection,
        onSnapshot,
        query,
        QuerySnapshot,
    } from "firebase/firestore";
    import { db } from "$lib/firebase";
    import { page } from "$app/stores";
    import { createForm } from 'felte';
    import { validateSchema, validator } from '@felte/validator-yup';
    import * as yup from 'yup';
    import { tick } from "svelte";

    let text: string = "";
	let time: Date;

    // Reactive assignment
    const room_id: string = $page.params.room_id;

    const schema = yup.object({
        comment: yup.string().required("Comment is required"),
    });

    const { form, errors, isValid, setFields, validate } = createForm<yup.InferType<typeof schema>>({
        extend: validator({ schema }),
    });

    type Question = {
        id?: string;
        text: string;
        options: string[];
    }

    let questions: Question[] = [];

    onSnapshot(
        query(collection(db, `/Rooms/${room_id}/Questions`)),
        (snapshot: QuerySnapshot) => {
            questions = snapshot.docs.map((doc) => {
                const data = doc.data();
                const item: Question = {
                    id: doc.id,
                    text: data.text,
                    options: data.options,
                };
                return item;
            });
        }
    );
	type Comment = {
		id?: string;
		text: string;
		room_id: string;
		time: Date;
	}

	const addComment = async () => {
		time = new Date();
		setFields( {comment: text} );
		await validate();
		if( $isValid ){
			const comment: Comment = {
				text : text,
				room_id : room_id,
				time : time,
			};
			try {
				const docRef = await addDoc(collection(db, `Rooms/${room_id}/Comments`), comment);
				text = "";
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		}
	}
</script>

<svelte:head>
    <title>Audience Room</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
    <h1 class="mb-4">Dynamic routing with Room ID</h1>
	{#each questions as question}
		<div class="mb-4">
			<h2>{question.text}</h2>
			<ul>
				{#each question.options as option}
					<li>{option}</li>
				{/each}
			</ul>
		</div>
	{/each}
    <form use:form on:submit|preventDefault={addComment}>
        <div class="relative">
            <input bind:value={text} type="text" name="comment" id="comment" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Input comment" />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Submit</button>
            <div class="text-sm text-red-600" style="padding-bottom: 10px; visibility: {$errors.comment ? "visible" : "hidden"}">{$errors.comment}</div>
        </div>
    </form>
</div>
