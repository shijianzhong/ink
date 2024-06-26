// import type { APIRoute } from 'astro'
import { createClient } from '@vercel/kv'
// import console from 'console';


// const KV_REST_API_URL = import.meta.env.KV_REST_API_URL
// const KV_REST_API_TOKEN = import.meta.env.KV_REST_API_TOKEN

// 在Astro组件中
const KV_URL = process.env.KV_URL;
const KV_REST_API_URL = process.env.KV_REST_API_URL;
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN;
const KV_REST_API_READ_ONLY_TOKEN = process.env.KV_REST_API_READ_ONLY_TOKEN;
// console.log("*************")
// console.log("KV_URL",KV_URL)

const client = new Map<string, number>();


export const getViewsBySlug = async (slug: string) => {
	try {
		if (slug) {
			
			let newValue = 1;
			if (!KV_REST_API_URL || !KV_REST_API_TOKEN)
				throw new Error('missing env')

			const kv = createClient({
				url: KV_REST_API_URL,
				token: KV_REST_API_TOKEN
			})
			const prevValue = await kv.incr(`PV_${slug}`);
			if(prevValue){
				newValue = parseInt(`${prevValue}`) + 1;
				await kv.set(`PV_${slug}`,newValue)
			}else{
				await kv.set(`PV_${slug}`,1)
			}
			return newValue
		}
		return 0;

	} catch (error) {
		return 0;
	}
}

// export const getViewsBySlug = async (slug: string) => {
// 	if (slug) {
// 		const prevValue = client.get(slug);
// 		let newValue = 1;
// 		if (prevValue) {
// 			newValue = parseInt(`${prevValue}`) + 1;
// 			client.set(slug, newValue);
// 		} else {
// 			client.set(slug, 1);
// 		}
// 		return newValue;
// 	}
// 	return 0;
// };