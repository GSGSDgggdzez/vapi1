import { error, fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { z } from 'zod';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	register: async ({ request, locals }) => {
		try {
			const formData = await request.formData();
			const registerSchema = zfd.formData({
				name: zfd.text(z.string().min(4, { message: 'Name must be at least 2 characters long' })),
				email: zfd.text(z.string().email({ message: 'Please enter a valid email address' })),
				password: zfd.text(
					z.string().min(8, { message: 'Password must be at least 8 characters long' })
				),
				passwordConfirm: zfd.text(
					z.string().min(8, { message: 'Password must be at least 8 characters long' })
				)
			});

			const result = registerSchema.safeParse(formData);
			if (!result.success) {
				return fail(400, {
					data: Object.fromEntries(formData),
					errors: result.error.flatten().fieldErrors
				});
			}

			const { name, email, password, passwordConfirm } = result.data;

			await locals.pb.collection('users').create({ name, email, password, passwordConfirm });

			return {
				success: true,
				message: 'Registration successful'
			};
		} catch (err) {
			console.error('Registration error details:', err.message, err.status, err.data);
			return fail(500, {
				error: err.message || 'An error occurred during registration. Please try again.'
			});
		}
	}
};
