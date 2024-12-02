/* * */

import { createOperationalDate, OperationalDate } from '@/types';
import { DateTime } from 'luxon';

/* * */

/**
 * Returns the operational date based on the provided timestamp and format.
 *
 * @param timestamp - The timestamp to be parsed.
 * @param format - The format of the timestamp.
 * @returns The operational date in the yyyyLLdd format.
 */
export function getOperationalDate(timestamp?: DateTime | string, format?: string): OperationalDate {
	//

	// Parse the transaction date using the provided format
	let dateObject: DateTime;

	if (!timestamp || !format) {
		dateObject = DateTime.now();
	}
	else if (timestamp instanceof DateTime) {
		dateObject = timestamp;
	}
	else {
		dateObject = DateTime.fromFormat(timestamp, format);
	}

	//

	let operationalDate: string;

	// Check if the time is between 00:00 and 03:59
	if (dateObject.hour < 4) {
		// If true, return the previous day in the yyyyLLdd format
		const previousDay = dateObject.minus({ days: 1 });
		operationalDate = previousDay.toFormat('yyyyLLdd');
	}
	else {
		// Else, return the current day in the yyyyLLdd format
		operationalDate = dateObject.toFormat('yyyyLLdd');
	}

	return createOperationalDate(operationalDate);

	//
}
