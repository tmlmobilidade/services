/* * */

import { MongoCollectionClass } from '@/classes/mongo-collection.class';
import { ApexT3, CreateApexT3Dto, UpdateApexT3Dto } from '@/interfaces/apex-t3/apex-t3.type';
import { AsyncSingletonProxy } from '@/lib/utils';
import { Filter, IndexDescription } from 'mongodb';

/* * */

class ApexT3Class extends MongoCollectionClass<ApexT3, CreateApexT3Dto, UpdateApexT3Dto> {
	private static _instance: ApexT3Class;

	private constructor() {
		super();
	}

	public static async getInstance() {
		if (!ApexT3Class._instance) {
			const instance = new ApexT3Class();
			await instance.connect();
			ApexT3Class._instance = instance;
		}
		return ApexT3Class._instance;
	}

	protected getCollectionIndexes(): IndexDescription[] {
		return [];
	}

	protected getCollectionName(): string {
		return 'apex_t3s';
	}

	protected getEnvName(): string {
		return 'TML_INTERFACES_APEX_T3';
	}

	/**
	 * Finds apexT3 documents by agency ID.
	 *
	 * @param id - The agency ID to search for
	 * @returns A promise that resolves to an array of matching apexT3 documents
	 */
	async findByAgencyId(id: string) {
		return this.mongoCollection.find({ agency_id: id } as Filter<ApexT3>).toArray();
	}

	/**
	 * Finds a apexT3 document by its code.
	 *
	 * @param code - The code of the apexT3 to find
	 * @returns A promise that resolves to the matching apexT3 document or null if not found
	 */
	async findByCode(code: string) {
		return this.mongoCollection.findOne({ code } as Filter<ApexT3>);
	}

	/**
	 * Updates a stop document by its code.
	 *
	 * @param code - The code of the stop to update.
	 * @param updateFields - The fields to update in the stop document.
	 * @returns A promise that resolves to the result of the update operation.
	 */
	async updateByCode(code: string, updateFields: Partial<ApexT3>) {
		return this.mongoCollection.updateOne({ code } as Filter<ApexT3>, { $set: updateFields });
	}
}

/* * */

export const apexT3s = AsyncSingletonProxy(ApexT3Class);
