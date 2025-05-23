import { error, fail , redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	login: async ({ request, locals }) => {
		try {
			const formData = await request.formData();

			const loginSchema = zfd.formData({
				email: zfd.text(z.string().email({ message: 'Please enter a valid email address' })),

				password: zfd.text(
					z.string().min(8, { message: 'Password must be at least 8 characters long' })
				)
			});

			const result = loginSchema.safeParse(formData);

			if (!result.success) {
				return fail(400, {
					data: Object.fromEntries(formData),
					errors: result.error.flatten().fieldErrors
				});
			}

			const { email, password } = result.data;

			await locals.pb.collection('users').authWithPassword(email, password);

			return {
				success: true,
				message: 'Registration successful'
			};
		} catch (err) {
			console.error('Login error:', err);
			return fail(400, {
				error: 'An error occurred during login. Please try again.'
			});
		}
	}
};
