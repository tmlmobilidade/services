/* * */

import { MongoCollectionClass } from '@/classes/mongo-collection.class';
import { CreateRideDto, Ride, UpdateRideDto } from '@/interfaces/rides/ride.type';
import { AsyncSingletonProxy } from '@/lib/utils';
import { Filter, IndexDescription } from 'mongodb';

/* * */

class RidesClass extends MongoCollectionClass<Ride, CreateRideDto, UpdateRideDto> {
	private static _instance: RidesClass;

	private constructor() {
		super();
	}

	public static async getInstance() {
		if (!RidesClass._instance) {
			const instance = new RidesClass();
			await instance.connect();
			RidesClass._instance = instance;
		}
		return RidesClass._instance;
	}

	/**
	 * Finds ride documents by Agency ID.
	 *
	 * @param agencyId - The Agency ID to search for
	 * @returns A promise that resolves to an array of matching ride documents
	 */
	async findByAgencyId(agencyId: string) {
		return this.mongoCollection.find({ agency_id: agencyId } as Filter<Ride>).toArray();
	}

	/**
	 * Finds ride documents by Line ID.
	 *
	 * @param lineId - The Line ID to search for
	 * @returns A promise that resolves to an array of matching ride documents
	 */
	async findByLineId(lineId: string) {
		return this.mongoCollection.find({ line_id: lineId } as Filter<Ride>).toArray();
	}

	/**
	 * Finds ride documents by Pattern ID.
	 *
	 * @param patternId - The Pattern ID to search for
	 * @returns A promise that resolves to an array of matching ride documents
	 */
	async findByPatternId(patternId: string) {
		return this.mongoCollection.find({ pattern_id: patternId } as Filter<Ride>).toArray();
	}

	/**
	 * Finds ride documents by Plan ID.
	 *
	 * @param planId - The Plan ID to search for
	 * @returns A promise that resolves to an array of matching ride documents
	 */
	async findByPlanId(planId: string) {
		return this.mongoCollection.find({ plan_id: planId } as Filter<Ride>).toArray();
	}

	/**
	 * Finds ride documents by Route ID.
	 *
	 * @param routeId - The Route ID to search for
	 * @returns A promise that resolves to an array of matching ride documents
	 */
	async findByRouteId(routeId: string) {
		return this.mongoCollection.find({ route_id: routeId } as Filter<Ride>).toArray();
	}

	/**
	 * Finds ride documents by Trip ID.
	 *
	 * @param tripId - The Trip ID to search for
	 * @returns A promise that resolves to an array of matching ride documents
	 */
	async findByTripId(tripId: string) {
		return this.mongoCollection.find({ trip_id: tripId } as Filter<Ride>).toArray();
	}

	protected getCollectionIndexes(): IndexDescription[] {
		return [
			{ background: true, key: { agency_id: 1 } },
			{ background: true, key: { line_id: 1 } },
			{ background: true, key: { trip_id: 1 } },
			{ background: true, key: { status: 1 } },
			{ background: true, key: { operational_date: 1 } },
			{ background: true, key: { start_time_scheduled: 1 } },
			{ background: true, key: { start_time_scheduled: 1, status: 1 } },
		];
	}

	protected getCollectionName(): string {
		return 'rides';
	}

	protected getEnvName(): string {
		return 'TML_INTERFACE_RIDES';
	}
}

/* * */

export const rides = AsyncSingletonProxy(RidesClass);
