import { municipalities } from '@/interfaces/municipalities.interface';
import { Municipality } from '@/types/municipality';

const newMunicipality: Municipality = {
	border_color: '',
	border_opacity: 0,
	border_width: 0,
	code: 'NEW_MUNICIPALITY',
	created_at: new Date(),
	district: '',
	fill_color: '',
	fill_opacity: 0,
	geojson: undefined,
	is_locked: false,
	name: 'New Municipality',
	prefix: 'NM',
	region: '',
	updated_at: new Date(),
};

describe('MunicipalitiesClass', () => {
	afterAll(async () => {
		await municipalities.disconnect();
	});

	describe('insertOne', () => {
		it('should insert a new municipality', async () => {
			const result = await municipalities.insertOne(newMunicipality);
			expect(result.insertedId).toBeDefined();

			const insertedMunicipality = await municipalities.findByCode(newMunicipality.code);
			expect(insertedMunicipality).toBeDefined();
			expect(insertedMunicipality?.name).toBe(newMunicipality.name);
		});

		it('should throw an error if the municipality already exists', async () => {
			await expect(municipalities.insertOne(newMunicipality)).rejects.toThrow();
		});
	});

	describe('findByCode', () => {
		it('should find a municipality by its code', async () => {
			const municipality = await municipalities.findByCode(newMunicipality.code);
			expect(municipality?.code).toBe(newMunicipality.code);
		});

		it('should return null if the municipality is not found', async () => {
			const municipality = await municipalities.findByCode('NON_EXISTENT_CODE');
			expect(municipality).toBeNull();
		});
	});

	describe('updateByCode', () => {
		it('should update a municipality\'s name', async () => {
			const updatedFields = { name: 'Updated Municipality Name' };
			const updateResult = await municipalities.updateByCode(newMunicipality.code, updatedFields);
			expect(updateResult.modifiedCount).toBe(1);

			const updatedMunicipality = await municipalities.findByCode(newMunicipality.code);
			expect(updatedMunicipality?.name).toBe(updatedFields.name);
		});

		it('should return modifiedCount as 0 if the municipality does not exist', async () => {
			const updateResult = await municipalities.updateByCode('NON_EXISTENT_CODE', { name: 'Should Not Update' });
			expect(updateResult.modifiedCount).toBe(0);
		});
	});

	describe('deleteOne', () => {
		it('should delete a municipality', async () => {
			const result = await municipalities.deleteOne({ code: newMunicipality.code });
			expect(result.deletedCount).toBe(1);

			const deletedMunicipality = await municipalities.findByCode(newMunicipality.code);
			expect(deletedMunicipality).toBeNull();
		});

		it('should return deletedCount as 0 if the municipality does not exist', async () => {
			const result = await municipalities.deleteOne({ code: 'NON_EXISTENT_CODE' });
			expect(result.deletedCount).toBe(0);
		});
	});
});
