import { agencies } from '@/interfaces/agencies.interface';
import { Agency, createOperationalDate } from '@/types';

const newAgency: Agency = {
	code: 'NEW_AGENCY',
	created_at: new Date(),
	email: 'newagency@example.com',
	fare_url: 'http://example.com/fare',
	is_locked: false,
	lang: 'en',
	name: 'New Agency',
	operation_start_date: createOperationalDate('20240101'),
	phone: '1234567890',
	price_per_km: 1.5,
	timezone: 'UTC',
	total_vkm_per_year: 10000,
	updated_at: new Date(),
	url: 'http://example.com',
};

describe('AgenciesClass', () => {
	afterAll(async () => {
		await agencies.disconnect();
	});

	describe('insertOne', () => {
		it('should insert a new agency', async () => {
			const result = await agencies.insertOne(newAgency);
			expect(result.insertedId).toBeDefined();

			const insertedAgency = await agencies.findByCode(newAgency.code);
			expect(insertedAgency).toBeDefined();
			expect(insertedAgency?.name).toBe(newAgency.name);
		});

		it('should throw an error if the agency already exists', async () => {
			await expect(agencies.insertOne(newAgency)).rejects.toThrow();
		});
	});

	describe('findByCode', () => {
		it('should find an agency by its code', async () => {
			const agency = await agencies.findByCode(newAgency.code);
			expect(agency?.code).toBe(newAgency.code);
		});

		it('should return null if the agency is not found', async () => {
			const agency = await agencies.findByCode('NON_EXISTENT_CODE');
			expect(agency).toBeNull();
		});
	});

	describe('updateByCode', () => {
		it('should update an agency\'s name', async () => {
			const updatedFields = { name: 'Updated Agency Name' };
			const updateResult = await agencies.updateByCode(newAgency.code, updatedFields);
			expect(updateResult.modifiedCount).toBe(1);

			const updatedAgency = await agencies.findByCode(newAgency.code);
			expect(updatedAgency?.name).toBe(updatedFields.name);
		});

		it('should return modifiedCount as 0 if the agency does not exist', async () => {
			const updateResult = await agencies.updateByCode('NON_EXISTENT_CODE', { name: 'Should Not Update' });
			expect(updateResult.modifiedCount).toBe(0);
		});
	});

	describe('deleteOne', () => {
		it('should delete an agency', async () => {
			const result = await agencies.deleteOne({ code: newAgency.code });
			expect(result.deletedCount).toBe(1);

			const deletedAgency = await agencies.findByCode(newAgency.code);
			expect(deletedAgency).toBeNull();
		});

		it('should return deletedCount as 0 if the agency does not exist', async () => {
			const result = await agencies.deleteOne({ code: 'NON_EXISTENT_CODE' });
			expect(result.deletedCount).toBe(0);
		});
	});
});
