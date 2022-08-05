import {writable} from "svelte/store"

const data = []

export const cartStores = writable({data})